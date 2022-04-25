import React,{useContext, useState} from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContex = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContex)
}

export const ThemeProvider = ({children}) => {

    const [darkTheme,setDarkTheme] = useState(true)

    function toggleTheme(id) {
        setDarkTheme([...darkTheme, id])
        console.log(id)
    }


  return (
    <ThemeContext.Provider value = {darkTheme}>
        <ThemeUpdateContex.Provider value = {toggleTheme}>
            {children}
        </ThemeUpdateContex.Provider>
    </ThemeContext.Provider>
  )
}

