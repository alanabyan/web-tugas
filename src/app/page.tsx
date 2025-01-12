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
    }, 1000); // Update angka setiap detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
  }, []);

  return (
    <div className="text-white">
      {/* Header */}
      <div className="flex flex-wrap justify-center md:justify-between items-center py-4 px-4">
        <Image
          src={
            "https://files.sitestatic.net/ImageFile/20240405195151000000c6a4b73f9eCS2ABAQ__1024x200.webp"
          }
          className="max-w-[16.9rem] w-full"
          width={1000}
          height={1000}
          alt="tele-88"
        />
        <div className="flex gap-x-4 mt-4 md:mt-0">
          <button className="text-sm md:text-base text-slate-200 bg-gray-400 w-[4.9rem] rounded-[5px] py-1">
            LOGIN
          </button>
          <button className="text-sm md:text-base text-white bg-red-600 w-[4.9rem] rounded-[5px] py-1">
            DAFTAR
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div
        className="h-24 bg-blend-overlay flex flex-wrap justify-center gap-x-8 gap-y-4 py-4"
        style={{
          background: `
            radial-gradient(59.46% 64.36% at 50% 80.42%, hsla(0, 0%, 100%, 0.5) 0%, rgba(213, 212, 212, 0.5) 33.89%, rgba(0, 0, 0, 0.5) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.126038), rgba(0, 0, 0, 0.0001)),
            #8b6914
          `,
        }}
      >
        <div className="flex flex-col items-center">
          <Icon icon={"mdi:slot-machine"} width={40} height={40} />
          <p className="text-sm md:text-base">SLOTS</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"https://files.sitestatic.net/images/live_game_icon.gif?v=1"}
            width={40}
            height={40}
            alt="Live Games"
          />
          <p className="text-sm md:text-base">LIVE GAMES</p>
        </div>
        <div className="flex flex-col items-center">
          <Icon icon={"mdi:casino-chip"} width={40} height={40} />
          <p className="text-sm md:text-base">CASINO</p>
        </div>
        <div className="flex flex-col items-center">
          <Icon icon="icon-park-solid:poker" width="40" height="40" />
          <p className="text-sm md:text-base">POKER</p>
        </div>
        <div className="flex flex-col items-center">
          <Icon icon="game-icons:fishing" width="40" height="40" />
          <p className="text-sm md:text-base">FISHING</p>
        </div>
      </div>

      {/* Banner */}
      <div className="cursor-pointer mt-4">
        <Link href={"/spin"}>
          <Image
            src={
              "https://files.sitestatic.net/banners/65379729a0e1f_slot gacor.png"
            }
            className="w-full max-h-[400px] object-cover"
            width={1000}
            height={400}
            alt="Slot Gacor"
          />
        </Link>
      </div>

      {/* Jackpot */}
      <div className="flex justify-center py-6 relative">
        <Image
          src={
            "https://files.sitestatic.net/progressive_img/onix_desktop_jackpot-5.gif?v=3"
          }
          className="w-full max-w-[600px] h-auto"
          width={600}
          height={200}
          alt="Jackpot"
        />
        <h1 className="absolute text-xl sm:text-3xl md:text-5xl md:bottom-12 top-[32px] font-bold bg-gradient-to-l from-[#F3CE7D] to-[#D39643] inline-block text-transparent bg-clip-text">
          {`IDR ${jackpotValue.toLocaleString("id-ID")}`}
        </h1>
      </div>
    </div>
  );
}
