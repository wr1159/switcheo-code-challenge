import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function SwapSettings(): JSX.Element {
  return (
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
  );
}
