import React from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Trang chu",
    to: "/",
    exact: true,
  },
  {
    name: "Danh sach cong viec",
    to: "/todo-list",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      exact={activeOnlyWhenExact}
      path={to}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link className={`nav-item nav-link`} to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

function Menu(props) {
  const showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="//">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">{showMenus(menus)}</div>
      </div>
    </nav>
  );
}

export default Menu;
