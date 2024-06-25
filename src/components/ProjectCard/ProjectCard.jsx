import { Link } from "react-router-dom";

export const ProjectCard = ({ title, desc, image }) => {
  return (
    <>
      <li className="flex flex-col justify-between max-w-[350px] w-full border border-2 border-white rounded-lg bg-black bg-opacity-80  ">
        <img className="mb25px rounded-t-lg h-[160px]" src={image} width={350} height={400} alt={""} />
        <div className="flex flex-col gap-3 p-5">
          <h3 className="text-2xl text-teal-400">{title}</h3>
          <p className="text-white">{desc}</p>
        </div>
        <div className="p-5">
        <Link className="block max-w-[100px] text-white p-4 pt-2 border border-1 rounded-lg text-center">
          GitHub
          </Link>
        </div>
      </li>
    </>
  );
};
