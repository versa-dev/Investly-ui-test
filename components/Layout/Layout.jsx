import cn from "classnames";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header";
import s from "./Layout.module.css";

const Layout = ({ children, ...props }) => {
  return (
    <div className={s.root}>
      <Sidebar />
      <div className={s.main}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
