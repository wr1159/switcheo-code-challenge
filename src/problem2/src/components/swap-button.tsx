import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

interface SwapButtonProps {
  fromValue: string | undefined;
  fromToken: string | undefined;
  toValue: string | undefined;
  toToken: string | undefined;
}

export default function SwapButton(props: SwapButtonProps) {
  const { fromValue, fromToken, toValue, toToken } = props;

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="w-full"
          disabled={
            Number(fromValue) == 0 ||
            Number(toValue) == 0 ||
            !fromValue ||
            !toValue ||
            !fromToken ||
            !toToken
          }
        >
          Confirm Swap
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Swap</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to swap{" "}
            <span className="font-bold text-lg text-secondary-foreground">
              <span className="font-mono">{fromValue}</span> {fromToken}
            </span>{" "}
            for{" "}
            <span className="font-bold text-lg text-secondary-foreground">
              <span className="font-mono">{toValue}</span> {toToken}
            </span>
            <br />
            <br />
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              toast.success("Swap successful!");
            }}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
