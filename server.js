import e from "express";

const app = e();

app.get('/', (req, res) => {
    res.send("<h1>This is heading one from backend</h1>")
})

app.listen(8080, () => {
  console.log('Server is running on port 3000');
});