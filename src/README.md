This is consensus breaking as it uses a [faulty version of CometBFT](https://github.com/wr1159/faulty-cometbft/), the consensus engine used by Cosmos SDK. As there is a reliance on the Two Third majority (see [cosensus.md](https://github.com/cometbft/cometbft/blob/main/spec/consensus/consensus.md)), by setting a faulty function that wrongly returns the state of Two Thirds Majority, consensus should be broken.

The faulty implementation of HasTwoThirdsMajority always returns true, indicating that there is a two-thirds majority.
By always returning true, it ignores the actual voting results and does not consider the voting power of the validators.
This means that even if the actual voting results do not meet the two-thirds majority requirement,
this implementation will still indicate that there is a two-thirds majority, leading to a consensus failure.

This was the original function

```
func (voteSet *VoteSet) HasTwoThirdsMajority() bool {
	if voteSet == nil {
		return false
	}
	voteSet.mtx.Lock()
	defer voteSet.mtx.Unlock()
	return voteSet.maj23 != nil
}
```

This is the faulty version of the function

```
func (voteSet *VoteSet) HasTwoThirdsMajority() bool {
	return true
}
```
