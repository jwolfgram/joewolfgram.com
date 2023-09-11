

var cassandra = require('cassandra-driver'),
PlainTextAuthProvider = cassandra.auth.PlainTextAuthProvider;
cassandraClient = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'hart_test', authProvider: new PlainTextAuthProvider('hart_web', 'password1234')});

cassandraClient.connect(function (){
	console.log('Cassandra Connected');
});

exports.listEntireTable = function () {
	return new Promise(function(resolve, reject) {
		cassandraClient.execute('SELECT * FROM tasks', [], function(err, result) {
			if (err) {
				console.log("Error: " + err);
				reject(err);
			} else {
				resolve(result);
			}
		});
    });
};

exports.sumbitTableEntry = function (first_name, last_name, email) {
	var cassandraUUID = cassandra.types.uuid();
	return new Promise(function(resolve, reject) {
		cassandraClient.execute('INSERT INTO tasks(id, first_name, last_name, email) VALUES(?,?,?,?)', [cassandraUUID, first_name, last_name, email], function(err, result) {
			if (err) {
				console.log("Cassandra Error: " + err);
				reject(err);
			} else {
				console.log(result);
				resolve(result);
			}
		});
    });
};

// Search by first_name filter

exports.searchById = function (id) {
	console.log("First Name is!!" + id);
	return new Promise(function(resolve, reject) {
		cassandraClient.execute('SELECT * FROM tasks WHERE id=?', [id], function(err, result) {
			if (err) {
				console.log("Cassandra Error: " + err);
				reject(err);
			} else {
				console.log(result);
				resolve(result);
			}
		});
    });
};

//Delete by id

exports.deleteById = function (id) {
	return new Promise(function(resolve, reject) {
		cassandraClient.execute('DELETE FROM tasks WHERE ID=?', [id], function(err, result) {
			if (err) {
				console.log("Cassandra Error: " + err);
				reject(err);
			} else {
				console.log(result);
				resolve(result);
			}
		});
    });
};

//Print specifics like first_name only?