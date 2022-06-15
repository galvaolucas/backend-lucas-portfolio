import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({message: 'Hellow!'})
})

app.post('/email', (request: Request, response: Response) => {
    const { name } = request.body;

    console.log(name);

    return response.send();
})

app.listen(3333, () => console.log('Server is running!'));

