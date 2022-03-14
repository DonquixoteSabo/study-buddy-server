import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ title: "you're on students routes" });
});

export default router;
