#!/bin/bash

#For every change in JSX files you need run this file for avoid errors like:
#does not exist in the haste module map
#or other random errors

rm -rf /tmp/metro-*
rm -rf /tmp/haste-*

#rm shim.js

# echo "PLEASE remove comment im shim.js where require('crypto')"
#./node_modules/.bin/rn-nodeify --hack --install

#maybe need clean ./node_modules/
#rm -rf node_modules
#npm install

cd android
./gradlew clean
