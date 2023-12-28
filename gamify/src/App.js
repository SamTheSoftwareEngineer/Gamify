import InfoPage from './components /InfoPage';
import LoginPage from './components /LoginPage';
import NavBar from './components /Navbar';

function App() {
  useEffect(() => {
    const RememberMe = localStorage.getItem("rememberMe");

    if (RememberMe === "true") {
      // TODO: Handle remember me logic
    }
  }, []);

  // Application content 
  }
  return (
    <div>
      <NavBar />
      <LoginPage />
    </div>
  );

export default App;
