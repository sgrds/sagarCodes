import Image from "next/image";
import Link from "next/link";
import { SiDiscord } from "react-icons/si";

const DiscordSection = () => {
  return (
    <div className="hero">
      <div className="p-2 text-center md:text-left justify-center grid items-center gap-8 lg:grid-cols-2 max-w-screen-xl">
        <div>
          <div className="justify-center md:justify-normal flex text-5xl font-bold text-white">
            <SiDiscord className="mr-2" />
            Discord
          </div>
          <p className="text-5xl text-white mt-16">
            Ready to chat and connect on Discord - Come say hello!
          </p>
          {/* <p className="text-5xl my-8">Join our server now.</p> */}
          <Link
            href="https://discordapp.com/users/1113083414518694019"
            target="_blank"
          >
            <button className="mt-16 btn btn-outline btn-warning btn-lg rounded-full">
              CHAT ON DISCORD
            </button>
          </Link>
        </div>
        <div className="grid items-center justify overflow-hidden">
          <Image
            width={600}
            height={600}
            src="/discord.png"
            // className="object-cover"
            alt="HeroImage"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscordSection;
