import { useParams } from "react-router-dom";
import { Container, Carousel, Button } from "react-bootstrap";
import portfolioData from "../Project/projectdata";
import "./projectdetail.css";

export default function ProjectDetail() {
    const { id } = useParams();
    const project = portfolioData.find(p => p.id === id);

    if (!project) {
        return <p className="text-center py-5">Project not found</p>;
    }

    return (
        <section className="background-color">
            <Container className="py-5">
                <div className="text-center mb-5 animate-up" style={{ animationDelay: `0.1s` }}>
                    {project.subtitle && (
                        <p 
                            className="text-muted mb-2"
                        >
                            {project.subtitle}
                        </p>
                    )}

                    <div className="title-align">
                        <h1 
                            className="fw-bold mb-3"
                        >
                            {project.title}
                        </h1>
                    </div>

                    {project.figmaLink && (
                        <Button
                            variant="outline-dark"
                            size="sm"
                            href={project.figmaLink}
                            className="figma-btn"
                        >
                            View Figma Design
                        </Button>
                    )}
                </div>

                {project.heroImages && (
                    <Carousel className="mb-5">
                        {project.heroImages.map((img, i) => (
                            <Carousel.Item key={i}>
                                <img
                                    src={img}
                                    alt={`${project.title} hero ${i + 1}`}
                                    className="d-block w-100 rounded animate-up"
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}

                {project.sections?.map((section, index) => {
                    const commonProps = {
                        key: index,
                        className: "mb-5 animate-up",
                        style: { animationDelay: `${index * 0.1}s` },
                    };

                    switch (section.type) {
                        case "overview":
                            return (
                                <section {...commonProps}>
                                    <h2 className="fw-bold mb-3">{section.title}</h2>
                                    {section.text && <p>{section.text}</p>}
                                    {section.content && (
                                        <>
                                            <p>{section.content.text}</p>
                                            {section.content.lists?.map((list, i) => (
                                                <div key={i} className="mb-3">
                                                    <strong>{list.title}</strong>
                                                    <ul className="mt-2">
                                                        {list.items.map((item, idx) => (
                                                            <li key={idx}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </section>
                            );

                        case "list":
                            return (
                                <section {...commonProps}>
                                    <h2 className="fw-bold mb-3">{section.title}</h2>
                                    {section.text && <p>{section.text}</p>}
                                    <ul>
                                        {section.items?.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </section>
                            );

                        case "text":
                        case "learning":
                            return (
                                <section {...commonProps}>
                                    <h2 className="fw-bold mb-3">{section.title}</h2>
                                    <p>{section.text}</p>
                                </section>
                            );

                        case "process":
                            return (
                                <section {...commonProps}>
                                    <h2 className="fw-bold mb-3">{section.title}</h2>
                                    {section.text && <p>{section.text}</p>}
                                    {section.items?.map((item, i) => (
                                        <div key={i} className="mb-4">
                                            <h5 className="fw-semibold mb-2">{item.title}</h5>
                                            {item.text && <p className="mb-2">{item.text}</p>}
                                            {item.image && (
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="img-fluid rounded border"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </section>
                            );

                        default:
                            return null;
                    }
                })}
            </Container>
        </section>
    );
}