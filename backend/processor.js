import fs from "fs"
import request from "request"
import aws from "aws-sdk"
import cron from "node-cron"
import crypto from "crypto"
import dotenv from 'dotenv'
dotenv.config()

aws.config.update({region: process.env.AWS_QUEUE_REGION})

const sqs = new aws.SQS()

const generateQrCode = (fileName, qrcodeData) => {
    request('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrcodeData).pipe(
        fs.createWriteStream('qrcodes/' + fileName + '.png')
    )
}
const keepAlive = () => {
    sqs.receiveMessage(
        {
            MaxNumberOfMessages: process.env.AWS_QUEUE_MAX_NUMBER_OF_MESSAGES,
            QueueUrl: process.env.AWS_QUEUE_URL,
            WaitTimeSeconds: process.env.AWS_QUEUE_WAIT_TIME_SECONDS
        },
        (error, data) => {
            if (error) {
                console.log("Something went wrong", error);
            } else if (data.Messages) {
                console.log('Messages received: ', data.Messages.length);
                data.Messages.forEach(element => {
                    generateQrCode(element.MessageId, crypto.randomBytes(8).toString('hex'))
                    sqs.deleteMessage(
                        {
                            QueueUrl: process.env.AWS_QUEUE_URL,
                            ReceiptHandle: element.ReceiptHandle
                        },
                        (error, message) => {
                            if (error) {
                                console.log("Something went wrong while deleting the message: " + error)
                            } else {
                                console.log("Message deleted successfully")
                            }
                        }
                    )
                });
            }
        }
    )
}

cron.schedule('*/5 * * * * *', () => {
    console.log('Processing!!!!')
    keepAlive();
})
