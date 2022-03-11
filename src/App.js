import React, { useContext, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Booking from './pages/Booking';
import Library from './pages/Library';
import Authentication from './pages/Authentication';
import NotFound from './pages/NotFound';
import AddMovie from './pages/Admin/AddMovie';
import LoadingSpinner from './shared/components/LoadingSpinner';
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Admin/Dashboard';

import './assets/libs/boxicons-2.1.1/css/boxicons.min.css';
import './scss/App.scss';
// const Home = React.lazy(() => import('./pages/Home'));
// const Movie = React.lazy(() => import('./pages/Movie'));
// const Booking = React.lazy(() => import('./pages/Booking'));
// const Library = React.lazy(() => import('./pages/Library'));
// const Authentication = React.lazy(() => import('./pages/Authentication'));
// const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  const { token, login, logout, isAdmin } = useAuth();

  let routes;
  let adminRoutes;

  // if (isAdmin !== '0' && isAdmin !== null) {
  //   adminRoutes = (
  //     <Route path="/admin" element={<Admin />}>
  //       <Route
  //         path="dashboard"
  //         element={<Layout location={'/admin/dashboard'} />}
  //       />
  //       <Route
  //         path="flights"
  //         element={<Layout location={'/admin/flights'} />}
  //       />
  //       <Route
  //         path="add-flight"
  //         element={<Layout location={'/admin/add-flight'} />}
  //       />
  //       <Route
  //         path="accounts"
  //         element={<Layout location={'/admin/accounts'} />}
  //       />
  //       <Route
  //         path="passengers"
  //         element={<Layout location={'/admin/passengers'} />}
  //       />
  //       <Route
  //         path="invoice-detail"
  //         element={<Layout location={'/admin/invoice-detail'} />}
  //       />
  //     </Route>
  //   );
  // } else {
  //   adminRoutes = (
  //     <Route path="/admin" element={<Admin />}>
  //       <Route path="dashboard" element={<Navigate to="/" />} />
  //       <Route path="customers" element={<Navigate to="/" />} />
  //       <Route path="products" element={<Navigate to="/" />} />
  //       <Route path="accounts" element={<Navigate to="/" />} />
  //       <Route path="passengers" element={<Navigate to="/" />} />
  //       <Route path="invoice-detail" element={<Navigate to="/" />} />
  //     </Route>
  //   );
  // }

  if (token) {
    routes = (
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Movie />} />
        <Route path="/booking/:movieId" element={<Booking />} />
=======
        <Route path='/' element={<Home />} />
        <Route path='/movie/*' element={<Movie />} />
        <Route path='/booking/*' element={<Booking />} />

        <Route path='/authentication' element={<Navigate to='/' />} />
>>>>>>> phandung

        <Route path='/library/:uid' element={<Library />} />

        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='addmovie' element={<AddMovie />} />
        </Route>

        {/* {adminRoutes} */}

        <Route path='/notfound' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/notfound' />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Movie />} />
        <Route path="/booking/:movieId" element={<Navigate to="/" />} />
=======
        <Route path='/' element={<Home />} />
        <Route path='/movie/*' element={<Movie />} />
        <Route path='/booking/*' element={<Booking />} />
>>>>>>> phandung

        <Route path='/authentication' element={<Authentication />} />

<<<<<<< HEAD
        <Route path="/library/:uid" element={<Navigate to="/" />} />
=======
        <Route path='/library/:uid' element={<Library />} />
>>>>>>> phandung

        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='addmovie' element={<AddMovie />} />
        </Route>
        {/* {adminRoutes} */}

        <Route path='/notfound' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/notfound' />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        isAdmin: isAdmin,
        login: login,
        logout: logout,
      }}
    >
      <BrowserRouter>
        <main>
          <Suspense fallback={<LoadingSpinner />}>{routes}</Suspense>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
