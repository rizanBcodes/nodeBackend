import http, { Server } from 'http';
import {URL} from 'url';

const port = 4000;
const app = http.createServer(
    (req, res) => {
        res.writeHead(200);
        res.end('response sent to client');
    }
)

const myurl = new URL('https://www.google.com');
console.log(myurl.hostname);
console.log(myurl.port);
console.log(myurl.protocol);
console.log(myurl.origin);
console.log(myurl.hash);


app.listen(
    port,
    () => {
        console.log(`listening on port ${port}`)
    }
)