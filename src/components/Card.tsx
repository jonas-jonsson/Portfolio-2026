import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../utils/utils";

interface CardProps extends ComponentPropsWithoutRef<"div"> {}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-(--surface)/40 p-3 rounded-xl shadow-(--card-shadow) flex",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
