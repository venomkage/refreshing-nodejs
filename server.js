import e from "express";
import { getRows } from "./database.js";

const app = e();

app.get('/', (req, res) => {
    res.send("<h1>This is heading one from backend</h1>")
})

app.post('/login', (req, res) => {
    res.send("You have reached login endpoint");
})

app.get('/notes', async (req, res) => {
    const notes = await getRows();
    res.send(notes)
})

app.listen(8080, () => {
  console.log('Server is running on port 3000');
});