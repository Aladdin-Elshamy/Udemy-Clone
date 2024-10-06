import { FocusEvent, useState, forwardRef } from "react";
import { ILoginData } from "../interfaces";
import LoginLable from "../elements/LoginLable";
import LoginInput from "../elements/LoginInput";

interface IProps {
  data: ILoginData;
}

// Wrap the LoginField component in forwardRef
const LoginField = forwardRef<HTMLInputElement, IProps>(
  ({ data, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState({
      email: false,
      password: false,
    });

    function focusHandler(e: FocusEvent<HTMLInputElement, Element>) {
      const { name } = e.target;
      setIsFocused((prev) => ({ ...prev, [name]: true }));
    }

    function blurHandler(e: FocusEvent<HTMLInputElement, Element>) {
      const { name } = e.target;
      if (e.target.value === "")
        setIsFocused((prev) => ({ ...prev, [name]: false }));
    }

    // function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    //   const { name, value } = e.target;
    //   setCredentials((prev) => ({ ...prev, [name]: value }));
    // }
    return (
      <div className="mt-4 flex flex-col relative">
        <LoginLable data={data} isFocused={isFocused} />
        <LoginInput
          type={data.type}
          name={data.name}
          id={data.id}
          onFocus={focusHandler}
          ref={ref} // Forward the ref to LoginInput
          {...rest}
          onBlur={blurHandler}
        />
      </div>
    );
  }
);

export default LoginField;
