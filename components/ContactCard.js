import { Card } from "./Card";

const ContactCard = (contact) => {
  return (
        <a key={contact.link + contact.description} href={contact.link} target="_blank" className="w-full">
        <Card>
        <div className="flex flex-row gap-4 items-center p-2">
            <span>{contact.icon}</span>
            <div className="flex flex-col">
              <p className="text-md md:text-lg lg:text-xl ">{contact.text}</p>
              <p className="text-sm md:text-md lg:text-lg text-foreground-secondary opacity-60">{contact.subtext}</p>
            </div>
        </div>
        </Card>
    </a>
  );
};

export default ContactCard;