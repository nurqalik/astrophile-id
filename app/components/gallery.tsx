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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4500 }}
            className="w-full flex items-center justify-center"
          >
            {meets.map((image, index) => (
                <SwiperSlide key={index} className="relative aspect-square md:aspect-videonp overflow-hidden rounded-lg group">
                  <a
                    href={image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      sizes="100vw"
                      fill
                      className="object-contain transition-transform group-hover:scale-110 duration-500"
                    />
                  </a>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
