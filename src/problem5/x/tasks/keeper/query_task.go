package keeper

import (
	"context"
	"fmt"
	"strings"

	"tasks/x/tasks/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TaskAll(ctx context.Context, req *types.QueryAllTaskRequest) (*types.QueryAllTaskResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var tasks []types.Task

	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	taskStore := prefix.NewStore(store, types.KeyPrefix(types.TaskKey))

	pageRes, err := query.Paginate(taskStore, req.Pagination, func(key []byte, value []byte) error {
		var task types.Task
		if err := k.cdc.Unmarshal(value, &task); err != nil {
			return err
		}
		passesAllFilters := true

		if req.Filters != "" {
			filterList := strings.Split(req.Filters, "&")
			for _, filter := range filterList {
				parts := strings.Split(filter, "=")
				if len(parts) != 2 {
					return fmt.Errorf("invalid filter format: %s", filter)
				}

				field, value := parts[0], parts[1]

				if field == "title" {
					if !strings.Contains(task.Title, value) {
						// Skip the task if the title does not contain the filter value
						passesAllFilters = false
						break
					}
				} else if field == "description" {
					if !strings.Contains(task.Description, value) {
						// Skip the task if the description does not contain the filter value
						passesAllFilters = false
						break
					}
				} else if field == "completed" {
					if task.Completed != (value == "true") {
						// Skip the task if the completed status does not match the filter value
						passesAllFilters = false
						break
					}
				} else {
					return fmt.Errorf("unknown filter field: %s", field)
				}
			}

		}
		if passesAllFilters {
			// Add the task to the tasks array only if tasks pass all filters
			tasks = append(tasks, task)
		}

		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTaskResponse{Task: tasks, Pagination: pageRes}, nil
}

func (k Keeper) Task(ctx context.Context, req *types.QueryGetTaskRequest) (*types.QueryGetTaskResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	task, found := k.GetTask(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetTaskResponse{Task: task}, nil
}
