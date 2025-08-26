import e from "express";
import { createNotes, getNotes, getNotesById } from "./database.js";
import dotenv from "dotenv";

const app = e();
app.use(e.json());
dotenv.config();

app.get('/', (req, res) => {
    res.send("<h1>This is heading one from backend</h1>")
})

app.get('/notes', async (req, res) => {
    const notes = await getNotes();
    res.send(notes)
})

app.get('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const notebyid = await getNotesById(id);
    res.send(notebyid)

})

app.post('/createNote', async (req, res) => {
    const { title, content } = req.body;
    const result = await createNotes(title, content);
    res.send(result)
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port ${process.env.PORT || 8080}`);
});