#!/bin/bash

./clean.sh

rm -rf android/app/src/main/assets
mkdir -p android/app/src/main/assets
rm -rf android/app/src/main/res/drawable-*

#react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
#
#cd android
#./gradlew assembleRelease