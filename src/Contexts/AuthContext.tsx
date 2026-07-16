import { createContext, useContext, useMemo, useState } from "react";
import type { User } from "../@types";
import { Login } from "../API";
import { setApiToken } from "../API/axiosInstance";

interface AuthContextData {
  isSigned: boolean;
  signIn: (email: string, password: string) => Promise<User>
  user: User | null
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");

  const signIn = async (email: string, password: string) => {
    try {
      const userRes = await Login(email, password)
      localStorage.setItem('token', userRes.access_token)
      
      setUser(userRes.user)
      setApiToken(userRes.access_token)
      return userRes.user
    } catch (error) {
      throw error
    }
  }

  const contextValue = useMemo(() => {
    return {
      isSigned: !!user,
      signIn,
      user
    }
  }, [token, user])
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if(!context){
    throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  }

  return context
}