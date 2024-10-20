import { ReactNode } from "react";
import { BentoGrid, BentoGridItem } from "../ui/Bento-Grid";
import SkillsComponent from "./SkillsComponent";
import { LuLinkedin } from "react-icons/lu";
import TitleSection from "../ui/TitleSection";
import LocationCard from "../ui/LocationCard";
import Trajectory from "@/database/Trajectory.json";
import Education from "@/database/Education.json";

import { highlightKeywords } from "@/utils/highlightKeywords";
import keywords from "@/database/Keywords.json";

const Career = () => {
  return (
    <section id="career">
      <TitleSection text="Mi trayectoria" />
      <BentoGrid className="mx-auto h-auto ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={
              i === 0 || i === 3
                ? "h-auto md:col-span-3"
                : i === 1
                  ? "h-auto md:col-span-2"
                  : ""
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
};
export default Career;

const DescriptionEducation = () => {
  return (
    <>
      {Education.map((item) => (
        <div key={item.activities} className="py-3">
          <h3 className="font-lato text-2xl font-bold text-light-secondary">
            {item.title}
          </h3>
          <div className="flex items-center justify-between md:w-1/3">
            <h4 className="text-base font-semibold text-slate-300">
              {item.subtitle} | {item.date} | {item.country}
            </h4>
          </div>
          <p className="py-3 text-base text-white">
            {highlightKeywords(
              item.activities,
              keywords.career,
              "text-light-secondary"
            )}
          </p>
        </div>
      ))}
    </>
  );
};

const HeaderComponent = ({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) => (
  <div className="flex items-center gap-3">
    {icon}
    <h3 className="font-lato text-2xl font-bold text-light">{title}</h3>
  </div>
);
const items = [
  {
    description: <SkillsComponent />,
    header: (
      <HeaderComponent
        icon={<p className="text-5xl">💻</p>}
        title="Mis habilidades"
      />
    ),
    icon: <LuLinkedin size={40} />,
  },
  {
    title: "",
    description: (
      <div className="text-base">
        {Trajectory.map((paragraph) => (
          <p key={paragraph} className="text-white">
            {highlightKeywords(
              paragraph,
              keywords.career,
              "text-light-secondary"
            )}
          </p>
        ))}
      </div>
    ),
    header: (
      <HeaderComponent
        icon={<p className="text-5xl">📕</p>}
        title="Mi trayectoria"
      />
    ),
    icon: <LuLinkedin size={40} />,
  },
  {
    title: "",
    description: <LocationCard />,
    header: (
      <HeaderComponent
        icon={<p className="text-5xl">🌍</p>}
        title="Ubicación"
      />
    ),
    icon: <LuLinkedin size={40} />,
  },
  {
    title: "",
    description: <DescriptionEducation />,
    header: (
      <HeaderComponent
        icon={<p className="text-5xl">📝</p>}
        title="Educación"
      />
    ),
    icon: <LuLinkedin size={40} />,
  },
];
