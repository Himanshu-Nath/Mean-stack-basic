mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/dummy");
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'Connection Error'));
conn.once('open', function() {
    console.log("DB Connected");
})