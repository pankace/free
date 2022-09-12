import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="bg-background min-h-screen flex">
      <div className="w-full max-w-sm m-auto flex flex-col items-center">
        <img src="/logo.svg" alt="" className="h-20 w-auto" />
        <div className="mt-5 ">
          <input
            type="text"
            placeholder="e-mail"
            className="w-full p-1 border-b mt-5  border-white bg-transparent"
          />
          <input
            type="password"
            placeholder="password"
            className="w-full p-1 mt-5 border-b border-white bg-transparent"
          />
        </div>
        <div className="flex justify-between text-sm w-full mt-3 px-2">
          <div className="">
            <input type="checkbox" name="" id="" />
            <label className="text-gray ml-2" htmlFor="">
              Remember me
            </label>
          </div>
          <div className="">
            <a href="#" className="text-green">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="w-full mt-12">
          <div className="p-3 bg-green py-2 w-fit font-bold">Log In</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
