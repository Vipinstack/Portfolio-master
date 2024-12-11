import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDocker,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
// import { TbBrandGolang } from "eact-icons/trb";

function Techstack() {
  const icons = [
    { icon: <DiDocker />, name: "Docker" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((item, index) => (
        <OverlayTrigger
          key={index}
          placement="top" // Position of the tooltip
          overlay={<Tooltip id={`tooltip-${index}`}>{item.name}</Tooltip>}
        >
          <Col xs={4} md={2} className="tech-icons text-center">
            {item.icon}
          </Col>
        </OverlayTrigger>
      ))}
    </Row>
  );
}

export default Techstack;
