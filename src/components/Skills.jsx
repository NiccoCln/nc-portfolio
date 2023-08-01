import Diversity1Icon from "@mui/icons-material/Diversity1";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

import DigitalSkills from "./DigitalSkills";
import SocialSkills from "./SocialSkills";
import LanguageSkills from "./LanguageSkills";
import MuiAccordion from "../muiComponents/MuiAccordion";

const allSkills = [
  {
    category: "digital",
    title: "digital skills",
    icon: <DvrOutlinedIcon fontSize="large" style={{ color: "#004643" }} />,
    children: <DigitalSkills />,
  },
  {
    category: "interpersonal",
    title: "social skills",
    icon: <Diversity1Icon fontSize="large" style={{ color: "#004643" }} />,
    children: <SocialSkills />,
  },
  {
    category: "language",
    title: "language skills",
    icon: <PublicOutlinedIcon fontSize="large" style={{ color: "#004643" }} />,
    children: <LanguageSkills />,
  },
];

const Skills = () => {
  return (
    <div>
      {allSkills.map((skill) => (
        <MuiAccordion
          key={skill.category}
          id={skill.category}
          title={skill.title.toUpperCase()}
          icon={skill.icon}
        >
          {skill.children}
        </MuiAccordion>
      ))}
    </div>
  );
};

export default Skills;
