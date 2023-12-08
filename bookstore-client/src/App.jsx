import { useContext } from 'react';
import './App.css';
import { Outlet} from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';
import Navbar from './pages/shared/NavBar';
import FooterMain from './pages/shared/FooterMain';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { SearchProvider } from './contexts/SearchContext';



function App() {
  const { user } = useContext(AuthContext);

  return (
    <ShoppingCartProvider>
      <SearchProvider>
      <>
        <Navbar />
        <div className='min-h-screen'>
          <Outlet />
        </div>
        <FooterMain />
      </>
      </SearchProvider>
      </ShoppingCartProvider>
  );
}

export default App;
