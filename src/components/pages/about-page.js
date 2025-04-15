import { CgShapeHexagon } from "react-icons/cg";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="apps-intro about-intro">
        <h3>About me</h3>
      </div>
      <div className="about-me-container">
        <div className="about-me-hero">
          <CgShapeHexagon className="about-me-hexagon" />
          <article>
            Here we will have a headshot, some information about me in terms of
            life, career, future plans etc.
          </article>
        </div>
      </div>
    </div>
  );
}
