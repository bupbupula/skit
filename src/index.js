import express from 'express';
import skim from './middleware/skim.js';
const app = express();
app.use(skim);
app.use(express.static('public'));
app.listen(process.env.PORT || 3000);
