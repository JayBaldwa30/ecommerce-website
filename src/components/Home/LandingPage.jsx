import img from "../../assets/landingBanner.png";

function LandingPage() {
  return (
    <div className="md:flex md:justify-between md:pr-[135px] md:pl-[135px] ">
      <div>
        <ul className="grid grid-cols-3 gap-1 justify-items-center border-r border-grayborder py-5  md:border-grayborder md:border-r md:flex md:flex-col md:justify-between md:pt-10 md:pr-4 md:h-[344px]">
          <div className="flex">
          <li className="hover:underline cursor-pointer  pr-[96px]">
            Lifestyle
          </li>
            <span className="font-bold">&gt;</span>
          </div>
          <li className="hover:underline cursor-pointer pr-[96px]">Toys</li>
          <li className="hover:underline cursor-pointer pr-[96px]">
            Electronics
          </li>
          <li className="hover:underline cursor-pointer pr-[96px]">Home</li>
          <li className="hover:underline cursor-pointer pr-[96px]">Medicine</li>
          <li className="hover:underline cursor-pointer pr-[96px]">Sports</li>
          <li className="hover:underline cursor-pointer pr-[96px]">Pets</li>
          <li className="hover:underline cursor-pointer pr-[96px]">
            Groceries
          </li>
          <li className="hover:underline cursor-pointer pr-[96px]">Health</li>
        </ul>
      </div>

      <div className=" px-[45px] md:w-[892px] md:h-[344px] pt-10">
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
