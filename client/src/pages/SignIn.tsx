import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, useUser } from '../components/useUser';

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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/auth/sign-in', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const { user, token } = (await res.json()) as AuthData;
      handleSignIn(user, token);
      navigate('/home');
    } catch (err) {
      alert(`Error signing in: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex bg-background h-screen font-regular">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 p-6 max-w-lg mx-auto items-center">
        <label className="block text-center text-3xl text-[#34332E] pt-5 pb-5 items-center">
          Sign-in
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="mt-1 block w-70 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none "></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mt-1 block w-70 mb-6 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none "></input>
        <button
          disabled={isLoading}
          type="submit"
          className="w-35 mb-6 bg-[#6A7A62] text-white py-2 px-4 rounded-xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
          Sign-in
        </button>
        <span className="text-sm text-[#34332E]">
          Don't have an account? &nbsp;
          <Link to="/register" className="text-blue-500 underline text-sm">
            Click here
          </Link>
        </span>
      </form>
    </div>
  );
}
