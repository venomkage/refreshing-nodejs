import http from 'http';

const server = http.createServer((req,res) => {
    if(req.url==='/'){
        res.write("<h1>This is a heading from backend</h1>");
        res.end();
    } else if(req.url==='/posts'){
        res.write("Yaha aa gae posts hamare");
        res.end();
    }
})

server.listen(process.env.PORT, () => {
    console.log('Server is running');
})