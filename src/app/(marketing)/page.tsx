import NavBar from "@/components/NavBar";
import React from "react";

export default function Home() {
  return <>
    <div className="bg-zinc-500">
      <NavBar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen px-36 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          This is a home page!
        </main>
      </div>
    </div>
  </>
}
