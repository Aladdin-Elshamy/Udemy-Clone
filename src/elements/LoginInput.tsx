import { forwardRef, InputHTMLAttributes } from "react";

const LoginInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ ...rest }, ref) => {
  return (
    <input
      className="pt-8 px-4 border border-black pb-2 font-medium focus:outline-none"
      ref={ref} // Pass the ref to the input element
      {...rest} // Spread all remaining props
    />
  );
});

export default LoginInput;
