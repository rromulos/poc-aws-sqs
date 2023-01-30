# POC AWS-SQS - Simple QRCode Generator

This repository is intended to serve as a proof of concept for AWS SQS implemented in nodejs. In this implementation I tried to exercise all my personal knowledge (still superficial) related to the AWS SQS solution.

## Installation
- Navigate to the frontend folder and type => npm install
- Navigate to the backend folder and type => npm install

## How to set up the frontend application
- Navigate to the **frontend** folder and create a file named .env
- Into that folder set values for the following keys

**AWS_QUEUE_URL=your-aws-queue-url**

**AWS_QUEUE_REGION=your-sqs-region**

## How to set up the backend application
- Navigate to the **backend** folder and create a file named .env
- Into that folder set values for the following keys

**AWS_QUEUE_URL=your-aws-queue-url**

**AWS_QUEUE_REGION=your-sqs-region**

**AWS_QUEUE_MAX_NUMBER_OF_MESSAGES=10**

**AWS_QUEUE_WAIT_TIME_SECONDS=5**

## Start the frontend application
- node server.js

## Start the backend application
- node processor.js

## How to test
- Considering that both applications are running
- Open a browser and type http://localhost:3000/
- Type the amount of qrcodes you want to generate
- With the terminal open in the backend application, see the messages being received from SQS
- Open the qrcodes folder in the backend application and open the generated images

## Screenshots
- Sending messages to AWS SQS through the frontend application
![image](https://user-images.githubusercontent.com/27534241/215376435-84ca911f-6591-4429-9460-9220391793a0.png)

- Showing received messages in AWS SQS
![image](https://user-images.githubusercontent.com/27534241/215376485-69a2986f-9027-42f0-a09d-5a058b1dcdd0.png)

- Processing messages from AWS SQS

![image](https://user-images.githubusercontent.com/27534241/215376671-00ae81a1-8e27-41f0-b693-b3e62ed25494.png)

- Checking AWS SQS queue after processing
![image](https://user-images.githubusercontent.com/27534241/215376765-355e3a4a-173e-4b72-bd8f-65cc7f4c303d.png)




