import './App.css';
import Footer from './components/common/Footer';
import { Navbar } from './components/common/Navbar';
import SideBar from './components/common/SideBar'
import PublicRoutes from './routes/PublicRoutes';
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <SideBar />
      <PublicRoutes />
      <Footer />
    </>

  );
}

export default App;
