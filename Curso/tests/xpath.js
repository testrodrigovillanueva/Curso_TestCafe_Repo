import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
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

test('Mi terce Test tres', async t =>{
    const check1=XPathSelector("//input[contains(@id,'remote-testing')]");
    const check2=XPathSelector("//input[contains(@id,'reusing-js-code')]");        
    const submit1=XPathSelector("//button[contains(@id,'submit-button')]");
    await t 
        .typeText('#developer-name','Juan')      
        .click(check1)
        .click(check2)
        .click(submit1)
        .expect(Selector('#article-header').innerText).eql('Thank you, Juan!');
        //await t.expect(Selector('#article-header').innerText).eql('Thank you, Juan!');
})



