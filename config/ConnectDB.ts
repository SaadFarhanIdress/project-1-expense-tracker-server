import { connect, connection } from 'mongoose';

export default function ConnectDB() {
    connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
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