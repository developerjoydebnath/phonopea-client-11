import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPhone from './components/AddPhone/AddPhone';
import Phones from './components/AllPhones/Phones/Phones';
import SignIn from './components/Authintication/Login/Login';
import SignUp from './components/Authintication/SignUp/SignUp';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Search/Search/Home';
import ManageInventory from './components/ManageInventory/ManageInventory';
import MyInventory from './components/MyInventory/MyInventory';
import MyProfile from './components/MyProfile/MyProfile';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PhoneDetails from './components/PhoneDetails/PhoneDetails';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/phoneDetails/:id' element={<RequireAuth><PhoneDetails /></RequireAuth>} />
        <Route path='/phones' element={<Phones />} />
        <Route path='/addPhone' element={<RequireAuth><AddPhone /></RequireAuth>} />
        <Route path='/manageInventory' element={<RequireAuth><ManageInventory /></RequireAuth>} />
        <Route path='/login' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/myInventory' element={<RequireAuth><MyInventory /></RequireAuth>}></Route>
        <Route path='/profile' element={<RequireAuth><MyProfile/></RequireAuth>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

// https://www.npmjs.com/package/react-carousel-minimal
// https://www.npmjs.com/package/react-alice-carousel
// https://www.npmjs.com/package/react-multi-carousel
// https://reactjsexample.com/react-responsive-carousel-component-with-grid-layout-to-easily-create-a-carousel-like-photo-gallery/
