import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import Funciones  from './page-model2'

let tiempo=1000


fixture('Empezando con TestCafe')
    .page('http://devexpress.github.io/testcafe/example/');


test('Select Text', async t =>{
    const nameInput = Selector('#developer-name');
        
    await t 
    .maximizeWindow()
    .wait(tiempo)
    .typeText('#developer-name', 'Rodrigo',{speed:0.3})
    //.selectText('#developer-name')
    .pressKey("ctrl+a",{speed:0.3})
    .pressKey('delete',{speed:0.3})
    .typeText('#developer-name', 'Juan',{speed:0.3})
    .wait(tiempo)
})


test.only('Select Text Dos', async t =>{
    const nameInput = Selector('#developer-name');

    await Funciones.T_max()
    await Funciones.T_texto_limpiar_xpath("//input[contains(@id,'developer-name')]","Rodrigo",0.3)
    await Funciones.T_key("ctrl+a",0.3)
    await Funciones.T_key("delete",0.3)
    await Funciones.T_texto_limpiar_xpath("//input[contains(@id,'developer-name')]","Juan",0.3)
        
    //await t     
    
    //.selectText('#developer-name')
    // .pressKey("ctrl+a",{speed:0.3})
    // .pressKey('delete',{speed:0.3})
    // .typeText('#developer-name', 'Juan',{speed:0.3})
    // .wait(tiempo)
})