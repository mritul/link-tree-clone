import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `${process.env.REACT_APP_BACKEND_URL}/authenticate`,
    })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const login = (username, password) => {
    axios({
      method: "POST",
      data: {
        username: username,
        password: password,
      },
      withCredentials: true,
      url: `${process.env.REACT_APP_BACKEND_URL}/login`,
    })
      .then((res) => {
        if (res.data.info.message === "Login successful") {
          setUser(res.data);
          return "Login Succesful";
        } else {
          setUser(false); // So that helper message in login can be displayed only when false not null
          return "Incorrect username or password";
        }
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `${process.env.REACT_APP_BACKEND_URL}/logout`,
    })
      .then((res) => {
        setUser(null);
        return res.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
