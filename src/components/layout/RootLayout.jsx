import { Outlet } from "react-router-dom";
import NavigationMenuDemo from "../NavigationMenuDemo";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationMenuDemo />

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
