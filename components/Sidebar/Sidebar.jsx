import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import MenuItem from "./MenuItem";
import s from "./Sidebar.module.css";
import { navs, otherNavs } from "../../helper/const";

const Sidebar = () => {
  const { asPath } = useRouter();
  return (
    <div className={s.menu}>
      <div className={s.logo}>
        <Image src="/assets/images/logo.svg" width={121} height={34} />
      </div>
      <div className={s.content}>
        {navs.map((item, index) => (
          <MenuItem data={item} key={index} active={asPath === item.link} />
        ))}
      </div>
      <div className={s.footer}>
        {otherNavs.map((item, index) => (
          <MenuItem data={item} key={index} active={asPath === item.link} />
        ))}
        <Link href="/profile">
          <a>
            <div className={cn(s.menuItem, s.profile)}>
              <Image src="/assets/images/user.png" height={32} width={32} />
              <div>
                <div className={s.menuTitle}>Louise Thompson</div>
                <div className={s.plan}>Enterprice plan</div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
