import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import whiteLogo from '../assets/Logo-white-site-reservation-de-chauffeurs-sur-paris.svg'
import React from 'react'
import { useTranslation } from "react-i18next";
const Company = () => {
  const { t } = useTranslation();

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };


    const data = [
        {link:"facebook.com",icon:<Facebook/>},
        {link:"intagram.com",icon:<Instagram/>},
        {link:"twitter.com",icon:<Twitter/>},
        {link:"linkedin.com",icon:<Linkedin/>},
    ]

  return (
    <div>
      <img
                  width="100%"
                  height="100%"
                  onClick={() => scrollToTop()}
                  src={whiteLogo}
                  alt="logo du site"
                  style={{ cursor: "pointer" }}
                  title="Logo du site"
                  loading="lazy"
                />
                <p className="my-4" dangerouslySetInnerHTML={{__html: t('footer_text')}}>
                </p>

                <div className='my-3'>
                    <div className='fs-6 fw-bold'>{t('we_are_available')}</div>
                    <div className='fs-light'>{t('monday')} - {t('sunday')} : 24h/24</div>
                </div>

                <div className='my-3 d-flex align-items-center'>
                    {data.map((item,index)=>(
                        <a key={index} href={item.link} className='border p-3 text-white text-decoration-none me-3'>
                            {item.icon}
                        </a>
                    ))}
                </div>
    </div>
  )
}

export default Company
