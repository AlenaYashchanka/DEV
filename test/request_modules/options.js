const options = {
    uri: 'https://jsonplaceholder.typicode.com/users',
    headers: {
        contentType: {
            'Content-Type': 'application/json; charset=utf-8',
          }
    },
    json: true // Automatically parses the JSON string in the response
};

module.exports = options;
