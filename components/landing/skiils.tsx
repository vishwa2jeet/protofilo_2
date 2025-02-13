import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { gabarito } from "@/public/font";

import {
  SiJavascript,
  SiReact,
  SiGit,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiGithub,
  SiBootstrap,
  SiPassport,
  SiNpm,
  SiRedux,
  SiReduxsaga,
} from "react-icons/si";
const skills = [
  {
    title: "Javascript",
    icon: <SiJavascript className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Typescript",
    icon: <SiTypescript className="size-6 text-black dark:text-white" />,
  },
  {
    title: "React",
    icon: <SiReact className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Nextjs",
    icon: <SiNextdotjs className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Git",
    icon: <SiGit className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Redux",
    icon: <SiRedux className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Reduxsaga",
    icon: <SiReduxsaga className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Passport.js",
    icon: <SiPassport className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Bootstrap",
    icon: <SiBootstrap className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Npm",
    icon: <SiNpm className="size-6 text-black dark:text-white" />,
  },
  {
    title: "Github",
    icon: <SiGithub className="size-6 text-black dark:text-white" />,
  },
];

export default function Skills() {
  return (
    <div>
      <p
        className={`${gabarito.className} text-2xl text-black dark:text-white`}
      >
        Skills
      </p>
      <InfiniteMovingCards items={skills} direction="left" speed="normal" />
    </div>
  );
}
