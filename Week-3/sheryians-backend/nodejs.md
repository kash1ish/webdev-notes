## NODE.JS FUNDAMENTALS

- runtime environment for js 
- nodejs is basically c++ v8 engine code wrapped with js code which allows us to make server environment with js

import and exports:
exp=> module.exports = a;
module.exports = {a,b};

imp=> const a = require('./script.js);

## NPM 
- node package manager 
- npm ko node ka playstore samjho
- package => already built features/functionalities are packages(files of code)

## EXPRESSJS
- web framework for nodejs
- use case => routing 
- routing => GET POST PUT PATCH DELETE 
- GET => data url meh dikhta hai
- POST => data url meh nahi dikhta

- middleware => ek function hai jo har route se pehle chalta hai iska matlab saare routes mein koi bhi chale usse pehle middleware chalta hai and usmein likha code pehle execute hota hai 

-aisa koi bhi route jiska ek part same rehta hai and dusra part jo baar baar change hota hai 
ex: /profile/weeknd
    /profile/kashish
=> /profile/:username
- route parameters=> to make any route dynamic you can use : at the place where you want to make it dynamic and to access where value use req.params

-ejs is html which lets u do js
- template engines => ek markup style jo baad mein html mein convert hoti hai