const router = require("express").Router();
const Chat = require("../models/Chat");
const auth = require("../middleware/auth");

router.get("/", auth, async (req,res)=>{
  const chats = await Chat.find({userId:req.user.id});
  res.json(chats);
});

router.post("/new", auth, async (req,res)=>{
  const chat = await Chat.create({
    userId:req.user.id,
    title:"New Chat",
    messages:[]
  });
  res.json(chat);
});

router.post("/:id", auth, async (req,res)=>{
  const { message } = req.body;
  const chat = await Chat.findById(req.params.id);

  chat.messages.push({role:"user", content:message});

  const response = await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{
      "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      model:"gpt-4o-mini",
      messages:chat.messages,
      stream:true
    })
  });

  res.setHeader("Content-Type","text/plain");

  let full="";

  for await (const chunk of response.body){
    const lines = chunk.toString().split("\n").filter(l=>l.trim());

    for(const line of lines){
      const msg=line.replace("data: ","");

      if(msg==="[DONE]"){
        chat.messages.push({role:"assistant",content:full});
        await chat.save();
        return res.end();
      }

      try{
        const json=JSON.parse(msg);
        const token=json.choices[0].delta?.content;
        if(token){
          full+=token;
          res.write(token);
        }
      }catch{}
    }
  }
});

module.exports = router;