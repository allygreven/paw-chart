import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, useUser } from "../components/useUser";

type AuthData = {
  user: User;
  token: string;
};

export function SignIn() {
  const { handleSignIn } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData);
      const req = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      };
      const res = await fetch("/api/auth/sign-in", req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const { user, token } = (await res.json()) as AuthData;
      handleSignIn(user, token);
      navigate("/home");
    } catch (err) {
      alert(`Error signing in: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-background font-regular flex h-screen">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-lg flex-col items-center space-y-4 p-6"
      >
        <label className="block items-center pb-5 pt-5 text-center text-3xl text-[#34332E]">
          Sign-in
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-70 mt-1 block rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none"
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-70 mb-6 mt-1 block rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none"
        ></input>
        <button
          disabled={isLoading}
          type="submit"
          className="w-35 mb-6 cursor-pointer rounded-xl bg-[#6A7A62] px-4 py-2 text-white hover:bg-[#8D9F84] focus:outline-none"
        >
          Sign-in
        </button>
        <span className="text-sm text-[#34332E]">
          Don't have an account? &nbsp;
          <Link to="/register" className="text-sm text-blue-500 underline">
            Click here
          </Link>
        </span>
      </form>
    </div>
  );
}
