import beauty from "../../assets/arrival/beauty.jpg";
import perfume from "../../assets/arrival/perfume.jpg";
import watch from "../../assets/arrival/watch.jpg";
import light from "../../assets/arrival/light.jpg";

function NewArrival() {
  return (
    <>
      <div className="pt-5 border-b-2 border-gray-200 pb-5 md:pt-10 md:pr-[135px] md:pl-[135px]">
        <div>
          <h4 className="border-l-8 border-red-600 p-3">Featured</h4>
          <h1 className="font-bold text-4xl pb-14 pt-4">New Arrival</h1>
        </div>

        <div className="grid grid-cols-1 grid-rows-4 gap-5 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4 md:h-[570px] md:pb-10 md:w-full">
          <div className="bg-gray-300 relative md:col-span-2 md:row-span-2">
            <img
              src={light}
              alt="Image 1"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute bottom-0 flex flex-col gap-2 justify-center text-white p-8">
              <h2 className="text-2xl font-bold">Lights</h2>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime, error.
              </p>
              <a href="" className="text-white hover:text-blue-700">
                Shop Now
              </a>
            </div>
          </div>

          <div className="bg-gray-400 relative md:col-span-2">
            <img
              src={beauty}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 flex flex-col text-white p-8">
              <h2 className="text-2xl font-bold">Cosmetics</h2>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime, error.
              </p>
              <a href="" className="text-white hover:text-blue-700">
                Shop Now
              </a>
            </div>
          </div>

          <div className="bg-gray-400 relative md:col-span-1 md:row-span-1">
            <img
              src={perfume}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 flex flex-col gap-2 text-white p-8">
              <h2 className="text-2xl font-bold">Perfumes</h2>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime, error.
              </p>
              <a href="" className="text-white hover:text-blue-700">
                Shop Now
              </a>
            </div>
          </div>

          <div className="bg-gray-600 relative md:col-span-1 md:row-span-1">
            <img
              src={watch}
              alt="Image 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 flex flex-col gap-2 text-white p-8">
              <h2 className="text-2xl font-bold">Watches</h2>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime, error.
              </p>
              <a href="" className="text-white hover:text-blue-700">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
