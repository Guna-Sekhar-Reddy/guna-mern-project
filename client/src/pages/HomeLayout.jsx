import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout page</h1>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
