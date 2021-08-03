# My Face Recognition Backend

<span style="color:red">**This README is a work in progress!**</span>

Hello! Thanks for stopping by.

This is the backend companion to my repo 'My Face Recognition', a web app that takes an image as input, and runs it through a face detection machine learning model to predict/detect faces in the image.

The web app is composed of 3 parts.

- Front-End interface (@ repo 'My Face Recognition')
- Back-End Server (this repo)
- Postgresql database

## How to use

### Set-up

Run `npm install` to install dependencies as listed in package.json

Register on [Clarifai](https://www.clarifai.com/) and obtain an API key.

Replace the following environment variables to match your Clarifai API key and your postgresql database instance.

- CLARIFAI_API_KEY
- DB_HOST
- DB_USER
- DB_PASS
