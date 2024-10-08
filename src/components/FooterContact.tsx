import fbSmallbg from "@/assets/vector/Icons/BG/fbsmall.png";
import igBg from "@/assets/vector/Icons/BG/ig.png";
import waBg from "@/assets/vector/Icons/BG/wt.png";
import fbIcon from "@/assets/vector/Icons/fb.svg";
import igIcon from "@/assets/vector/Icons/ig.svg";
import waIcon from "@/assets/vector/Icons/wa.svg";
import PaperPlane from "@/assets/vector/paper-plane.svg";
import SibaqLogo from "@/assets/static/sibaq-logo-with-colorful-bg.png";
import ContactUsLine from "@/assets/vector/line-for-contact-us.svg";

import Image from "next/image";
import Link from "next/link";

const FooterContact = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl font-medium tracking-tighter">Contact Us</h2>
      <Image
        src={ContactUsLine}
        alt="A Line as a part of style"
        className="scale-85 my-4"
      />
      <div className="mt-10 bg-opacity-30 rounded-[80px] shadow-logo-round p-12 flex items-center justify-center gap-12">
        <Image
          src={SibaqLogo}
          alt="Sibaq Logo with colourful background"
          width={420}
        />

        <div className="">
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-xl ml-4">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name Here"
              className="px-6 w-[35rem] py-4 -mt-2 text-2xl rounded-[2rem] placeholder:opacity-35 border focus:outline-none focus:ring-1 focus:ring-orange-200"
            />
            <label htmlFor="email" className="text-xl ml-4">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="px-6 w-[35rem] py-4 -mt-2 text-2xl rounded-[2rem] placeholder:opacity-35 border focus:outline-none focus:ring-1 focus:ring-orange-200"
            />
            <label htmlFor="message" className="text-xl ml-4">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Type Your Message"
              className="p-5 text-2xl h-32 -mt-2 rounded-[2rem] placeholder:opacity-35 border focus:outline-none focus:ring-2 focus:ring-orange-200 resize-none"
            ></textarea>
          </div>

          <div className="pl-2 mt-4 flex items-center justify-between text-xl ">
            <p>Contact via</p>
            <div className="flex justify-center gap-0.5 mt-1">
              <Link href="#">
                <div className="relative">
                  <Image
                    src={fbSmallbg}
                    alt="Facebook Background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                      src={fbIcon}
                      alt="Facebook Icon"
                      className="w-8 h-8 opacity-80 transition-transform duration-200 hover:scale-110 hover:opacity-100"
                    />
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="relative">
                  <Image
                    src={igBg}
                    alt="Instagram Background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                      src={igIcon}
                      alt="Instagram Icon"
                      className="w-8 h-8 opacity-80 transition-transform duration-200 hover:scale-110 hover:opacity-100"
                    />
                  </div>
                </div>
              </Link>
              <Link href="#" className="">
                <div className="relative">
                  <Image
                    src={waBg}
                    alt="Whatsapp Background"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center ">
                    <Image
                      src={waIcon}
                      alt="Whatsapp Icon"
                      className="w-8 h-8 opacity-80 transition-transform duration-200 hover:scale-110 hover:opacity-100"
                    />
                  </div>
                </div>
              </Link>
            </div>

            <button className="h-10 inline-flex items-center gap-2 bg-y text-black py-2 px-6 rounded-2xl bg-opacity-10 hover:bg-opacity-30 transition-colors">
              <Image src={PaperPlane} alt="Send icon" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
