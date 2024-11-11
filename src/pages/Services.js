import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      img: "https://themeholy.com/wordpress/taxiar/wp-content/uploads/2023/09/service_3_2-4-1.jpg",
      content:
        t('regular_transport_text'),
      title: t('regular_transport'),
    },

    {
      id: 2,
      img: "https://elementor-kits-02.nicdark.com/taxi-wordpress-elementor-kit/wp-content/uploads/sites/5/2024/03/black-traveler-man-with-suitcase-sitting-on-bench-in-airport-terminal-calling-and-looking-for-taxi.jpg",
      content:t('airport_transfer_text'),
      title: t('airport_transfer'),
    },

    {
      id: 3,
      img: "https://images.pexels.com/photos/6956892/pexels-photo-6956892.jpeg?auto=compress&cs=tinysrgb&w=600",
      content:t('delivery_text'),
      title: t('delivery'),
    },

    {
      id: 4,
      img: "https://themeholy.com/wordpress/taxiar/wp-content/uploads/2023/09/service_3_1-4-1.jpg",
      content:t('business_tranfer_text'),
      title: t('business_tranfer'),
    },

    {
      id: 5,
      img: "https://elementor-kits-02.nicdark.com/taxi-wordpress-elementor-kit/wp-content/uploads/sites/5/2024/03/woman-at-the-tram-station-in-the-city.jpg",
      content:t('tour_text'),
      title:t('tour'),
    },

    {
      id: 6,
      img: "https://images.pexels.com/photos/2318049/pexels-photo-2318049.jpeg?auto=compress&cs=tinysrgb&w=600",
      content:t('special_events_text'),
      title: t('special_events')
    },
  ];

  return (
    <section id="services">
      <div className="container py-5">
        <div  className="fs-5 text-black">{t("our_services")}</div>
        <div className="fs-1 fw-bold">{t("services_text")}</div>
        <Row className="mt-5">
          {data.map((item, index) => (
            <Col key={index} sm="6" lg="4" className="my-3">
              <div
                className="border-2 border border-dark main-border position-relative service-item"
                style={{ overflow: "hidden" }}
              >
                <div className="image-container">
                  <img
                    width="100%"
                    height="100%"
                    src={item.img}
                    alt={item.title}
                    className="img position-relative"
                    style={{ filter: "brightness(90%)",minWidth:"100%", minHeight: "350px" }}
                  />
                  <div className="title position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-end p-5 text-white fs-5 fw-medium">
                    {item.title}
                  </div>
                  <div className="details-panel">
                    <div className="fs-3 fw-bold my-3">{item.title}</div>
                    <div className="p-1 background-main"></div>
                    <p className="fs-6 mt-4">{item.content}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Services;
