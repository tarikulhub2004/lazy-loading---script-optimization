import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center mt-10">
     <button className="border border-none bg-cyan-400 p-2 rounded-full"><a href="/dashboard">Dashboard</a></button>
    </div>
  );
}
