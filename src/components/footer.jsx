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
        <div className="text-xl footer p-10 bg-base-200 text-base-content">
          <div>
            <h1 className="text-4xl text-white mb-2">SagarCodes</h1>
            <p className="text-2xl py-4">
              Full time Freelancer
              <br /> empowering bussiness.
            </p>
            <div className="grid grid-flow-col gap-5">
              <a className="text-3xl text-white hover:text-base-content">
                <BsGithub />
              </a>
              <a className="text-3xl text-white hover:text-base-content">
                <BsYoutube />
              </a>
              <a className="text-3xl text-white hover:text-base-content">
                <BsTwitter />
              </a>
              <a className="text-3xl text-white hover:text-base-content">
                <BsInstagram />
              </a>
              <a className="text-3xl text-white hover:text-base-content">
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
            <a className="link link-hover">Press kit</a>
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
