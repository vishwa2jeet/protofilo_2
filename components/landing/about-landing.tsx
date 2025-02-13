import { cousine, gabarito } from "@/public/font";
import Link from "next/link";
import { BiDownload, BiNotepad } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";

export default function AboutLanding() {
  return (
    <div className="flex flex-col gap-6" id="about">
      <div className="flex gap-4 align-center">
        <p
          className={` text-black dark:text-white text-2xl ${gabarito.className}`}
        >
          Hello , I&apos;m{" "}
          <span className="bg-gradient-to-r from-fuchsia-600 to-violet-700 text-transparent bg-clip-text">
            Vishwajeet singh !
          </span>{" "}
        </p>

        <p className="animate-wave">&#128075;</p>
      </div>
      <p className={`${cousine.className} text-sm text-gray-400`}>
        Frontend Developer specializing in React, Next.js, and modern UI
        libraries like Tailwind CSS and Chakra UI. Passionate about building
        responsive, high-performance web applications with a focus on clean
        design and great user experience.
      </p>

      <div className="flex gap-6">
        <Link
          href={"mailto:vishwak7301@gmail.com?subject=Work Enquiry"}
          className="flex gap-2  px-4 items-center bg-[#0879E7] dark:bg-[#0c1c32] text-white dark:text-[#0879E7]  p-2 w-fit text-sm rounded-md"
        >
          <FaBriefcase />
          <p>Open For Work</p>
          <BsArrowRight />
        </Link>
      </div>
    </div>
  );
}
