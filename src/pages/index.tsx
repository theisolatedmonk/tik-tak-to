import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { CgShapeCircle } from "react-icons/cg";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const initialValues = [
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ];
  const [containerState, setContainerState] = useState(initialValues);
  const [currentPlayer, setCurrentPlayer] = useState("x");

  function handleBoxClick() {
    if (currentPlayer === "x") setCurrentPlayer("o");
    else if (currentPlayer === "o") setCurrentPlayer("x");
  }

  return (
    <main className=" flex flex-col justify-center bg-white h-screen w-full items-center gap-2">
      <p
        className="w-52 h-10
 text-lime-950 text-3xl font-bold font-serif rounded-lg  text-center items-center"
      >
        Tik-Tak-To
      </p>
      <div className="grid grid-cols-3 justify-center w-96 bg-blue-100 h-96 items-center gap-2 p-4 rounded-xl shadow-2xl">
        {initialValues.map((link) => (
          <button
            onClick={handleBoxClick}
            className="h-28 w-full rounded-lg bg-white focus:bg-slate-400 focus:outline shadow-lg"
          >
            {" "}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2  rounded-md p-2 w-40 gap-4  gap h-14 items-center ">
        <p
          className={clsx(
            "  h-10 rounded-xl flex items-center justify-center",
            currentPlayer === "x" ? "bg-gray-400" : "bg-white"
          )}
        >
          <ImCross />
        </p>
        <p
          className={clsx(
            "  h-10 rounded-xl flex items-center justify-center ",
            currentPlayer === "o" ? "bg-gray-400" : "bg-white"
          )}
        >
          <CgShapeCircle className="h-8 w-8" />
        </p>
      </div>

      <button
        className="w-52 h-12
bg-lime-950 text-white font-bold font-serif rounded-lg   focus:outline focus:outline-white focus:order-2 focus:bg-gray-400 "
      >
        Reset
      </button>
    </main>
  );
}
