// Login component
import React, { useState } from "react";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    if (rememberMe) {
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberMe");
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        Remember Me
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;