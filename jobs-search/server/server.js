const path = require('path');
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(buildPath));
app.use(cors());

app.get('/jobs', async (req, res) => {
    try { 
        let { description = '', full_time, location = '', page = 1 } = req.query;
        description = description ? encodeURIComponent(description) : '';
        location = location ? encodeURIComponent(location) : '';

        //If we want to only the full-time jobs then we need 
        //to add an additional full_time parameter to query string with the value of true
        full_time = full_time === 'true' ? '&full_time=true' : ''; 
        
    
    if (page) {
        page = parseInt(page);
        page = isNaN(page) ? '' : `&page=${page}`;
    }
    const query = `https://jobs.github.com/positions.json?description=${description}&location=${location}${full_time}${page}`;
    const result = await axios.get(query);
    res.send(result.data);
}catch (error) {
    res.status(400).send('Error while getting list of jobs. Please Try again later.');
    }  
    }); 
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
