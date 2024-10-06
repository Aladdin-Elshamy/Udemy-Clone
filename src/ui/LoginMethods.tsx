import TextLink from "../elements/TextLink";

export default function LoginMethods() {
  return (
    <div className="bg-gray-50 mt-10 w-full relative text-center text-sm md:text-base">
      <div className=" [&>*]:py-4 divide-y-2">
        <p>
          Don't have an account? <TextLink>Sign up</TextLink>
        </p>
        <div>
          <TextLink>Log in with your organization</TextLink>
        </div>
      </div>
    </div>
  );
}
