import './App.css';
import Header from "./components/header/header"
import Main from "./components/main/main"
import { ThemeContextProvider } from './contexts/ThemeContext';
import {ThemeContextConsumer, ThemeContextState} from "../src/contexts/ThemeContext"
function App() {
  return (
    <ThemeContextProvider>
      <ThemeContextConsumer>
        {((context:Partial<ThemeContextState>)=>(
          <div className={`wrapper ${context.darkTheme && 'wrapper_dark'}`}>
          <Header/>
          <Main/>
         </div>
        ))}
      </ThemeContextConsumer>
      
    </ThemeContextProvider>
    
  );
}

export default App;
