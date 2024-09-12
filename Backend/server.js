import app from './app.js';

app.get("/",(req,res)=>{
    res.send("This is the root one");
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT}`);
})