package tasks_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "tasks/testutil/keeper"
	"tasks/testutil/nullify"
	"tasks/x/tasks/module"
	"tasks/x/tasks/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		TaskList: []types.Task{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		TaskCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TasksKeeper(t)
	tasks.InitGenesis(ctx, k, genesisState)
	got := tasks.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.TaskList, got.TaskList)
	require.Equal(t, genesisState.TaskCount, got.TaskCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
