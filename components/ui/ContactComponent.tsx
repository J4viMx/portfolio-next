import {
  LuGithub,
  LuLinkedin,
  LuMailMinus,
  LuScrollText,
} from "react-icons/lu";
import IconWithTooltip from "../ui/IconWithTooltip";
import CV from "@/database/CvLinks.json";

export const ContactComponent = () => {
  const contacts = [
    {
      name: "Linkedin",
      logo: <LuLinkedin size={40} />,
      url: "https://www.linkedin.com/in/javimx/",
    },
    {
      name: "Github",
      logo: <LuGithub size={40} />,
      url: "https://github.com/J4viMx",
    },
    {
      name: "Correo",
      logo: <LuMailMinus size={40} />,
      url: "mailto:javiersjuarezb@gmail.com",
    },
    {
      name: "Curriculum",
      logo: <LuScrollText size={40} />,
      url: CV.es,
    },
  ];
  return (
    <>
      {contacts.map((contact) => (
        <IconWithTooltip key={contact.name} {...contact} />
      ))}
    </>
  );
};
