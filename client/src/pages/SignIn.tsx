import { Link } from 'react-router-dom';

export function SignIn() {
  return (
    <div className="flex bg-background h-screen">
      <form className="flex flex-col space-y-4 p-6 max-w-lg mx-auto items-center">
        <label className="block text-center text-3xl text-[#34332E] pt-5 pb-5 items-center">
          Sign-in
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="mt-1 block w-70 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:border-blue-500"></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mt-1 block w-70 mb-6 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:border-blue-500"></input>
        <button
          type="submit"
          className="w-35 mb-6 bg-[#6A7A62] text-white py-2 px-4 rounded-xl hover:bg-[#8D9F84] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer">
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
