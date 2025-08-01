const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/intern', (req, res) => {
  const name = req.query.name;

  const interns = {
    'Saqhib': {
      referralCode: 'saqhib2025',
      donationsRaised: 5000
    },
    'Anaya': {
      referralCode: 'anaya123',
      donationsRaised: 3000
    },
    'Ravi': {
      referralCode: 'ravi007',
      donationsRaised: 2000
    }
  };

  const data = interns[name] || {
    referralCode: 'default000',
    donationsRaised: 0
  };

  res.json({
    name,
    referralCode: data.referralCode,
    donationsRaised: data.donationsRaised
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
