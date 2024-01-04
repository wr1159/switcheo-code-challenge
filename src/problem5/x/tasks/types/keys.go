package types

const (
	// ModuleName defines the module name
	ModuleName = "tasks"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_tasks"
)

var (
	ParamsKey = []byte("p_tasks")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	TaskKey      = "Task/value/"
	TaskCountKey = "Task/count/"
)
