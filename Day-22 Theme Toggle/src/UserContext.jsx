import { createContext, useState } from "react";
import img from "./assets/img1.jpg";

export const ThemeContext = createContext();

// Children is a Special type of prop which can be used to pass a data we cannot use any different name in the place of children
/*
to pass value to this we need pass that as follows

<ThemeProvider>
<Child>
</ThemeProvider>
*/
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const profiles = [
    {
      Name: "Rushikesh Landge",
      Img: img,
      Address: "At post Madsangavi, Nashik",
      Age: 21,
      Bg: "O+",
      Class: "BE",
    },
    {
      Name: "Rushikesh Landge",
      Img: img,
      Address: "At post Madsangavi, Nashik",
      Age: 21,
      Bg: "O+",
      Class: "BE",
    },
    {
      Name: "Rushikesh Landge",
      Img: img,
      Address: "At post Madsangavi, Nashik",
      Age: 21,
      Bg: "O+",
      Class: "BE",
    },
  ];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, profiles }}>
      {children}
    </ThemeContext.Provider>
  );
}
