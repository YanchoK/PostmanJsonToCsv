# PostmanJsonToCsv
### How it works?
Postman sends POST request to the Express server with the json data as plain text. The Express server edits the data and exports it as .csv file.

#### Add this in the postman test
```
var request = {
        url: "Your server url here",
        method: "POST",
        header: {
            "Content-Type": "text/plain"
        },
        body: {
            mode: "raw",
            raw: pm.response.text()
        }
    };

    pm.sendRequest(request, function (err, res) {
        //Handle the error or response here
        if (err) {
            console.error(err);
        } else {
            console.log(res);
        }
    });
```
