import {
  IconCalendarEvent,
  IconDashboard,
  IconLogout,
} from "@tabler/icons-react";
import classes from "../css/NavbarSimple.module.css";
import { NAV_LINK } from "../../lib/enum";
import AuthContext from "../../context/auth-context";
import { useContext } from "react";

const nav_links = [
  { link: "", label: NAV_LINK.DASHBOARD, icon: IconDashboard },
  { link: "", label: NAV_LINK.EVENT, icon: IconCalendarEvent },
];

type NavigationBarProps = {
  active: string;
  onClick: (nav: string) => void;
};

const NavigationBar: React.FC<NavigationBarProps> = ({ onClick, active }) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext is not defined");
  }

  const { logoutUser } = authContext;

  const links = nav_links.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        onClick(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            logoutUser();
          }}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
