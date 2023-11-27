import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics/", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(" Fail to fetch topics 😭😭");
    }
    return res.json();
  } catch (error) {
    console.log("Error fetching topics", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        // eslint-disable-next-line react/jsx-key
        <div className=" p-4 border-slate-300 border gap-5 my-3 flex justify-between items-start">
          <div>
            <h2 className=" font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className=" flex gap-2 ">
            <RemoveBtn id={t._id}/>
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
