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
          <article className="about-me-article">
            I'm <span>Mats</span>. I'm an aspiring frontend developer with a
            passion for creating innovative solutions. <p />I have always found
            programming facinating and I love the creative aspect of web
            development. I'm always looking for new challenges to improve my
            skills. <p />
            I'm currently working on several personal projects to further
            develop my knowledge and experience in the field. I'm e xcited to
            see where this journey will take me and I look forward to sharing my
            work with the world.
          </article>
        </div>
      </div>
    </div>
  );
}
