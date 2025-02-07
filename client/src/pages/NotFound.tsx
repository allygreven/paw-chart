import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex h-screen bg-[#F6F2EF]">
      <div className="flex-1 py-12 text-center">
        <h3 className="text-2xl">
          Woof! We could not find the page you were looking for!
        </h3>
        <Link to="/" className="text-md text-blue-500">
          Return Home
        </Link>
      </div>
    </div>
  );
}
