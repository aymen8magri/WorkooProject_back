const express = require('express');
require('./config/connect');

const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

// test server
app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Importing routes
const userRoutes = require('./routes/user.route');
const serviceRoutes = require('./routes/service.route');
const proposalRoutes = require('./routes/proposal.route');
// Using routes
app.use('/users', userRoutes);
app.use('/services', serviceRoutes);
app.use('/proposals', proposalRoutes);
app.use('/image', express.static('./public'));



// Start the server
app.listen(3000, () => {
    console.log('server is running on port 3000');
});