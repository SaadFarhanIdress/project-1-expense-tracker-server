import { connect, connection } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/.env' })

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

export default function ConnectDB() {
    connect(uri, {
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