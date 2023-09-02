import Link from "next/link";
import React from "react";
// import { Spacer } from "@/components/spacer";
import {
  BsGithub,
  BsYoutube,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="divider"></div>
      {/* <Spacer size="xs" /> */}

      <footer className="grid mx-auto min-h-screen items-center max-w-screen-xl px-4">
        <div className="text-xl footer p-10 text-base-content">
          <div>
            <Link href="/" className="text-4xl text-white mb-2">
              SagarCodes
            </Link>
            <p className="text-2xl py-4">
              Full time Freelancer
              <br /> empowering bussiness.
            </p>
            <div className="grid grid-flow-col gap-5">
              <a
                href="https://github.com/sgrds"
                target="_blank"
                className="text-3xl text-white hover:text-base-content"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.youtube.com/channel/UC6fVngPhZP6PD6uIwgSMvBQ"
                target="_blank"
                className="text-3xl text-white hover:text-base-content"
              >
                <BsYoutube />
              </a>
              {/* <a
                href="https://twitter.com/sagardasdev"
                target="_blank"
                className="text-3xl text-white hover:text-base-content"
              >
                <BsTwitter />
              </a> */}
              <a
                href="https://www.instagram.com/sagar_codes/"
                target="_blank"
                className="text-3xl text-white hover:text-base-content"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/sagar-das-web-developer/"
                target="_blank"
                className="text-3xl text-white hover:text-base-content"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <Link href="/service#Content" className="link link-hover">
              Content
            </Link>
            <Link href="/service#Design" className="link link-hover">
              Design
            </Link>
            <Link href="/service#Development" className="link link-hover">
              Development
            </Link>
            <Link href="/clients" className="link link-hover">
              Clients
            </Link>
          </div>
          <div>
            <span className="footer-title">SagarCodes</span>
            <Link href="/about" className="link link-hover">
              About us
            </Link>
            <Link href="/contact" className="link link-hover">
              Contact
            </Link>
            <Link href="/clients" className="link link-hover">
              Clients
            </Link>
            <Link href="/blog" className="link link-hover">
              Blogs
            </Link>
            <Link href="/service" className="link link-hover">
              Service
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/channel/UC6fVngPhZP6PD6uIwgSMvBQ"
              className="link link-hover"
            >
              YouTube
            </Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link href="/terms" className="link link-hover">
              Terms
            </Link>
            {/* <Link href="#" className="link link-hover">
              Privacy policy
            </Link> */}
          </div>
        </div>
        {/* <Spacer size="lg" /> */}
      </footer>
    </>
  );
};

export default Footer;
