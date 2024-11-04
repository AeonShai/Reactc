import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const {user, setUser} = useContext(UserContext);
    console.log(user);
    const [loading, setLoading] = useState(false);
    const handleLogin = () => {
      setLoading(true);
      setTimeout(() => {
        setUser({id: 1, username: "johndoe"});
        setLoading(false);
      }, 1500);
    }
  return (
    <div>
      {
        !user && (
          <button onClick={handleLogin}>
            {loading ? "loading..." : "Login"}
            </button>
        )
      }
      <code>{JSON.stringify(user)}</code>
      <br />
      {
        user && <button onClick={() => setUser(null)}>Logout</button>
      }

    </div>
  );
}

export default Profile;