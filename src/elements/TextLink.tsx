import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  url?: string;
}
export default function TextLink({ url = "#", children }: IProps) {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      className="text-primary cursor-pointer font-bold border-b-2 border-primary hover:text-[#392185]"
    >
      {children}
    </a>
  );
}
