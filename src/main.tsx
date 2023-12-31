import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { queryClient } from "./api/axios";
import { router } from "./routes";
import { worker } from "./mocks/browser";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

worker.start();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen />
  </QueryClientProvider>
);
