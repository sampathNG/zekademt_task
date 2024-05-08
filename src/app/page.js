import Image from "next/image";
import profilePic from "./assets/full.png";
import { CiMail } from "react-icons/ci";
export default function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center text-white bg-slate-900
    sm:flex sm:justify-center sm:items-center sm:text-center sm:bg-slate-900"
    >
      <div
        className="h-1/2 w-full
      sm:h-full sm:w-1/2 
      "
      >
        <Image
          src={profilePic}
          alt="profile"
          className="w-full sm:w-1/2 sm:h-screen"
        />
      </div>
      <div
        className="  px-8 py-10 flex flex-col items-center  w-full
        sm:flex sm:justify-center sm:items-center sm:w-1/2 sm:h-screen
      "
      >
        <h1 className="text-3xl font-bold text-white mb-4">Sign up</h1>
        <p className="text-white text-lg mb-8">Choose a sign up method</p>
        <div className="flex flex-col justify-center  ">
          <button className="flex items-center w-full justify-center mb-6 px-6 py-3 rounded-md font-medium border border-gray-300 hover:bg-blue-700 hover:text-white text-black">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c1/20190923152039%21Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png"
              className="h-5 mr-2 text-white"
              alt="Google logo"
            />
            <p className="text-white">Sign up with Google</p>
          </button>
          <button className="flex items-center  justify-center px-6 py-3  rounded-md font-medium text-gray-800 border border-gray-300 hover:bg-blue-700">
            <CiMail className="mr-2 text-xl bg-white p-0" />
            <p className="text-white">Sign up with Email</p>
          </button>
        </div>
        <p className=" text-sm mt-8">
          Already a user?
          <a href="/login" className="text-blue-700 hover:text-slate-600 pl-">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
