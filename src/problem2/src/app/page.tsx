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
import { Avatar } from "@/components/ui/avatar";
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

export default function Home() {
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
                  className="flex-grow"
                  id="from-token"
                  placeholder="0.0"
                  type="number"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Select Token</Button>
                  </DialogTrigger>
                  <DialogContent className="w-96">
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
                      <div>
                        <Avatar
                          alt="Token Logo"
                          className="w-6 h-6 mr-2"
                          src="/placeholder.svg?height=24&width=24"
                        />
                        Token C
                      </div>
                      <div>
                        <Avatar
                          alt="Token Logo"
                          className="w-6 h-6 mr-2"
                          src="/placeholder.svg?height=24&width=24"
                        />
                        Token D
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
                  className="flex-grow"
                  id="to-token"
                  placeholder="0.0"
                  type="number"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Select Token</Button>
                  </DialogTrigger>
                  <DialogContent className="w-96">
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
                      <div>
                        <Avatar
                          alt="Token Logo"
                          className="w-6 h-6 mr-2"
                          src="/placeholder.svg?height=24&width=24"
                        />
                        Token C
                      </div>
                      <div>
                        <Avatar
                          alt="Token Logo"
                          className="w-6 h-6 mr-2"
                          src="/placeholder.svg?height=24&width=24"
                        />
                        Token D
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
