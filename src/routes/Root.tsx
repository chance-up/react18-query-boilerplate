import { Outlet, NavLink, Navigate } from "react-router-dom";

export const Root = () => {
  const movePage = (pageName: string) => {
    return Navigate({ to: pageName });
  };

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
            <li>
              <NavLink
                to={`multiple-query-suspense`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                One Query With Suspense
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => {
                  movePage("multiple-query-suspense");
                }}
              >
                One Query With Suspense
              </button>
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
