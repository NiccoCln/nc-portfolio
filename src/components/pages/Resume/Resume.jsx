import MuiAccordion from "../../../muiComponents/MuiAccordion";
import Button from "@mui/material/Button";
import graduateImg from "../../../assets/graduate.png";
import careerImg from "../../../assets/career-path.png";
import skillsImg from "../../../assets/skills.png";
import Education from "./ResumeSections/Education/Education";
import WorkExperience from "./ResumeSections/Work/WorkExperience";
import Skills from "./ResumeSections/Skills/Skills";
import AnimatedPage from "../AnimatedPage";

const resumeCategories = [
  {
    id: "education",
    title: "Education",
    details:
      "While my educational path may not appear conventional for a web developer, it provides a unique advantage. My interdisciplinary background enables me to approach web development challenges from different angles, merging creativity and analytical thinking to create innovative and user-centered web solutions. I am eager to leverage my diverse skill set, adaptability, and problem-solving abilities to excel in the dynamic field of web development.",
    icon: {
      src: graduateImg,
      alt: "graduate",
    },
    children: <Education />,
  },
  {
    id: "work-experience",
    title: "Work Experience",
    icon: {
      src: careerImg,
      alt: "career",
    },
    details: "Junior Web Developer, [Nenos Software]",
    children: <WorkExperience />,
  },
  {
    id: "skills",
    title: "Skills",
    details: "",
    children: <Skills />,
    icon: {
      src: skillsImg,
      alt: "skills",
    },
  },
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
};

const buttonStyle = {
  display: "flex",
  gap: "15px",
  backgroundColor: "#f9bc60",
  color: "#001e1d",
  fontWeight: 600,
  fontFamily: "Montserrat",
  textTransform: "uppercase",
};

const Resume = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("NResume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "NResume.pdf";
        alink.click();
      });
    });
  };

  return (
    <AnimatedPage>
      <div className="page-section resume">
        <div style={divStyle}>
          <h1>resume</h1>
          <Button
            onClick={onButtonClick}
            size="medium"
            variant="contained"
            style={buttonStyle}
          >
            pdf
          </Button>
        </div>

        {resumeCategories.map((category) => (
          <MuiAccordion
            key={category.id}
            id={category.id}
            title={category.title}
            details={category.details}
            icon={category.icon}
          >
            {category.children}
          </MuiAccordion>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default Resume;
