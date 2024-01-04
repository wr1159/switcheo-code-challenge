package keeper

import (
	"tasks/x/tasks/types"
)

var _ types.QueryServer = Keeper{}
