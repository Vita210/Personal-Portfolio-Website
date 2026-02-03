import { Container, Card, Badge, Row, Col } from "react-bootstrap";
import "./experience.css";

const experiences = [
    {
        title: "UI/UX Designer",
        company: "PT Sinergi Insan Andalan",
        date: "October 2025 - January 2026",
        tasks: [
            "Designed admin dashboard pages for Socialvit, including Mentor Management (Mentor Details)",
            "Developed UI for AI Assistant Socialvit – Micro Certification feature",
            "Created wireframes, prototypes, and high-fidelity designs in Figma",
            "Collaborated with the team to coordinate tasks and ensure smooth project progress",
            "Applied usability principles and visual hierarchy across page layouts",
        ],
    },
    {
        title: "Vice Lead Research Team",
        company: "PT Sinergi Insan Andalan",
        date: "December 2025 - January 2026",
        tasks: [
            "Coordinated daily scrum schedules and task rotations with the Lead",
            "Led Daily Scrum meetings to track team progress",
            "Managed daily attendance tracking for team members",
            "Documented Daily Scrum attendance and notes using Notion",
        ],
    },
    {
        title: "Publication Staff (Student Staff)",
        company: "Perpustakaan Universitas Atma Jaya Yogyakarta",
        date: "May - October 2025",
        tasks: [
            "Managed Instagram account to increase engagement and share information",
            "Designed digital posters and feed content for events and campaigns",
            "Planned publication strategies and content schedules with the team",
        ],
    },
];

const ExperienceSection = () => {
    return (
        <Container className="pb-5">
            <div className="title-align">
                <h2 className="fw-bold mb-4 animate-up">Experience</h2>
            </div>

            {experiences.map((exp, index) => (
                <Card
                    key={exp.title}
                    className="experience-card mb-4 animate-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                >
                    <Card.Body>
                        <Row className="g-3 align-items-start">
                            {/* Badge for mobile */}
                            <Col xs={12} className="d-md-none mb-2">
                                <Badge pill className="date-badge">
                                    {exp.date}
                                </Badge>
                            </Col>

                            <Col md={9}>
                                <h5 className="experience-title fw-bold mb-1">{exp.title}</h5>
                                <p className="company-name mb-3">{exp.company}</p>

                                <ul className="mb-0">
                                    {exp.tasks.map((task, i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                            </Col>

                            {/* Badge for desktop */}
                            <Col
                                md={3}
                                className="d-none d-md-flex justify-content-md-end"
                            >
                                <Badge pill className="date-badge">
                                    {exp.date}
                                </Badge>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};

export default ExperienceSection;