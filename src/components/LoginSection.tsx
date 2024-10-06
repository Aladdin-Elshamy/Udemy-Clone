import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase.config";
import LoginMethods from "../ui/LoginMethods";
import LoginWithBtns from "../ui/LoginWithBtns";
import LoginForm from "./LoginForm";
import ForgetPass from "../elements/ForgetPass";

export default function LoginSection() {
  async function resetPassword() {
    try {
      const email = prompt("Please enter your email address");
      await sendPasswordResetEmail(auth, email as string);
      alert("Password reset email sent");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.message);
    }
  }
  return (
    <div className="w-full max-w-md">
      <LoginForm />
      <div className="mt-8">
        <p className="text-center">
          or <ForgetPass onClick={resetPassword}>Forget Password</ForgetPass>
        </p>
        <div className="text-gray-500 text-center border-b-2 border-gray-400 relative mt-10 mb-12 cursor-default">
          <p className="absolute text-xs sm:text-sm top-1/2 -translate-y-1/2 bg-white px-2 left-1/2 -translate-x-1/2">
            Other log in options
          </p>
        </div>
        <LoginWithBtns />
        <LoginMethods />
      </div>
    </div>
  );
}
