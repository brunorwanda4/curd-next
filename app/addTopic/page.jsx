"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description , setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!title || !description) {
        alert("Title and description are required . 😔😔");
        return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics",{
        method : "POST",
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify({title , description}),
      });

      if(res.ok) {
        router.push('/');
      }else{
        throw new Error("Failed to to create topic")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className=" flex flex-col gap-3">
      <input
        className=" border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        className=" border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button type="submit" className=" bg-green-600 rounded-md font-bold text-white py-3 w-fit px-6">
        Add Topic
      </button>
    </form>
  );
}
