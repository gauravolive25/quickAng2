/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   /**
   * UserController.create()
   */
  create: function (req, res) {
  	var self = this;
  	User.create(req.body).exec(function (err, finn){
	  if (err) { return res.serverError(err); }
	  	self.getUsers(req, res);
	});	
  },

  getUsers: function(req, res) {
  	User.find().exec(function (err, users){
	  if (err) {
	    return res.serverError(err);
	  }
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
		res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
	  return res.json(users);
	});
  },

  updateUser: function(req, res) {
  		var self = this;
  		User.update({id : req.body.id}, req.body).exec(function afterwards(err, updated){
		  if (err) {
		    // handle error here- e.g. `res.serverError(err);`
		    return res.json(err);
		  }
		  //return res.json(updated);
		  self.getUsers(req, res);
		});
  },

  deleteUser: function(req, res){
  	User.destroy({id: req.body.id}).exec(function (err){
	  if (err) {
	    return res.negotiate(err);
	  }
	  sails.controllers.user.getUsers(req, res);
	});
  },

  updateOrCreate: function(req, res){
      var self = this; 
      if(req.body.id) {
		self.updateUser(req, res);
	  }else{
        self.create(req, res);
      }
  }	
};

