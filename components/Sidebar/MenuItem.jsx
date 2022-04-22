import Image from "next/image";
import Link from "next/link";
import s from "./Sidebar.module.css";

const MenuItem = ({ active = false, data }) => {
  return (
    <Link href={data.link}>
      <a>
        <div className={s.menuItem}>
          <Image src={data.iconUrl} height={24} width={24} />
          <div className={s.menuTitle}>{data.title}</div>
        </div>
      </a>
    </Link>
  );
};

export default MenuItem;
