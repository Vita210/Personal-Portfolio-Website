import { Container, Card, Badge, Row, Col, Button } from "react-bootstrap";
import "./experience.css";

const certifications = [
  {
    title: "Intensive Camp UI/UX Design",
    company: "Special Skills Indonesia",
    date: "December 2025",
    credentialId: "SSB33G033",
    images: ["/certificates/UIUX1.jpg", "/certificates/UIUX2.jpg"],
    credentialLink: "https://sertifikat.specialskill.id/sertifikat",
  },
  {
    title: "Problem Solving (Basic)",
    company: "HackerRank",
    date: "May 2025",
    credentialId: "63239AFC1B2D",
    images: ["/certificates/ProblemSolving.png"],
    credentialLink: "https://www.hackerrank.com/certificates/63239afc1b2d",
  },
];

const CertificationSection = ({ onOpenModal }) => {
  return (
    <Container className="pb-5">
      <div className="title-align text-center">
        <h2 className="fw-bold mb-4">
          <span className="animate-up d-inline-block">Certification</span>
        </h2>
      </div>

      {certifications.map((cert, index) => (
        <Card
          key={cert.title}
          className="experience-card mb-4 animate-up"
          style={{ animationDelay: `${index * 0.2}s` }} // staggered
        >
          <Card.Body>
            <Row className="g-3 align-items-start">
              {/* Badge for mobile */}
              <Col xs={12} className="d-md-none mb-2">
                <Badge pill className="date-badge">{cert.date}</Badge>
              </Col>

              <Col md={9}>
                <h5 className="experience-title fw-bold mb-1">{cert.title}</h5>
                <p className="company-name mb-2">{cert.company}</p>
                <p className="credential-id">Credential ID {cert.credentialId}</p>
                <Button
                  variant="primary"
                  size="sm"
                  className="view-certificate-btn"
                  onClick={() =>
                    onOpenModal({
                      title: cert.title,
                      images: cert.images,
                      credentialLink: cert.credentialLink,
                    })
                  }
                >
                  View Certificate
                </Button>
              </Col>

              {/* Badge for desktop */}
              <Col md={3} className="d-none d-md-flex justify-content-md-end">
                <Badge pill className="date-badge">{cert.date}</Badge>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default CertificationSection;