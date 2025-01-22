import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

// Let's see exactly what we get from this import:
console.log("DEBUG: Node version is:", process.version);
console.log("DEBUG: openai import =>", OpenAI);

try {
  // Try creating a new OpenAI instance
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'fake-key',
    // organization: 'org-81L0vgWqCW1Cii07fAYZWpfV', // You can uncomment if you want
  });
  console.log("DEBUG: Created openai instance =>", openai);
} catch (err) {
  console.error("ERROR while creating openai instance:", err);
}

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello from a minimal openai test!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
