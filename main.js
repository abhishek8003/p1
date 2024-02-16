// const os=require("os");
// console.log(os.freemem());
// console.log(os.userInfo());
// console.log(os.uptime());
// console.log(os.homedir())
// console.log(os.type());
// console.log(os.EOL); 

const path=require("path");
// console.log(path.sep);
// console.log(path.join(__dirname,"abhishek","agawral"));
// console.log(path.basename(__dirname));
// console.log(path.resolve("p1","p2"));

// const fs=require('fs');
// const first=fs.readFileSync("./abhi.txt",'utf-8');
// fs.writeFileSync("./new1.txt",`here is the result ${first}`,{flag:'a',encoding:"utf-8"});
// console.log(first)
// fs.readFile("./abhi.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// }); 
const http=require("http");
const server=http.createServer((req,res)=>{
if(req.url=="/"){
    res.write("<h1>hi</h1>");
    res.end();
}
else if(req.url=="/about"){
    res.end("nlawfnlaf");
}
});
server.listen(5000);
