import { Outlet } from "react-router-dom";
import NavigationMenuDemo from "../NavigationMenuDemo";

const RootLayout = () => {
  return (
    <div className="min-h-screen ">
      <NavigationMenuDemo />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
