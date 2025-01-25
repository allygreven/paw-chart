import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex">
      <div className="flex-1 py-12 text-center">
        <h3>Woof! We could not find the page you were looking for!</h3>
        <Link to="/" className="text-gray-700">
          Return Home
        </Link>
      </div>
    </div>
  );
}
