import whiteLogo from '../assets/Logo-white-site-reservation-de-chauffeurs-sur-paris.svg'
import darkLogo from '../assets/Logo-dark-site-reservation-de-chauffeurs-sur-paris.svg'
import { Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Nav from "./Nav";
import Aside from "./Aside";
import i18n from "../lang/i18n";
import { useTranslation } from "react-i18next";
import { Dropdown } from "rsuite";
import { changeLanguage } from "../lang/i18n";

function Header() {

  const currentLanguage = i18n.language;  
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleLanguageChange = (lng) => {
    changeLanguage(lng);
    window.location.reload();
  };

  const lang = [
    { title: "English", country: "Usa", value: "en" },
    { title: "Français", country: "France", value: "fr" },
  ];

  const renderIconButton = (props, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        role="button"
        className="text-dark d-flex justify-content-center align-items-center p-2 bg-white"
      >
        <img
          src={require(`../assets/flags/${currentLanguage}.png`)}
          width="16px"
          height="11px"
          alt={`${currentLanguage} Flag `}
          style={{ minHeight: "11px", minWidth: "16px" }}
          className='img'
        />
        <span className="mx-2">|</span>
        <div>{currentLanguage}</div>
      </div>
    );
  };

  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 10; // Vous pouvez modifier cette valeur selon votre besoin
      if (isTop !== scrolled) {
        setScrolled(isTop);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const phoneNumber = "+33 758 065 128";

  return (
    <header
      className={
        scrolled ? "w-100" : "w-100 header-scrolled background-dark text-white"
      }
      style={{ position: "fixed", top: "0", zIndex: "4" }}
    >
      <div className="container py-4">
        <Row className="justify-content-between align-items-center w-100">
          <Col
            xs="8"
            sm="6"
            md="4"
            lg="2"
            className="d-flex align-items-center justify-content-center"
          >
            <img
              onClick={scrollToTop}
              width="100%"
              height="100%"
              src={
                scrolled
                  ? darkLogo
                  : whiteLogo
              }
              alt="Logo de de societé de chauffeurs vtc à Paris"
              style={{ cursor: "pointer" }}
              title="Logo de de societé de chauffeurs vtc à Paris"
              loading="lazy"
            />
          </Col>
          <Col lg="5" xl="6" className="p-0 d-none d-lg-block">
            <Nav scrolled={scrolled} />
          </Col>
          <Col
            md="4"
            lg="3"
            xl="2"
            className="align-items-center justify-content-center p-0 d-none d-md-flex"
          >
            <div className="p-2 rounded-circle icon-bouncing background-main">
              <Phone color="white" />
            </div>
            <div className="ms-3 d-flex flex-column">
              <span className="main-text">{t('call_us')}</span>
              <a
                className="text-decoration-none main-text"
                href={`tel:${phoneNumber}`}
              >
                {phoneNumber}
              </a>
            </div>
          </Col>
          <Col xs="3" sm="2" md="2" xl="1">
            <Dropdown renderToggle={renderIconButton}>
              <div className="px-3">
                {lang.map((lang, index) => (
                  <div
                    role="button"
                    key={index}
                    className="d-flex align-items-center p-2 text-dark rounded"
                    onClick={() => handleLanguageChange(lang.value)}
                  >
                    <img
                      src={require(`../assets/flags/${lang.value}.png`)}
                      width="16px"
                      height="11px"
                      style={{ minHeight: "11px", minWidth: "16px" }}
                      alt={`${lang.country} Flag `}
                    />
                    <span className="mx-2 fs-6 fw-medium">{lang.title}</span>
                  </div>
                ))}
              </div>
            </Dropdown>
          </Col>
        </Row>
      </div>

      <Aside show={show} handleClose={handleClose} />
    </header>
  );
}

export default Header;
