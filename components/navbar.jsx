import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" flex justify-between items-center bg-orange-500 px-8 py-3">
      <Link className=" text-white font-bold text-3xl" href={"/"}>Bruno Rwanda notes😉</Link>
      <Link className="bg-white rounded-md px-2 py-1 " href={"/addTopic"}>Add Topic</Link>
    </nav>
  );
}
