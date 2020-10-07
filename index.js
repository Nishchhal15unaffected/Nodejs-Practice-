/*Node js 
package.json
Express 
Server Static content
*/



const express =require("express");
const app=express();
const port=3000;
app.listen(port,()=>{
	console.log("running");
})
// app.get("/",(req,res)=>{
// 	res.send("Nish");
// })
app.use(express.static('public'));
// app.get('/calc/add',(req,res)=>{
// 	 let q1=parseInt(req.query.q1);
// res.send(q1);
// })
