"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { images, meets } from "@/lib/gallery";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Astro Memories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <a
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="relative aspect-video overflow-hidden rounded-lg group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                sizes="100vw"
                fill
                className="object-contain transition-transform group-hover:scale-110 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-4 left-4 text-white font-semibold">
                  {image.alt}
                </p>
              </div>
            </a>
          ))}
        </div>
        <Separator className="my-8" />
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Meet and greet.
        </h2>
        <div className="flex items-center justify-center w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full aspect-video md:mx-20"
          >
            <CarouselContent>
              {meets.map((image, index) => (
                <CarouselItem key={index} className="relative aspect-video overflow-hidden rounded-lg group">
                  <a
                    href={image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      sizes="100vw"
                      fill
                      className="object-contain transition-transform group-hover:scale-110 duration-500"
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-gray-800 hidden md:flex" />
            <CarouselNext className="bg-gray-800 hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
