import "antd/dist/antd.min.css";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("./pages/author/login/Login"))

const LayoutContainer = React.lazy(
  () => import("./layouts/Container/LayoutContainer")
);

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<LayoutContainer />} />
      </Routes>
    </Suspense>
  );
}

export default App;
