import {
  IconCalendarEvent,
  IconDashboard,
  IconLogout,
  IconProps,
} from "@tabler/icons-react";
import classes from "../css/NavbarSimple.module.css";
import { NAV_LINK, UserRole } from "../../lib/enum";
import AuthContext from "../../context/auth-context";
import { useContext } from "react";

type NavigationBarProps = {
  active: string;
  onClick: (nav: string) => void;
};

type NavLink = {
  link: string;
  label: NAV_LINK;
  icon: React.ElementType<IconProps>; // Adjusted type for icon
};

const NavigationBar: React.FC<NavigationBarProps> = ({ onClick, active }) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext is not defined");
  }

  const { logoutUser, user } = authContext;

  const nav_links: NavLink[] = [
    user?.role === UserRole.ADMIN
      ? { link: "", label: NAV_LINK.DASHBOARD, icon: IconDashboard }
      : null,
    { link: "", label: NAV_LINK.EVENT, icon: IconCalendarEvent },
  ].filter(Boolean) as NavLink[];

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
      {item.icon && <item.icon className={classes.linkIcon} stroke={1.5} />}
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
