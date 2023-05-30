import Image from "next/image";
import { SiDiscord } from "react-icons/si";

const DiscordSection = () => {
  return (
    <div className="hero bg-base-200">
      <div className="grid items-center gap-8 grid-cols-2 max-w-screen-xl">
        <div>
          <div className="flex text-5xl font-bold text-white">
            <SiDiscord className="mr-2" />
            Discord
          </div>
          <p className="text-5xl text-white mt-16">
            Meet like minded people facing similar challenges.
          </p>
          <p className="text-5xl my-8">Join our server now.</p>
          <button className="mt-4 btn btn-outline btn-warning btn-lg rounded-full">
            Join Discord
          </button>
        </div>
        <div className="aspect-h-6 aspect-w-5 rounded-lg overflow-hidden">
          <Image
            width={500}
            height={1500}
            src="/noticeBoard.jpg"
            className="object-cover"
            alt="HeroImage"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscordSection;
