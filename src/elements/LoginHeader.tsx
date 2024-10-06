import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export default function LoginHeader({ children }: IProps) {
  return (
    <h1 className="text-2xl md:text-3xl font-bold max-w-6xl text-center text-black">
      {children}
    </h1>
  );
}
