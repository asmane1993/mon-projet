import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Services = () => {

  const { t } = useTranslation();
  
  const services = [
    {
      title: t('rates'),
      content:
        t('service1'),
    },
    {
      title: t('waiting'),
      content:
        t('service2'),
    },
    {
      title: t('flexibility'),
      content:
        t('service3'),
    },
  ];

  return (
    <Row>
      {services.map((item, index) => (
        <Col key={index} sm="4" className="my-3">
          <div className="d-flex flex-column">
            <div className="h3 mt-4">{item.title}</div>
            <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Services;
