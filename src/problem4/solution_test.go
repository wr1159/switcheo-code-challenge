package main

import "testing"

// Equivalence Partition of sumToN is: {n < 0, n = 0, n > 0} therefore -10, 0, 10 were chosen
func TestSumToNA(t *testing.T) {
	t.Run("SumToNA with negative input should return 0", func(t *testing.T) {
		result := sum_to_n_a(-10)
		if result != 0 {
			t.Errorf("Expected 0 for input -10, but got %d", result)
		}
	})

	t.Run("SumToNA with input 0 should return 0", func(t *testing.T) {
		result := sum_to_n_a(0)
		if result != 0 {
			t.Errorf("Expected 0 for input 0, but got %d", result)
		}
	})

	t.Run("SumToNA with input 10 should return 55", func(t *testing.T) {
		result := sum_to_n_a(10)
		if result != 55 {
			t.Errorf("Expected 55 for input 10, but got %d", result)
		}
	})
}

func TestSumToNB(t *testing.T) {
	t.Run("SumToNB with negative input should return 0", func(t *testing.T) {
		result := sum_to_n_b(-10)
		if result != 0 {
			t.Errorf("Expected 0 for input -10, but got %d", result)
		}
	})

	t.Run("SumToNB with input 0 should return 0", func(t *testing.T) {
		result := sum_to_n_b(0)
		if result != 0 {
			t.Errorf("Expected 0 for input 0, but got %d", result)
		}
	})

	t.Run("SumToNB with input 10 should return 55", func(t *testing.T) {
		result := sum_to_n_b(10)
		if result != 55 {
			t.Errorf("Expected 55 for input 10, but got %d", result)
		}
	})
}

func TestSumToNC(t *testing.T) {
	t.Run("SumToNC with negative input should return 0", func(t *testing.T) {
		result := sum_to_n_c(-10)
		if result != 0 {
			t.Errorf("Expected 0 for input -10, but got %d", result)
		}
	})

	t.Run("SumToNC with input 0 should return 0", func(t *testing.T) {
		result := sum_to_n_c(0)
		if result != 0 {
			t.Errorf("Expected 0 for input 0, but got %d", result)
		}
	})

	t.Run("SumToNC with input 10 should return 55", func(t *testing.T) {
		result := sum_to_n_c(10)
		if result != 55 {
			t.Errorf("Expected 55 for input 10, but got %d", result)
		}
	})
}
