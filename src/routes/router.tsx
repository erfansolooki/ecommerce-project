import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routesObject";

export const Router = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={Routes} />
    </Suspense>
  );
};
