import me1 from "../../assets/m.jpeg";
import AnimatedPage from "./AnimatedPage";

const AboutMe = () => {
  return (
    <AnimatedPage>
      <div className="page-section about">
        <h1>about me</h1>
        <p>
          I'm a fresh graduate seeking new intellectual challenges and a
          rewarding career as a web developer. I'm passionate about building
          high-quality web applications and thrive in a stimulating and
          collaborative environment. With a strong desire to succeed, I'm eager
          to join a team of like-minded professionals who are communicative,
          ambitious, and passionate. I bring a blend of technical skills,
          dedication, and a deep satisfaction in delivering exceptional results.
          I'm excited about the opportunity to contribute my skills and
          enthusiasm to a company that shares my values and aspirations.{" "}
          <b
            style={{ color: "#fffffe", cursor: "pointer" }}
            onClick={() =>
              window.location.replace("mailto:caluiannicoleta1@gmail.com")
            }
          >
            Let's discuss
          </b>{" "}
          how I can make a meaningful impact on your team's success.
        </p>
        <div>
          <img
            src={me1}
            alt="photo"
            // placeholderSrc={<CircularProgress color="success" />}
          />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default AboutMe;
