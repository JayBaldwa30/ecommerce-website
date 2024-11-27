import img from "../../assets/landingBanner.png";
import { ChevronRightIcon } from "@radix-ui/react-icons";

function LandingPage() {
  return (
    <div className="md:flex md:justify-between md:pr-[135px] md:pl-[135px] ">
      <ul className="grid grid-cols-3 gap-1 justify-items-center md:flex md:flex-col md:justify-between md:pt-10 md:pr-4 w-[10vw]">
        <li className="hover:underline cursor-pointer flex justify-between items-center">
          Lifestyle
          <ChevronRightIcon className="size-5" />
        </li>
        <li className="hover:underline cursor-pointer flex justify-between items-center">
          Toys
          <ChevronRightIcon className="size-5" />
        </li>
        <li className="hover:underline cursor-pointer">Electronics</li>
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Medicine</li>
        <li className="hover:underline cursor-pointer">Sports</li>
        <li className="hover:underline cursor-pointer">Pets</li>
        <li className="hover:underline cursor-pointer">Groceries</li>
        <li className="hover:underline cursor-pointer">Health</li>
      </ul>

      <div className="pt-10 pl-11 border-l border-grayborder ">
        <h2 className="text-center p-5 font-semibold text-xl md:hidden">
          Get the best products in the market!
        </h2>
        <img
          src={img}
          alt="Homepage Banner"
          className="md:w-full md:h-full md:object-contain"
        />
      </div>
    </div>
  );
}

export default LandingPage;
