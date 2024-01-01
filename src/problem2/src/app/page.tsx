"use client";

import useSWR from "swr";
import { Label } from "@/components/ui/label";
import { CardContent, Card } from "@/components/ui/card";
import { AlertTriangleIcon, ArrowUpDownIcon, LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { SwapSettings } from "@/components/swap-settings";
import { Token } from "@/lib/types";
import TokenSelect from "@/components/token-select";
import SwapButton from "@/components/swap-button";
import TransactionDetails from "@/components/transaction-details";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [selectedToToken, setSelectedToToken] = useState<Token | null>(null);
  const [selectedFromToken, setSelectedFromToken] = useState<Token | null>(
    null
  );
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://interview.switcheo.com/prices.json",
    fetcher
  );

  useEffect(() => {
    if (data || error) {
      setIsLoading(false);
      setSelectedFromToken(data[0]);
      setSelectedToToken(data[1]);
    }
  }, [data, error]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <AlertTriangleIcon className="text-red-500 mr-2" />
        Failed to load token data, please try again.
      </div>
    );
  }

  if (!data || isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <LoaderIcon className="animate-spin w-20 h-20" />
      </div>
    );
  }

  return (
    <main className="w-full max-w-2xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-bold text-center">Swap Tokens</h1>
      <Card>
        <CardContent className="p-4">
          <SwapSettings />

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="from-token">From</Label>
              <TokenSelect
                data={data}
                id="from-token"
                selectedToken={selectedFromToken}
                setSelectedToken={setSelectedFromToken}
                otherSelectedToken={selectedToToken}
              />
            </div>
            <Button
              variant={"ghost"}
              onClick={() => {
                const tempToken = selectedFromToken;
                setSelectedFromToken(selectedToToken);
                setSelectedToToken(tempToken);
              }}
              className="flex justify-center items-center mx-auto "
            >
              <ArrowUpDownIcon />
            </Button>
            <div className="space-b-2">
              <Label htmlFor="to-token">To</Label>
              <TokenSelect
                data={data}
                id="to-token"
                selectedToken={selectedToToken}
                setSelectedToken={setSelectedToToken}
                otherSelectedToken={selectedFromToken}
              />
            </div>
            <SwapButton />
          </div>
        </CardContent>
      </Card>
      <TransactionDetails
        selectedFromToken={selectedFromToken}
        selectedToToken={selectedToToken}
      />
    </main>
  );
}
