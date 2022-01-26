const http = require('http');
const {getAllUsers,getUsers,addUser} = require('./app/api/users/');

const server = http.createServer((req,res)=>{
    try{
        console.log(req.method,req.url);
        const [url, query] = req.url.split("?");
        // BEFORE ? IT WILL BE ADDED TO URL AND AFTER ? IT WILL BE ADDED TO QUERY
        if(url === '/users'){
            if(req.method === 'GET'){
                const q = new URLSearchParams(`?${query}`);
                const page = q.get('page') ?? 1;
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(getAllUsers(Number(page))));
            }
            else if(req.method === 'POST'){
            console.log(url,query);
            const [name, value] = query.split("=");
            console.log(name,value);
            addUser(value);
            console.log(value,"is added to the json server");
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(getAllUsers()));
            }
        }
        else if(url.startsWith("/users/")){
            const index = Number(req.url.split('/')[2]);
            req.writeHead(201, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(getUsers(index)));
        }
        else{
            throw new Error("query is not understood");
        }
       
    }
    catch(err){
        res.writeHead(500,{'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            data:'Error,' + err.message
        }));
    }
})

server.listen(3001,()=>{
    console.log('running on port 3001');
})