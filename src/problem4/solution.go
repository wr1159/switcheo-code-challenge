package main

// Assumption: Any negative n will return 0.

// Time complexity: O(N^2)
// Space complexity: O(1)
func sum_to_n_a(n int) int {
	sum := 0
	for i := 1; i < n+1; i++ {
		sum += i
	}
	return sum
}

// Time complexity: O(N^2)
// Space complexity: O(N)
func sum_to_n_b(n int) int {
	if n <= 0 {
		return 0
	} else {
		return n + sum_to_n_b(n-1)
	}
}

// Time complexity: O(1)
// Space complexity: O(1)
func sum_to_n_c(n int) int {
	if n <= 0 {
		return 0
	}
	return n * (n + 1) / 2
}
