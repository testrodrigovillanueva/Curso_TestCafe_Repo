import { Selector } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';
import xpathSelector from './xpath-selector';
import Funciones  from './page-model2'

let tiempo=500


fixture('Empezando con TestCafe')
    .page('https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/FileSelection/jQuery/Light/');




test('Upload Files test', async t => {
    
    const name =XPathSelector("//input[contains(@name,'FirstName')]");
    const last =XPathSelector("//input[contains(@name,'LastName')]");
    const upload =XPathSelector('//*[@id="file-uploader"]/div/div/div/div[1]/div[2]/input');    
    //const upload =XPathSelector('//*[@id="file-uploader"]/div/div/div/div[1]/div[1]/div/span');
    const cargar=xpathSelector("//span[@class='dx-button-text'][contains(.,'Update profile')]")
    await t
        .maximizeWindow()
        .wait(tiempo)
        .switchToIframe('.demo-frame')
        .typeText(name,'Rodrigo', { replace: true, speed:0.5 })
        .typeText(last,'Villanueva', { replace: true, speed:0.5 })
        .setFilesToUpload(upload, [
            'C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/TESTCAFE_CURSO2/Curso/Archivos/img_1.jpg'            
                      
        ])
        .wait(tiempo)
        .click(cargar)
});


test.only('Upload Files test 2', async t => {
    
    const name =XPathSelector("//input[contains(@name,'FirstName')]");
    const last =XPathSelector("//input[contains(@name,'LastName')]");
    const upload =XPathSelector('//*[@id="file-uploader"]/div/div/div/div[1]/div[2]/input');
    const cargar=xpathSelector("//span[@class='dx-button-text'][contains(.,'Update profile')]")
    await Funciones.T_max()
    await t.switchToIframe('.demo-frame')
        // .typeText(name,'Rodrigo', { replace: true, speed:0.3 })
        // .typeText(last,'Villanueva', { replace: true, speed:0.3 })
    await Funciones.T_texto_limpiar(name,"Juan",0.4)
    await Funciones.T_texto_limpiar(last,"Perez",0.4)
    await t.setFilesToUpload(upload, [
            'C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/TESTCAFE_CURSO2/Curso/Archivos/img_1.jpg',
            'C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/TESTCAFE_CURSO2/Curso/Archivos/img_2.jpg',
        ])
    await Funciones.T_tiempo(tiempo)
    await Funciones.T_click(cargar)
});



