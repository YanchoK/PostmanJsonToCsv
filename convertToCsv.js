const { Parser } = require('json2csv');
const fs = require('fs');

function getDateTime() {
    let date = new Date();
  
    let day = date.getDate().toString().padStart(2, "0");
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let year = date.getFullYear();
    let hour = (date.getHours() + 2).toString().padStart(2, "0");
    let minute = date.getMinutes().toString().padStart(2, "0");
  
    let formattedDate = `${day}-${month}-${year}_${hour}:${minute}`;
    return formattedDate;
  }

function convertToCsv(textJson) {
    textJson = textJson.replaceAll('"item": ', '');
    textJson = textJson.replace('"ET_OUTPUT": {', '"items": [');
    textJson = textJson.replace('      },\n      "EV_MESSAGE": null', ']');

    const data = JSON.parse(textJson);

    const items = data.body.ZFM_MULESOFT_INTEGRATIONResponse.items;

    const keys = Object.keys(items[0]);

    // Create a new parser instance with your fields
    const parser = new Parser({ keys });

    // Convert your data to CSV
    const csv = parser.parse(items);

    // Write the CSV to a file
    fs.writeFileSync('./data_csv/data_'+ getDateTime() +'.csv', csv);
}

module.exports = convertToCsv;

