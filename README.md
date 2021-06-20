# Installation Kit

## 'Gerai Kita' Handicraft Art Market Progressive Web Application Using Ionic And Angular

### Description

---

Gerai Kita is a web application created for final year project.
It focuses on small business owners through one marketplace.
It approaches the recent technology of web-based development called Progressive Web Application (PWA).

**Keywords**: PWA, Web-based Application, E-commerce, Creative Art SMEs

This prototype is made under two main folders named:
1. `gerai-kita-web-app` for the front-end, deployment, and hosting.
2. `gerai-kita-web-app-server` for the back-end and database.

The programming languages used for this web application prototype are:

[Front-End](https://github.com/laurynsue/Gerai_Kita_FYP/tree/main/gerai-kita-web-app-frontend)
- Ionic 6.16.3
- Angular 12.0.5

[Back-End](https://github.com/laurynsue/Gerai_Kita_FYP/tree/main/gerai-kita-web-app-server)
- Node JS 16.3.0
- MySQL

- Firebase for deployment and hosting.

Here is the database snippet built using [GitHubGist](https://gist.github.com/laurynsue/b7a4dfe0c7058b5416a447d6dd6ab052).

### Setup Environment

---
> Do note, all the installation are mostly on the **latest** features.

1. Install [Visual Studio Code](https://code.visualstudio.com/download).
2. Install [npm](https://nodejs.org/en/) (which comes together with Node JS).
3. Install the Ionic CLI through command prompt or visual studio code terminal.
```
npm install -g @ionic/cli
```
4. Install the Angular CLI.
```
npm install -g @angular/cli
```
To **run** the front-end, use this command.
```
ionic serve
```


1. For the back-end, create a `package.json` file.
```
npm init
```
2. Install Express.
```
npm install express --save
```
3. Install crypto-js.
```
npm i crypto-js
```
4. Install body-parser which is Node.js body parsing middleware.
```
npm i [body-parser]
```
5. Install [cors](https://www.npmjs.com/package/cors) to provide Connect/Express middleware.
```
npm i cors
```
> Save Express, crypto-js, body-parser and cors in the **dependencies list**

6. To **run** the back-end, use this command `node index` if the **main file** is under `index.js` or `node server` if the **main file** is under `server.js`.
For this prototype, it is `node server` under `server.js`.

For the deployment and hosting, Firebase is installed under `gerai-kita-web-app` folder.

1. Install the Firebase CLI
```
npm install -g firebase-tools
```
2. Initialize the prototype
```
firebase init
```
3. Deploy the prototype
```
firebase deploy --only hosting
```

With [Firebase local test](https://firebase.google.com/docs/hosting/test-preview-deploy),
1. Run the following command:
```
firebase emulators:start
```
2. To preview locally (optional),
```
firebase hosting:channel:deploy gerai-kita-web-app.firebaseapp.com
```
3. Deploy under the command,
```
firebase deploy
```

###
