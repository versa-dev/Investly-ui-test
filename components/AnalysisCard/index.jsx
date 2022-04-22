import Image from "next/image";
import s from "./AnalysisCard.module.css";

const AnalysisCard = ({ data }) => {
  return (
    <div className={s.root}>
      <div className={s.context}>
        <div className={s.title}>{data.title}</div>
        <div className={s.value}>{data.value.toLocaleString()}</div>
      </div>
      <div className={s.graph}>
        <Image
          src={
            data.trend === "decrease"
              ? "/assets/images/decrease.svg"
              : data.trend === "increase"
              ? "/assets/images/increase.svg"
              : "/assets/images/average.svg"
          }
          height={95}
          width={95}
        />
      </div>
    </div>
  );
};

export default AnalysisCard;
