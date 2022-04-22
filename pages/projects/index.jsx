import HomeCard from "../../components/HomeCard/HomeCard";
import { MOCK_DATA } from "../../helper/const";
import s from "./projects.module.css";

const Dashboard = () => {
  return (
    <div className={s.root}>
      {MOCK_DATA.map((item, index) => (
        <HomeCard data={item} key={index} />
      ))}
    </div>
  );
};

export default Dashboard;
