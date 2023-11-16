import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { OneQuery } from "../pages/OneQuery";
import { MultipleQuery } from "../pages/MultipleQuery";
import { MultipleQueryWithComponents } from "../pages/MultipleQueryWithComponents";
import { OneQueryWithSuspense } from "../pages/OneQueryWithSuspense";
import { Suspense } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "one-query",
        element: <OneQuery />,
      },
      {
        path: "multiple-query",
        element: <MultipleQuery />,
      },
      {
        path: "multiple-query-components",
        element: <MultipleQueryWithComponents />,
      },
      {
        path: "multiple-query-suspense",
        element: (
          <Suspense fallback={"tetettetetet"}>
            <OneQueryWithSuspense />
          </Suspense>
        ),
      },
    ],
  },
]);
