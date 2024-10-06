import { HTMLAttributes, ReactNode } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}
export default function ForgetPass({ children, ...rest }: IProps) {
  return (
    <span
      className="text-primary cursor-pointer font-bold border-b-2 border-primary hover:text-[#392185]"
      {...rest}
    >
      {children}
    </span>
  );
}
