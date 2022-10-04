import { ContentStyle } from "./ContentStyle";
import { Routes, Route } from "react-router-dom";
import routers, { Routers, routersPage } from "../../routers/routers";
import { useMemo } from "react";
import Breadcrumbs from "../../components/breadcrumb/Breadcrumbs";

export default function ContentContainer() {
  const mapRouters: any = (routes: Routers[]) =>
    routes.map((item) =>
      !item.children ? (
        <Route key={item.id} path={item.path} element={<item.element />} />
      ) : (
        mapRouters(item.children)
      )
    );

  const mapRoutersPage: any = (routes: Routers[]) =>
    routes.map((item) => (
      <Route key={item.id} path={item.path} element={<item.element />} />
    ));

  const routersSider = useMemo(() => mapRouters(routers), []);
  const routersPages = useMemo(() => mapRoutersPage(routersPage), []);

  return (
    <>
      <Breadcrumbs />
      <ContentStyle>
        <Routes>
          {routersSider}
          {routersPages}
        </Routes>
      </ContentStyle>
    </>
  );
}
