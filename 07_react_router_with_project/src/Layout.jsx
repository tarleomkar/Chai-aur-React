// import Footer from "./components/Footer/Footer"
// import Header from "./components/Header/Header"
// import { Outlet } from "react-router-dom"

// const Layout = () => {
//   return (
//     <>
//     <Header />
//     <Outlet />
//     <Footer />
//     </>
//   )
// }

// export default Layout

import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { useState, useEffect } from 'react';
3
function Layout() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    document.documentElement.className = theme; // Apply class to <html> for global effect
  }, [theme]);

  return (
    <div className="flex">
      <Sidebar setTheme={setTheme} />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
