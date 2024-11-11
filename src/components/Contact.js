import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    const data = [
        { title: t('phone'), value: "+33 758 065 128",icon:<Phone size={20} strokeWidth={1.5}/> },
        { title: t('email'), value: "chauffeursvtc.paris@gmail.com",icon:<Mail size={20} strokeWidth={1.5}/> },
        { title: t('location'), value: "Paris, france",icon:<MapPin size={20} strokeWidth={1.5}/>  },
      ];


  return (
    <div className="w-100">
        <div className='fs-5 fw-bold'>Contact</div>
        <div className="d-flex flex-column justify-content-around my-3">
            {data.map((item, index) => (
                <div  key={index} className='my-2'>
                    <div className='fs-6 fw-medium'>{item.title}</div>
                    <div className="text-white mt-3" role="button"><span className='background-main p-2 text-black'>{item.icon}</span> <span className='mx-2 fw-light'>{item.value}</span></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Contact
