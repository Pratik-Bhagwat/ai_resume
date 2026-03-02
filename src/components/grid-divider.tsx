import { cn } from "@/lib/utils";
import { Wrapper } from "./wrapper";

export const GridDivider = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-stretch", className)}>
      <GridLine />
      <Wrapper className="p-0" />
      <GridLine />
    </div>
  );
};

export const GridLine = () => {
  return (
    <div
      className={cn(
        "shadow-inner-border relative hidden h-full flex-1 rounded-[4px] border-x border-b border-neutral-200 lg:flex",
      )}
    />
  );
};
