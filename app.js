import express from 'express';
import { prisma } from './lib/prisma.ts';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post("/", async (req, res, next) => {

    const { email, name } = req.body

    if (!email) {
        return res.status(400).json({ message: "Please enter your email" });
    }

    if (!name) {
        return res.status(400).json({ message: "Please enter your name" });
    }
    if (email || name) {
        const newmail = await prisma.lead.findUnique({
            where: {
                email: email,
            },
        });
        if (newmail) {
            return res.status(400).json({ message: "Email is already exists" });
        }
        const newuser = await prisma.lead.create({
            data: {
                email: email,
                name: name,
            },
        });
        return res.status(200).json({ message: "User created successfully", user: newuser });
    }


});

const PORT = 3004;
app.listen(PORT, () => {
    console.log(`The Server is runing on the http://localhost:${PORT}`)
})