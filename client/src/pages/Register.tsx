import { Link } from 'react-router-dom';

export function Register() {
  return (
    <div className="flex bg-[#F6F2EF] h-screen">
      <form className="flex flex-col space-y-4 p-6 max-w-sm mx-auto items-center">
        <label className="block text-center text-3xl pt-5 pb-5 items-center">
          Register
        </label>
        <input
          type="text"
          name="name"
          placeholder="Pet's Name"
          className="mt-1 block w-60 px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:border-blue-500"></input>
        <input
          type="number"
          name="age"
          placeholder="Age (in human years)"
          className="mt-1 block w-60 px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:border-blue-500"></input>
        <label>Dog</label>
        <input type="radio" name="type"></input>
        <label>or Cat</label>
        <input type="radio" name="type"></input>
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
          className="w-32 bg-[#6A7A62] text-white py-2 px-4 rounded-lg hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
          Register
        </button>
        Already have an account?{' '}
        <Link to="sign-in" className="underline text-blue-500">
          Click here
        </Link>
      </form>
    </div>
  );
}
