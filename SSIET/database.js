const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://jyotismitadas365:KmQ2FZBQcwn9w5xp@ssiet.xeb8g9p.mongodb.net/?retryWrites=true&w=majority&appName=SSIET"

const mongoConnect = (callback) => {
  MongoClient.connect(url)
.then((client) => {
  console.log(client);
  callback(client);
})
.catch(error => {
  console.log('Error came while connecting to mongodb', error);
});
}

MediaSourceHandle.exports = mongoConnect;