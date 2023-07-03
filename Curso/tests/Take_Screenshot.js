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
    
    await t
    .maximizeWindow()
    .wait(tiempo)
    
    .click(bt,{speed:sp})   
    // .takeScreenshot()
    // .takeScreenshot({
    //     path:     'C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/TESTCAFE_CURSO2/Curso/Archivos/foto.png',
    //     fullPage: false,
    // })    
    await Funciones.T_pantalla_false("C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/TESTCAFE_CURSO2/Curso/tests/screenshots/demo2/foto2.png")


    
    
   
});






