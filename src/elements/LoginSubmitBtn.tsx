import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export default function LoginSubmitBtn({ children, ...rest }: IProps) {
  return (
    <button
      className="w-full mt-4 py-3 font-bold text-white text-sm bg-purple hover:bg-darkPurple"
      {...rest}
    >
      {children}
    </button>
  );
}
