import LoginSection from "../components/LoginSection";
import LoginPic from "../elements/LoginPic";

export default function Login() {
  return (
    <section className="container grid grid-cols-1 place-items-center md:grid-cols-2 py-6 gap-7">
      <LoginPic />
      <LoginSection />
    </section>
  );
}
