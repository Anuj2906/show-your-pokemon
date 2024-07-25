import './App.css';
import LoginAuth from './components/LoginAuth';
import PokemonCollection from './components/PokemonCollection';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import SignUpAuth from './components/SignUpAuth';
import PokemonDetailedCard from './components/PokemonDetailedCard';
import { useSelector } from 'react-redux';

function App() {
  const { isLoggedIn, username } = useSelector((state) => state.auth);

  // All dynamic routes
  const appRouter = createBrowserRouter([
    {
      path: '/*',// if user hits a random route, will be redirected to "/login"
      element: <Navigate to="/login" />
    },
    {
      path: '/login', // login route
      element: !isLoggedIn ? <LoginAuth /> : <Navigate to={`/auth/${username}`} />,
    },
    {
      path: '/signup', // signup route
      element: !isLoggedIn ? <SignUpAuth /> : <Navigate to={`/auth/${username}`} />,
    },
    {
      path: '/auth/:username', // pokemon collection page
      element: isLoggedIn ? <PokemonCollection /> : <Navigate to="/login" />,
    },
    {
      path: '/auth/:username/:pokemonName', // pokemon detail page
      element: isLoggedIn ? <PokemonDetailedCard /> : <Navigate to="/login" />,
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
