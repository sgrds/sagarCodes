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
        <div className="aspect-h-4 aspect-w-3 hover:ring-2  ring-offset-base-100 ring-offset-4 hover:ring-primary hover:duration-300 hover:ease-in rounded-lg shadow overflow-hidden">
          <div className="grid">
            <a href="#">
              <Image
                width={600}
                height={400}
                src="/discord.jpg"
                className="object-cover"
                alt="image"
              />
            </a>
            <div className="p-5 text-center grid content-end">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                Meet like minded people facing similar challenges.
              </h5>
              <button className="mt-4 btn btn-outline btn-warning btn-lg rounded-full">
                Join Discord
              </button>
            </div>
          </div>
        </div>
        <div className="aspect-h-4 aspect-w-3 hover:ring-2  ring-offset-base-100 ring-offset-4 hover:ring-primary hover:duration-300 hover:ease-in rounded-lg shadow overflow-hidden">
          <div className="grid">
            <a href="#">
              <Image
                width={600}
                height={400}
                src="/discord.jpg"
                className="object-cover"
                alt="image"
              />
            </a>
            <div className="p-5 text-center grid content-end">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                Meet like minded people facing similar challenges.
              </h5>
              <button className="mt-4 btn btn-outline btn-warning btn-lg rounded-full">
                Join Discord
              </button>
            </div>
          </div>
        </div>
        <div className="aspect-h-4 aspect-w-3 hover:ring-2  ring-offset-base-100 ring-offset-4 hover:ring-primary hover:duration-300 hover:ease-in rounded-lg shadow overflow-hidden">
          <div className="grid">
            <a href="#">
              <Image
                width={600}
                height={400}
                src="/discord.jpg"
                className="object-cover"
                alt="image"
              />
            </a>
            <div className="p-5 text-center grid content-end">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                Meet like minded people facing similar challenges.
              </h5>
              <button className="mt-4 btn btn-outline btn-warning btn-lg rounded-full">
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
