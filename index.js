import http from 'http';

const port = 4000;
const app = http.createServer(
    (req, res) => {
        if (req.url == "/pizza") {
            res.writeHead(200);
            console.log(req.url);
            res.end('thanks for choosing pizza!');
        } else if(req.url == "/avocado"){
            res.writeHead(200);
            console.log(req.url);
            res.end('thanks for choosing avocado pizza!');
        }
         else{
            res.writeHead(200);
            res.end('bad taste buddy');
        }

    }
)



app.listen(
    port,
    () => {
        console.log(`listening on port ${port}`)
    }
)