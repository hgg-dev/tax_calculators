import React from "react";

interface UserContext {
  name: string;
  before_tax_income: number;
}

// export let UserContext = React.createContext<UserContext>({
//   name: "",
//   before_tax_income: 0,
// });

// export const UserProvider = <UserContext>() {

//     }

const userContext = React.createContext<UserContext | null>(null);

export const UserContextProvider = userContext.Provider;
export const UserContextConsumer = userContext.Consumer;

export let UserData: UserContext = {
  name: "John",
  before_tax_income: 1000,
};
