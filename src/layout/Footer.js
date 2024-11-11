
import { Row, Col } from "react-bootstrap";
import Company from "../components/Company";
import Links from "../components/Links";
import Contact from "../components/Contact";
import { useTranslation } from "react-i18next";

function Footer() {

  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
      <div className="background-dark text-white pt-5">
          <footer className="container py-5">
            <Row className="justify-content-between">
              <Col lg="3">
                <Company/>
              </Col>
              <Col lg="3">
                <Links/>
              </Col>
              <Col lg="3">
                <Contact/>
              </Col>
            </Row>
            
          </footer>
          <div  style={{background:"#1C1C1C"}} className="background-dark text-center py-4">
          © {currentYear} <span className="main-text">TaxiParis</span> | {t('all_rights')}
          </div>
      </div>
  );
}

export default Footer;
