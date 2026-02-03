import { useState } from "react";
import ExperienceSection from "./experience-section";
import EducationSection from "./education-section";
import CertificationSection from "./certification-section";
import CertificateModal from "./certificate-modal";
import "./experience.css";

const Experience = () => {
  const [show, setShow] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section className="py-5 background-color">
      <ExperienceSection />
      <EducationSection />
      <CertificationSection
        onOpenModal={(cert) => {
          setActiveCert(cert);
          setShow(true);
        }}
      />
      <CertificateModal
        show={show}
        cert={activeCert}
        onClose={() => setShow(false)}
      />
    </section>
  );
};

export default Experience;