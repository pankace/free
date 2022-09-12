import type { NextPage } from "next";
import Footer from "../components/Footer";
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(/bg-1.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full h-[50vh]"
      >
        <div className="max-w-[80vw] mx-auto pt-12">
          <div className="flex justify-between">
            <Link href="/">             
              <img src="/logo.svg" className="h-16 w-auto" alt="" />
            </Link>
            <div className="flex gap-5 text-white font-bold items-center">
              <Link href="/">
                <a className="hover:text-green border-b-2 border-green">Find a club</a>
              </Link>
              <Link href="/member">
                <a className="hover:text-green">Become a member</a>
              </Link>
              <Link href="/login">
                <a className="hover:text-green">Login</a>
              </Link>
            </div>
          </div>
          <div className="mt-12 text-3xl max-w-[80%] text-white">
            A night life socializing app for people who wants to explore night
            scenes.
          </div>
        </div>
      </div>
      <div className="max-w-[80vw] mx-auto pt-10 font-medium">
        <div className="text-white">Your top 3 Night club recomendations</div>
        <div className="grid grid-cols-3 gap-5 mt-2">
          <div className="">
            <Link href="/booking">
              <img src="/night1.png" alt="" className="w-full h-auto" />
            </Link>
            <div className="flex justify-between  mt-7">
              <Link href="/booking">
              <div className="text-white">Onyx</div>
              </Link>
              <div className="flex text-green">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                    fill="#27F45C"
                  />
                </svg>

                <div className="ml-2">5.0</div>
              </div>
            </div>
          </div>
          <div className="">
            <img src="/night2.png" alt="" className="w-full h-auto" />
            <div className="flex justify-between  mt-7">
              <div className="text-white">Sugar</div>
              <div className="flex text-green">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                    fill="#27F45C"
                  />
                </svg>

                <div className="ml-2">4.9</div>
              </div>
            </div>
          </div>
          <div className="">
            <img src="/night3.png" alt="" className="w-full h-auto" />
            <div className="flex justify-between  mt-7">
              <div className="text-white">Bobo</div>
              <div className="flex text-green">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                    fill="#27F45C"
                  />
                </svg>

                <div className="ml-2">4.8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
