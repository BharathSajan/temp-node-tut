const http = require('http');

const server = http.createServer((req,res)=>{//incoming request and response we are sending back
    if(req.url ==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url ==='/about'){
        res.end('This is our short story')
    }
    res.end(`
   <h1>Oops!</h1>
   <p>We can't seem to fins the page you are looking for</p>
   <a href="/">back home </a>
    `)
})

server.listen(5000)