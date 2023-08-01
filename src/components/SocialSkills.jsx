import { Reorder } from "framer-motion";
import { useState } from "react";
const communicationDesc = (
  <p>
    Enhanced by my experience as a Junior Frontend Developer, I have honed
    exceptional <strong>communication skills</strong> through seamless
    collaboration with development teams, facilitating the completion of daily
    tasks with utmost efficiency.
  </p>
);

const interpersonalDesc = (
  <p>
    I possess strong <strong>interpersonal skills</strong>, cultivated during my
    tenure as a sales agent. My ability to adeptly interact with diverse
    clientele and actively listen to their needs has allowed me to build lasting
    and fruitful relationships.
  </p>
);

const socialSkillsList = [
  {
    id: "communication-skill",
    description: communicationDesc,
  },
  {
    id: "intepersonal-skill",
    description: interpersonalDesc,
  },
];

const SocialSkills = () => {
  const [items, setItems] = useState(socialSkillsList);
  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        textAlign: "center",
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
            padding: "10px",
          }}
        >
          {item.description}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default SocialSkills;
