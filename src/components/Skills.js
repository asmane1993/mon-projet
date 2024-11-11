import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Skills = () => {

  const { t } = useTranslation();


  const data = [
    { title: t('experienced'), value: 90 },
    { title: t('reliable'), value: 100 },
    { title: t('qualified'), value: 95 },
    { title: t('flexible'), value: 90 },
  ];

  return (
    <Row className="justify-content-between align-items-center">
      <Col lg="6" className="my-3">
        <div className="px-3">
          <div className="fs-5 main-text">{t('about_us')}</div>
          <div className="fs-1 fw-bold">
            {t('about_title')}
          </div>
          <p className="fw-light fs-5 my-3" dangerouslySetInnerHTML={{__html : t('about_text')}}>
            
          </p>
        </div>
      </Col>
      <Col lg="5" className="my-3">
        {data.map((item, index) => (
          <div key={index} className="my-4">
            <div className="d-flex justify-content-between fs-5">
              <span>{item.title}</span>
              <span>{item.value}%</span>
            </div>
            <div className="progress-item mt-2">
              <div
                style={{ width: `${item.value}%` }}
                className="progress-content"
                id="myProgressBar"
              ></div>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default Skills;
