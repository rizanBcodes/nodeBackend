import express from 'express';
import pizzaRoutes from './routes/pizza.js';

const port = process.env.PORT || 4000;
const app = express();

//configure express router
app.use('/pizza/', pizzaRoutes);

app.get(
    '/',
    (req, res) => {
        res.status(200).send('got a request to home url');
    }
)

app.get(
    '/icecream',
    () => {
        //retrieve icecream data from somewhre and send response
        //apicall
        res.send('');
    }
)


app.listen(port,
    () => {
        console.log(`server running on port ${port}`)
    });
