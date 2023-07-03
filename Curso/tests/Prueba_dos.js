import { Selector } from 'testcafe';
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
})

