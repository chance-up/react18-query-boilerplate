import { Outlet, NavLink } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <NavLink
                to={`one-query`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                One Query
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`multiple-query`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Multiple Query
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`multiple-query-components`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Multiple Query With Components
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
