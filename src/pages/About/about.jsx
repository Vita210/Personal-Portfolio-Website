import { Container, Row, Col, Badge } from "react-bootstrap";
import './about.css';

const skills = [
  "User Research",
  "Usability Testing",
  "Information Architecture",
  "Wireframing",
  "Prototyping",
  "User Flow Design",
  "Design System",
  "Responsive Web Design",
  "PHP",
  "MySQL",
  "React JS",
  "Dart",
  "Python",
  "HTML/CSS",
];

const tools = [
  "Figma",
  "Canva",
  "Maze",
  "VS Code",
  "Git & GitHub",
  "Flutter SDK",
  "Laravel",
];

const About = () => {
  return (
    <section className="py-5 background-color">
      <Container>
        <div className="about-card">
          <Row className="align-items-center">
            <Col md={3}>
              {/* Left Content */}
              <div className="about-image-wrapper animate-up" style={{ animationDelay: '0.1s' }}>
                <img
                  src="/src/assets/pfp.jpg"
                  alt="Flanella"
                  className="hero-image"
                />
              </div>
            </Col>

            <Col md={9}>
              {/* Right Content */}
              <div className="about-text">
                <h2 className="about-title animate-up" style={{ animationDelay: '0.2s' }}>About Me</h2>
                <p className="about-desc animate-up" style={{ animationDelay: '0.3s' }}>I’m an Informatics student with a strong interest in UI/UX design and front-end development. I enjoy creating user-centered digital products by combining thoughtful design with solid implementation. Experienced in Figma, wireframing, and prototyping, with a foundation in mobile and web development. I’m eager to apply my academic knowledge to real-world projects and continuously grow through hands-on experience.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Container>
        <div className="skills-tools-card">
          <h2 className="fw-bold mb-4 animate-up">Skills</h2>
          <div className="chips-wrapper">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="chips-wrapper animate-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Badge className="chip">{skill}</Badge>
              </div>
            ))}
          </div>
        </div>
      </Container>


      <Container>
        <div className="skills-tools-card">
          <h2 className="fw-bold mb-4 animate-up">Tools I Used</h2>
          <div className="chips-wrapper">
            {tools.map((tool, index) => (
              <div
                key={tool}
                className="chips-wrapper animate-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                >
                <Badge className="chip">{tool}</Badge>
              </div>              
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
