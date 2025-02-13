"use client";
import { cousine, gabarito } from "@/public/font";
import projectsData from "@/lib/projects.json";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface dataType {
  name: string;
  description: string;
  deployed: string;
  tech: string[];
}

export default function HomeProjects() {
  const router = useRouter();
  return (
    <div id="projects">
      <p
        className={`${gabarito.className} text-2xl text-black dark:text-white`}
      >
        Projects
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2   gap-6">
        {projectsData.map((e: dataType, i: number) => {
          return (
            <div
              key={i}
              className="p-4 rounded-md border hover:border-blue-200 dark:border-neutral-900 cursor-pointer dark:hover:border-neutral-800 dark:hover:shadow-sm dark:hover:shadow-fuchsia-950 duration-300 flex flex-col gap-6 group"
            >
              <div>
                <p
                  className={`${gabarito.className} text-xl font-bold font-bold text-black dark:text-white`}
                >
                  {e.name}
                </p>

                <p
                  className={`${cousine.className} text-gray-400 text-sm mt-2`}
                >
                  {e.description}
                </p>
              </div>

              <Link
                href={`https://${e.deployed}`}
                className={`${cousine.className} text-sm text-gray-400 flex gap-2 items-center group-hover:text-blue-500`}
                target="_blank"
              >
                <p>{e.deployed}</p>

                <BsArrowUpRight />
              </Link>

              <div className="flex gap-2 flex-wrap">
                {e.tech.map((e: string, i: number) => {
                  return (
                    <p
                      key={i}
                      className="border dark:border-neutral-800 rounded-lg p-2 w-fit text-gray-400 text-xs bg-slate-200 dark:bg-transparent"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
