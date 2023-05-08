package internal

import (
	"context"
	"log"
	"net"
	"google.golang.org/grpc"
	"github.com/gin-gonic/gin"
	schedulepb "/AQUES_SAMPLE_SERVICE/backend/internal/proto"
)

type scheduleServer struct {
	schedulepb.UnimplementedScheduleServiceServer
}

func (s *scheduleServer) GetSchedule(ctx context.Context, req *schedulepb.ScheduleRequest) (*schedulepb.ScheduleResponse, error) {
	// DBからデータを取得する処理を実装する
	// ここでは仮のデータを返却
	scheduleNames := []string{"test_schedule_name_1", "test_schedule_name_2"}

	return &schedulepb.ScheduleResponse{
		TestScheduleName: scheduleNames,
	}, nil
