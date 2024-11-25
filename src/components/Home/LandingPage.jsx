import img from "../../assets/homepage-banner.jpg";

function LandingPage() {
  return (
    <div className="md:flex md:justify-between md:pt-10 md:pr-[135px] md:pl-[135px]">
      <div>
        <ul className="grid grid-cols-3 gap-1 justify-items-center border-b- border-gray-200 p-5 md:border-black md:border-r-2 md:flex md:flex-col md:justify-between md:pt-10 md:pr-4 md:h-[344px]">
          <li className="hover:underline cursor-pointer">Lifestyle</li>
          <li className="hover:underline cursor-pointer">Toys</li>
          <li className="hover:underline cursor-pointer">Electronics</li>
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Medicine</li>
          <li className="hover:underline cursor-pointer">Sports</li>
          <li className="hover:underline cursor-pointer">Pets</li>
          <li className="hover:underline cursor-pointer">Groceries</li>
          <li className="hover:underline cursor-pointer">Health</li>
        </ul>
      </div>

      <div className="p-5 border-b-2 border-gray-200 md:w-[892px] md:h-[344px]">
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
