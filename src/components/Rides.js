import { ArrowDownUp, Check, X } from "lucide-react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Rides = () => {

  const { t } = useTranslation();

  const data = [
    {
      depart: "Paris",
      destination: "ROISSY CDG",
      prix: "95",
      includes: [
        { title: t('fixed_price'), value: true },
        { title: t('luggage_included'), value: true },
        { title: t('welcoming'), value: true },
        { title: t('extra_passengers'), value: true },
      ],
    },
    {
      depart: "Paris",
      destination: "Orly",
      prix: " 69",
      includes: [
        { title: t('fixed_price'), value: true },
        { title: t('luggage_included'), value: true },
        { title: t('welcoming'), value: true },
        { title: t('extra_passengers'), value: false },
      ],
    },
    {
      depart: "Paris",
      destination: "Beauvais",
      prix: "180",
      includes: [
        { title: t('fixed_price'), value: true },
        { title: t('luggage_included'), value: true },
        { title: t('welcoming'), value: true },
        { title: t('extra_passengers'), value: true },
      ],
    },
    {
      depart: "Paris",
      destination: "Paris",
      prix: "39",
      includes: [
        { title: t('fixed_price'), value: true },
        { title: t('luggage_included'), value: true },
        { title: t('welcoming'), value: false },
        { title: t('extra_passengers'), value: false },
      ],
    }
  ];


  const shuffledData = [...data].sort(() => Math.random() - 0.5);
  const randomItems = shuffledData.slice(0, 4);
  
  return (
    <Row className="mt-5">
      {randomItems.map((trajet, index) => (
        <Col key={index} md="6" xl="3" className="p-3">
          <div className="border py-4 p-3 d-flex flex-column">
            <div className="main-text align-self-center background-dark p-4 main-text">
              <ArrowDownUp />
            </div>
            <div className="h4 text-center mt-4 text-dark">
              {trajet.depart} - {trajet.destination}
            </div>
            <div className="text-center main-text fw-bold">
              <span className="fs-1">{trajet.prix}</span>€
            </div>
            <hr className="border-secondary" />
            {trajet.includes.map((item, index) => (
              <div key={index} className="d-flex align-items-center my-2">
                {item.value ? (
                  <span className="text-success">
                    <Check size={20} />
                  </span>
                ) : (
                  <span className="text-danger">
                    <X size={20} />
                  </span>
                )}
                <span className="ms-2 fs-6 fw-light">{item.title}</span>
              </div>
            ))}
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Rides;
