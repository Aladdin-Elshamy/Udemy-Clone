import { ILoginData } from "../interfaces";
import { cn } from "../utilities/utili.functions";

interface IProps {
  data: ILoginData;
  isFocused: {
    email: boolean;
    password: boolean;
  };
}
export default function LoginLable({ data, isFocused }: IProps) {
  return (
    <label
      htmlFor={data.id}
      className={cn(
        `cursor-text text-sm font-bold duration-200 text-black absolute top-1/2 left-4 transition-all -translate-y-1/2`,
        {
          "text-xs top-2 -translate-y-0":
            isFocused[data.name as keyof typeof isFocused],
        }
      )}
    >
      {data.label}
    </label>
  );
}
