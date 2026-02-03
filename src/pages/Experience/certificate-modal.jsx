import { Modal, Button, Carousel } from "react-bootstrap";
import "./experience.css";

const CertificateModal = ({ show, onClose, cert }) => {
  if (!cert) return null;

  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{cert.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center">
        {cert.images.length > 1 ? (
          <Carousel interval={null}>
            {cert.images.map((img, i) => (
              <Carousel.Item key={i}>
                <img src={img} className="w-100 rounded" />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <img src={cert.images[0]} className="img-fluid rounded" />
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-primary" onClick={onClose}>
          Close
        </Button>
        <Button
          className="credential-btn"
          href={cert.credentialLink}
          target="_blank"
        >
          Show Credential
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CertificateModal;