import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import Funciones  from './page-model2'

let tiempo=3000

fixture('Empezando con TestCafe')
    .page('https://demoqa.com/buttons');

test('Click', async t =>{
        // const click=XPathSelector("//button[contains(@id,'trST0')]")
        const click1=Selector('button').withText('Click Me').nth(2)        
        await t 
        .maximizeWindow()
        .wait(tiempo)
        .click(click1)
       
        .wait(tiempo)
    })

test('Click Derecho', async t =>{
    // const click=XPathSelector("//button[contains(@id,'trST0')]")
    //const click2=Selector('button').withText('Click Me').nth(1)        
    const click2=Selector('button').withText('Right Click Me')      
    await t 
    .maximizeWindow()
    .wait(tiempo)
    .rightClick(click2)
    
    .wait(tiempo)
})

test('Click Derecho POM', async t =>{
    // const click=XPathSelector("//button[contains(@id,'trST0')]")
    //const click2=Selector('button').withText('Click Me').nth(1)        
    // const click2=Selector('button').withText('Right Click Me')      
    const click2=await Funciones.T_select_por_texto('button','Right Click Me')
    await t 
    .maximizeWindow()
    .wait(tiempo)
    .rightClick(click2)
    
    .wait(tiempo)
})

test('Double Click', async t =>{
    // const click=XPathSelector("//button[contains(@id,'trST0')]")
    //const click2=Selector('button').withText('Click Me').nth(1)        
    const click3=Selector('button').withText('Double Click Me')      
    await t 
    .maximizeWindow()
    .wait(tiempo)
    .doubleClick(click3)
    
    .wait(tiempo)
})

test.page("https://demoqa.com/text-box")
    ('Press Key', async t =>{
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
    })

test.only.page("https://demoqa.com/text-box")
('Press Key Focus', async t =>{
    const name=XPathSelector("//input[contains(@id,'userName')]")
    const email=XPathSelector("//input[contains(@id,'userEmail')]")
        
    await t 
    .maximizeWindow()
    .wait(tiempo)
    .typeText(name,"Rodrigo")
    .pressKey('ctrl+a')
    //Opciones portapapeles no se emulan
    //https://testcafe.io/documentation/402693/reference/test-api/testcontroller/presskey
 
    .wait(tiempo)
})






