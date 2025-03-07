import { Check, Files } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
interface CopyButtonProps {
  content: string;
  copied: boolean;
  setCopied: React.Dispatch<React.SetStateAction<boolean>>;
}
const CopyButton = ({ content, copied, setCopied }: CopyButtonProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="p-0.5 border dark:border-neutral-800 rounded-md backdrop-blur-2xl w-fit h-fit"
          variant="ghost"
          onClick={() => {
            if (copied) return;
            navigator.clipboard.writeText(content);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
          }}
        >
          {copied ? (
            <Check
              className="scale-[0.70] dark:stroke-neutral-400 stroke-neutral-800"
              size={24}
            />
          ) : (
            <Files
              className="scale-[0.70] dark:stroke-neutral-400 stroke-neutral-800"
              size={24}
            />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-card text-text-small text-primary-foreground">
        <p>Add to clipboard</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default CopyButton;
