import './App.css';
import LoginAuth from './components/LoginAuth';
import PokemonCollection from './components/PokemonCollection';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import SignUpAuth from './components/SignUpAuth';
import PokemonDetailedCard from './components/PokemonDetailedCard';
import { useSelector } from 'react-redux';

function App() {
  const { isLoggedIn, username } = useSelector((state) => state.auth);

  const appRouter = createBrowserRouter([
    {
      path: '/login',
      element: !isLoggedIn ? <LoginAuth /> : <Navigate to={`/auth/${username}`} />,
    },
    {
      path: '/signup',
      element: !isLoggedIn ? <SignUpAuth /> : <Navigate to={`/auth/${username}`} />,
    },
    {
      path: '/auth/:username',
      element: isLoggedIn ? <PokemonCollection /> : <Navigate to="/login" />,
    },
    {
      path: '/auth/:username/:pokemonName',
      element: isLoggedIn ? <PokemonDetailedCard /> : <Navigate to="/login" />,
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
