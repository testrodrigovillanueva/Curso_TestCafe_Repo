fixture('Empezando con TestCafe')
    .page('https://devexpress.github.io/testcafe/example/');

test('Mi primer Test Uno', async t =>{
    await t 
        .typeText('#developer-name','Rodrigo')  
        .click('#submit-button');
})

