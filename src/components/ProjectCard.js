import { Col } from "react-bootstrap";

const techColors = {
  'React': '#61dafb',
  'CSS': '#57B9FF',
  'Node.js': '#008000',
  'Express.js': '#ffffff',
  'MongoDB': '#5CE65C',
  'Firebase': '#ffcb2b',
  'Material UI': '#0081cb',
  'Flutter': '#02569B',
  'Dart': '#0175C2',
  'tailwind': '#41D2EF',
  'springboot': '#41B97D',
  'HTML': '#FF0000',
  'JavaScript': '#f7df1e',
  'Kotlin': '#7f52ff',
  'MySQL': '#FF5C00',
  'PHP': '#9D00FF',
  'Python': '#D4FF00',
  'FlaskApi': '#FCB404',
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
