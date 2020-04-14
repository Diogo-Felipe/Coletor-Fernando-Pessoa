const puppeteer = require('puppeteer');

var fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    let page = await browser.newPage();
    let texto;

    for (let i = 4; i < 4544; i++) {

        await page.goto('http://arquivopessoa.net/textos/'+ i, {waitUntil: 'load'});  
 
        let poema = await page.evaluate(() => {
            const element = document.querySelector('.texto-poesia');
            if(element != null){
                return element.innerText;
            } else {
                return null;
            }
        });

        if(poema != null){
            texto += poema;
            texto += '\n';
        }

        console.log(i + '/4543');
    }


    fs.writeFile("C:\\Users\\dlcfe\\Documents\\FernandoPessoa\\fernandopessoa.txt", texto, function(erro) {

        if(erro) {
            throw erro;
        }

        console.log("Arquivo salvo");
    }); 

})();
