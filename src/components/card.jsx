import Image from "next/image";
import Link from "next/link";

const Card = ({
  image = "/wallpaper.jpg",
  title = "Title: 418 I'm a Teapot",
  button = "Click Here",
  link = "/404",
}) => {
  return (
    <div className="aspect-h-4 aspect-w-3 hover:ring-2  ring-offset-base-100 ring-offset-4 hover:ring-primary hover:duration-300 hover:ease-in rounded-lg shadow overflow-hidden">
      <div className="grid">
        <div className="aspect-h-9 aspect-w-16 overflow-hidden">
          <Image
            width={600}
            height={600}
            src={image}
            className="object-cover h-full"
            alt="image"
          />
        </div>
        <div className="p-5 text-center grid content-end">
          <h5 className="mb-2 text-2xl font-bold tracking-tight line-clamp-2">
            {title}
          </h5>
          <Link
            href={link}
            target="_blank"
            className="mt-4 btn btn-outline btn-warning btn-lg rounded-full"
          >
            {button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
