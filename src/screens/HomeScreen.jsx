
import { signOut } from "../Firebase";
import { useUser } from "../UserStateContext";

const HomeScreen = () => {

  const handleSignOutClick = () => {
    signOut();
  };

  const user = useUser();

  return (

    <div>
      <h1>Home</h1>
      <button onClick={handleSignOutClick}>sign out</button>

      <p>{user.name}</p>
      <p><img src={user.thumbnail}/></p>
       
    </div>
  );
};

export default HomeScreen;
