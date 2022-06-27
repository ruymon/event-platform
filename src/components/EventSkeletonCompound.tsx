import { IgniteIcon } from "./IgniteIcon";

export function EventSkeletonCompound() {
  return (      
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video flex items-center justify-center">
          <span className="animate-pulse">
            <IgniteIcon />
          </span>
        </div>
      </div>

      <div className="p-7 max-w-[1100px] mx-auto md:p-8 animate-pulse">
        <div className="flex flex-col items-start gap-6 md:gap-16 md:flex-row">
          <div className="flex-1 w-full">
            <div className="w-[80%] h-6 bg-gray-700 rounded mb-4" />
            <div className="flex flex-1 w-full flex-col gap-2">
              <div className="w-full h-2 bg-gray-700 rounded-full" />
              <div className="w-[95%] h-2 bg-gray-700 rounded-full" />
              <div className="w-full h-2 bg-gray-700 rounded-full" />
              <div className="w-[90%] h-2 bg-gray-700 rounded-full" />
            </div>
            <div className="flex flex-1 items-center gap-4 mt-6">
              <div className="h-16 w-16 rounded-full bg-gray-700" />

              <div className="flex flex-col gap-2 w-full">
                <div className="w-[50%] h-4 rounded bg-gray-700" />
                <div className="w-[80%] h-2 rounded bg-gray-700" />
                <div className="w-[60%] h-2 rounded bg-gray-700" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 md:w-auto">
            <div className="p-8 w-full bg-gray-700 rounded md:w-[15rem]" />
            <div className="p-8 w-full bg-gray-700 rounded md:w-[15rem]" />
          </div>
        </div>

        <div className="gap-8 mt-16 grid md:grid-cols-2 md:mt-20">
          <div className="bg-gray-700 h-24 rounded overflow-hidden flex items-stretch gap-4 hover:bg-gray-600 transition-colors md:gap-6" />
          <div className="bg-gray-700 h-24 rounded overflow-hidden flex items-stretch gap-4 hover:bg-gray-600 transition-colors md:gap-6" />
        </div>
      </div>
    </div>
  );
}