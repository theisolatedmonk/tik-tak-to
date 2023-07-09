import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { CgShapeCircle } from "react-icons/cg";
import clsx from "clsx";
const inter = Inter({ subsets: ["latin"] });
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Home() {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  const initialValues = [
    { value: "", disabled: false },
    { value: "", disabled: false },
    { value: "", disabled: false },
    { value: "", disabled: false },
    { value: "", disabled: false },
    { value: "", disabled: false },
    { value: "", disabled: false },
    { value: "", disabled: false },
    { value: "", disabled: false },
  ];
  const [values, setValues] = useState(initialValues);
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [currentValue, setCurrentValue] = useState("X");
  const [winPlayer, setWinPlayer] = useState<string | null>(null);

  const isXTrue =
    (values[0].value === "X" &&
      values[1].value === "X" &&
      values[2].value === "X") ||
    (values[3].value === "X" &&
      values[4].value === "X" &&
      values[5].value === "X") ||
    (values[6].value === "X" &&
      values[7].value === "X" &&
      values[8].value === "X") ||
    (values[2].value === "X" &&
      values[4].value === "X" &&
      values[6].value === "X") ||
    (values[0].value === "X" &&
      values[4].value === "X" &&
      values[8].value === "X") ||
    (values[0].value === "X" &&
      values[3].value === "X" &&
      values[6].value === "X");

  const isOTrue =
    (values[0].value === "O" &&
      values[1].value === "O" &&
      values[2].value === "O") ||
    (values[3].value === "O" &&
      values[4].value === "O" &&
      values[5].value === "O") ||
    (values[6].value === "O" &&
      values[7].value === "O" &&
      values[8].value === "O") ||
    (values[2].value === "O" &&
      values[4].value === "O" &&
      values[6].value === "O") ||
    (values[0].value === "O" &&
      values[4].value === "O" &&
      values[8].value === "O");

  const isBoxFilled = values.every((value) => value.value != "");

  useEffect(() => {
    if (isXTrue) setWinPlayer(` Player "X" Win`);
    if (isOTrue) setWinPlayer(` Player "O" Win`);
    if (!isXTrue && !isOTrue && isBoxFilled) setWinPlayer(" Match Draw");
    // return () => {
    //   second
    // }
  }, [values]);

  const handleClick = (index: number) => {
    if (currentPlayer === "x") setCurrentPlayer("o");
    else if (currentPlayer === "o") setCurrentPlayer("x");

    // Create a copy of the values array
    const updatedValues = [...values];
    // Assign a new value at the specified index
    updatedValues[index].value = String(currentValue);
    updatedValues[index].disabled = true;
    // Update the state with the modified values
    setValues(updatedValues);
    setCurrentValue(currentValue === "X" ? "O" : "X");
  };

  const handleReset = () => {
    setValues(initialValues);
    setCurrentPlayer("x");
  };

  return (
    <main
      ref={parent}
      className=" flex flex-col justify-center bg-white h-screen w-full items-center gap-2"
    >
      <p
        className="w-52 h-10
 text-lime-950 text-3xl font-bold font-serif rounded-lg  text-center items-center"
      >
        Tik-Tak-To
      </p>
      <div className="grid grid-cols-3 justify-center w-96 bg-blue-100 h-96 items-center gap-2 p-4 rounded-xl shadow-2xl">
        {values.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            disabled={item.disabled}
            className={clsx(
              "h-28 w-full rounded-lg text-2xl font-bold bg-white focus:bg-slate-400 focus:outline shadow-lg",
              { "!text-blue-800": item.value == "X" }
            )}
          >
            {item.value}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2  rounded-md p-2 w-40 gap-4  gap h-14 items-center ">
        <p
          className={clsx(
            "  h-10 rounded-xl flex items-center justify-center",
            currentPlayer == "x" ? "bg-green-400" : "bg-white"
          )}
        >
          <ImCross />
        </p>
        <p
          className={clsx(
            "  h-10 rounded-xl flex items-center justify-center ",
            currentPlayer == "o" ? "bg-green-400" : "bg-white"
          )}
        >
          <CgShapeCircle className="h-8 w-8" />
        </p>
      </div>

      <button
        onClick={() => handleReset()}
        className="w-52 h-12
bg-lime-950 text-white font-bold font-serif rounded-lg   focus:outline focus:outline-white focus:order-2 focus:bg-gray-400 "
      >
        Reset
      </button>
      {/* <div className="bg-green-500">{()}</div> */}

      {/*  */}
      {winPlayer && (
        <div className="h-screen  w-full bg-black/90 fixed flex items-center justify-center text-white  ">
          <button
            className="font-bold border px-4 border-black absolute top-20 right-20"
            onClick={() => {
              setWinPlayer(null), handleReset(), setCurrentPlayer("x");
            }}
          >
            Close
          </button>
          <p className="text-5xl  font-bold"> {winPlayer} </p>
        </div>
      )}
    </main>
  );
}
