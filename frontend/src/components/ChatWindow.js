import {useState,useEffect,useRef} from "react";

export default function ChatWindow({chat}){
  const [msgs,setMsgs]=useState(chat?.messages||[]);
  const [msg,setMsg]=useState("");
  const bottom=useRef();

  useEffect(()=>{setMsgs(chat?.messages||[]);},[chat]);

  useEffect(()=>{bottom.current?.scrollIntoView();},[msgs]);

  const send=async()=>{
    setMsgs([...msgs,{role:"user",content:msg}]);

    const res=await fetch(`/api/chat/${chat._id}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":localStorage.getItem("token")
      },
      body:JSON.stringify({message:msg})
    });

    const reader=res.body.getReader();
    const decoder=new TextDecoder();

    let bot="";

    setMsgs(prev=>[...prev,{role:"assistant",content:""}]);

    while(true){
      const {done,value}=await reader.read();
      if(done) break;

      bot+=decoder.decode(value);

      setMsgs(prev=>{
        const u=[...prev];
        u[u.length-1].content=bot;
        return u;
      });
    }

    setMsg("");
  };

  return (
    <div style={{flex:1}}>
      {msgs.map((m,i)=>(
        <p key={i}><b>{m.role}:</b> {m.content}</p>
      ))}
      <input value={msg} onChange={e=>setMsg(e.target.value)}/>
      <button onClick={send}>Send</button>
      <div ref={bottom}/>
    </div>
  );
}