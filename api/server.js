import express from 'express';
import bodyParser from 'body-parser';
import getClaimScore from './controller.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/onSubmit', async (req, res) => {
    const record = await getClaimScore(req.body.claimId);
    res.send(record);
});

app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
})