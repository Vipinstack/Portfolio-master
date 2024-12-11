import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  // SiMacos,
  SiMysql
} from "react-icons/si";

function Toolstack() {
  const icons = [
    { icon: <SiMysql />, name: "MySql" },
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "PostMan" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiVercel />, name: "Vercel" },
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

export default Toolstack;
