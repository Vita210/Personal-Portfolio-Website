import { Container, Card, Badge, Row, Col } from "react-bootstrap";
import "./experience.css";

const EducationSection = () => {
  return (
    <Container className="pb-5">
      <div className="title-align">
        <h2 className="fw-bold mb-4 animate-up">Education</h2>
      </div>

      <Card className="experience-card mb-4 animate-up">
        <Card.Body>
          <Row className="g-3 align-items-start">
            <Col xs={12} className="d-md-none mb-2">
              <Badge pill className="date-badge">
                2022 - Present
              </Badge>
            </Col>

            <Col md={9}>
              <h5 className="experience-title fw-bold mb-1">
                Universitas Atma Jaya Yogyakarta
              </h5>
              <p className="company-name mb-0">
                Informatika – Fakultas Teknologi Industri
              </p>
            </Col>

            <Col md={3} className="d-none d-md-flex justify-content-md-end">
              <Badge pill className="date-badge">
                2022 - Present
              </Badge>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EducationSection;