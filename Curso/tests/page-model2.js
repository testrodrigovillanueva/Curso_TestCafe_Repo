import { Selector, t } from 'testcafe';
import XPathSelector from './xpath-selector';
import { ClientFunction } from 'testcafe';

let tiempo=500
let sp=0.7


class Funciones{
    constructor () {
       this.bt1=Selector('#submit')
       this.name=Selector('#userName')
    }
    
    async T_max(ti=tiempo){
        await t
            .maximizeWindow()
            .wait(ti)
    }

    async T_texto(select,texto,velocidad=sp){
        await t
            .typeText(select,texto,{speed:velocidad})
    }

    async T_texto_limpiar(select,texto,velocidad=sp){
        await t
        .typeText(select,texto, { replace: true },{speed:velocidad})    
    }

    async T_texto_xpath(select,texto,velocidad=sp){
        const val=XPathSelector(select)
        await t
            .typeText(val,texto,{speed:velocidad})
    }

    async T_texto_limpiar_xpath(selector,texto,velocidad=sp){
        const val=XPathSelector(selector)
        await t
        .typeText(val,texto, { replace: true },{speed:velocidad})    
    }

    async T_click(selector,velocidad=sp){
        await t
            .click(selector,{speed:velocidad})
    }

    async T_click_xpath(selector,velocidad=sp){
        const selec=XPathSelector(selector)
        await t
            .click(selec,{speed:velocidad})
    }

    async T_click_derecho_xpath(selector,velocidad=sp){
        const selec=XPathSelector(selector)
        await t
            .rightClick(selec,{speed:velocidad})
    }

    async T_doble_click_xpath(selector,velocidad=sp){
        const selec=XPathSelector(selector)
        await t
            .doubleClick(selec,{speed:velocidad})
    }

    async T_tiempo(ti=tiempo){
        await t
            .wait(ti)
    }
    
    async T_key(keyy,velocidad=sp){
        await t
            .pressKey(keyy,{speed:velocidad})
            
    }

    async T_scrollSel(selector,velocidad=sp){
        await t
            .scrollIntoView(selector,{speed:velocidad})
            
    }

    async T_scrollSel_xpath(selector,velocidad=sp){
        const selec=XPathSelector(selector)
        await t
            .scrollIntoView(selec,{speed:velocidad})
            
    }

    async T_scrollxy(x,y,velocidad=sp){
        await t
            .scrollBy(x,y,{speed:velocidad})
           
    }

    async T_comboBox(selector,texto,velocidad=sp){
        const selec=XPathSelector(selector)
        const SelectOption = selec.find('option');
        await t
            .click(selec)
            .click(SelectOption.withText(texto),{speed:velocidad})            
    }

    async T_Navegar_url(direccion,ti=tiempo){
        await t
            .navigateTo(direccion)
            .wait(ti)
    }

    async T_Open_Window(direccion,ti=tiempo){
        await t
            .openWindow(direccion)
            .wait(ti)
    }

    async T_select_por_texto(tipo,texto){
        const select=Selector(tipo).withText(texto)      
        return select
    }

    async T_valor_texto_xpath(sel,texto){
        const val=XPathSelector(sel).withText(texto)       
        return val
    }

    async T_valor_del_texto_xpath(sel){
        const val=XPathSelector(sel)   
        const text = await Selector(val).innerText;  
        return text
    }

    async T_url_actual(){
        const url = await t.eval(() => document.documentURI);    
        console.log(url);
        return url
    }

    async T_validar_url(urlespera){
        const urlactual = await t.eval(() => document.documentURI);    
        await t.expect(urlactual).eql(urlespera);
        console.log("Url Validada")
    }

    async T_validar_selector_existe(select){
        await t.expect(Selector(select).filterVisible().exists).ok();
    }

    async T_validar_selector_existe_xpath(select){
        const val=XPathSelector(select)
        await t.expect(Selector(val).filterVisible().exists).ok();
    }

    async T_validar_contiene_texto(val,texto){        
        await t.expect(val.innerText).contains(texto);
    }
    

    async T_validar_igualdad(val1,val2){        
        await t.expect(val1).eql(val2);
    }

    async T_validar_diferentes(val1,val2){        
        await t.expect(val1).notEql(val2);
    }

    async T_validar_mayorxy(val1,val2){        
        await t.expect(val1).gt(val2);
    }

    async T_validar_mayor_igualxy(val1,val2){        
        await t.expect(val1).gte(val2);
    }

    async T_validar_menor_igualxy(val1,val2){        
        await t.expect(val1).lte(val2);
    }

    async T_validar_contiene_xy(val1,val2){        
        await t.expect(val1).contains(val2);
    }

    async T_validar_no_contiene_xy(val1,val2){        
        await t.expect(val1).notContains(val2);
    }

    

   


    async T_pantalla_true(ruta){
        await t
            .takeScreenshot({
                path:     ruta,
                fullPage: true,
            })   
    }

    async T_pantalla_false(ruta){
        await t
            .takeScreenshot({
                path:     ruta,
                fullPage: false,
            })   
    }

  

}

export default new Funciones();
