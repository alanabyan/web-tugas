"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [jackpotValue, setJackpotValue] = useState<number>(0);

  useEffect(() => {
    const min = 3200000000; // Minimal nilai jackpot
    const max = 3400000000; // Maksimal nilai jackpot

    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setJackpotValue(randomNumber);
    }, 1000); // Update angka setiap 500ms

    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
  }, []);
  return (
    <div className="text-white">
      <div className="flex justify-between items-center py-4 ">
        <Image
          src={
            "https://files.sitestatic.net/ImageFile/20240405195151000000c6a4b73f9eCS2ABAQ__1024x200.webp"
          }
          className="max-w-[16.9rem] w-full"
          width={1000}
          height={1000}
          alt="tele-88"
        />
        <div className="flex gap-x-6 px-2">
          <button className="text-slate-200 bg-gray-400 w-[4.9rem] rounded-[5px] py-1">
            LOGIN
          </button>
          <button className="text-white bg-red-600 w-[4.9rem] rounded-[5px] py-1">
            DAFTAR
          </button>
        </div>
      </div>
      <div
        className="h-24 bg-blend-overlay flex items-center justify-center gap-x-12"
        style={{
          background: `
      radial-gradient(59.46% 64.36% at 50% 80.42%, hsla(0, 0%, 100%, 0.5) 0%, rgba(213, 212, 212, 0.5) 33.89%, rgba(0, 0, 0, 0.5) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.126038), rgba(0, 0, 0, 0.0001)),
      #8b6914
    `,
        }}
      >
        <div className=" flex flex-col items-center">
          <Icon icon={"mdi:slot-machine"} width={50} height={50} />
          <p>SLOTS</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"https://files.sitestatic.net/images/live_game_icon.gif?v=1"}
            width={50}
            height={50}
            alt=""
          />
          <p>LIVE GAMES</p>
        </div>
        <div className="">
          <Icon icon={"mdi:casino-chip"} width={50} height={50} />
        </div>
        <div className="">
          <Icon icon="icon-park-solid:poker" width="50" height="50" />
        </div>
        <div className="">
          <Icon icon="game-icons:fishing" width="70" height="70" />
        </div>
      </div>
      <div
        className=" cursor-pointer 
      "
      >
        <Link href={"/spin"}>
          <Image
            src={
              "https://files.sitestatic.net/banners/65379729a0e1f_slot gacor.png"
            }
            className="w-screen h-[40%]"
            width={1000}
            height={1000}
            alt=""
          />
        </Link>
      </div>
      <div className="flex justify-center py-4 relative">
        <Image
          src={
            "https://files.sitestatic.net/progressive_img/onix_desktop_jackpot-5.gif?v=3"
          }
          width={1000}
          height={1000}
          alt=""
        />
        <h1 className="absolute text-2xl md:text-5xl bottom-[22px] md:bottom-12 font-bold bg-gradient-to-l from-[#F3CE7D] to-[#D39643] inline-block text-transparent bg-clip-text ">{`IDR ${jackpotValue.toLocaleString(
          "id-ID"
        )}`}</h1>
      </div>
    </div>
  );
}
