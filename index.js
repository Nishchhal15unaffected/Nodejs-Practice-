/*Node js 
package.json
Express 
Server Static content
*/



const express =require("express");
const app=express();
const port=3000;

// app.get("/",(req,res)=>{
// 	res.send("Nish");
// })
app.use(express.static('public'));
app.get('/calc/:op',(req,res)=>{
	 let result=0;
let var1=parseInt(req.query.var1);
let var2=parseInt(req.query.var2);
switch(req.params.op){
	case "add":result=var1+var2;break;
}
res.send("<body><h1>"+result+"</h1></body>");
})

app.listen(port,()=>{
	console.log("running");
})