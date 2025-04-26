import ContactCard from "@/components/ContactCard";
import {FiYoutube, FiGithub, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export const metadata = {
  title: "Inexperienced Me | Contact",
  description: "Inexperienced Me | Contact",
};

const ContactPage = () => {
  const iconsSize = 30;
  const contactsInfo = [
    { icon: <FiYoutube size={iconsSize} />,
      text: "YouTube channel",
      subtext: "Get to know me and my journey",
      link: "https://www.youtube.com/@inexperiencedme" },

    { icon: <FiGithub size={iconsSize} />,
      text: "GitHub profile",
      subtext: "Code samples and some projects",
      link: "https://github.com/InexperiencedMe" },

    { icon: <FaXTwitter size={iconsSize} />,
      text: "eX Twitter profile",
      subtext: "Quick sharp thoughts with no context",
      link: "https://twitter.com/InexperiencedMe" },
      
    { icon: <FiMail size={iconsSize} />,
      text: "inexperiencedme@protonmail.com",
      subtext: "Contact me directly",
      link: "mailto:inexperiencedme@protonmail.com" }
  ];

  const contacts = contactsInfo.map((contact, index) => (<ContactCard key={index} {...contact} />));

  return (
      <div className="flex flex-col gap-4 p-6 my-auto bg-background rounded-md">
        {contacts}
      </div>
  );
};

export default ContactPage;
