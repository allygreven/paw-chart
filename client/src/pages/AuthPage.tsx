import { Register } from "./Register";
import { SignIn } from "./SignIn";

type Props = {
  mode: "register" | "sign-in";
};
export function AuthPage({ mode }: Props) {
  return (
    <div className="container m-4">
      {mode === "register" && <Register />}
      {mode === "sign-in" && <SignIn />}
    </div>
  );
}
