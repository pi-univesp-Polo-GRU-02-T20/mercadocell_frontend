import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import api from "../components/Services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    const loadingStoreData = () => {
      const storageLogin = localStorage.getItem("@Auth:login");
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageLogin && storageToken) {
        setLogin(storageLogin);
      }
    };
    loadingStoreData();
  }, []);

  const signIn = async ({ login, senha }) => {

    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("@Auth:login")}`;


    try {
      const response = await api.post("/auth/login", { login, senha });
      if (response.data.error) {
        alert(response.data.error);
        
      } else {
        setLogin(response.data);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;

        localStorage.setItem("@Auth:login", JSON.stringify(response.data.login));
        localStorage.setItem("@Auth:token", response.data.token);
      }
    } catch (error) {
      console.log(error);
      alert("Acesso não autorizado");
    }
  };

  const signOut = () => {
    localStorage.clear();
    setLogin(null);
    return <Navigate to="/" />;
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        signIn,
        signOut,
        signed: !!login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};