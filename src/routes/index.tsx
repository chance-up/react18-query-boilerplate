import { createBrowserRouter } from "react-router-dom";
import { OneQuery } from "../pages/OneQuery";
import { MultipleQuery } from "../pages/MultipleQuery";
import { Root } from "./Root";

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
    ],
  },
]);
