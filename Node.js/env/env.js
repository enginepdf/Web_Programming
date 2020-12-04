const express=require('express');

if(process.env.NODE_ENV!=='production') require('dotenv').config();

console.log(process.env.secretkey); // secret
console.log(process.env.NODE_ENV);