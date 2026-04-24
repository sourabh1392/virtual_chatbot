export default function Sidebar({chats,setActive,newChat,logout}){
  return (
    <div style={{width:250}}>
      <button onClick={newChat}>New</button>
      {chats.map(c=>(
        <div key={c._id} onClick={()=>setActive(c)}>
          {c.title}
        </div>
      ))}
      <button onClick={logout}>Logout</button>
    </div>
  );
}