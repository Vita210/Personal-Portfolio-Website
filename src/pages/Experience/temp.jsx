import { useState } from "react";
import { Container, Card, Badge, Row, Col, Button, Modal, Carousel } from "react-bootstrap";
import "./experience.css";



const Experience = () => {
    const [showCertModal, setShowCertModal] = useState(false);
    const [activeCert, setActiveCert] = useState(null);

    const handleOpenModal = (cert) => {
        setActiveCert(cert);
        setShowCertModal(true);
    };

    const handleCloseModal = () => {
        setShowCertModal(false);
        setActiveCert(null);
    };

    return (
        <section className="py-5">
            <Container className="pb-5">
                <h2 className="fw-bold mb-4 text-center">Experience</h2>

                {/* Experience 1 */}
                <Card className="experience-card mb-4">
                    <Card.Body>
                        <Row className="g-3 align-items-start">
                            {/* Badge for mobile */}
                            <Col xs={12} className="d-md-none mb-2">
                                <Badge pill className="date-badge">
                                    October 2025 - January 2026
                                </Badge>
                            </Col>

                            <Col md={9}>
                                <h5 className="experience-title fw-bold mb-1">
                                    UI/UX Designer
                                </h5>
                                <p className="company-name mb-3">
                                    PT Sinergi Insan Andalan
                                </p>

                                <ul className="mb-0">
                                    <li>Designed admin dashboard pages for Socialvit, including Mentor Management (Mentor Details)</li>
                                    <li>Developed UI for AI Assistant Socialvit – Micro Certification feature</li>
                                    <li>Created wireframes, prototypes, and high-fidelity designs in Figma</li>
                                    <li>Collaborated with the team to coordinate tasks and ensure smooth project progress</li>
                                    <li>Applied usability principles and visual hierarchy across page layouts</li>
                                </ul>
                            </Col>

                            {/* Badge for desktop */}
                            <Col
                                md={3}
                                className="d-none d-md-flex justify-content-md-end"
                            >
                                <Badge pill className="date-badge">
                                    October 2025 - January 2026
                                </Badge>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                {/* Experience 2 */}
                <Card className="experience-card mb-4">
                    <Card.Body>
                        <Row className="g-3 align-items-start">
                            {/* Badge for mobile */}
                            <Col xs={12} className="d-md-none mb-2">
                                <Badge pill className="date-badge">
                                    December 2025 - January 2026
                                </Badge>
                            </Col>

                            <Col md={9}>
                                <h5 className="experience-title fw-bold mb-1">
                                    Vice Lead Research Team
                                </h5>
                                <p className="company-name mb-3">
                                    PT Sinergi Insan Andalan
                                </p>

                                <ul className="mb-0">
                                    <li>Coordinated daily scrum schedules and task rotations with the Lead</li>
                                    <li>Led Daily Scrum meetings to track team progress</li>
                                    <li>Managed daily attendance tracking for team members</li>
                                    <li>Documented Daily Scrum attendance and notes using Notion</li>
                                </ul>
                            </Col>

                            {/* Badge for desktop */}
                            <Col
                                md={3}
                                className="d-none d-md-flex justify-content-md-end"
                            >
                                <Badge pill className="date-badge">
                                    May - October 2025
                                </Badge>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                {/* Experience 3 */}
                <Card className="experience-card mb-4">
                    <Card.Body>
                        <Row className="g-3 align-items-start">
                            {/* Badge for mobile */}
                            <Col xs={12} className="d-md-none mb-2">
                                <Badge pill className="date-badge">
                                    May - October 2025
                                </Badge>
                            </Col>

                            <Col md={9}>
                                <h5 className="experience-title fw-bold mb-1">
                                    Publication Staff (Student Staff)
                                </h5>
                                <p className="company-name mb-3">
                                    Perpustakaan Universitas Atma Jaya Yogyakarta
                                </p>

                                <ul className="mb-0">
                                    <li>Managed Instagram account to increase engagement and share information</li>
                                    <li>Designed digital posters and feed content for events and campaigns</li>
                                    <li>Planned publication strategies and content schedules with the team</li>
                                </ul>
                            </Col>

                            {/* Badge for desktop */}
                            <Col
                                md={3}
                                className="d-none d-md-flex justify-content-md-end"
                            >
                                <Badge pill className="date-badge">
                                    December 2025 - January 2026
                                </Badge>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>

            <Container className="pb-5">
                <h2 className="fw-bold mb-4 text-center">Education</h2>

                <Card className="experience-card mb-4">
                    <Card.Body>
                        <Row className="g-3 align-items-start">
                            {/* Badge for mobile */}
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
                                    Program Studi Informatika, Fakultas Teknologi Industri
                                </p>
                            </Col>

                            {/* Badge for desktop */}
                            <Col
                                md={3}
                                className="d-none d-md-flex justify-content-md-end"
                            >
                                <Badge pill className="date-badge">
                                    2022 - Present
                                </Badge>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>

            <Container className="pb-5">
                <h2 className="fw-bold mb-4 text-center">Certification</h2>

                {/* Certification 1 */}
                <Card className="experience-card mb-4">
                    <Card.Body>
                        <Row className="g-3 align-items-start">
                            {/* Badge for mobile */}
                            <Col xs={12} className="d-md-none mb-2">
                                <Badge pill className="date-badge">
                                    December 2025
                                </Badge>
                            </Col>

                            <Col md={9}>
                                <h5 className="experience-title fw-bold mb-1">
                                    Intensive Camp UI/UX Design
                                </h5>
                                <p className="company-name mb-2">
                                    Special Skills Indonesia
                                </p>
                                <p className="credential-id">
                                    Credential ID SSB33G033
                                </p>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    className="view-certificate-btn"
                                    onClick={() =>
                                        handleOpenModal({
                                            title: "Intensive Camp UI/UX Design",
                                            images: [
                                                "/certificates/UIUX1.jpg",
                                                "/certificates/UIUX2.jpg"
                                            ],
                                            credentialLink:
                                                "https://sertifikat.specialskill.id/sertifikat",
                                        })
                                    }
                                >
                                    View Certificate
                                </Button>
                            </Col>

                            {/* Badge for desktop */}
                            <Col
                                md={3}
                                className="d-none d-md-flex justify-content-md-end"
                            >
                                <Badge pill className="date-badge">
                                    December 2025
                                </Badge>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                {/* Certification 2 */}
                <Card className="experience-card mb-4">
                    <Card.Body>
                        <Row className="g-3 align-items-start">
                            {/* Badge for mobile */}
                            <Col xs={12} className="d-md-none mb-2">
                                <Badge pill className="date-badge">
                                    May 2025
                                </Badge>
                            </Col>

                            <Col md={9}>
                                <h5 className="experience-title fw-bold mb-1">
                                    Problem Solving (Basic)
                                </h5>
                                <p className="company-name mb-2">
                                    HackerRank
                                </p>
                                <p className="credential-id">
                                    Credential ID 63239AFC1B2D
                                </p>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    className="view-certificate-btn"
                                    onClick={() =>
                                        handleOpenModal({
                                            title: "Problem Solving (Basic)",
                                            images: ["/certificates/ProblemSolving.png"],
                                            credentialLink: "https://www.hackerrank.com/certificates/63239afc1b2d",
                                        })
                                    }
                                >
                                    View Certificate
                                </Button>
                            </Col>

                            {/* Badge for desktop */}
                            <Col
                                md={3}
                                className="d-none d-md-flex justify-content-md-end"
                            >
                                <Badge pill className="date-badge">
                                    May 2025
                                </Badge>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>

            {/* Modal */}
            <Modal
                show={showCertModal}
                onHide={handleCloseModal}
                centered
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{activeCert?.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body className="text-center">

                    {/* MULTI IMAGE */}
                    {activeCert?.images?.length > 1 && (
                        <Carousel interval={null}>
                            {activeCert.images.map((img, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        src={img}
                                        alt={`${activeCert.title} ${index + 1}`}
                                        className="d-block w-100 rounded"
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    )}

                    {/* SINGLE IMAGE */}
                    {activeCert?.images?.length === 1 && (
                        <img
                            src={activeCert.images[0]}
                            alt={activeCert.title}
                            className="img-fluid rounded"
                        />
                    )}

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-primary" className="close-btn" onClick={handleCloseModal}>
                        Close
                    </Button>

                    <Button
                        className="credential-btn"
                        href={activeCert?.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Show Credential
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default Experience;