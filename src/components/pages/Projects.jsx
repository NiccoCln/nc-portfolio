import AnimatedPage from "./AnimatedPage";

const itemData = [
  {
    id: "burger",
    title: "Burger Builder",
    author: "Burger Builder",
    link: "https://burger-app-5ff2d.web.app/",
  },
  {
    id: "robots",
    title: "Robofriends",
    author: "Robofriends",
    link: "https://niccocln.github.io/robofriends/",
  },
  // {
  //   id: "background",
  //   title: "Background",
  //   author: "Background",
  // },
];

const Projects = () => {
  return (
    <AnimatedPage>
      <div className="page-section projects">
        <div>
          <h1>projects</h1>
          <p>
            Throughout my academic journey, I continuously sought opportunities
            to explore my passion for technology and web development. I
            undertook independent projects and self-study initiatives, immersing
            myself in various programming languages and web development
            frameworks. By leveraging my engineering background, I learned to
            apply systematic thinking and a methodical approach to my web
            development projects, resulting in efficient and robust solutions.
          </p>
        </div>

        <div className="card-carousel">
          {itemData.map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => window.location.replace(item?.link)}
            >
              <div className="card-content">
                <h3>{item.title}</h3>
                <p style={{ color: "#004643" }}>
                  <em>{item.author}</em>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Projects;
