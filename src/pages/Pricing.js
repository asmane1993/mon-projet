import { BaggageClaim, Gauge, Users2 } from "lucide-react";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Rides from "../components/Rides";
import Estimate from "../components/Estimate";
import { useTranslation } from "react-i18next";

function Pricing() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [distance, setDistance] = useState(0);
  const [passagers, setPassagers] = useState(0);
  const [bagages, setBagages] = useState(0);
  const [tarif, setTarif] = useState(0);
  const [calculEnCours, setCalculEnCours] = useState(false);

  const calculerTarif = () => {
    setCalculEnCours(true);

    setTimeout(() => {
      const nouveauTarif = distance * 2.6 + passagers * 20 + bagages * 1; // calcul du tarif
      setTarif(nouveauTarif);
      setCalculEnCours(false);
      setShow(true);
    }, 2000);
  };

  return (
    <div className="container py-5 my-5" id="tarifs">
      <div className="fs-5 text-dark">{t('our_rates')}</div>
      <div className="fs-1 fw-bold" dangerouslySetInnerHTML={{__html:  t('our_prices')}}>
       
      </div>

      <Rides />

      <div className="mt-5">
        <Estimate
          distance={distance}
          setDistance={setDistance}
          passagers={passagers}
          setPassagers={setPassagers}
          bagages={bagages}
          setBagages={setBagages}
          calculerTarif={calculerTarif}
          calculEnCours={calculEnCours}
        />
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{t('journey_infos')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-dark p-3">
            <div className="d-flex align-items-center fs-6 my-3">
              <Gauge size={25} strokeWidth={1.5} />
              <span className="mx-2">
                {t('distance_in_kilo')} : {distance}km
              </span>
            </div>
            <div className="d-flex align-items-center fs-6 my-3">
              <Users2 size={25} strokeWidth={1.5} />
              <span className="mx-2">
                {t('extra_passengers')} : {passagers}
              </span>
            </div>
            <div className="d-flex align-items-center fs-6 my-3">
              <BaggageClaim size={25} strokeWidth={1.5} />
              <span className="mx-2">{t('luggage_count')} : {bagages}</span>
            </div>
            <p className="fs-6 text-danger my-4 fw-light">
              {t('estimate_text')}
            </p>
            <hr className="border-secondary" />
            <div className="fs-1 fw-bold">
              {t('total_amount')} : <span className="text-green blink">{tarif} €</span>
            </div>
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="main-btn p-3 px-5"
            variant="primary"
            onClick={handleClose}
          >
            {t('continue')}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Pricing;
