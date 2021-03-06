import React from 'react';
import {
  Card, CardText, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const HomepageCard = (props) => {
  const { img, title, subtitle, link, bodyText } = props;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{subtitle}</CardSubtitle>
        </CardBody>
        <img width="100%" src={img} alt={subtitle} />
        <CardBody>
          <CardText>{bodyText}</CardText>
          <Button href={link}>Learn more{" "}<FontAwesomeIcon icon={faCaretRight} size="lg" /></Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomepageCard;