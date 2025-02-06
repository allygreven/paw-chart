import { useNavigate } from "react-router-dom";
import { useUser } from "../components/useUser";

export function Welcome() {
  const { user } = useUser();
  const navigate = useNavigate();
  console.log("test");

  return (
    <div>
      <div className="before:contrast-40 relative flex h-screen w-full flex-col bg-[url('/images/corgi-and-cat.jpeg')] bg-cover bg-center text-white before:absolute before:inset-0 before:bg-black/25">
        <div className="left-18 mt-27 z-1 ml-20 flex flex-col">
          <h3 className="font-inter ml-12 text-2xl font-thin">
            Because they're
          </h3>
          <h2 className="font-fancy text-9xl">Family</h2>
          <h3 className="font-inter ml-15 text-2xl font-thin">Their health.</h3>
          <h3 className="font-inter ml-7 text-2xl font-thin">
            In the palm of your hands.
          </h3>
        </div>

        {/* buttons */}

        <div className="mt-34 z-2 ml-32 flex flex-col justify-center">
          {!user && (
            <>
              <button
                onClick={() => {
                  navigate("/register");
                }}
                type="button"
                className="w-50 font-regular mb-6 cursor-pointer rounded-2xl bg-[#6A7A62] px-4 py-2 text-white shadow-[0px_10px_10px_rgba(0,0,0,0.3)] drop-shadow-md hover:bg-[#8D9F84] focus:outline-none"
              >
                Register Here
              </button>

              <button
                onClick={() => {
                  navigate("/sign-in");
                }}
                type="button"
                className="w-50 font-regular mb-6 cursor-pointer rounded-2xl bg-[#6A7A62] px-4 py-2 text-white shadow-[0px_10px_10px_rgba(0,0,0,0.3)] drop-shadow-md hover:bg-[#8D9F84] focus:outline-none"
              >
                Sign In
              </button>
            </>
          )}

          <button
            onClick={() => {
              navigate("/home");
            }}
            type="button"
            className="w-50 font-regular mb-6 cursor-pointer rounded-2xl bg-[#6A7A62] px-4 py-2 text-white shadow-[0px_10px_10px_rgba(0,0,0,0.3)] drop-shadow-md hover:bg-[#8D9F84] focus:outline-none"
          >
            Guest Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
