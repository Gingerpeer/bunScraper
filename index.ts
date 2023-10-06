import puppeteer from 'puppeteer';

const signIn = async () => {

  const url = "https://scrapeme.live/shop/"
  const browser = await puppeteer.launch({ headless: 'new' }); 
  const page = await browser.newPage();

  try {
    await page.goto(url); 

    
    const images = await page.$$('img');
    if (images.length > 0) {
      console.log('Image sources:');
      for (const image of images) {
        const src = await image.evaluate(img => img.src);
        console.log(src);
      }
    } else {
      console.log('No images found on the page.');
    }

  } catch (error) {
    console.error('Error finding images with error:', error);
  } finally {
    await browser.close();
  }
};

signIn();
