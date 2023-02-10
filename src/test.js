const tesseract = require('tesseract.js');
const { createWriteStream, readFileSync } = require('fs');
const image = readFileSync('./eng_bw.png');
(async () => {
   // const worker = await createWorker({ logger: console.log});
    // await worker.loadLanguage('eng');
    // await worker.initialize('eng');
    const { data } = await tesseract.recognize(image, "eng", {
        logger: console.log
    });

    console.log(data);
    console.log("Done")
})();