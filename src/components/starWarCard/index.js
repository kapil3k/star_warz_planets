import { Card, Col, Popover, Row, Tag, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./style.css";

const { Paragraph } = Typography;

const StarWarCard = ({ planet, handleResident, handlePlanetInfo }) => {
  return (
    <Row className="main">
      {planet.map(
        (
          {
            name,
            rotation_period,
            orbital_period,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water,
            population,
            residents,
            films,
            created,
            url,
          },
          index
        ) => (
          <Col key={index} xs={24} md={6}>
            <div style={{ padding: "5px 7px" }}>
              <Card className="card-morphism" title={name}>
                <Paragraph className="m-0">
                  <strong>Rotation Period:</strong> {rotation_period}
                </Paragraph>
                <Paragraph className="m-0">
                  <strong>Orbital Period:</strong> {orbital_period}
                </Paragraph>
                <Paragraph className="m-0">
                  <strong>Diameter:</strong> {diameter}
                </Paragraph>
                <Paragraph className="m-0">
                  <strong>Climate:</strong> {climate}
                </Paragraph>
                <Paragraph className="m-0" ellipsis={{ tooltip: gravity }}>
                  <strong>Gravity:</strong> {gravity}
                </Paragraph>
                <Paragraph className="m-0" ellipsis={{ tooltip: terrain }}>
                  <strong>Terrain:</strong> {terrain}
                </Paragraph>
                <Paragraph className="m-0">
                  <strong>Surface Water:</strong> {surface_water}
                </Paragraph>
                <Paragraph className="m-0">
                  <strong>Population:</strong> {population}
                </Paragraph>
                <Paragraph className="m-0">
                  <strong>Residents:</strong> {residents.length}
                  {residents.length > 0 && (
                    <Popover
                      placement="topLeft"
                      content={residents.map((resident, index) => (
                        <li key={index}>
                          {/* eslint-disable */}
                          <a onClick={() => handleResident(resident)}>
                            Resident {resident.split("/")[5]}
                          </a>
                        </li>
                      ))}
                    >
                      <InfoCircleOutlined className="info" />
                    </Popover>
                  )}
                </Paragraph>
                <Paragraph className="m-0">
                  <strong>Movies:</strong> {films.length}
                  {films.length > 0 && (
                    <Popover
                      placement="topLeft"
                      content={films.map((film, index) => (
                        <li key={index}>Movie {film.split("/")[5]}</li>
                      ))}
                    >
                      <InfoCircleOutlined className="info" />
                    </Popover>
                  )}
                </Paragraph>
                <Row className="mt-1" justify="end">
                  <Tag color="#108ee9">
                    <a onClick={() => handlePlanetInfo(url)}>More...</a>
                  </Tag>
                </Row>
              </Card>
            </div>
          </Col>
        )
      )}
    </Row>
  );
};

export default StarWarCard;
