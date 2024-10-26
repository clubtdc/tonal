import React from "react";
import NavBar from "@/components/NavBar";

export default function Home() {
  return <>
    <div className="bg-zinc-800">
      <NavBar />
      <div className="h-[200vh] px-36 w-full">
        <main>
          This is a home page!
        </main>
      </div>
    </div>
  </>
}
