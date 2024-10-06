import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../utilities/utili.functions";

const BtnStyles = cva("border font-bold border-black px-4 py-2 text-sm", {
  variants: {
    variant: {
      black: "bg-black text-white hover:opacity-70",
      white: "bg-transparent border border-black text-black hover:bg-gray-200",
    },
    align: {
      left: "text-left",
      center: "text-center",
    },
    width: {
      full: "w-full",
      fit: "w-fit",
    },
  },
  defaultVariants: {
    variant: "black",
    align: "left",
    width: "full",
  },
});

interface IProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof BtnStyles> {}

export default function Button({
  className,
  variant,
  align,
  width,
  ...props
}: IProps) {
  return (
    <button
      {...props}
      className={cn(BtnStyles({ variant, align, width, className }))}
    />
  );
}
