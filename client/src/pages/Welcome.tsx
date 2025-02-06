import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/useUser';

export function Welcome() {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative w-full h-screen flex flex-col text-white bg-[url('/images/corgi-and-cat.jpeg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/25 before:contrast-40">
        <div className="left-18 flex flex-col ml-20 mt-18 z-1">
          <h3 className="font-inter text-2xl font-thin ml-12">
            Because they're
          </h3>
          <h2 className="font-fancy text-9xl">Family</h2>
          <h3 className="font-inter text-2xl font-thin ml-15">Their health.</h3>
          <h3 className="font-inter text-2xl font-thin ml-7">
            In the palm of your hands.
          </h3>
        </div>

        {/* buttons */}

        <div className="flex flex-col justify-center ml-32 mt-47 z-2">
          {!user && (
            <>
              <button
                onClick={() => {
                  navigate('/register');
                }}
                type="button"
                className="w-50 mb-6 bg-[#6A7A62] font-regular text-white py-2 px-4 drop-shadow-md shadow-[0px_10px_10px_rgba(0,0,0,0.3)] rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
                Register Here
              </button>

              <button
                onClick={() => {
                  navigate('/sign-in');
                }}
                type="button"
                className="w-50 mb-6 bg-[#6A7A62] font-regular text-white py-2 px-4 drop-shadow-md shadow-[0px_10px_10px_rgba(0,0,0,0.3)] rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
                Sign In
              </button>
            </>
          )}

          <button
            onClick={() => {
              navigate('/home');
            }}
            type="button"
            className="w-50 mb-6 bg-[#6A7A62] font-regular text-white py-2 px-4 drop-shadow-md shadow-[0px_10px_10px_rgba(0,0,0,0.3)] rounded-2xl hover:bg-[#8D9F84] focus:outline-none cursor-pointer">
            Guest Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
