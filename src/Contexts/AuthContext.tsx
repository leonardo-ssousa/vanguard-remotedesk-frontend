import { createContext, useContext, useMemo, useState } from "react";
import type { User } from "../@types";

interface AuthContextData {
  isSigned: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isSigned, setIsSigned] = useState<boolean>(false);

  const contextValue = useMemo(() => {
    return {
      isSigned
    }
  }, [isSigned])
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if(!context){
    throw new Error("useauth deve ser usado dentro de um AuthProvider")
  }

  return context
}