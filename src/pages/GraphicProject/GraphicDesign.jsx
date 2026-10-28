import { Container, Badge } from "react-bootstrap";
import "./GraphicDesign.css";
import designData from "./designdata";

export default function GraphicDesign() {
  return (
    <section className="background-color">
      <Container className="py-5">
        <div className="title-align mb-5">
          <h2 className="fw-bold mb-2 animate-up">Graphic Design</h2>
          <p className="text-muted animate-up" style={{ animationDelay: "0.1s" }}>
            A collection of visual designs & posters
          </p>
        </div>

        <div className="masonry">
          {designData.map((item, index) => (
            <div
              key={index}
              className="masonry-item animate-up"
              style={{ animationDelay: `${Math.min(index, 12) * 0.06}s` }}
            >
              <div className="design-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="design-img"
                  loading="lazy"
                  draggable={false}
                />
                <div className="design-body">
                  <Badge bg="primary" className="category-badge">
                    {item.category}
                  </Badge>
                  <p className="design-title">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}