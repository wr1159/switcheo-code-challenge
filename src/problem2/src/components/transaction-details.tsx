import { Token } from "@/lib/types";
import React from "react";
import { Card, CardContent } from "./ui/card";

interface TransactionDetailsProps {
  selectedFromToken: Token | null;
  selectedToToken: Token | null;
  fromTokenValue: string | undefined;
}

export default function TransactionDetails({
  selectedFromToken,
  selectedToToken,
  fromTokenValue,
}: TransactionDetailsProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Transaction Details</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>Amount</div>
              <div>
                {fromTokenValue || 0.0} {selectedFromToken?.currency}
              </div>
            </div>
            <div className="flex justify-between gap-x-4">
              <div>Exchange Rate</div>
              {selectedFromToken && selectedToToken && (
                <div className="text-right">
                  1 {selectedFromToken?.currency} ={"  "}
                  {selectedFromToken?.price / selectedToToken?.price}
                  {"  "}
                  {selectedToToken.currency}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
