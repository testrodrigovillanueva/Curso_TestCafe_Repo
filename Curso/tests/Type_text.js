import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';

let tiempo=1000


fixture('Empezando con TestCafe')
    .page('http://devexpress.github.io/testcafe/example/');


test('Type Text', async t =>{
    const nameInput = Selector('#developer-name');
        
    await t 
    .maximizeWindow()
    .wait(tiempo)
    .typeText(nameInput, 'Peter')
    .wait(tiempo)
    .typeText(nameInput, 'Parker', { replace: true })    
    .wait(tiempo)
}).skipJsErrors();

test('Type Text tiempo', async t =>{
    const nameInput = Selector('#developer-name');
   
        
    await t 
    .maximizeWindow()
    .wait(tiempo)
    .typeText(nameInput, 'Peter',{speed:0.1})
    .wait(tiempo)
    .typeText(nameInput, 'Parker', { replace: true })    
    .wait(tiempo)
}).skipJsErrors();

test.only('Type Text CaretPost', async t =>{
    const nameInput = Selector('#developer-name');
    
    await t 
    .maximizeWindow()
    .wait(tiempo)
    .typeText(nameInput, 'Peter',{speed:0.3})
    .wait(tiempo)
    .typeText(nameInput, 'Parker', { replace: true, speed:0.1 })    
    .wait(tiempo)
    .typeText(nameInput, ' ', { caretPos: 3,speed:0.1 })
    .wait(tiempo)
    .expect(nameInput.value).eql('Par ker');
}).skipJsErrors();










