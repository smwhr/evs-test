const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let items = [
  {"date": "2024-07-16 15:00",
   "meeting_point":  "devant chez Julien",
   "status": "A organiser",
   "student": {
     first_name: "Julien",
     last_name: "Zamor"
   }
  },
  {"date": "2024-07-16",
    "meeting_point":  null,
    "status": "Annulé",
    "student": {
      first_name: "Julien",
      last_name: "Zamor"
    }
   },
  {"date": "2024-07-16",
    "meeting_point":  "devant chez Julien",
    "status": "Recherche de place",
    "student": {
      first_name: "Julien",
      last_name: "Zamor"
    }
   },
  {"date": "2024-07-16",
    "meeting_point":  "devant chez Julien",
    "status": "Confirmé",
    "student": {
      first_name: "Julien",
      last_name: "Zamor"
    }
   }
];

app.get('/api/exams', (req, res) => {
  res.json(items);
});

app.post('/api/exams', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});