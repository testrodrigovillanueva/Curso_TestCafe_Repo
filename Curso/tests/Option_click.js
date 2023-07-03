import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';

let tiempo=1000

fixture('Empezando con TestCafe')
    .page('https://demoqa.com/buttons');

test('Click sencillo', async t =>{
    const buton1=Selector('button').withText('Click Me').nth(2)
    await t 
        .maximizeWindow()
        .wait(tiempo)       
        .click(buton1)
        .wait(tiempo) 
}).skipJsErrors();

test('Click Derecho', async t =>{
    //const buton1=Selector('button').withText('Click Me').nth(1)
    const buton1=Selector('button').withText('Right Click Me')
    await t 
        .maximizeWindow()
        .wait(tiempo)       
        .rightClick(buton1)
        .wait(tiempo) 
}).skipJsErrors();

test.only('Double Click', async t =>{
    //const buton1=Selector('button').withText('Click Me').nth(1)
    const buton1=Selector('button').withText('Double Click Me')
    await t 
        .maximizeWindow()
        .wait(tiempo)       
        .doubleClick(buton1)
        .wait(tiempo) 
}).skipJsErrors();


