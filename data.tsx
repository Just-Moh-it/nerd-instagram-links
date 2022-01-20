import Globe from "./public/link-icons/globe.svg";
import Blog from "./public/link-icons/blogger.svg";

export interface Link {
  text: string;
  link: string;
  icon?: string;
  subtitle?: string;
}

const data: Link[] = [
  {
    text: "Visit our Website",
    link: "https://assignmentnerd.tech/?utm_sorce=instagram&utm_medium=from_header",
    icon: Globe,
    subtitle: "Most Visited",
  },
  {
    text: "The 5 minute rule [Blog Post]",
    link: "https://blog.assignmentnerd.tech/5-min-rule",
    icon: Blog,
    subtitle: "Recently Featured",
  },
];

export default data;
