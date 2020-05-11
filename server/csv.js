const app = require('express')();
const moment = require('moment');
const {Parser} = require('json2csv');
const PORT = 3000;
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/csv.html');
})
app.get('/downloadCsv',(req,res)=>{
    const dateFormats = [
        {
            // 'DD-MM-YYYY' : moment().format('DD-MM-YYYY'),
            // 'MM-DD-YYYY' : moment().format('MM-DD-YYYY'),
            // 'YYYY-DD-MM' : moment().format('YYYY-DD-MM'),
            // 'LL' : moment().format('LL'),
            '"YYYY-MM-DD HH:mm"' : moment().format("YYYY-MM-DD HH:mm"),
            'YYYY-MM-DD HH:mm:ss' : moment().format("YYYY-MM-DD HH:mm:ss"),
            // "YYYY-MM-DD HH:mm Z" : moment().format("YYYY-MM-DD HH:mm Z"),
            // 'DD-MMM-YYYY' : moment().format('DD-MMM-YYYY'),
        }
    ];
    const json2csvParser = new Parser();
    const dateCsv = json2csvParser.parse(dateFormats);
    res.setHeader('Content-disposition', 'attachment; filename=data.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send(dateCsv);
})
app.listen(PORT,()=>console.log(`Listening to port ${PORT}`))