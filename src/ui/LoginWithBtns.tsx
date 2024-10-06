import LinkBtn from "../elements/LinkBtn";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { GrApple } from "react-icons/gr";
import Button from "../elements/Button";
import SignUpWithGoogle from "../auth/SignWithGoogle";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function LoginWithBtns() {
  const navigate = useNavigate();
  async function signInWithGoogle() {
    const result = await SignUpWithGoogle();
    if (result?.error) {
      toast(result.error, {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    }
    if (result?.user) {
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
    }
  }
  return (
    <div className="flex gap-4 mt-7 justify-center">
      <Button
        variant={"white"}
        align={"center"}
        width={"fit"}
        className="px-2 cursor-pointer"
        onClick={signInWithGoogle}
      >
        <FcGoogle className="text-3xl" />
      </Button>
      <LinkBtn
        variant={"white"}
        align={"center"}
        width={"fit"}
        className="px-2 cursor-pointer"
      >
        <BiLogoFacebookCircle className="text-3xl text-[#1b79ec]" />
      </LinkBtn>
      <LinkBtn
        variant={"white"}
        align={"center"}
        width={"fit"}
        className="px-2 cursor-pointer"
      >
        <GrApple className="text-3xl" />
      </LinkBtn>
    </div>
  );
}
