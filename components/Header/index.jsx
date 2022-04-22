import Image from "next/image";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.title}>Your Dashboard</div>
      <div className={s.icons}>
        <div className={s.iconFrame}>
          <Image src="/assets/images/notification.svg" height={16} width={16} />
        </div>
        <div className={s.iconFrame}>
          <Image src="/assets/images/search.svg" height={16} width={16} />
        </div>
      </div>
    </div>
  );
};

export default Header;
