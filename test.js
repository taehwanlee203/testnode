const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB 연결
mongoose.connect('mongodb://localhost:27017/gallery', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// 스키마 정의
const photoSchema = new mongoose.Schema({
    src: String,
    description: String,
    letter: String
});

const Photo = mongoose.model('Photo', photoSchema);

// 라우트 설정
app.get('/photos', async (req, res) => {
    const photos = await Photo.find();
    res.json(photos);
});

app.post('/photos', async (req, res) => {
    const newPhoto = new Photo(req.body);
    await newPhoto.save();
    res.json(newPhoto);
});

app.put('/photos/:id', async (req, res) => {
    const updatedPhoto = await Photo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPhoto);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
