// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from "@mui/icons-material/Check";

const respItems = [
  {
    id: "develop",
    title: "Developing user-facing features",
    content:
      "Leveraging my proficiency in React JS, I actively participated in the implementation of engaging and intuitive user interfaces. Through the utilization of React's component-based architecture and state management, I ensured the delivery of interactive and responsive web applications.",
  },
  {
    id: "apis",
    title: "Working with APIs",
    content:
      "I effectively integrated APIs into the web application, establishing a smooth and efficient data flow between the frontend and backend systems. By understanding API documentation and effectively utilizing HTTP methods, I facilitated the exchange of data, enabling dynamic content updates and real-time functionality.",
  },
  {
    id: "collaboration",
    title: "Collaborating with backend developers and web designers",
    content:
      "I engaged in close collaboration with backend developers and web designers, fostering effective communication and teamwork. By actively participating in discussions, I contributed to the optimization of system architecture and the seamless integration of front-end and back-end components to enhance overall performance and user experience.",
  },
  {
    id: "optimization",
    title: "Optimizing application performance",
    content:
      "Committed to delivering high-quality code, I implemented clean coding practices to ensure optimal performance and maintainable codebase. By adhering to industry best practices, code standards, and performance optimization techniques, I contributed to the overall efficiency and scalability of the web application.",
  },
  {
    id: "testing",
    title: "Ensuring smooth functionality through testing",
    content:
      " Diligently conducting thorough testing and debugging, I played a vital role in identifying and resolving issues, ensuring the seamless functionality and robustness of the web application.",
  },
  {
    id: "meetings",
    title: "Participating in daily meetings",
    content:
      "Actively engaging in daily meetings, I provided updates on progress, identified potential roadblocks, and collaborated with cross-functional teams to align project objectives. This allowed for effective coordination, timely problem-solving, and the successful execution of project milestones.",
  },
];

const WorkExperience = () => {
  return (
    <div
      style={{
        backgroundColor: "#abd1c6",
        padding: "5px",
        borderRadius: "15px",
      }}
    >
      <p>
        As a Junior Web Developer at Nenos Software, I demonstrated a strong
        commitment to continuous learning, actively seeking opportunities to
        expand my knowledge and skills in web development. I successfully
        applied my technical expertise, problem-solving abilities, and
        collaboration skills to contribute to the successful delivery of web
        applications while adhering to project timelines and quality standards.
      </p>
      <div>
        <p>Responsibilities included:</p>

        <ul style={{ listStyle: "none" }}>
          {respItems.map((respItem) => (
            <li key={respItem.id}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5vh" }}
              >
                <CheckIcon fontSize="large" style={{ color: "#004643" }} />
                <p>{`${respItem.title}: ${respItem.content}`}</p>
              </div>
            </li>
          ))}
        </ul>
        {/* <List>
          {respItems.map((respItem) => (
            <ListItem key={respItem.id}>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText>{`${respItem.title}: ${respItem.content}`}</ListItemText>
            </ListItem>
          ))}
        </List> */}
      </div>
    </div>
  );
};

export default WorkExperience;
