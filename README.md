<h1 align="center">Welcome to One Dionys - file-download-utilities! 👋 </h1>

<p align="center">Functions to facilitate downloading files from the server, including support for monitoring the progress of the download. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-file-download-utilities?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-file-download-utilities?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-file-download-utilities?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-file-download-utilities?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-file-download-utilities.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-file-download-utilities?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-file-download-utilities?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const downloadFile = require('./src/fileDownload');

const url = 'http://example.com/file.txt';
const destination = './downloads/file.txt';

downloadFile(url, destination)
    .then((downloadedFilePath) => {
        console.log('File downloaded successfully:', downloadedFilePath);
    })
    .catch((error) => {
        console.error('Error downloading file:', error);
    });
```

#### Explanation

* The downloadFile function downloads a file from a given URL and saves it to a specified location. It uses asynchronous file operations to handle the downloading process.

#### Return Value

* The function returns a Promise that resolves with the path of the downloaded file if the download is successful.

## 📆 Release Date

* v1.0.0 : 17 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - file-download-utilities is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - file-download-utilities? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
