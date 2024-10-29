npx create-expo-app myapp

npm install -g eas-cli

eas build --platform android

export ANDROID_HOME=/lib/android-sdk/platform-tools/

for android apk:


eas build -p android --profile preview

eas.json:


  {
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "preview4": {
      "distribution": "internal"
    },
    "production": {}
  }
}
