import { getTheme } from './data/themes';
import { useHashRoute } from './hooks/useHashRoute';
import { GamePage } from './pages/GamePage';
import { Home } from './pages/Home';

export default function App() {
  const route = useHashRoute();
  const theme = getTheme(route);

  return theme ? <GamePage key={theme.id} theme={theme} /> : <Home />;
}
