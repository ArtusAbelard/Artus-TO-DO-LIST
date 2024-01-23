#!/bin/bash
 mkdir -p public/{css,js,img,page}
 touch public/js/main.js
 touch index.html
 chmod -R 777 *
 touch public/css/style.css
 mkdir -p src/sass/modules
 touch src/sass/app.sass 
 touch src/sass/variable.sass 
 touch src/sass/modules/body.sass 
 echo"<!DOCTYPE html>
 <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
 </head>
 <body>
 </body>
 </html>">$Script/index.html
 

