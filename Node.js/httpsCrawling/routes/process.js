const express = require("express");
const fs = require("fs");
const jsdom = require("jsdom");

const crawling = require("../controller/crawl"); // 

const router = express.Router();
const { JSDOM } = jsdom;


// POST 
router.post("/crawl", async (req, res) => {
  const url = req.body.url;
  console.log(url)

let count=0;

try{
  let contents = await crawling.crawl(url); // html 
  // document.querySelector('article').innerText 
  let startIdx = contents.indexOf('<article>');
  let endIdx = contents.indexOf('</article>');
  let article = contents.slice(startIdx, endIdx + 1);
  // const dom = new JSDOM(contents);
  // dom.window.document.querySelector("article").textContent;

  // let dom = new JSDOM(contents);
  //   let splitedURL = url.split('.')[0];
  //   let article ='';
  //   switch(splitedURL){
  //     case 'https://medium':
  //       article = dom.window.document.querySelector('article').textContent;
  //       break;
  //     case 'https://velog':
  //       article = dom.window.document.querySelector('.sc-esjQYD').textContent;
  //       break;
  //     default:
  //       break;
  //   }
  // let now=new Date()
  crawling.writeFile(`./data/${count}.txt`, article);
  count++;
  res.status(201).send('ok');

} catch(err){
  res.status(404).send('error')
  }
})

router.get("/:order", async (req, res) => {
  let order=req.params.order;
  let filename=`./data/${order}.txt`;
  
  if (fs.existsSync(filename)) {
      crawling.readFile(filename).then(data=>
      res.status(200).send({data}));
  } else{
      res.status(404).send('not found');
  }
});

module.exports = router;
