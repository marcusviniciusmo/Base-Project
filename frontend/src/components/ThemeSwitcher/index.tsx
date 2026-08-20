import { useTheme } from '../../hooks/UseTheme';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      <h1>THEME SWITCHER COMPONENT</h1>
      <p>{theme.name}</p>
    </button>
  );
}