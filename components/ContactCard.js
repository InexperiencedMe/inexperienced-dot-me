import { Card } from "./Card";

const ContactCard = (contact) => {
  return (
        <a key={contact.link + contact.description} href={contact.link} target="_blank" className="w-full">
        <Card>
        <div className="flex flex-row gap-6 items-center px-6 py-2">
            <span>{contact.icon}</span>
            <div className="flex flex-col">
              <p className="text-lg md:text-xl lg:text-2xl">{contact.text}</p>
              <p className="text-sm md:text-md lg:text-lg text-foreground-secondary opacity-50">{contact.subtext}</p>
            </div>
        </div>
        </Card>
    </a>
  );
};

export default ContactCard;