import { Token } from "@/lib/types";
import React from "react";
import { Card, CardContent } from "./ui/card";

interface TransactionDetailsProps {
  selectedFromToken: Token | null;
  selectedToToken: Token | null;
}

export default function TransactionDetails({
  selectedFromToken,
  selectedToToken,
}: TransactionDetailsProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Transaction Details</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>Amount</div>
              <div>0.0 {selectedFromToken?.currency}</div>
            </div>
            <div className="flex justify-between">
              <div>Exchange Rate</div>
              {selectedFromToken && selectedToToken && (
                <div>
                  1 {selectedFromToken?.currency} ={"  "}
                  {selectedFromToken?.price / selectedToToken?.price}
                  {"  "}
                  {selectedToToken.currency}
                </div>
              )}
            </div>
            <div className="flex justify-between">
              <div>Fees</div>
              <div>0.0 Token A</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
