import { FC } from 'react'

interface ReviewsProps {
  
}

const Reviews: FC<ReviewsProps> = ({}) => {
  return <div className="bg-[#FFF7E2] my-[6rem]">
  <div className="flex flex-col justify-center items-center gap-4 ">
    <div className="flex flex-col justify-center items-center gap-1 relative z-0">
      <h2 className="text-[#3A643B] font-bold text-[3rem]">
        Stories from our valued customers!
      </h2>
      <div className="w-full border-[2px] border-[#C3D0C4] absolute -z-[10] bottom-3"></div>
    </div>

  </div>
  <div className="mt-[2rem] w-[80%] mx-auto flex flex-col lg:flex-row  justify-center items-center gap-6">
    
  </div>
</div>
}

export default Reviews