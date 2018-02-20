var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    title: String,
    year: Number,
    imdb: String,
    type: String
}, {collection: 'movies'});

mongoose.model('movies', MovieSchema);