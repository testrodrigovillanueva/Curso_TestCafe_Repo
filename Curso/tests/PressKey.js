import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';

let tiempo=1000

fixture('Empezando con TestCafe')
    .page('https://demoqa.com/text-box');


test('Press Key', async t =>{
    const name=XPathSelector("//input[contains(@id,'userName')]")
        
    await t 
    .maximizeWindow()
    .wait(tiempo)
    .typeText(name,"Rodrigo")
    .pressKey('space')
    .typeText(name, "Igor")
    .pressKey('space')
    .typeText(name, "Villanueva")
    .pressKey('space')
    .typeText(name, "Nieto")
    
    .wait(tiempo)
}).skipJsErrors();


test('Press Key Focus', async t =>{
    const name=XPathSelector("//input[contains(@id,'userName')]")
    const email=XPathSelector("//input[contains(@id,'userEmail')]")
        
    await t 
    .maximizeWindow()
    .wait(tiempo)
    .typeText(name,"Rodrigo")
    .pressKey('ctrl+a')
    .pressKey('tab')
    //Opciones portapapeles no se emulan
    //https://testcafe.io/documentation/402693/reference/test-api/testcontroller/presskey
  
    .wait(tiempo)
}).skipJsErrors();


