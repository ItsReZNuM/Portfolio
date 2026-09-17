import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

const social = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    path: "https://github.com/ItsReZNuM",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/reza-mohamadnia-73728834b/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    path: "https://www.instagram.com/ItsReZNuM/",
  },
  {
    name: "Telegram",
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
            aria-label={item.name}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
