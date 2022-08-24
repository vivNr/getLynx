require('dotenv').config();

const app = require('./app');
const port = process.env.SERVER_PORT || 3000;
const errorHandler = require('./utility/ErrorHandler');
const unhandledRequest = require('./utility/UnhandledError');
const cors = require('cors');
const corsOption = {
	origin: '*',
};
app.use(cors(corsOption));

//middleware start
require('./middleware/serverMiddleWare');
//middleware end
app.get('/info', (_req, res) => {
	res.json({ version: '1.0.0' });
});
app.use('/api/', require('./routes/publicRoute'));
app.use(errorHandler);
app.use(unhandledRequest());
app.listen(port, () => console.log(`server running on ${port}!`));
