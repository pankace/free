import type { NextPage } from "next";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(/bg-2.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full h-[100vh] pt-12"
      >
        <div className="max-w-[80vw] mx-auto">
          <div className="flex justify-between">
            <Link href="/">             
              <img src="/logo.svg" className="h-16 w-auto" alt="" />
            </Link>
            <div className="flex gap-5 text-white font-bold items-center">
              <Link href="/">
                <a className="">Find a club</a>
              </Link>
              <Link href="/member">
                <a className="border-b-2 border-green">Become a member</a>
              </Link>
              <Link href="/login">
                <a className="">Login</a>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="mt-12 text-3xl font-bold text-white">
              <div className="">
                Work hard.
                <br /> Party hard.{" "}
              </div>
              <div className="mt-6 font-medium text-5xl">
                Socializing
                <br /> isn't so hard.
              </div>
            </div>
            <div className="">
              <div className="border backdrop-blur my-auto border-white p-6">
                <div className="flex text-white font-medium items-center ">
                  <div className="mr-2">Login with</div>
                  <div className="flex gap-3">
                    <FaFacebook className="text-2xl cursor-pointer hover:text-yellow-600" />
                    <FaGoogle className="text-2xl cursor-pointer hover:text-yellow-600" />
                    <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                  </div>               
                </div>
                <input
                  type="text"
                  placeholder="name"
                  className="w-full p-1 border-b mt-5  border-white bg-transparent"
                />
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
                <input
                  type="password"
                  placeholder="re-enter password"
                  className="w-full p-1 mt-5 border-b border-white bg-transparent"
                />
                <div className="flex justify-end">
                  <div className="text-green text-sm mt-2">
                    Already registered?
                  </div>
                </div>
                <div className="bg-white p-2 font-bold w-fit">Register</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
};

export default Home;
