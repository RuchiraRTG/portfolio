import { Col } from "react-bootstrap";

const techColors = {
  React: '#61dafb',
  'CSS': '#264de4',
  'Node.js': '#3c873a',
  'Express.js': '#ffffff',
  'MongoDB': '#4db33d',
  'Firebase': '#ffcb2b',
  'Material UI': '#0081cb',
  'Flutter': '#02569B',
  'Dart': '#0175C2',
  'tailwind': '#2563eb',
  'springboot': '#6ab04c',
  'HTML': '#e34c26',
  'JavaScript': '#f7df1e',
  'Kotlin': '#7f52ff',
};

export const ProjectCard = ({ title, description, imgUrl, technologies }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        {/* Technologies tags section now below project details */}
        {technologies && technologies.length > 0 && (
          <div className="project-tags" style={{ marginTop: '10px' }}>
            {technologies.map((tech, idx) => (
              <span
                className="project-tag"
                key={idx}
                style={{
                  color: techColors[tech] || '#fff',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Col>
  )
}
