import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import s from "./Sidebar.module.css";

const MenuItem = ({ active = false, data }) => {
  return (
    <Link href={data.link}>
      <a>
        <div className={active ? cn(s.menuItem, s.activeMenuItem) : s.menuItem}>
          <Image
            src={active ? data.activeIconUrl : data.iconUrl}
            height={24}
            width={24}
          />
          <div
            className={
              active ? cn(s.menuTitle, s.activeMenuTitle) : s.menuTitle
            }
          >
            {data.title}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default MenuItem;
