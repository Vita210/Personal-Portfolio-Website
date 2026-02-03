import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <section className="background-color">
            <Container className="hero-wrapper">
                <div className="hero-card animate-up">
                    <Row className="align-items-center">
                        {/* LEFT CONTENT */}
                        <Col md={9}>
                            <p className="hero-greeting animate-up" style={{ animationDelay: '0.1s' }}>Hi, I'm Flanella</p>
                            
                            <div>
                                <h1 className="hero-title animate-up style={{ animationDelay: '0.2s' }}">
                                    UI/UX Designer & <br />
                                    Frontend Developer
                                </h1>
                            </div>

                            <p className="hero-desc animate-up" style={{ animationDelay: '0.3s' }}>
                                A university student passionate about designing intuitive user
                                experiences and building responsive web interfaces.
                            </p>

                            <div className="hero-buttons animate-up">
                                <Button 
                                    className="btn-primary-custom me-3" 
                                    href="https://drive.google.com/file/d/1XckwNfootqh6H13u3diXXRRQvqlVzumn/view?usp=sharing"  
                                >
                                    Download CV
                                </Button>
                                <Button 
                                    className="btn-secondary"
                                    as={Link}
                                    to="/project"
                                >
                                    See My Project
                                </Button>
                            </div>
                        </Col>

                        {/* RIGHT CONTENT */}
                        <Col md={3} className="text-center mt-4 mt-md-0">
                            <div className="hero-image-wrapper animate-up" style={{ animationDelay: '0.6s' }}>
                                <img
                                    src="/src/assets/pfp.jpg"
                                    alt="Flanella"
                                    className="hero-image"
                                />
                            </div>

                            <div className="hero-social">
                                <a 
                                    className="animate-up" 
                                    style={{ animationDelay: '0.7s' }}
                                    href="https://github.com/Vita210"
                                >
                                    <FaGithub />
                                </a>
                                <a 
                                    className="animate-up"
                                    style={{ animationDelay: '0.8s' }}
                                    href="https://www.linkedin.com/in/flanella-joevita-vanling/"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a 
                                    className="animate-up"
                                    style={{ animationDelay: '0.9s' }}
                                    href="https://www.instagram.com/flanella_vita"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </Col>
                    </Row>

                    {/* SKILLS */}
                    <div className="hero-skills">
                        <div className="hero-skills-track">
                            <span>UI/UX Design</span>
                            <span>Web Design</span>
                            <span>Web Dev</span>
                            <span>App Design</span>
                            <span>App Dev</span>
                            <span>Frontend Dev</span>
                            <span>Graphic Design</span>

                            {/* duplicate */}
                            <span>UI/UX Design</span>
                            <span>Web Design</span>
                            <span>Web Dev</span>
                            <span>App Design</span>
                            <span>App Dev</span>
                            <span>Frontend Dev</span>
                            <span>Graphic Design</span>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Home;