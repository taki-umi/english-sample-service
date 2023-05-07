package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"net"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"google.golang.org/grpc"
	"../spec/proto/schedule"
)

type server struct{}

func (s *server) GetSchedule(ctx context.Context, req *schedule.ScheduleRequest) (*schedule.ScheduleResponse, error) {
	db, err := sql.Open("mysql", getDBConnectionString())
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}
	defer db.Close()

	rows, err := db.Query("SELECT schedule_name FROM schedule WHERE member_id = ?", req.MemberId)
	if err != nil {
		log.Fatalf("Failed to execute query: %v", err)
	}
	defer rows.Close()

	var scheduleNames []string
	for rows.Next() {
		var scheduleName string
		if err := rows.Scan(&scheduleName); err != nil {
			log.Fatalf("Failed to scan row: %v", err)
		}
		scheduleNames = append(scheduleNames, scheduleName)
	}

	return &schedule.ScheduleResponse{
		ScheduleNames: scheduleNames,
	}, nil
}

func getDBConnectionString() string {
	// TODO: 環境変数から取得するようにする
	return "admin:admin@tcp(localhost:3306)/test_database"
}

func main() {
	// gRPCサーバー起動
	go func() {
		lis, err := net.Listen("tcp", ":50051")
		if err != nil {
			log.Fatalf("Failed to listen: %v", err)
		}
		s := grpc.NewServer()
		schedule.RegisterScheduleServiceServer(s, &server{})
		log.Println("gRPC server listening on port 50051")
		if err := s.Serve(lis); err != nil {
			log.Fatalf("Failed to serve: %v", err)
		}
	}()

	// Ginサーバー起動
	r := gin.Default()

	r.POST("/api/schedule", func(c *gin.Context) {
		var request schedule.ScheduleRequest
		if err := c.ShouldBindJSON(&request); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// gRPC クライアントとしてリクエストを送信
		conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
		if err != nil {
			log.Fatalf("Failed to connect to gRPC server: %v", err)
		}
		defer conn.Close()

		client := schedule.NewScheduleServiceClient(conn)
		response, err := client.GetSchedule(context.Background(), &request)
		if err != nil {
			log.Fatalf("Failed to call GetSchedule RPC: %v", err)
		}

		// レスポンスをJSON形式で返す
		c.JSON(http.StatusOK, gin.H{"schedule_names": response.ScheduleNames})
	})

	log.Println("Gin server listening on port 8080")
	r.Run(":8080")
}
