import Head from "next/head";
import Image from "next/image";
import BlogCards from "../components/BlogCards";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Herosection from "../components/Herosection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - W.E. Lyons Construction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Herosection />
        <Features />
        <BlogCards />
        <CTA />
      </main>
    </div>
  );
}
