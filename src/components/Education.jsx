import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import medicalImg from "../assets/genetic-engineering.png";
import mechanicImg from "../assets/maintenance.png";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CircularProgress from "@mui/material/CircularProgress";

const studies = [
  {
    id: "mechanical-eng",
    title: `Master of Science in Mechanical Engineering, ["Dunarea de Jos" University of Galati], [2020-2022]`,

    image: {
      src: mechanicImg,
      alt: "mechanical-engineering",
    },
    description: `Building upon this foundation, my master's program in Mechanical
    Engineering further developed my technical acumen and provided a
    comprehensive understanding of complex systems and their behavior.
    Through coursework focused on mechanics, thermodynamics, and
    computational modeling, I refined my critical thinking skills and
    acquired an aptitude for approaching complex problems from multiple
    angles. The rigorous curriculum fostered my ability to break down
    intricate tasks into manageable components, an essential skill for
    tackling large-scale web development projects.`,
  },

  {
    id: "medical-eng",
    title:
      "Bachelor of Science in Medical Engineering, [University POLITEHNICA of Bucharest], [2016-2020]",
    image: {
      src: medicalImg,
      alt: "medical-engineering",
    },
    description: `During my undergraduate studies in Medical Engineering, I gained a
        solid foundation in engineering principles, human anatomy, and
        medical device design. This interdisciplinary program honed my
        analytical thinking, problem-solving abilities, and attention to
        detail. These skills seamlessly translate to the meticulous nature
        of web development, where precision and accuracy are paramount.

    `,
  },
];

const Education = () => {
  const [clicked, setIsClicked] = React.useState({
    "mechanical-eng": false,
    "medical-eng": false,
  });

  const handleDescription = (event) => {
    setIsClicked((prevState) => ({
      ...prevState,
      [event.target.parentElement.id]:
        !prevState[event.target.parentElement.id],
    }));
  };

  return (
    <List
      sx={{
        width: "100%",
        backgroundColor: "#abd1c6",
        padding: "5px",
        borderRadius: "15px",
      }}
      aria-label="education-section"
    >
      {studies.map((study) => (
        <ListItem
          key={study.id}
          disablePadding
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          id={study.id}
          onClick={handleDescription}
        >
          <ListItemButton id={study.id} style={{ width: "100%" }}>
            <ListItemIcon>
              <LazyLoadImage
                id={study.id}
                src={study.image.src}
                alt={study.image.alt}
                width="45px"
                height="45px"
                placeholderSrc={<CircularProgress />}
              />
            </ListItemIcon>
            <p id={study.id}>
              <strong id={study.id}>{study.title}</strong>
            </p>
          </ListItemButton>
          {clicked[study.id] && <p>{study.description}</p>}
        </ListItem>
      ))}
    </List>
  );
};

export default Education;
