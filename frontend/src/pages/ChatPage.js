import {useEffect,useState} from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import API from "../api";

export default function ChatPage(){
  const [chats,setChats]=useState([]);
  const [active,setActive]=useState(null);

  const load=async()=>{
    const res=await API.get("/chat");
    setChats(res.data);
    setActive(res.data[0]);
  };

  useEffect(()=>{load();},[]);

  const newChat=async()=>{
    const res=await API.post("/chat/new");
    setChats([res.data,...chats]);
    setActive(res.data);
  };

  const logout=()=>{
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div style={{display:"flex"}}>
      <Sidebar chats={chats} setActive={setActive} newChat={newChat} logout={logout}/>
      <ChatWindow chat={active}/>
    </div>
  );
}