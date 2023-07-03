import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';
import xpathSelector from './xpath-selector';

let tiempo=100
let sp=0.6

fixture('Empezando con TestCafe')
    .page('https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/FileSelection/jQuery/Light/');



test.only('Switch Window', async t => {
         const you=XPathSelector("//a[contains(@class,'social-button youtube')]")
         let url=''
         let url2=''
         let url3=''
         const buscar=XPathSelector("//input[contains(@id,'search')]")
        
        await t
        .maximizeWindow()
        .wait(tiempo)
        //.scrollBy(0,4500)
        .scrollIntoView(you,{speed:sp})
        url = await t.eval(() => document.documentURI)
        console.log(url)
        await t.expect(url).eql('https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/FileSelection/jQuery/Light/');
        let ventana1=await t.getCurrentWindow();
        console.log("Ventana uno: " + url)

        //segunda Ventana
        await t
        .click(you,{speed:sp})
        .wait(tiempo)
        .maximizeWindow()
        .wait(tiempo)
        url2 = await t.eval(() => document.documentURI)
        console.log(url2)
        await t.expect(url2).eql('https://www.youtube.com/playlist?list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z');
        await t
        .typeText(buscar,"React Grid",{speed:sp})
        .pressKey("enter")
        .wait(3000)
        let ventana2=await t.getCurrentWindow();
        console.log("Ventana dos: " + url2)


        //Ventana 3 
        const ventana3=await t.openWindow("https://twitter.com/devextreme")
        const explorar=XPathSelector("(//span[contains(.,'Explorar')])[1]")
        await t
        .maximizeWindow()
        .wait(tiempo)
        url3 = await t.eval(() => document.documentURI)
        console.log(url3)
        await t.expect(url3).eql('https://twitter.com/devextreme');
        await t
        .click(explorar,{speed:sp})
        console.log("Ventana tres: " + url3)

        
    });


