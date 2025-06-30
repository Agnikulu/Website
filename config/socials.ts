import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@agnikulu",
    icon: Icons.gitHub,
    link: "https://github.com/agnikulu",
  },
  {
    name: "LinkedIn",
    username: "Agnik Banerjee",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/agnikbanerjee/",
  },
  {
    name: "Gmail",
    username: "agnikulu",
    icon: Icons.gmail,
    link: "mailto:agnikulu@gmail.com",
  },
];
