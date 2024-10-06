import { Fragment } from "react/jsx-runtime";
import { LoginData } from "../data";
import LoginHeader from "../elements/LoginHeader";
import LoginField from "./LoginField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation";
import { ILogin } from "../interfaces";
import LoginSubmitBtn from "../elements/LoginSubmitBtn";
import ErrorMessage from "../elements/ErrorMessage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (data: ILogin) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      toast.success("Login Successful", {
        style: {
          border: "1px solid #2d2f31",
          padding: "16px",
          color: "#2d2f31",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
        icon: "🚀",
      });
      setTimeout(() => {
        navigate("/");
      }, 1200);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorCode = error.code;
      toast.error(errorCode, {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
        icon: "🚨",
      });
    }
  };
  return (
    <div>
      <LoginHeader>
        Log in to your Udemy <br className="hidden md:block" /> account
      </LoginHeader>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {LoginData.map(({ validation, ...data }) => (
          <Fragment key={data.id}>
            <LoginField
              {...register(data.name as keyof ILogin, validation)}
              data={data}
            />
            {errors[data.name as keyof ILogin] && (
              <ErrorMessage
                message={errors[data.name as keyof ILogin]?.message}
              />
            )}
          </Fragment>
        ))}
        <LoginSubmitBtn>Log in</LoginSubmitBtn>
        <Toaster />
      </form>
    </div>
  );
}
