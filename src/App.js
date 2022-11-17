import { AuthProvider } from "./context/AuthContext";
import { RoutesApp } from './routes/index';

export default function App(){
  return(
  
    <AuthProvider>
      <RoutesApp/>
    </AuthProvider>
  )
}