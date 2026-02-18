import { icons } from "lucide-react";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

const social = [
  {
    icon: <FaGithub />,
    path: "https://github.com/ItsReZNuM",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/reza-mohamadnia-73728834b/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/ItsReZNuM/",
  },
  {
    icon: <FaTelegram />,
    path: "https://t.me/ItsReZNuM",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
