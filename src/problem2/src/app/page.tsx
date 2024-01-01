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
  const [fromTokenValue, setFromTokenValue] = useState<string>();
  const [toTokenValue, setToTokenValue] = useState<string>();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://interview.switcheo.com/prices.json",
    fetcher
  );
  const sortedData = data?.sort((a: Token, b: Token) =>
    a.currency.localeCompare(b.currency)
  );
  const uniqueData = sortedData?.filter(
    (value: Token, index: number, self: Token[]) =>
      self.findIndex((v: Token) => v.currency === value.currency) === index
  );

  const calculateFromTokenValue = (tokenValue?: number) => {
    if (toTokenValue && selectedFromToken && selectedToToken) {
      const fromTokenValue =
        (Number(toTokenValue) || 0 * selectedToToken.price) /
        selectedFromToken.price;
      setFromTokenValue(fromTokenValue.toString());
    }
  };

  const calculateToTokenValue = (fromTokenValue?: number) => {
    if (fromTokenValue && selectedFromToken && selectedToToken) {
      const toTokenValue =
        ((fromTokenValue || 0) * selectedFromToken.price) /
        selectedToToken.price;
      setToTokenValue(toTokenValue.toString());
    }
  };

  useEffect(() => {
    if (data || error) {
      setIsLoading(false);
      setSelectedFromToken(data[0]);
      setSelectedToToken(data[1]);
    }
  }, [data, error]);

  useEffect(() => {
    calculateFromTokenValue();
  }, [selectedToToken]);

  useEffect(() => {
    calculateToTokenValue();
  }, [selectedFromToken]);

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
                data={uniqueData}
                id="from-token"
                selectedToken={selectedFromToken}
                setSelectedToken={setSelectedFromToken}
                otherSelectedToken={selectedToToken}
                tokenValue={fromTokenValue}
                onChange={(e) => {
                  const PATTERN = new RegExp("^[0-9]*[.,]?[0-9]*$");
                  if (!PATTERN.test(e.target.value)) {
                    return;
                  }

                  const value = Number(e.target.value);
                  if (value == 0) {
                    setFromTokenValue("0");
                    setToTokenValue("0");
                  } else {
                    setFromTokenValue(value.toString());
                    calculateToTokenValue(value);
                  }
                }}
              />
            </div>
            <Button
              variant={"ghost"}
              onClick={() => {
                const tempToken = selectedFromToken;
                setSelectedFromToken(selectedToToken);
                setSelectedToToken(tempToken);

                const tempTokenValue = fromTokenValue;
                setFromTokenValue(toTokenValue);
                setToTokenValue(tempTokenValue);
              }}
              className="flex justify-center items-center mx-auto "
            >
              <ArrowUpDownIcon />
            </Button>
            <div className="space-b-2">
              <Label htmlFor="to-token">To</Label>
              <TokenSelect
                data={uniqueData}
                id="to-token"
                selectedToken={selectedToToken}
                setSelectedToken={setSelectedToToken}
                otherSelectedToken={selectedFromToken}
                tokenValue={toTokenValue}
                onChange={(e) => {
                  console.log(e.target.value);
                  setToTokenValue(e.target.value);
                  calculateFromTokenValue();
                }}
              />
            </div>
            <SwapButton />
          </div>
        </CardContent>
      </Card>
      <TransactionDetails
        selectedFromToken={selectedFromToken}
        selectedToToken={selectedToToken}
        fromTokenValue={fromTokenValue}
      />
    </main>
  );
}
