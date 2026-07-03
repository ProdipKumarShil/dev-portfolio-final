import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <div className="flex justify-center rounded-xl bg-black p-8 text-white"></div>
        <h1 className="text-4xl font-bold text-center text-poke bg-chudling-pong dark:text-white">Welcome to My Portfolio</h1>
        <Button variant={"outline"}>Button</Button>
      </main>
    </div>
  );
}
