#!/bin/bash

cp -R middleware prod
cp -R routes prod
cp -R models prod
cp -R utils prod
cp app.js prod
cp db.js prod
cp generateFakeGyn.js prod
cp package.json prod

cd prod
tar czf app.tar.gz middleware/ models/ routes/ utils/ app.js db.js generateFakeGyn.js package.json .env

sftp -i "devempr.pem" ubuntu@192.168.20.211 << 'ENDSSH'
put app.tar.gz
exit
ENDSSH

rm app.tar.gz

ssh -i "devempr.pem" ubuntu@192.168.20.211 << 'ENDSSH'
pm2 stop empr
rm -rf empr_back/* empr_back/.*
tar xf app.tar.gz -C empr_back
rm app.tar.gz
cd empr_back
npm install
pm2 start empr
ENDSSH