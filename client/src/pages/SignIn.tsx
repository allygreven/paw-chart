import { Link } from 'react-router-dom';

export function SignIn() {
  return (
    <div className="flex bg-[#F6F2EF] h-screen">
      <form className="flex flex-col space-y-4 p-6 max-w-lg mx-auto items-center">
        <label className="block text-center text-3xl pt-5 pb-5 items-center">
          Sign-in
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="mt-1 block w-60 px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:border-blue-500"></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mt-1 block w-60 px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:border-blue-500"></input>
        <button
          type="submit"
          className="w-32 bg-[#6A7A62] text-white py-2 px-4 rounded-lg hover:bg-[#8D9F84] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer">
          Sign-in
        </button>
        Don't have an account?
        <Link to="register" className="text-blue-500 underline">
          Click here
        </Link>
      </form>
    </div>
  );
}
