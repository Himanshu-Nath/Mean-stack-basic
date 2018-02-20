require("../models/movie");
var Movie = mongoose.model('movies');

module.exports = {
    //Movies List
    getMovieList: function(req, res) {
        Movie.find({}, null, {limit: 20}, function(err, result) {
            if(err) res.send({status: false, err});
            else res.send({status: true, result});
        })
    }
}