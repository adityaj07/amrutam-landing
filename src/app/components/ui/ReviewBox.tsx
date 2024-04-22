import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface ReviewBoxProps {
  review: {
    reviewType: string;
    reviewerImage: string;
    reviewerName: string;
    reviewerLocation: string;
    reviewDate: string;
    reviewStars: number;
    reviewHeadline: string;
    reviewContent: string;
  };
  className?: string;
}

const ReviewBox: FC<ReviewBoxProps> = ({ review, className }) => {
  const renderStars = (reviewStars: number) => {
    const stars = [];
    for (let i = 0; i < reviewStars; i++) {
      stars.push(
        <Star key={i} className="text-[#EEDE4D] w-5 h-5" fill="#EEDE4D" />
      );
    }
    return stars;
  };

  return (
    <div
      className={cn(
        "flex flex-col rounded-3xl drop-shadow-xl bg-white",
        className
      )}
    >
      <div className="bg-[#ECFEE7] flex justify-start items-center p-4 rounded-t-3xl font-bold">
        Consulted for {review.reviewType}
      </div>

      <div className="px-[1.5rem] pt-[1.5rem] pb-[3rem]">
        <div className="flex justify-between items-start pb-[20px]">
          <div className="flex justify-center items-center gap-4">
            <Image
              src={review.reviewerImage}
              width={50}
              height={50}
              alt={review.reviewerName}
              className="rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h4 className="font-bold">{review.reviewerName}</h4>
              <h5 className="text-[#414141]">{review.reviewerLocation}</h5>
            </div>
          </div>
          <h4>{review.reviewDate}</h4>
        </div>

        {/* Stars */}
        <div className="flex gap-1 my-2">{renderStars(review.reviewStars)}</div>

        <h3 className="font-bold my-[0.7rem] text-[1.275rem]">"{review.reviewHeadline}"</h3>
        <p className="text-[#555555] w-[70%]">{review.reviewContent}</p>
      </div>
    </div>
  );
};

export default ReviewBox;
