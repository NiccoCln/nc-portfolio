import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import AnimatedPage from "./AnimatedPage";

const theme = createTheme();

const pros = [
  {
    id: "communication",
    text: "Effective communication is essential in collaborating with cross-functional teams, understanding project requirements, and ensuring seamless coordination. With my strong communication skills, I can convey ideas clearly, actively listen, and adapt to various stakeholders' needs.",
  },
  {
    id: "work-experience",
    text: "As a junior frontend developer, I have gained valuable hands-on experience in developing user-friendly interfaces, implementing responsive designs, and optimizing website performance. My previous work experience has honed my technical skills and equipped me with a solid understanding of frontend development principles.",
  },
  {
    id: "details",
    text: "I possess a keen eye for detail, which plays a crucial role in crafting pixel-perfect designs and ensuring high-quality code. I understand the significance of clean code structure, efficient markup, and proper documentation to maintain scalability and facilitate future maintenance.",
  },
  {
    id: "desire",
    text: " I am highly motivated to continuously expand my skills and stay updated with emerging technologies in the frontend development landscape. I am eager to embrace new challenges, learn from experienced professionals, and contribute to innovative projects that foster my professional growth.",
  },
];

const contact = [
  {
    id: "email",
    title: "Email",
    link: "mailto:caluiannicoleta1@gmail.com",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/nicoleta-c-7898971b3/",
  },
];

const Contact = () => {
  const [visibleText, setVisibleText] = useState(false);
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AnimatedPage>
      <div className="page-section contact">
        <h1>contact</h1>

        <Divider
          style={{
            cursor: "pointer",
            color: "#abd1c6",
          }}
          light
          onClick={() => setVisibleText((prevState) => !prevState)}
        >
          <h3>why me?</h3>
        </Divider>

        {visibleText && (
          <ul style={{ listStyle: "none", textAlign: "left", padding: 0 }}>
            {pros.map((item) => (
              <li key={item.id}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2vw",
                    textTransform: "none",
                  }}
                >
                  <CheckIcon
                    fontSize={isMobileScreen ? "small" : "large"}
                    style={{ color: "#ff8e3c" }}
                  />
                  <p style={{ textTransform: "none" }}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {contact.map((item) => (
          <Chip
            style={{ backgroundColor: "#f9bc60", fontFamily: "Montserrat" }}
            key={item.id}
            onClick={() => window.location.replace(item.link)}
            label={
              <p style={{ color: "#001e1d", fontFamily: "Montserrat" }}>
                {item.title}
              </p>
            }
          ></Chip>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default Contact;
