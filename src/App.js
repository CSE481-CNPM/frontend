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

import LoadingSpinner from './shared/components/LoadingSpinner';

// const Home = React.lazy(() => import('./pages/Home'));
// const Movie = React.lazy(() => import('./pages/Movie'));
// const Booking = React.lazy(() => import('./pages/Booking'));
// const Library = React.lazy(() => import('./pages/Library'));
// const Authentication = React.lazy(() => import('./pages/Authentication'));
// const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  const { token, login, logout, userId, isAdmin, username } = useAuth();

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
        <Route path="/" element={<Home />} />
        <Route path="/movie/*" element={<Movie />} />
        <Route path="/booking/*" element={<Booking />} />

        <Route path="/authentication" element={<Navigate to="/" />} />

        <Route path="/library/:uid" element={<Library />} />

        <Route path="/admin" element={<NotFound />} />
        {/* {adminRoutes} */}

        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/*" element={<Movie />} />
        <Route path="/booking/*" element={<Booking />} />

        <Route path="/authentication" element={<Authentication />} />

        <Route path="/library/:uid" element={<Library />} />

        <Route path="/admin" element={<NotFound />} />
        {/* {adminRoutes} */}

        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        isAdmin: isAdmin,
        username: username,
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
