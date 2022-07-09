import { connect, connection } from 'mongoose';

export default function ConnectDB() {
    connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = connection;
    db.on('error', (err) => {
        console.log("404 Not Found", err)
    });
    db.once('open', () => {
        console.log("Connection successfull....")
    })
}