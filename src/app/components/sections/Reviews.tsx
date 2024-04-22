"use client";

import { FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { reviews } from "@/data";
import ReviewBox from "../ui/ReviewBox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Reviews: FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="bg-[#FFF7E2] my-[6rem] py-[4rem]">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <div className="flex flex-col justify-center items-center gap-1 relative z-0 w-[80%] md:w-fit text-center">
          <h2 className="text-[#3A643B] font-bold text-[2rem] md:text-[3rem] ">
            Stories from our valued customers!
          </h2>
          <div className="w-full border-[2px] border-[#C3D0C4] absolute -z-[10] bottom-3"></div>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-[95%] md:w-[80%] lg:w-[70%] relative mx-auto my-[4rem] p-[1rem]"
      >
        <CarouselContent className="-ml-1 mr-2 mb-6">
          {reviews.map((review) => (
            <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
              <ReviewBox key={review.reviewerName} review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Reviews;
