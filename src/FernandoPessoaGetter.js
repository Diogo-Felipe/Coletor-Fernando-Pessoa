const puppeteer = require('puppeteer');

var fs = require('fs');

module.exports = {

    async getPoemas() {
        const browser = await puppeteer.launch();
        let page = await browser.newPage();
        let texto;

        console.log('Acessando http://arquivopessoa.net/textos');
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

            console.log(i + '/4543 Páginas Lidas');
        }


        fs.writeFile("C:\\Users\\dlcfe\\Documents\\FernandoPessoa\\Poemas-Fernando-Pessoa.txt", texto, function(erro) {

            if(erro) {
                throw erro;
            }

            console.log("Arquivo salvo");
        }); 

        return texto;
    },

    async getProsas() {
        const browser = await puppeteer.launch();
        let page = await browser.newPage();
        let texto;
        
        console.log('Acessando http://arquivopessoa.net/textos');
        for (let i = 4; i < 4544; i++) {

            await page.goto('http://arquivopessoa.net/textos/'+ i, {waitUntil: 'load'});  
    
            let prosa = await page.evaluate(() => {
                const element = document.querySelector('.texto-prosa');
                if(element != null){
                    return element.innerText;
                } else {
                    return null;
                }
            });

            if(prosa != null){
                texto += prosa;
                texto += '\n';
            }

            console.log(i + '/4543 Páginas Lidas');
        }


        fs.writeFile("C:\\Users\\dlcfe\\Documents\\FernandoPessoa\\Prosa-Fernando-Pessoa.txt", texto, function(erro) {

            if(erro) {
                throw erro;
            }

            console.log("Arquivo salvo");
        }); 

        return texto;
    },
}