const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Custom CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL in production
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/immigrationForm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the form data
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
});

const Form = mongoose.model('Form', formSchema);

// Endpoint to handle form submission
app.post('/api/submitForm', async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(200).send('Form submitted successfully');
  } catch (error) {
    res.status(500).send('Error submitting form');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
