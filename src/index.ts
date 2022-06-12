import Puppeteer from "puppeteer";

const example = async ()=>{
    const browser = await Puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://cafef.vn');
    await page.screenshot({path: 'example.png'});

    await browser.close();
};

example();