import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Steps = () => {
  const { t } = useTranslation();

  const data = [
    {
      step: "01",
      content: t('step1'),
    },
    {
      step: "02",
      content: t('step2'),
    },
    { step: "03", content: t('step3') },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [index, data.length]);

  const ajouterClasse = (i) => {
    return i === index ? "glowing-text step" : "";
  };


  return (
    <div className="fs-5 mt-5">
      {data.map((item, i) => (
        <div key={i} className="d-flex my-4">
          <span className={`fs-3 fw-bold ${ajouterClasse(i)}`}>
            {item.step}.
          </span>
          <span className="mx-4 fw-lighter">{item.content}</span>
        </div>
      ))}
    </div>
  )
}

export default Steps
