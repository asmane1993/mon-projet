import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();

    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const finalCount = 90;

  useEffect(() => {
    const handleScroll = () => {
      if (counterRef.current) {
        const top = counterRef.current.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const increment = () => {
        if (count < finalCount) {
          setCount((prevCount) => prevCount + 1);
        }
      };

      const interval = setInterval(increment, 20); // Vitesse de comptage, en millisecondes

      return () => clearInterval(interval);
    }
  }, [count, finalCount, isVisible]);




  return (
    <Row className="my-5 align-items-center">
          <Col lg="4" className="my-3">
            <div
              style={{ height: "380px" }}
              className="d-flex flex-column justify-content-between  align-items-center border"
            >
              <img className="img" width="100%" height="50" alt="illustration taxi symbole" src="https://taxitema.tokotema.com/wp-content/uploads/2023/12/Shape-Fun-Fact-1.png"/>
              <div className="text-center">
                <div
                  ref={counterRef}
                  className={`fw-bold main-text counter ${
                    isVisible ? "visible" : ""
                  }`}
                  style={{ fontSize: "600%" }}
                >
                  {count} %
                </div>
                <div className="fs-2">{t('happy_clients')}</div>
              </div>
              <img className="img" width="100%" height="50" alt="illustration taxi symbole" src="https://taxitema.tokotema.com/wp-content/uploads/2023/12/Shape-Fun-Fact-1.png"/>
            </div>
          </Col>
          <Col lg="8" className="my-3">
            <img
            className="img"
            alt="Illustration d'un transfert"
              src="https://taxitema.tokotema.com/wp-content/uploads/2023/12/selective-focus-of-smiling-businessman-and-taxi-dr-2023-11-27-05-13-01-utc-1.jpg"
              width="100%"
              height="100%"
              style={{ maxHeight: "380px" }}
            />
          </Col>
        </Row>
  )
}

export default Clients
