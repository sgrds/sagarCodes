import Card from "@/components/card";
import { Spacer } from "@/components/spacer";
import Image from "next/image";
import Link from "next/link";
// import { SiDiscord } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto">
        <div className="hero my-32">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold">
                {`Get in touch with us and let's start a conversation! 💌`}
              </h1>
              <p className="py-4 text-xl mt-4">
                {`Whether you have a question, suggestion, or just want to say Hi, we're always here
                to chat. You can get in touch with us through the following
                methods. We'll get back to you ASAP – promise!`}
              </p>
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
          link=""
        />
        <Card
          image="/telegram-logo.jpg"
          title="Hey there! How about taking our conversation to the next level and connecting on Telegram?"
          button="Let's Chat"
          link=""
        />
        <Card
          image="/discord.jpg"
          title="Meet like minded people facing similar challenges."
          button="JOIN DISCORD"
          link=""
        />
      </section>
      <Spacer size="sm" />
    </>
  );
};

export default Contact;
