import { createContext, useState, useContext } from 'react'
import Axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth ] = useState({ isAuthenticated: false });

    const login = () => {
        Axios.get('http://localhost:3001/login').then((response) => {
          if (response.data.loggedIn === true) {
            // Set isAuthenticated to true
            setAuth({ ...auth, isAuthenticated: true });
          }
        });
      };

    return(
        <AuthContext.Provider value={{ auth, setAuth, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
  };

export default AuthContext;