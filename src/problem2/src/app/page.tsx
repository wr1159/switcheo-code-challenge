"use client";

import useSWR from "swr";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { CardContent, Card } from "@/components/ui/card";
import {
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialog,
} from "@/components/ui/alert-dialog";
import { AlertTriangleIcon, LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://interview.switcheo.com/prices.json",
    fetcher
  );

  useEffect(() => {
    if (data || error) {
      setIsLoading(false);
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
          <div className="flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Settings</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 right-0" align="end">
                <DropdownMenuItem>Manage Slippage</DropdownMenuItem>
                <DropdownMenuItem>Manage Deadlines</DropdownMenuItem>
                <DropdownMenuItem>Manage Max Hops</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="from-token">From</Label>
              <div className="flex space-x-2">
                <Input
                  className="flex-grow webkit"
                  id="from-token"
                  type="number"
                  placeholder="0.0"
                  inputMode="decimal"
                  pattern="^[0-9]*[.,]?[0-9]*$"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Select Token</Button>
                  </DialogTrigger>
                  <DialogContent className="w-96 max-h-[75%] overflow-scroll">
                    <DialogHeader>
                      <DialogTitle>Select Token</DialogTitle>
                      <Input
                        className="w-full mt-2"
                        id="search-token"
                        placeholder="Search"
                        type="text"
                      />
                    </DialogHeader>
                    <div>
                      <h3 className="font-bold">Commonly Traded</h3>
                      <div>
                        <Avatar
                          alt="Token Logo"
                          className="w-6 h-6 mr-2"
                          src="/placeholder.svg?height=24&width=24"
                        />
                        Token A
                      </div>
                      <div>
                        <Avatar
                          alt="Token Logo"
                          className="w-6 h-6 mr-2"
                          src="/placeholder.svg?height=24&width=24"
                        />
                        Token B
                      </div>
                      <h3 className="font-bold mt-4">All Tokens</h3>
                      <div className="flex flex-col gap-y-3 py-2">
                        {data &&
                          data.map((token, index: number) => (
                            <div key={index} className="flex ">
                              <Avatar className="w-6 h-6 mr-2">
                                <AvatarImage
                                  src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token.currency}.svg`}
                                  alt={token.currency}
                                />
                                <AvatarFallback>?</AvatarFallback>
                              </Avatar>
                              <p>
                                {token.currency}: {token.price}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="to-token">To</Label>
              <div className="flex space-x-2">
                <Input
                  className="flex-grow webkit"
                  id="to-token"
                  type="number"
                  placeholder="0.0"
                  inputMode="decimal"
                  pattern="^[0-9]*[.,]?[0-9]*$"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Select Token</Button>
                  </DialogTrigger>
                  <DialogContent className="w-96 max-h-[75%] overflow-scroll">
                    <DialogHeader>
                      <DialogTitle>Select Token</DialogTitle>
                      <Input
                        className="w-full mt-2"
                        id="search-token"
                        placeholder="Search"
                        type="text"
                      />
                    </DialogHeader>
                    <div>
                      <h3 className="font-bold">Commonly Traded</h3>
                      <div>
                        <Avatar
                          alt="Token Logo"
                          className="w-6 h-6 mr-2"
                          src="/placeholder.svg?height=24&width=24"
                        />
                        Token A
                      </div>
                      <div>
                        <Avatar
                          alt="Token Logo"
                          className="w-6 h-6 mr-2"
                          src="/placeholder.svg?height=24&width=24"
                        />
                        Token B
                      </div>
                      <h3 className="font-bold mt-4">All Tokens</h3>
                      <div className="flex flex-col gap-y-3 py-2">
                        {data.map((token, index: number) => (
                          <div key={index} className="flex ">
                            <Avatar className="w-6 h-6 mr-2">
                              <AvatarImage
                                src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token.currency}.svg`}
                                alt={token.currency}
                              />
                              <AvatarFallback>?</AvatarFallback>
                            </Avatar>
                            <p>
                              {token.currency}: {token.price}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full">Confirm Swap</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Swap</AlertDialogTitle>
                  <AlertDialogDescription>
                    Please confirm your transaction. This action cannot be
                    undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Transaction Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>Amount</div>
                <div>0.0 Token A</div>
              </div>
              <div className="flex justify-between">
                <div>Exchange Rate</div>
                <div>1 Token A = 0.0 Token C</div>
              </div>
              <div className="flex justify-between">
                <div>Fees</div>
                <div>0.0 Token A</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
