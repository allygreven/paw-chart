import { Link } from 'react-router-dom';

export function Register() {
  return (
    <div className="flex bg-background h-screen font-regular">
      <form className="flex flex-col space-y-4 p-6 min-w-md mx-auto items-center">
        <label className="block text-center text-3xl text-grey-body pt-5 pb-5 items-center">
          Register
        </label>
        <input
          type="text"
          name="name"
          placeholder="Pet's Name"
          className="mt-1 block w-70 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:border-blue-500"></input>
        <input
          type="number"
          name="age"
          placeholder="Age (in human years)"
          className="mt-1 block w-70 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:border-blue-500"></input>
        <div>
          <label className="pr-2 text-grey-body">Dog</label>
          <input type="radio" name="type"></input>
          <label className="pr-2 pl-5 text-grey-body">Cat</label>
          <input type="radio" name="type"></input>
        </div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="mt-1 block w-70 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:border-blue-500"></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="mt-1 block mb-6 w-70 px-3 py-2 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:border-blue-500"></input>
        <button
          type="submit"
          className="w-35 bg-[#6A7A62] text-white py-2 px-4 rounded-xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
          Register
        </button>
        <span className="text-sm text-grey-body">
          Already have an account? &nbsp;
          <Link to="/sign-in" className="underline text-blue-500 text-sm">
            Click here
          </Link>
        </span>
      </form>
    </div>
  );
}
