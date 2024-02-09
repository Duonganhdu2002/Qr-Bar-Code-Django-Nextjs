import Image from "next/image";
import Link from "next/link";
import React from "react";
import BoxIcon from "../asset/box.svg"

function Header() {
  return (
    <div>
      <div className=" w-[80%] h-20 mx-auto flex items-center text-gray-600">
        <div className="w-[60%] flex items-center">
          <Image
            src={BoxIcon}
            alt="img"
            width={40}
            height={40}
          />
          <h1 className=" ml-3 font-extrabold text-black text-lg">QrCODE</h1>
        </div>
        <div className="w-[10%]">
          <Link href={"/"}>
            <button className=" text-sm">Homepage</button>
          </Link>
        </div>
        <div className="w-[15%]">
          <Link href={"/barcode"}>
            <button className=" text-sm bg-slate-900 p-2 px-4 text-slate-100 rounded-lg">
              Create your Barcode
            </button>
          </Link>
        </div>
        <div className="w-[15%]">
          <Link href={"/qrcode"}>
            <button className=" text-sm bg-slate-900 p-2 px-4 text-slate-100 rounded-lg">
              Create your QR code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;