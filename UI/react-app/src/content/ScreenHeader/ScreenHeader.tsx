
import "./ScreenHeader.scss";

import { ScreenHeaderProps } from "../../healpers/props.interface";



export const ScreenHeader: React.FC<ScreenHeaderProps> = (props: ScreenHeaderProps) => {
  return (
    <div className=" text-whiteTheme-text dark:text-darkTheme-text flex flex-col items-center  py-[30px]">
      <div className="w-fit flex flex-col items-center ">
        <div className="text-4xl px-6">
          <span>{props.title}</span>
        </div>
        {props.subHeading ? (
          <div className="text-wheat mt-[8px] mb-[10px] text-xl tracking-[4px] color-[wheat] px-6">
            <div className="">{props.subHeading}</div>
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex items-center relative mt-[10px] w-full">
          <div className="w-full h-[2px] bg-orange"></div>
          <div className="h-[4px] w-full absolute flex justify-center rounded-md ">
            <div className="w-[50%] max-w-[50px] bg-orange-light rounded-md "></div>
          </div>
        </div>
      </div>
    </div>
  );
}