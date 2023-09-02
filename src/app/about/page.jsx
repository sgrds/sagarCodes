import { ClientMarquee } from "../service/page";
import { Spacer } from "@/components/spacer";
import { BookCall } from "../contact/page";
import { MdOutlineDoubleArrow, MdOutlineSimCardDownload } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About - SagarCodes",
  description:
    "We're a small team that works hard to create successful digital projects, develop creative digital products, and help your business grow.",
};

const page = () => {
  return (
    <>
      <Spacer size="sm" />
      <section className="mx-auto max-w-screen-xl px-4 grid gap-8 lg:grid-cols-2 ">
        <div>
          <h1 className="pt-4 text-6xl md:text-8xl font-bold max-w-2xl">
            We are the creators of Digital Products
          </h1>
          <Link target="_blank" href="https://calendly.com/sagarcodes/30min">
            <button className="block mt-11 btn btn-active btn-primary btn-lg rounded-full">
              Book a Call
            </button>
          </Link>
          <button className="mt-4 btn btn-outline btn-warning btn-lg rounded-full">
            Check our Services
          </button>
        </div>

        <Image
          width={945}
          height={945}
          src="/heroAbout1.png"
          alt="hero Image"
        />
      </section>
      <Spacer size="lg" />
      <section>
        <ClientMarquee />
      </section>
      <Spacer size="lg" />
      {/* about us & values that we provide  */}
      <section className="mx-auto max-w-screen-xl px-4">
        <h1 className="text-center text-4xl font-bold lg:text-6xl text-primary">
          Values
        </h1>
        <Spacer size="sm" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 ">
          <div className="text-8xl md:text-9xl grid items-center justify-center">
            <h4 className="text-center">✨</h4>
            <div className="mt-4 text-2xl">
              <span>
                <MdOutlineDoubleArrow className="inline-block" />
              </span>
              <span>TRANSPARENCY</span>
            </div>
          </div>
          <div className="grid items-center text-8xl md:text-9xl justify-center">
            <h4 className="text-center">🎯</h4>
            <div className="mt-4 text-2xl">
              <MdOutlineDoubleArrow className="inline-block" />
              <span>ACHIVEING GOALS</span>
            </div>
          </div>
          <div className="grid items-center justify-center text-8xl md:text-9xl">
            <h4 className="text-center">💪</h4>
            <div className="mt-4 text-2xl">
              <MdOutlineDoubleArrow className="inline-block" />
              <span>RESPONSIBILITY</span>
            </div>
          </div>
          <div className="grid items-center justify-center text-8xl md:text-9xl">
            <h4 className="text-center">🕜</h4>
            <div className="mt-4 text-2xl">
              <MdOutlineDoubleArrow className="inline-block" />
              <span>PUNCTUAL</span>
            </div>
          </div>
          <div className="grid items-center justify-center text-8xl md:text-9xl">
            <h4 className="text-center">💥</h4>
            <div className="mt-4 text-2xl">
              <MdOutlineDoubleArrow className="inline-block" />
              <span>IMPACT</span>
            </div>
          </div>
          <div className="grid items-center justify-center text-8xl md:text-9xl">
            <h4 className="text-center">🤝</h4>
            <div className="mt-4 text-2xl">
              <MdOutlineDoubleArrow className="inline-block" />
              <span>PARTNERSHIP</span>
            </div>
          </div>
          {/* <div className="grid items-center justify-center text-8xl md:text-9xl">
            <div className="mt-4 text-2xl">
              <MdOutlineDoubleArrow className="inline-block" />
              <span></span>
            </div>
          </div>
          <div className="grid items-center justify-center text-8xl md:text-9xl">
            <div className="mt-4 text-2xl">
              <MdOutlineDoubleArrow className="inline-block" />
              <span></span>
            </div>
          </div> */}
        </div>
      </section>
      <Spacer size="lg" />

      {/* random image section  */}
      {/* <Spacer size="lg" />

      <section></section> */}

      <section>
        <BookCall />
      </section>
      <Spacer size="base" />
    </>
  );
};

export default page;
