import Card from "@/components/card";
import DiscordSection from "@/components/sections/discordSection";
import { Spacer } from "@/components/spacer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact us - SagarCodes",
  description:
    "Get in touch, We're a small team that works hard to create successful digital projects, develop creative digital products, and help your business grow. Whether you have a question, suggestion, or just want to say Hi, we're always here to chat.",
  robots: "index, follow",
};
export const BookCall = () => {
  return (
    <section className="px-4 mx-auto max-w-screen-xl ">
      <div>
        <div className="bg-neutral rounded-md hover:ring-offset-4 hover:ring-offset-base-100 hover:ring-2 hover:ring-warning py-16 px-8 md:px-16 lg:px-32">
          <p className="text-secondary text-lg">Book a Call</p>

          <div className="mt-14 grid md:grid-cols-6 gap-16">
            <div className="col-span-1 md:col-span-4 grid content-between">
              <div>
                <h1 className="text-5xl mb-6">
                  {`Book a Free Discovery Call, and let's discuss your Project`}
                </h1>
              </div>
              <Link
                href="https://calendly.com/sagarcodes/30min"
                target="_blank"
                className="mt-4 btn btn-outline btn-success btn-lg rounded-full"
              >
                Book a Call
              </Link>
            </div>
            <div className="col-span-2 aspect-h-4 aspect-w-3 bg-red-200 rounded-lg overflow-hidden card">
              <Image
                width={600}
                height={600}
                src="/wallpaper.jpg"
                className="rounded-lg object-cover h-full"
                alt="HeroImage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <div className="hero my-32">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold">{`Get in touch 💌`}</h1>
              <p className="py-4 text-xl mt-4">
                {`Whether you have a question, suggestion, or just want to say Hi, we're always here
                to chat. You can get in touch with us through the following
                methods. We'll get back to you ASAP – promise!`}
              </p>
              <Spacer size="2xs" />
              <div className="mx-auto grid justify-center">
                <Link
                  target="_blank"
                  href="https://calendly.com/sagarcodes/30min"
                >
                  <button className="block btn btn-active btn-primary btn-lg rounded-full">
                    Book a Call
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact metods */}
      <section className="max-w-screen-xl mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense">
        <Card
          image="/gmail.jpg"
          title="Let's connect through email - We'll get back to you promptly."
          button="MAIL US"
          link="mailto:sagarcodebiz@gmail.com"
        />
        <Card
          image="/telegram-logo.jpg"
          title="Hey there! How about taking our conversation to the next level and connecting on Telegram?"
          button="Let's Chat"
          link="https://t.me/sagarcodes"
        />
        <Card
          image="/discord.jpg"
          title="Ready to chat and connect on Discord - Come say hello!"
          button="CHAT ON DISCORD"
          link="https://discordapp.com/users/1113083414518694019"
        />
      </section>
      <Spacer size="2xs" />

      <BookCall />
      {/* <Spacer size="xs" />
      <DiscordSection /> */}
      <Spacer size="lg" />
    </>
  );
};

export default Contact;
