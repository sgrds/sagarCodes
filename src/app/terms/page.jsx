import { Spacer } from "@/components/spacer";
import React from "react";

export const metadata = {
  title: "Terms - SagarCodes",
  description:
    "We're a small team that works hard to create successful digital projects, develop creative digital products, and help your business grow.",
};

const Terms = () => {
  return (
    <section className="prose md:prose-lg dark:prose-invert mx-auto w-full max-w-3xl">
      <Spacer size="3xs" />
      <h1 className="text-center font-bold text-5xl md:text-7xl">{`{Terms}`}</h1>
      <h2>Who we are</h2>
      <p>
        SagarCodes and this is our only website address:
        <br />
        https://www.sagarcodes.com/
      </p>
      <h2>Data</h2>
      <p>{`When visitors leave comments or have a voice call or video call or share any files  with us, we collect the data.`}</p>
      <h2>Who we share your data with</h2>
      <p>{`We don't share your data with anyone. Our web application is hosted on Vercel's infrastructure, but we do not collect IP addresses, and any information you give us stays within our organization. It's important to know that we do not store information from social media platforms in our database. If you share anything on social media, please remember that we are not responsible for any leaks from those platforms. Make sure to read and understand the privacy policies of social media platforms.`}</p>
      <h2>How long we retain your data</h2>
      <p>
        If you leave a comment, the comment and its metadata are retained
        indefinitely. This is so we can recognize and approve any follow-up
        comments automatically instead of holding them in a moderation queue.
      </p>
      <h2>What rights you have over your data</h2>
      <p>
        If you have left contact data, you can request to receive an exported
        file of the personal data we hold about you, including any data you have
        provided to us. You can also request that we erase any personal data we
        hold about you. This does not include any data we are obliged to keep
        for administrative, legal, or security purposes.
      </p>
      <h2>Where your data is sent</h2>
      <p>Your data is being send to AWS platform databases.</p>
      <Spacer size="base" />
    </section>
  );
};

export default Terms;
