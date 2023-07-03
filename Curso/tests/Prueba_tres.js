import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';

let tiempo=500

fixture('Empezando con TestCafe')
    .page('https://devexpress.github.io/testcafe/example/');

test('Mi primer Test Uno', async t =>{
    await t 
       
        .typeText('#developer-name','Rodrigo')  
        .click('#submit-button');
});

test('Mi segundo Test Dos', async t =>{
    await t 
        .typeText('#developer-name','Juan')
        .click('#remote-testing')
        .click('#reusing-js-code')
        .click('#submit-button')        
        //.expect(Selector('#article-header').innerText).eql('Thank you, Juann!');
        await t.expect(Selector('#article-header').innerText).eql('Thank you, Juan!');
});

test('Mi tercer Test Tres', async t =>{
    const che1=XPathSelector("//input[contains(@id,'remote-testing')]")
    const che2=XPathSelector("//input[contains(@id,'reusing-js-code')]")
    const sub1=XPathSelector("//button[contains(@id,'submit-button')]")
    await t
        .maximizeWindow()
        .wait(tiempo)
        .typeText('#developer-name','Juan')
        .click(che1)
        .wait(tiempo)
        .click(che2)
        .wait(tiempo)
        .click(sub1)
        .wait(tiempo)
        .expect(Selector('#article-header').innerText).eql('Thank you, Juan!');
});

