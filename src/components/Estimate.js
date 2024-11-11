import { Loader } from "rsuite";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { BaggageClaim, Gauge, Users2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Estimate = ({
  distance,
  setDistance,
  passagers,
  setPassagers,
  bagages,
  setBagages,
  calculerTarif,
  calculEnCours,
}) => {
  const style = {
    boxShadow: "none",
    outline: "none",
    height:"2cm"
  };

  const { t } = useTranslation();

  return (
    <Row>
      <Col md="6" xl="3" className="my-1">
        <div className="d-flex flex-column mb-2">
          <label className="fs-6" htmlFor="distance">Distance en kilomètres</label>
          <div className="input fs-6 mt-2">
            <span className="p-3">
              <Gauge strokeWidth={1.5} />
            </span>
            <input
              id="distance"
              name="distance"
              className="py-4 w-100 border-0 outline-0"
              min={0}
              max={100}
              type="number"
              placeholder={t('distance_between')}
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              style={style}
            />
          </div>
        </div>
      </Col>

      <Col md="6" xl="3" className="my-1">
        <div className="d-flex flex-column mb-2">
          <label className="fs-6" htmlFor="distance">Passagers supplémentaires</label>
          <div className="input fs-6 mt-2">
            <span className="p-3">
              <Users2 strokeWidth={1.5} />
            </span>
            <select
              id="persons"
              name="persons"
              className="p-4 w-100 border-0 outline-0"
              type="number"
              value={passagers}
              onChange={(e) => setPassagers(parseInt(e.target.value))}
              style={{ boxShadow: "none", height: "2cm" }}
            >
              <option value={0}>{t('none')}</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        </div>
      </Col>

      <Col md="6" xl="3" className="my-1">
        <div className="d-flex flex-column mb-2">
          <label className="fs-6" htmlFor="distance">Nombre de bagages</label>
          <div className="input fs-6 mt-2">
            <span className="p-3">
              <BaggageClaim strokeWidth={1.5} />
            </span>
            <select
            id="luggage"
            name="luggage"
            className="p-4 w-100 border-0 outline-0"
            type="number"
            value={bagages}
            onChange={(e) => setBagages(parseInt(e.target.value))}
            style={{ boxShadow: "none", height: "2cm" }}
          >
            <option value={0}>{t('without')}</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
          </div>
        </div>
      </Col>
      <Col md="6" xl="3" className="d-flex my-1">
        <button
          style={{ height: "2cm" }}
          className="dark-btn rounded-end justify-self-end align-self-end w-100 mb-2"
          onClick={calculerTarif}
          disabled={!distance}
        >
          {calculEnCours ? <Loader /> : t('calculate')}
        </button>
      </Col>
    </Row>
  );
};

export default Estimate;
