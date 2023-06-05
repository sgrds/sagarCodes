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
                href="https://www.youtube.com/channel/UCbhAKZUKZliQrzx7chh2ZOg"
                target="_blank"
                className="text-3xl text-white hover:text-base-content"
              >
                <BsYoutube />
              </a>
              <a
                href="https://twitter.com/sagardasdev"
                target="_blank"
                className="text-3xl text-white hover:text-base-content"
              >
                <BsTwitter />
              </a>
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
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
        {/* <Spacer size="lg" /> */}
      </footer>
    </>
  );
};

export default Footer;
