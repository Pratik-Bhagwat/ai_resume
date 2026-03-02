import { cn } from "@/lib/utils";

export const Wrapper = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "shadow-inner-border relative mx-auto h-full w-full max-w-7xl rounded-[4px] border-x border-b border-neutral-200 p-4",
        className,
      )}
    >
      {children}
    </div>
  );
};
