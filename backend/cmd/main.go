package main

import (
	"sync"
	"github.com/taki-umi/aques-sample-service/backend/internal"
)

func main() {
	var wg sync.WaitGroup

	wg.Add(1)
	go func() {
		defer wg.Done()
		internal.StartGRPCServer()
	}()

	wg.Add(1)
	go func() {
		defer wg.Done()
		internal.StartHTTPServer()
	}()

	wg.Wait()
}
