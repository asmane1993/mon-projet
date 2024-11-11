import { useTranslation } from "react-i18next";

const Nav = ({scrolled}) => {

  const { t } = useTranslation();


  const data = [
    { title: t('about'), value: "about" },
    { title: t('rates'), value: "tarifs" },
    { title: t('services'), value: "services" },
    { title: t('booking'), value: "booking" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="w-100">
      <ul className="d-flex justify-content-around nav list-unstyled">
        {data.map((item, index) => (
            <li style={{cursor:"pointer"}} className={`${scrolled ? "text-black" : "text-main"}`} key={index} onClick={() => handleScroll(item.value)}>{item.title}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
