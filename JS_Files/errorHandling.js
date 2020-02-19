function getConnection(callback) {
    var connection;
    try {
        //Assume connection fails
        throw new Error('connection failed');
        
        callback(null, connection);
    }
    catch (error) {
        callback(error, null);  
    }
}

getConnection(function (error, connection) {
    if (error) {
        console.log('Error: ', error.message);
    }
    else {
        console.log('Connection success: ', connection);
    }
});

module.exports = {
    getConnection
}