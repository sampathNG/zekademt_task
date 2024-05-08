import Image from "next/image";
import profilePic from "./assets/ekademy.jpeg";
import { CiMail } from "react-icons/ci";

export default function Home() {
  return (
    <div className="flex h-screen  items-center justify-center p-24">
      <Image src={profilePic} alt=" logo" className=" w-3/12 h-3/4" />
      <div className="bg-white  px-8 py-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Sign up</h1>
        <p className="text-gray-600 text-lg mb-8">Choose a sign up method</p>
        <div className="flex flex-col justify-center gap-4">
          <button className="flex items-center justify-center px-6 py-3 rounded-md font-medium text-gray-800 border border-gray-300 hover:bg-gray-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c1/20190923152039%21Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png"
              className="h-5 mr-2"
              alt="Google logo"
            />
            Sign up with Google
          </button>
          <button className="flex items-center justify-center px-6 py-3 rounded-md font-medium text-gray-800 border border-gray-300 hover:bg-gray-100">
            <CiMail className="mr-2 text-xl" />
            Sign up with Email
          </button>
        </div>
        <p className="text-gray-600 text-sm mt-8">
          Already a user?
          <a href="/login" className="text-blue-700 hover:text-slate-600 pl-">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
