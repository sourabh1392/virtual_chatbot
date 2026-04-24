import ChatPage from "./pages/ChatPage";
import Login from "./pages/Login";

export default function App(){
  return localStorage.getItem("token") ? <ChatPage/> : <Login/>;
}