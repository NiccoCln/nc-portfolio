import { Reorder } from "framer-motion";
import { useState } from "react";

const languageSkillsList = [
  {
    id: "romanian",
    title: "romanian",
    subtitle: "native",
  },
  {
    id: "english",
    title: "english",
    subtitle: "full professional proficiency",
  },
];

const LanguageSkills = () => {
  const [items, setItems] = useState(languageSkillsList);
  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
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
            borderRadius: "15px",
            cursor: "grab",
            padding: "5px",
            textTransform: "capitalize",
            paddingLeft: "15px",
          }}
        >
          <p>
            {item.title} - <em>{item.subtitle}</em>
          </p>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default LanguageSkills;
