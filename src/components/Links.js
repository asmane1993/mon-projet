import { ArrowRight } from 'lucide-react';
import { useTranslation } from "react-i18next";

const Links = () => {

  const { t } = useTranslation();

  const data = [
    { title: t('home'), value: "home" },
    { title: t('about'), value: "about" },
    { title: t('services'), value: "services" },
    { title: t('rates'), value: "tarifs" },
    { title: t('booking'), value: "booking" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <nav className="w-100">
        <div className='fs-5 fw-bold'>{t('useful_links')}</div>
        <ul className="d-flex flex-column justify-content-around nav list-unstyled my-3">
            {data.map((item, index) => (
                <li style={{cursor:"pointer"}}  className="text-white my-2" key={index} onClick={() => handleScroll(item.value)}><ArrowRight size={20} strokeWidth={1.5}/> {item.title}</li>
            ))}
        </ul>
    </nav>
  )
}

export default Links
