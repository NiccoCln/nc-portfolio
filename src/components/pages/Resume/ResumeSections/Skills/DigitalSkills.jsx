import { Reorder } from "framer-motion";
import { useState } from "react";

const digitalSkillsList = [
  {
    id: "basics",
    title: "HTML, CSS, JavaScript",
  },
  {
    id: "redux",
    title: "Redux",
  },
  {
    id: "github",
    title: "GitHub",
  },
  {
    id: "nodejs",
    title: "NodeJS",
  },
  {
    id: "reactjs",
    title: "ReactJS",
  },
  {
    id: "expressjs",
    title: "ExpressJS",
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
  },
];

const DigitalSkills = () => {
  const [items, setItems] = useState(digitalSkillsList);

  return (
    // <div>
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      style={{
        listStyle: "none",
        margin: 0,
      }}
    >
      {items.map((item) => (
        <Reorder.Item
          key={item.id}
          value={item}
          style={{
            backgroundColor: "#abd1c6",
            color: "#004643",
            marginBottom: "5px",
            height: "40px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            cursor: "grab",
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Reorder.Item>
      ))}
    </Reorder.Group>
    // </div>
  );
};

export default DigitalSkills;
