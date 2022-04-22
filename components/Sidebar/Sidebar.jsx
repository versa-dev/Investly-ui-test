import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import MenuItem from "./MenuItem";
import s from "./Sidebar.module.css";

const navs = [
  {
    title: "Dashboard",
    link: "/",
    iconUrl: "/assets/images/dashboard.svg",
    activeIconUrl: "/assets/images/dashboard-active.svg",
  },
  {
    title: "Available units",
    link: "/available-units",
    iconUrl: "/assets/images/available-units.svg",
    activeIconUrl: "/assets/images/available-units-active.svg",
  },
  {
    title: "Invoices",
    link: "/invoices",
    iconUrl: "/assets/images/invoices.svg",
    activeIconUrl: "/assets/images/invoices-active.svg",
  },
  {
    title: "Projects",
    link: "/projects",
    iconUrl: "/assets/images/projects.svg",
    activeIconUrl: "/assets/images/projects-active.svg",
  },
  {
    title: "Social media",
    link: "/social-media",
    iconUrl: "/assets/images/social-media.svg",
    activeIconUrl: "/assets/images/social-media-active.svg",
  },
  {
    title: "Integrations",
    link: "/integrations",
    iconUrl: "/assets/images/integrations.svg",
    activeIconUrl: "/assets/images/integrations-active.svg",
  },
  {
    title: "Documentations",
    link: "/documentations",
    iconUrl: "/assets/images/documentations.svg",
    activeIconUrl: "/assets/images/documentations-active.svg",
  },
];

const otherNavs = [
  {
    title: "Settings",
    link: "/settings",
    iconUrl: "/assets/images/settings.svg",
    activeIconUrl: "/assets/images/settings-active.svg",
  },
  {
    title: "Help center",
    link: "/help-center",
    iconUrl: "/assets/images/help-center.svg",
    activeIconUrl: "/assets/images/help-center-active.svg",
  },
];

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
