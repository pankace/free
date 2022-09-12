import React from "react";
import Link from "next/link";
function Header () {
  return (
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

    </div>
  </div>
  );
}

export default Header;