import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../components/UserContext";

export function Register() {
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
      const res = await fetch("/api/auth/sign-up", req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const user = (await res.json()) as User;
      alert(
        `Successfully registered ${user.username} as userId ${user.userId}.`,
      );
      navigate("/sign-in");
    } catch (err) {
      alert(`Error registering user: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-background font-regular flex h-screen">
      <form
        onSubmit={handleSubmit}
        className="min-w-md mx-auto flex flex-col items-center space-y-4 p-6"
      >
        <label className="text-grey-body block items-center pb-5 pt-5 text-center text-3xl">
          Register
        </label>
        <input
          type="text"
          name="name"
          placeholder="Pet's Name"
          className="w-70 mt-1 block rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
        ></input>
        <input
          type="number"
          name="age"
          placeholder="Age (in human years)"
          className="w-70 mt-1 block rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
        ></input>
        <div>
          <label className="text-grey-body pr-2">Dog</label>
          <input type="radio" name="type" value="dog"></input>
          <label className="text-grey-body pl-5 pr-2">Cat</label>
          <input type="radio" name="type" value="cat"></input>
        </div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-70 mt-1 block rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-70 mb-6 mt-1 block rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
        ></input>
        <button
          disabled={isLoading}
          type="submit"
          className="w-35 cursor-pointer rounded-xl bg-[#6A7A62] px-4 py-2 text-white hover:bg-[#8D9F84] focus:outline-none"
        >
          Register
        </button>
        <span className="text-grey-body text-sm">
          Already have an account? &nbsp;
          <Link to="/sign-in" className="text-sm text-blue-500 underline">
            Click here
          </Link>
        </span>
      </form>
    </div>
  );
}
