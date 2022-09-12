import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-white font-thin text-3xl pb-6">
							Night | pass
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaTiktok className="text-2xl cursor-pointer hover:text-teal-400" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-thin text-2xl pb-4">Product</p>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
							Nightmare
						</li>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
              Nightmare
						</li>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
              Nightmare
						</li>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
              Nightmare
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-thin text-2xl pb-4">Company</p>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
							About
						</li>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
							Products
						</li>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
							Pricing
						</li>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
							Careers
						</li>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-thin text-2xl pb-4">Support</p>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
							Contact
						</li>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
							Support Portals
						</li>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
							List Of Charges
						</li>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-white text-md pb-2 font-thin hover:text-green cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-white font-thin">
					© 2022-2023 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-green font-semibold cursor-pointer">
						Nightpass DEV team{" "}
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;