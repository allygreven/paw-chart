import { ReactNode, createContext, useEffect, useState } from "react";
import { readToken, readUser, removeAuth, saveAuth } from "../data";
import { useNavigate } from "react-router-dom";

export type User = {
  userId: number;
  username: string;
};

export type UserContextValues = {
  user: User | undefined;
  token: string | undefined;
  handleSignIn: (user: User, token: string) => void;
  handleSignOut: () => void;
};
export const UserContext = createContext<UserContextValues>({
  user: undefined,
  token: undefined,
  handleSignIn: () => undefined,
  handleSignOut: () => undefined,
});

type Props = {
  children: ReactNode;
};
export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(readUser());
    const userRead = readUser();
    if (userRead) {
      navigate("/home");
    }
    // get value of readuser() and if its defined-- navigate to /home
    setToken(readToken());
  }, []);

  function handleSignIn(user: User, token: string) {
    setUser(user);
    setToken(token);
    saveAuth(user, token);
  }

  function handleSignOut() {
    setUser(undefined);
    setToken(undefined);
    removeAuth();
  }

  const contextValue = { user, token, handleSignIn, handleSignOut };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
