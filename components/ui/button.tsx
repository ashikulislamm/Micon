import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-heading inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md",
        solid:
          "bg-foreground text-background hover:bg-foreground/90 shadow-sm hover:shadow-md",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive shadow-sm",
        outline:
          "border border-border bg-card text-foreground shadow-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors",
        outlineSecondary:
          "border border-border bg-card text-foreground shadow-xs hover:bg-muted hover:border-foreground/30 transition-colors",
        heroOutline:
          "border border-white/60 bg-white/10 backdrop-blur-sm text-white shadow-xs hover:bg-white hover:text-foreground hover:border-white transition-all",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/85 shadow-sm",
        ghost:
          "hover:bg-primary/10 hover:text-primary text-foreground dark:hover:bg-primary/20",
        link:
          "text-primary underline-offset-4 hover:underline p-0 h-auto font-normal",
      },
      size: {
        default: "h-10 px-5 py-2 text-sm",
        xs: "h-7 gap-1 rounded-none px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-none px-3 text-xs",
        lg: "h-11 gap-2 rounded-none px-6 text-sm font-bold tracking-wide",
        xl: "h-12 gap-2.5 rounded-none px-8 text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg",
        pill: "h-10 gap-2 rounded-none px-6 text-xs font-bold uppercase tracking-wider shadow-sm",
        icon: "size-10 rounded-none",
        "icon-sm": "size-8 rounded-none",
        "icon-lg": "size-12 rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
