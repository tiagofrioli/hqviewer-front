import React, { createContext, useContext, useEffect, useState } from "react";
import { useCallback } from "react";
import api from "../../services/api";

// import { Container } from './styles';

interface AuthContextData {
  getEpisodes(): Promise<void>;
  data: DataProps[];
}

interface DataProps {
  title: string;
  thumbnail: string;
  episode: number;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    const storagedHQ = localStorage.getItem("@Data:hqep");

    if (storagedHQ) {
      setData(JSON.parse(storagedHQ));
    }
    getEpisodes();
  }, []);

  async function getEpisodes() {
    const response = await api.get("/episodes");
    setData(response.data);

    localStorage.setItem("@Data:hqep", JSON.stringify(response.data));
  }

  return (
    <AuthContext.Provider value={{ getEpisodes, data }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default AuthProvider;
