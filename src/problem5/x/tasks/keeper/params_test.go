package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "tasks/testutil/keeper"
	"tasks/x/tasks/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.TasksKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
