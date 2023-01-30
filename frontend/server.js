import express from "express";
//the best thing here would be import only the sdk package for sqs instead of import the whole sdk for all products
import aws from "aws-sdk"
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const projectFolder = process.env.PWD

aws.config.update({region: process.env.AWS_QUEUE_REGION})

const sqs = new aws.SQS()

app.use(express.static(projectFolder))
app.use(express.json()) 

app.post('/requestImages', (req, res) => {
    const qtyOfImages = parseInt(req.body.qtyOfImages)

    for (let i = 0; i < qtyOfImages; i++) {
        sqs.sendMessage(
            {
                MessageBody: "Generate QRCode",
                QueueUrl: process.env.AWS_QUEUE_URL
            },
            (error, data) => {
                if (error) {
                    console.log("Error found => " + error);
                } else {
                    console.log("Success => " + data.MessageId);
                }
            }
        )
    }

    console.log(req.body);
    res.json({body: req.body, ok: true})
})

app.listen(3000, () => { 
    console.log("Application is running")
})