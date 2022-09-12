import type { NextPage } from "next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(/bg-3.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full h-[20vh]"
      >
        <Header />
      </div>
      <div className="max-w-[80vw] mx-auto grid gap-10 grid-cols-2 pt-10 font-medium">
        <div className="">
          <img src="/onyx.png" alt="" className="w-full h-auto" />
          <div className="py-2 flex justify-between">
            <div className="text-xl text-white">Onyx</div>
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
          <div className="flex justify-between text-white">
            <div className="text-xs pr-12">
              Royal City Avenue Rama IX Rd, Bang Kapi, Huai Khwang, Bangkok
              10310, Thailand<br></br>
              <a className="text-green" href="">
                +66 81 645 1166
              </a>
            </div>
            <div className="text-3xl w-[270px]">7pm-3am</div>
          </div>
          <div className="text-xs mt-5 text-white">
            ONYX Main Stage opened in October 2015 with the unashamedly grand
            ambition of being the biggest and best dance party extravaganza ever
            conceived in Bangkok and one of the premier nightlife destinations
            in Asia. Epic in both size and scope, we present to you an
            incredible 2,500 person capacity hub for dance music lovers. The
            stadium-style Main Room generates an intensity and wild euphoria
            that few other clubs in the world can match, with superstar EDM and
            Commercial Dance artists enthralling a crowd of party people and
            pleasure seekers.
          </div>
        </div>

        <div className="">
          <div className="text-xl text-white">Book a table</div>
          

          <div className="bg-green px-3 py-2 font-bold w-fit my-8">Book</div>
          <div className="text-white">
            Instagram{" "}
            <a className="text-green" href="">
              @onyxbangkok
            </a>
          </div>
          <div className="grid grid-cols-3 mt-5">
            <img src="/event1.png" alt="" />
            <img src="/event2.png" alt="" />
            <img src="/event3.png" alt="" />
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