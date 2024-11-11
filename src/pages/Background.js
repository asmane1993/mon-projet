import { Row, Col } from "react-bootstrap";
import Steps from "../components/Steps";
import { useTranslation } from "react-i18next";

function Background() {
  
  const { t } = useTranslation();

  return (
    <main className="background container" id="home">
      <Row>
        <Col
          lg="6"
          className="p-5 d-flex flex-column justify-content-center align-items-start"
        >

            <div className="py-5">
              <h1 className="fw-bold text-black lh-base" style={{fontSize:"560%"}}>
                {t('main_title')}
              </h1>
              <p className="fs-4 fw-light my-4">
              {t('main_subtitle')}
              </p>
              <Steps/>
            </div>
           
        </Col>
        <Col lg="6">
          <div>
            <img
              src="https://drively.codelayers.net/images/welcome_image.jpg"
              alt="chauffeur privé paris"
              style={{ objectFit: "cover" }}
              width="100%"
              height="100%"
              title="chauffeur privé paris"
            />
          </div>
        </Col>
      </Row>
    </main>
  );
}

export default Background;
