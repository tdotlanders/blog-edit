import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

interface PostDetailsProps {
  imageUrl: string;
  title: string;
  description: string;
}
export function PostDetails({
  imageUrl,
  title,
  description,
}: PostDetailsProps) {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col>
            <img alt="Sample" src={imageUrl} />
          </Col>
          <Col>
            <CardTitle tag="h5">{title}</CardTitle>

            <CardText>{description}</CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
