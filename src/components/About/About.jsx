import about from "../../assets/about.jpg";

function About() {
  return (
    <div className="flex mt-[143px] ml-[135px] mr-0">
      <div className="flex flex-col flex-1 p-4">
        <h2 className="font-bold text-4xl">Our Story</h2>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias
          laudantium obcaecati tenetur ab rem quasi mollitia ipsa, dolor fugiat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolores
          fugiat suscipit consequatur ab ex quibusdam aliquam et rerum facilis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          facere est sit beatae deleniti in, veniam nemo soluta reprehenderit
          tenetur asperiores velit cum fugiat natus doloremque quos, ipsum,
          expedita suscipit pra delectus quo et corporis molestias voluptate
          tenetur explicabo?
        </p>
        <p className="pt-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias
          laudantiuenetur explicabo?
        </p>
      </div>
      <div className=" flex-1 w-[600px] h-[300px]">
        <img
          src={about}
          alt="About Banner"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default About;
