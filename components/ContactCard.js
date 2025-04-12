import { Card } from "./Card";

const ContactCard = (contact) => {
  return (
        <a key={contact.link + contact.description} href={contact.link} target="_blank" className="w-full">
        <Card>
        <div className="flex flex-row gap-4 items-center px-4 py-2">
            <span>{contact.icon}</span>
            <p className="text-lg md:text-xl lg:text-2xl">{contact.text}</p>
        </div>
        </Card>
    </a>
  );
};

export default ContactCard;