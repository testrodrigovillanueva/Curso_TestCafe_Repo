import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';
import xpathSelector from './xpath-selector';
import Funciones  from './page-model2'

let tiempo=100
let sp=0.6

fixture('Empezando con TestCafe')
    .page('https://devexpress.github.io/testcafe/example/');

test('Navigate Url', async t => {
    await t
    .maximizeWindow()
    .wait(tiempo)

    .navigateTo('https://github.com/DevExpress/testcafe');
    const bt=XPathSelector("//a[@class='btn ml-2'][contains(.,'Go to file')]")
    
    await Funciones.T_max(2000)

    await t
    // .maximizeWindow()
    // .wait(tiempo)
    .click(bt,{speed:sp})    
    .wait(tiempo)
   


    .navigateTo('https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/FileSelection/jQuery/Light/');
    const name =XPathSelector("//input[contains(@name,'FirstName')]");
    const last =XPathSelector("//input[contains(@name,'LastName')]");
   
    await t
        .maximizeWindow()
        .wait(tiempo)
        .switchToIframe('.demo-frame')
        .typeText(name,'Rodrigo', { replace: true, speed:0.3 })
        .typeText(last,'Villanueva', { replace: true, speed:0.3 })
        await Funciones.T_texto_limpiar(name,"Juan",0.2)
        await Funciones.T_texto_limpiar(last,"Perez",0.2)
   
    const urla=await Funciones.T_url_actual()
    //console.log(urla)
    await Funciones.T_validar_url('https://js.devexpress.com/Demos/WidgetsGallery/build/demo-template.html?version=22.2.6')
   
});




