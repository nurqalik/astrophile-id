"use client";
import { Button } from "@/components/ui/button";
import { FlipWords } from "./flip-words";
import { Vortex } from "./vortex";
import Image from "next/image";

export default function Hero() {
  const words = ["Friends", "Mate", "BFF", "Family"];
  return (
    <section className="py-24 max-w-7xl md:py-32 bg-[url('/space-bg.jpg')] bg-cover bg-center text-white overflow-hidden relative aspect-square">
      <Vortex
        backgroundColor="black"
        className="items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full flex"
      />
      <div className="flex items-center justify-center gap-4 flex-col mx-auto text-center absolute top-0 left-0 z-20 h-full w-full">
        <Image
          src="/logo1.jpg"
          className="rounded-full aspect-square w-40 md:w-60"
          alt="Astrophile Logo"
          width={400}
          height={400}
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Astrophile
        </h1>
        <div className="w-full items-center justify-center flex flex-col gap-2">
          <div className="text-xl md:text-2xl text-neutral-100">
            We&apos;re not just a club
          </div>
          <div>
            we&apos;re a <FlipWords className="text-2xl font-bold" words={words} />
          </div>
        </div>
        {/* <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors">Explore the Universe</Button> */}
      </div>
    </section>
  );
}
