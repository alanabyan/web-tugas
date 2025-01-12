"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const SpinWheel = () => {
  const [nominal, setNominal] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isSpinAllowed, setIsSpinAllowed] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSpin = () => {
    if (nominal === null || nominal <= 0) {
      alert("Masukkan nominal yang valid!");
      return;
    }

    setIsSpinning(true);
    setIsSpinAllowed(false); // Tidak bisa spin lagi setelah diklik
    const spinResult = Math.floor(Math.random() * 8) + 1; // Random angka 1-8
    setTimeout(() => {
      setIsSpinning(false);
      setResult(spinResult);

      if (spinResult === 0) {
        setNominal(0);
      } else {
        setNominal(nominal * spinResult);
      }

      setShowModal(true); // Tampilkan modal setelah selesai spinning
    }, 5000); // Waktu animasi 5 detik
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setNominal(value);
    setIsSpinAllowed(value > 0); // Hanya bisa spin jika nominal lebih dari 0
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="mb-4">
        <label className="block mb-2 text-lg">Masukkan Nominal:</label>
        <input
          type="number"
          value={nominal || ""}
          onChange={handleInputChange}
          className="px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan nominal"
          disabled={isSpinning} // Disable input saat spinning
        />
      </div>

      <div className="container relative">
        <button
          className={`spinBtn ${
            !isSpinAllowed ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleSpin}
          disabled={!isSpinAllowed || isSpinning} // Disable jika tidak diizinkan atau sedang spinning
        >
          {isSpinning ? "Spinning..." : "Spin"}
        </button>
        <div
          className={`wheel ${isSpinning ? "animate-spin" : ""}`}
          style={{
            transform: isSpinning
              ? `rotate(${360 * 5 + (result || 0) * 45}deg)`
              : "none",
          }}
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} style={{ "--i": i } as React.CSSProperties}></span>
          ))}
          <div className="number">
            {[0, 0, 1, 0, 0, 8, 0, 0].map((num, i) => (
              <b key={i} style={{ "--i": i } as React.CSSProperties}>
                {num}
              </b>
            ))}
          </div>
        </div>
      </div>

      {/* Modal ShadCN */}
      <Dialog open={showModal} onOpenChange={closeModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {nominal === 0 ? "Nominal Anda Habis!" : "Selamat!"}
            </DialogTitle>
            <DialogDescription className="font-bold text-3xl">
              {nominal === 0
                ? "Nominal Anda menjadi 0."
                : `Anda mendapatkan ${result}x! Nominal baru Anda: ${nominal}`}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Tutup
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SpinWheel;
