#!/bin/bash

# Installing modules dependencies
echo Module intallation has been initiated
npm install

echo Install pm2 globally
sudo npm i -g pm2

echo Start node server
sudo pm2 start app.js --name server
