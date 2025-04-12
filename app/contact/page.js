import ContactCard from "@/components/ContactCard";
import {FiYoutube, FiGithub, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export const metadata = {
  title: "Inexperienced Me contact",
  description: "Inexperienced Me contact",
};

const ContactPage = () => {
  const iconsSize = 30;
  const contactsInfo = [
    { icon: <FiYoutube size={iconsSize} />,   text: "YouTube channel",                link: "https://www.youtube.com/@inexperiencedme" },
    { icon: <FiGithub size={iconsSize} />,    text: "GitHub profile",                 link: "https://github.com/InexperiencedMe" },
    { icon: <FaXTwitter size={iconsSize} />,  text: "eX Twitter profile",             link: "https://twitter.com/InexperiencedMe" },
    { icon: <FiMail size={iconsSize} />,      text: "inexperiencedme@protonmail.com", link: "mailto:inexperiencedme@protonmail.com" }
  ];

  const contacts = contactsInfo.map((contact, index) => (<ContactCard key={index} {...contact} />));

  return (
      <div className="flex flex-col gap-4 my-auto">
        {contacts}
      </div>
  );
};

export default ContactPage;
