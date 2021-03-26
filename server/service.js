const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ date: new Date().toISOString(), counters: [] }).write();

const addCounter = (counter) => {
  const exists = db.get('counters').find({ id: counter.id }).value();

  if (!exists) {
    db.get('counters').push(counter).write();
  }
};

module.exports = { addCounter };
