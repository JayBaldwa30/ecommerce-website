import gucci from "../../assets/arrival/gucci.png";
import woman from "../../assets/arrival/woman.png";
import play from "../../assets/arrival/play.png";
import speaker from "../../assets/arrival/speaker.png";

function NewArrival() {
  return (
    <>
      <div className="pt-5 border-b border-grayborder pb-5 md:pt-10 md:pr-[135px] md:pl-[135px]">
        <div>
          <div className="w-[20px] h-[40px] border-2 border-red-500 rounded-[4px] bg-red-500">
            <h4 className="pl-[36px] pt-[10px] pb-[10px] text-red-500 text-center font-bold">
              Featured
            </h4>
          </div>
          <h1 className="font-semibold text-4xl pb-14 pt-4">New Arrival</h1>
        </div>

        <div className="grid grid-cols-1 grid-rows-4 gap-5 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4 md:h-[570px] md:pb-10 md:w-full">
          <div className="bg-gray-300 relative md:col-span-2 md:row-span-2">
            <img
              src={play}
              alt="Image 1"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute bottom-0 flex flex-col gap-2 text-white p-8 w-full">
              <div>
                <h2 className="text-2xl font-bold">Play Station</h2>
                <p className="text-sm my-1 break-words">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime, error.
                </p>
                <a
                  href=""
                  className="text-white  border-gray-500 border-b-2 mt-4 inline-block  hover:text-gray-300"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-400 relative md:col-span-2">
            <img
              src={woman}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 flex flex-col text-white p-8 w-full">
              <div>
                <h2 className="text-2xl font-bold">Woman's Fashion</h2>
                <p className="text-sm my-1 break-words">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime, error.
                </p>
                <a
                  href=""
                  className="text-white border-gray-500 border-b-2 mt-4 inline-block hover:text-gray-300"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-400 relative md:col-span-1 md:row-span-1">
            <img
              src={speaker}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 flex flex-col gap-2 text-white p-8 w-full">
              <div>
                <h2 className="text-2xl font-bold">Speakers</h2>
                <p className="text-sm my-1 break-words">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime, error.
                </p>
                <a
                  href=""
                  className="text-white  border-gray-500 border-b-2 mt-4 inline-block hover:text-gray-300"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-600 relative md:col-span-1 md:row-span-1">
            <img
              src={gucci}
              alt="Image 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 flex flex-col gap-2 text-white p-8 w-full">
              <div>
                <h2 className="text-2xl font-bold">Perfume</h2>
                <p className="text-sm my-1 break-words">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime, error.
                </p>
                <a
                  href=""
                  className="text-white  border-gray-500 border-b-2 mt-4 inline-block hover:text-gray-300"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
