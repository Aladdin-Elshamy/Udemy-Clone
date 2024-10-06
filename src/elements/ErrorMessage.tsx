interface IProps {
  message?: string;
}
export default function ErrorMessage({ message }: IProps) {
  return message ? <p className="text-red-500">{message}</p> : null;
}
