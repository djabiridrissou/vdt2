import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  authState: {
    isAuthenticated: boolean;
    token: string | null;
    user: any;
  };
  makeLogin: (token: string, user: any) => void;
  makeLogout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState(() => {
    const storedToken = localStorage.getItem("ukwazi-v3Idr-userToken");
    let storedUser: any = null;
    if (localStorage.getItem("ukwazi-v3Idr-user")) {
      try {
        storedUser = JSON.parse(localStorage.getItem("ukwazi-v3Idr-user") || "");
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        storedUser = null;
      }
    }

    return {
      isAuthenticated: !!storedToken,
      token: storedToken,
      user: storedUser,
    };
  });


  useEffect(() => {
    //const actualRoute = window.location.pathname;
    /* if (!authState.isAuthenticated && actualRoute !== "/forgot-password") {
      navigate("/");
    } */
  }, [authState.isAuthenticated, navigate]);


  const makeLogin = (token: string, user: any) => {
    localStorage.setItem("ukwazi-v3Idr-userToken", token);
    localStorage.setItem("ukwazi-v3Idr-user", JSON.stringify(user));
    setAuthState({
      isAuthenticated: true,
      token,
      user,
    });
  };


  const makeLogout = () => {
    localStorage.removeItem("ukwazi-v3Idr-userToken");
    localStorage.removeItem("ukwazi-v3Idr-user");
    setAuthState({
      isAuthenticated: false,
      token: null,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, makeLogin, makeLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
