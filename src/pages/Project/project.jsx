import { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "./project.css";
import { CircleArrowOutUpRight } from 'lucide-react';
import portfolioData from "./projectdata";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter(item =>
        item.categories.includes(activeCategory)
      );

  return (
    <section className="background-color">
      <Container className="py-5">
        <div className="title-align">
          <h2 className="fw-bold mb-4 animate-up">My Portfolio</h2>
        </div>

        {/* FILTER BUTTON */}
        <div className="text-center mb-4 animate-up">
          {["All", "UI/UX", "Web Dev", "App Dev"].map(cat => (
            <Button
              key={cat}
              size="sm"
              className={`me-2 filter-btn ${activeCategory === cat ? "active" : ""
                }`}
              variant={activeCategory === cat ? "primary" : "outline-primary"}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === "All" ? "All Project" : cat}
            </Button>
          ))}
        </div>

        {/* PORTFOLIO CARDS */}
        <Row className="g-4">
          {filteredData.map((item, index) => (
            <Col key={index} md={4} sm={6}>
              <Card className="portfolio-card h-100 animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="portfolio-img"
                />

                <Card.Body>
                  {/* CATEGORY BADGE */}
                  <div className="mb-2">
                    {item.categories.map((cat, i) => (
                      <Badge key={i} bg="primary" className="category-badge">
                        {cat}
                      </Badge>
                    ))}
                  </div>

                  <Card.Title className="fw-bold">
                    {item.title}
                  </Card.Title>

                  <Card.Subtitle className="pb-2">
                    {item.subtitle}
                  </Card.Subtitle>

                  <p className="text-muted small">
                    {item.text}
                  </p>

                  <Button
                    as={Link}
                    to={`/project/${item.id}`}
                    variant="link"
                    className="view-detail p-0"
                    style={{ fontSize: "0.8rem", fontWeight: "bold" }}
                  >
                    View Detail <CircleArrowOutUpRight size={14} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}