const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/'){   
        res.end('Welcome to our Homepage.')
    }
    if (req.url === '/about'){
        res.end('About Page')
    } 
    res.end(`
    <h1>NOT AVAILABLE</h1>
    `)
})

server.listen(4000)