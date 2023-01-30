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
