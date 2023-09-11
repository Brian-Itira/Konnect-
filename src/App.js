import LoginScreen from "./screens/LoginScreen";
import "./styles.css";
import { UserProvider } from "./UserStateContext";

const App = () => {
  return (
    <UserProvider>
      <LoginScreen />
    </UserProvider>
  );
};

export default App;
