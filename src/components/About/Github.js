import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Dropdown, DropdownButton  } from "react-bootstrap";

function Github() {
  const currentYear = new Date().getFullYear(); // Get the current year
  const yearOptions = [2025, 2024, 2023, 2022, 2021, 2020];

  // Ensure the current year is added to the options dynamically (if not already included)
  if (!yearOptions.includes(currentYear)) {
    yearOptions.push(currentYear);
  }

  // Sort years in descending order for consistency
  yearOptions.sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(2022);
  const handleSelect = (eventKey) => {
    setSelectedYear(parseInt(eventKey, 10)); // Update selected year
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        year={selectedYear}
        username="vipinstack"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      <div style={{ marginTop: "20px" }}>
        <DropdownButton
          id="year-dropdown"
          title={`Year: ${selectedYear}`}
          onSelect={handleSelect}
        >
          {yearOptions.map((year) => (
            <Dropdown.Item key={year} eventKey={year}>
              {year}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </Row>
  );
}

export default Github;
