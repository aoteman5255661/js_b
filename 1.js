const puppeteer = require('puppeteer');

const sleep = (timeountMS) => new Promise((resolve) => {
  setTimeout(resolve, timeountMS);
});

(async () => {
  var d = new Date();
  console.log(d.toLocaleTimeString());
  const browser = await puppeteer.launch({headless: true, executablePath: '/usr/bin/google-chrome', args: ["--no-sandbox"]});
  // const browser = await puppeteer.launch({headless: true, executablePath: '/usr/bin/google-chrome', args: ["--no-sandbox", '--proxy-server=socks5:']});
    
  
  // const browser = await puppeteer.launch({headless: true});

    // await page.setUserAgent("Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.0.0 Mobile Safari/537.36")

  // const browser = await puppeteer.launch({headless: false, executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'});
  // const browser = await puppeteer.launch({headless: false, executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', args:['--proxy-server=socks5://121.230.88.124:2829']});
  const page = await browser.newPage();  
  await page.goto('https://v.douyu.com/show/kDe0W2aGJ0nMA4Bz');
  await page.waitFor(1000);
//   await asyncio.sleep(10);
//   await page.screenshot({ path: 'example.png' });
//   var document = await page.evaluate(() => document);
  const button = await (await page.evaluateHandle(`document.querySelector("body > demand-video-app > main > div.layout-Main > div > demand-video").shadowRoot.querySelector("#playerBox > div")`)).asElement();
  await button.click();
  await console.log(11111)
  // await page.waitFor(1000);


  await sleep(10000);
  // await asyncio.sleep(30);
  await browser.close();
  var d = new Date();
  console.log(d.toLocaleTimeString());
})();

