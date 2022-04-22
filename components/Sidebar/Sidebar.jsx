import s from "./Sidebar.module.css";
import Image from "next/image";
import MenuItem from "./MenuItem";

const navs = [
  { title: "Dashboard", link: "/", iconUrl: "/assets/images/dashboard.svg" },
  {
    title: "Available units",
    link: "/available-units",
    iconUrl: "/assets/images/available-units.svg",
  },
  {
    title: "Invoices",
    link: "/invoices",
    iconUrl: "/assets/images/invoices.svg",
  },
  {
    title: "Projects",
    link: "/projects",
    iconUrl: "/assets/images/projects.svg",
  },
  {
    title: "Social media",
    link: "/social-media",
    iconUrl: "/assets/images/social-media.svg",
  },
  {
    title: "Integrations",
    link: "/integrations",
    iconUrl: "/assets/images/integrations.svg",
  },
  {
    title: "Documentations",
    link: "documentations",
    iconUrl: "/assets/images/documentations.svg",
  },
];

const Sidebar = () => {
  return (
    <div className={s.menu}>
      <div className={s.logo}>
        <Image src="/assets/images/logo.svg" width={121} height={34} />
      </div>
      <div className={s.content}>
        {navs.map((item, index) => (
          <MenuItem data={item} key={index} />
        ))}
      </div>
      <div className={s.footer}></div>
    </div>
  );
};

export default Sidebar;
