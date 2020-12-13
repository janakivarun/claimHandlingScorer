import MongoClient from 'mongodb';
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'claims'
const collectionName = 'claimNotes'
let db;
let results = [];

async function claimDSCall(id) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).catch(err => { console.log(err); });
        db = client.db(dbName)
        var collection = db.collection(collectionName);
        results = await collection.find({ claimId: id }).toArray();
        return results;
    } catch (error) {
        console.log(error);
    }
};
export default claimDSCall;