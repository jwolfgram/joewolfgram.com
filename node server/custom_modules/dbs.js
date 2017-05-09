var mongoose = require('mongoose'),
ObjectId = mongoose.Schema.Types.ObjectId;

var stepsSchema = new mongoose.Schema({
  step: String,
  checked: {type: Boolean, default: false},
  dateLastModified: { type: Date, default: Date.now }
});

var taskSchema = new mongoose.Schema({
	title: String,
	description: String,
	dateCreated: Date,
	dateLastModified: { type: Date, default: Date.now },
	steps: [stepsSchema],
	dueDate: Date,
	remindData: Date,
	internalNotes: [String],
	privateNotes: [String],
	creatorUserID: String,
	assignedToUserID: String,
	assignedToUserTeamID: String
});

var milesstonesSchema = new mongoose.Schema({
	title: String,
	orginization: String,
	description: String,
	dateCreated: Date,
	dateLastModified: { type: Date, default: Date.now },
	mileStones: [taskSchema]
});

var orginizationSchema = new mongoose.Schema({
	name: String,
	dateCreated: Date,
	dateLastModified: { type: Date, default: Date.now },
    mileStones: [milesstonesSchema]
});

var userSchema = mongoose.Schema({
	local: {
		username: String,
		password: { type: String, validate: /^(?=.*\d).{6,20}$/ },
		email: String,
		//If user has no orginization we can just use the mongo id for user, using String of orginization mongo object ID. If someone is trying to hack our server and sending lots of requests, less data to pull.
	},
	facebook: {
		id: String,
		token: String,
		email: String,
		name: String
	},
	google: {
		id: String,
		token: String,
		email: String,
		name: String
	},
	orginizationID: [ObjectId]
});

var User = mongoose.model('user', userSchema);
var Orginization = mongoose.model('orginization', orginizationSchema);

exports.User = User;
exports.Orginization = Orginization;