import { Card, Col, Row, Tag, Typography, Skeleton } from "antd";
import React from "react";
import "./style.css";

const { Paragraph } = Typography;

const FakeComponent = () => {
  return (
    <Row className="main">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Col key={item} xs={24} md={6}>
          <div style={{ padding: "5px 7px" }}>
            <Card
              className="card-morphism"
              title={
                <Skeleton.Button active={true} size="small" shape="block" />
              }
            >
              <Paragraph className="m-0">
                <strong>Rotation Period:</strong>{" "}
                {
                  <Skeleton.Button
                    className="skel-height"
                    active={true}
                    size="small"
                    shape="block"
                  />
                }
              </Paragraph>
              <Paragraph className="m-0">
                <strong>Orbital Period:</strong>{" "}
                {
                  <Skeleton.Button
                    className="skel-height"
                    active={true}
                    size="small"
                    shape="block"
                  />
                }
              </Paragraph>
              <Paragraph className="m-0">
                <strong>Diameter:</strong>{" "}
                {
                  <Skeleton.Button
                    className="skel-height"
                    active={true}
                    size="small"
                    shape="block"
                  />
                }
              </Paragraph>
              <Paragraph className="m-0">
                <strong>Climate:</strong>{" "}
                {
                  <Skeleton.Button
                    className="skel-height"
                    active={true}
                    size="small"
                    shape="block"
                  />
                }
              </Paragraph>
              <Paragraph className="m-0">
                <strong>Gravity:</strong>{" "}
                {
                  <Skeleton.Button
                    className="skel-height"
                    active={true}
                    size="small"
                    shape="block"
                  />
                }
              </Paragraph>
              <Paragraph className="m-0">
                <strong>Terrain:</strong>{" "}
                {
                  <Skeleton.Button
                    className="skel-height"
                    active={true}
                    size="small"
                    shape="block"
                  />
                }
              </Paragraph>
              <Paragraph className="m-0">
                <strong>Surface Water:</strong>{" "}
                {
                  <Skeleton.Button
                    className="skel-height"
                    active={true}
                    size="small"
                    shape="block"
                  />
                }
              </Paragraph>
              <Paragraph className="m-0">
                <strong>Population:</strong>{" "}
                {
                  <Skeleton.Button
                    className="skel-height"
                    active={true}
                    size="small"
                    shape="block"
                  />
                }
              </Paragraph>
              <Paragraph className="m-0">
                <strong>Residents:</strong>{" "}
                {
                  <Skeleton.Button
                    className="skel-height"
                    active={true}
                    size="small"
                    shape="block"
                  />
                }
              </Paragraph>
              <Paragraph className="m-0">
                <strong>Movies:</strong>{" "}
                {
                  <Skeleton.Button
                    className="skel-height"
                    active={true}
                    size="small"
                    shape="block"
                  />
                }
              </Paragraph>
              <Row className="mt-1" justify="end">
                <Tag color="#108ee9">
                  <a>More...</a>
                </Tag>
              </Row>
            </Card>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default FakeComponent;
