import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const HomepageCard = (props) => {
  const { img, title, subtitle, link, bodyText } = props;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{subtitle}</CardSubtitle>
        </CardBody>
        <img width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardText>{bodyText}</CardText>
          <Button href={link}>Learn more</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomepageCard;