import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <div className=" w-[80%] mx-auto">
          <p className=" w-[50%] text-6xl font-semibold text-gray-900 mx-auto text-center mt-12">
            Generate your next AI QR Code in seconds
          </p>
          <p className=" text-md text-gray-600 mx-auto text-center my-8">
            QRGPT makes it simple for you to generate cool looking AI QR codes
            in seconds, completely for free.
          </p>
          <div className=" flex justify-center mb-48">
            <Link href={"/barcode"}>
              <button className=" text-sm bg-slate-900 p-2 px-4 text-slate-100 rounded-lg mr-8">
                Create your Barcode
              </button>
            </Link>
            <Link href={"/qrcode"}>
              <button className=" text-sm bg-slate-900 p-2 px-4 text-slate-100 rounded-lg">
                Create your QR code
              </button>
            </Link>
          </div>
        </div>
        <hr />
        <div className=" w-[80%] mx-auto">
          <p className=" text-center text-4xl my-24 font-bold text-gray-900">
            QrGPT is Proudly Open Source
          </p>
          <p className=" text-center text-md my-8 text-gray-600">
            Our source code is available on GitHub.
          </p>
          <Link href={"/"}>
            <div className=" flex bg-slate-900 w-fit p-2 px-4 rounded-lg mx-auto cursor-pointer items-center mb-12">
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-200 group-hover:fill-slate-700"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path>
              </svg>
              <p className=" text-sm text-slate-100 ml-4">Star on Github</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
