import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { FaSquareInstagram } from "react-icons/fa6";

export const socialIcons = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/matheusz-nied",
    icon: <RxLinkedinLogo />,
    hoverColor: "hover:text-[#0a66c2]",
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/matheusz-nied",
    icon: <RxGithubLogo />,
    hoverColor: "hover:text-gray-300",
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/matheusz.nied",
    icon: <FaSquareInstagram />,
    hoverColor: "hover:text-[#cf31a5]",
  },
];
