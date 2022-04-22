import Image from "next/image";
import AnalysisCard from "../../components/AnalysisCard";
import HomeCard from "../../components/HomeCard/HomeCard";
import { ANALYSIS_DATA, MOCK_DATA } from "../../helper/const";
import s from "./projects.module.css";

const Dashboard = ({ favorite, analysis }) => {
  return (
    <div className={s.root}>
      <div className={s.analysis}>
        {analysis.map((item, index) => (
          <AnalysisCard data={item} key={index} />
        ))}
      </div>
      <div className={s.favoriteHeader}>
        <div className={s.favoriteTitle}>Your favorites</div>
        <div className={s.searchBox}>
          <input placeholder="Try 'Miami beachhour'" className={s.input} />
          <div className={s.search}>
            <Image src="/assets/images/search.svg" height={16} width={16} />
          </div>
        </div>
      </div>
      <div className={s.favorite}>
        {favorite.map((item, index) => (
          <HomeCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

export const getStaticProps = () => {
  return {
    props: {
      analysis: ANALYSIS_DATA,
      favorite: MOCK_DATA,
    },
  };
};
