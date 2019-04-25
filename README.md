# Cocktails list app

## Setup

**Fork** and clone this repository to your machine. https://github.com/topkoong/RandomDrinks

### Install the dependencies in the local node_modules folder
By default, npm install will install all modules listed as dependencies in package.json

```bash

npm install 
```

Make sure that you have `Node` installed on your local machine. 

### Installing Node

Download the Node.js source code or a pre-built installer for your platform
https://nodejs.org/en/download/

Let’s see where node was installed and check the version.
```bash

$ which node
/usr/bin/node
$ node --version
v10.15.3
```

The Node.js installation worked, so we can now focus our attention on npm, which was included in the install.
```bash

$ which npm
/usr/bin/npm
$ npm --version
6.9.0
```

Assuming that you already have `Node 10+` installed, you can use npm to install the Expo CLI command line utility:
```bash

npm install -g expo-cli
```

## Running your React Native application

Install the Expo client app on your iOS `(App Store)` or Android phone `(Google Play)` and connect to the same wireless network as your computer. On Android, use the Expo app to scan the QR code from your terminal to open your project. On iOS, follow on-screen instructions to get a link.


For each row of the list it will display the Cocktail name and photo