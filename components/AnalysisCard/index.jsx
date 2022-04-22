import s from "./AnalysisCard.module.css";

const AnalysisCard = ({ data }) => {
  return (
    <div className={s.root}>
      <div className={s.context}>
        <div className={s.title}>{data.title}</div>
        <div className={s.value}>{data.value.toLocaleString()}</div>
      </div>
      <div className={s.graph}>graph</div>
    </div>
  );
};

export default AnalysisCard;
