import { cousine, gabarito } from "@/public/font";
import projects from "@/lib/projects.json";

import Link from "next/link";

import { BsArrowUpRight } from "react-icons/bs";
import Footer from "@/components/landing/footer";

export default function Projects() {
  return (
    <div className="mx-auto mt-12 text-black">
      <p
        className={`${gabarito.className} text-2xl text-black dark:text-white `}
      >
        Projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {projects.map((e, i) => {
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

              {e.deployed ? (
                <Link
                  href={`https://${e.deployed}`}
                  className={`${cousine.className} text-sm text-gray-400 flex gap-2 items-center group-hover:text-blue-500`}
                  target="_blank"
                >
                  <p>{e.deployed}</p>

                  <BsArrowUpRight />
                </Link>
              ) : (
                <p className="text-gray-400 dark:text-gray-400 text-sm">
                  Not Deployed
                </p>
              )}

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
      <Footer />
    </div>
  );
}
