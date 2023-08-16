import "./globals.css";
import { Inter } from "next/font/google";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhoneAlt,
  FaPinterest,
  FaReddit,
  FaSnapchat,
  FaTelegram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blognology",
  description: "Published Mahmudul Hasan Bhuia",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between max-w-6xl mx-auto mt-5 text-yellow-500">
          <h2 className="text-5xl font-bold font-mono">Blognology</h2>
          <div>
            <nav>
              <ul className="flex gap-8">
                <li className="font-bold">
                  <button>Home</button>
                </li>
                <li className="font-bold">
                  <button>Blogger</button>
                </li>
                <li className="font-bold">
                  <button>Login</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-3">
          <h1 className=" font-mono font-bold text-6xl text-center pt-7">
            Blog <span className="text-8xl text-yellow-500">+</span> Technology{" "}
            <span className="text-8xl text-yellow-500">=</span> Blognology
          </h1>
          <div className="text-center mt-14 pb-10">
            <button className="mr-6 w-44 h-10 text-white font-bold hover:bg-yellow-600 bg-yellow-500">
              READ NOW
            </button>
            <button className="border w-44 h-10">READ LATER</button>
          </div>
        </div>
        {children}
        <div>
          <iframe src="https://lottie.host/?file=cf0e7d86-7202-48b5-84e8-c91025185bc4/GbaOpzs6UP.json"></iframe>
        </div>

        <footer className="mx-4 p-5 mt-8 border-x-transparent border-t-[#FFFF00] border-4">
          <div className="container flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
              <div className="flex flex-col">
                <p className="text-lg font-bold mb-3">Location</p>
                <p className="text-base mb-2">
                  Ikra Villa, Monir Chemical Road
                </p>
                <p className="text-base mb-2">Opposite of DUET Campus</p>
                <p className="text-base mb-2">Gazipur Sadar, Gazipur</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
              <div className="flex flex-col">
                <p className="text-lg font-bold mb-3">Contact Us</p>
                <a
                  href="mailto:info@kitchensecret.com"
                  className="text-base  mb-2"
                >
                  <FaMailBulk className="inline-block mr-1" />{" "}
                  mahmudul.bhuia@gmail.com
                </a>

                <a href="tel:+1-123-456-7890" className="text-base ">
                  <FaPhoneAlt className="inline-block mr-1" /> +880-1819831933
                </a>
                <a href="tel:+1-123-456-7890" className="text-base  mb-2">
                  <FaPhoneAlt className="inline-block mr-1" /> +880-1946280853
                </a>
              </div>
            </div>

            <div className="w-full flex justify-start md:w-1/2 lg:w-1/4">
              <div className="flex flex-col">
                <div className="mb-3">
                  <h1>Blognology</h1>
                </div>
                <div className="flex justify-start">
                  <a href="https://bhuiamh.netlify.app/" className="me-3">
                    <FaTwitter />
                  </a>
                  <a href="https://bhuiamh.netlify.app/" className="me-3">
                    <FaLinkedin />
                  </a>
                  <a href="https://bhuiamh.netlify.app/" className="me-3">
                    <FaFacebook />
                  </a>
                  <a href="https://bhuiamh.netlify.app/" className="me-3">
                    <FaInstagram />
                  </a>
                  <a href="https://bhuiamh.netlify.app/" className="me-3">
                    <FaYoutube />
                  </a>
                  <a href="https://bhuiamh.netlify.app/" className="me-3">
                    <FaTelegram />
                  </a>
                  <a href="https://bhuiamh.netlify.app/" className="me-3">
                    <FaPinterest />
                  </a>
                  <a href="https://bhuiamh.netlify.app/" className="me-3">
                    <FaSnapchat />
                  </a>
                  <a href="https://bhuiamh.netlify.app/" className="me-3">
                    <FaReddit />
                  </a>
                  <a href="https://bhuiamh.netlify.app/" className="">
                    <FaTiktok />
                  </a>
                </div>
                <div className="flex justify-end mt-4">
                  <p className="text-base mb-0">
                    © 2023 TuneTutors Inc. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};
export default RootLayout;
