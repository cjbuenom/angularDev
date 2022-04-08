const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { json } = require('body-parser');

const app = express ();

app.use(cors({ 
    origin:'*'
}))

jsonParser = bodyParser.json();


let respuesta = {
    error : false,
    codigo:200,
    mensaje: ''
}

let reportsAllOrders = [{      
    nroReportService:"1",
    namaCliente:"1HGTRF inc",
    cuentacliente:"2121212",      
    emailcliente:"vamos@contodo.com",
    nrofactura: "121231",
    rutcliente : "2563693-2",     
    cargocliente : "asesor",
    proponenteCert:"SISTEMFUEGO SPA",
    orderCompra:"12DF",
    DireCliente:" AV.AMERICO VESPUCIO 6985472, PUDAHUEL RENCA",
    tlfcliente:"+56956999999",
    nroorderservice:"",
    dateService:"",
    nameworkerOrder:"",
    dateproximaMantencion:""
  },
  {      
    nroReportService:"2",
    namaCliente:"1HGTRF inc",
    cuentacliente:"2121212",      
    emailcliente:"vamos@contodo.com",
    nrofactura: "121231",
    rutcliente : "2563693-2",     
    cargocliente : "asesor",
    proponenteCert:"SISTEMFUEGO SPA",
    orderCompra:"12DF",
    DireCliente:" AV.AMERICO VESPUCIO 6985472, PUDAHUEL RENCA",
    tlfcliente:"+56956999999",
    nroorderservice:"",
    dateService:"",
    nameworkerOrder:"",
    dateproximaMantencion:""
  },];

let items = [];

let consultaReport = [];

let itemconsulta = [];

let ordenesCompletas = [];

app.get('/itemsorderservice', function(req, res){
    respuesta = {
        error : false,
        codigo:200,
        mensaje: items
    }
    res.send(respuesta)
 })
 
 app.get('/itemsorderservice/:nroOrder',jsonParser, function(req, res){
     let i =0
    let numorder = req.params.nroOrder
    // numorder = "kkkkkk"
    // console.log('numorder: '+numorder)
    // console.log(' items.length: '+ items.length)
   
    for (let index = 0; index < items.length; index++) {
        const element = JSON.stringify(items[index]);
        // console.log('element:'+element, element.length+' index:'+index)
        // console.log('element.search(numorder)'+element.search(numorder))
        if (element.search(numorder)>0) {
            itemconsulta[i++]=items[index]
        }
        
        
    }
    for (let x = 0; x < itemconsulta.length; x++) {
        const element1 = JSON.stringify(itemconsulta[x]);
        // console.log('itemconsulta pos '+x+'-'+element1)
        
    }
    
    if (itemconsulta.length > 0) {
        respuesta = {
            error : false,
            codigo:200,
            mensaje: itemconsulta
        }
        res.send(respuesta)

        itemconsulta = []
    }else{
        respuesta = {
            error : true,
            codigo:503,
            mensaje: "no se encontro orden Servicio : "+numorder
        }
        res.send(respuesta) 
    }
    


    
 })

 
 app.post('/newitemorder',jsonParser, function(req, res){

    console.log(  req.body)

    if (!req.body.agentextin || !req.body.capacity || !req.body.numbercert ) {
        respuesta = {
            error: true,
            codigo:502,
            mensaje : "Error al crear item en orden"
        }
    }else{
        items.push(req.body)
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: items
        }
    }
    res.send(respuesta)
})

app.post('/newreportfororderservice',jsonParser, function(req, res){

    console.log(  req.body)

    if (!req.body.nroReportService || !req.body.namaCliente || !req.body.rutcliente ) {
        respuesta = {
            error: true,
            codigo:502,
            mensaje : "Error al crear item en orden"
        }
    }else{
        reportsAllOrders.push(req.body)
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: reportsAllOrders
        }
    }
    res.send(respuesta)
})


app.put('/newreportfororderservice', jsonParser, async function(req, res){

    let i,y =0
    let AuxnroOrder = req.body.nroOrden
    let AuxnroReport = req.body.nroReportService
    let AuxElemenItems = false
    let AuxElemenReports = false
    console.log('variables params'+AuxnroOrder+'--------'+AuxnroReport+ ' AuxElemenItems  :'+AuxElemenItems)    

if (AuxnroOrder != '' && AuxnroReport != '') {
    AuxElemenItems = await validaItemsOrdenExisten(AuxnroOrder)
    console.log('variables params'+AuxnroOrder+'--------'+AuxnroReport+ ' AuxElemenItems  :'+AuxElemenItems)
    if (AuxElemenItems) {
          
            AuxElemenReports = await validainformeOrderExiste(AuxnroReport,AuxnroOrder )
            console.log('HAY ITEMS PARA LA ORDEN -AuxElemenReports :'+AuxElemenReports) 
            if (AuxElemenReports) {
                respuesta = {
                        error : false,
                        codigo: 200,
                        mensaje: 'reporte modificado campo numero Orden en informe numero'+AuxnroReport
                    };
                    res.send(respuesta);
                    consultaReport=[] 
                    itemconsulta=[]

            }else{    
                 respuesta = {
                      error : true,
                      codigo: 507,
                      mensaje: 'no hay informes de servicio cargados'
                  };
                  res.send(respuesta);
                  consultaReport=[] 
                    itemconsulta=[]
            }
   

    }else{
                 respuesta = {
                       error : true,
                       codigo: 506,
                       mensaje: 'no hay items de ordenes de servicio cargadas'
                   };
                   res.send(respuesta);
                   consultaReport=[] 
                    itemconsulta=[]
    }
}

})

async function  validainformeOrderExiste(AuxnroReportArg, AuxnroOrderArg) {
    let encontrofinalitems = false
    let i=0
    if (reportsAllOrders.length > 0) {        
        for (let index = 0; index < reportsAllOrders.length && encontrofinalitems === false; index++) {
            const element = JSON.stringify(reportsAllOrders[index]);
            if (element !== ' ') {                  
                console.log('element:'+element, element.length+' index:'+index+' - '+AuxnroReportArg)
                console.log('element.search(AuxnroReportArg)'+element.search(AuxnroReportArg))
                if (element.search(AuxnroReportArg)>0) {
                    console.log('reportsAllOrders[index].nroReportService'+reportsAllOrders[index].nroReportService+' === '+AuxnroReportArg )
                    if (reportsAllOrders[index].nroReportService === AuxnroReportArg){

                    
                        consultaReport[i++]=reportsAllOrders[index]   
                        encontrofinalitems = true
                        
                        reportsAllOrders[index].nroorderservice = AuxnroOrderArg
                        index= reportsAllOrders.length+21
                        
                        return true
                     }
                }  

                
            }
          
        }
    }else{
        return false
        // 
   }

}

async function validaItemsOrdenExisten(AuxnroOrderArg) {
    let encontrofinalitems = false
    let i=0
    if (items.length > 0) {        
        for (let index = 0; index < items.length-1 && encontrofinalitems === false; index++) {
            const element = JSON.stringify(items[index]);
            if (element !== ' ') {                  
                console.log('element:'+element, element.length+' index:'+index)
                console.log('element.search(AuxnroOrderArg)'+element.search(AuxnroOrderArg))
                if (element.search(AuxnroOrderArg)>0) {
                    itemconsulta[i++]=items[index] 
                    encontrofinalitems = true
                    index= items.length+21
                    return true
                }  
            }
          
        }
    }else{
        return false
        // 
   }

}



app.put('/newreportfororderservice/:nroReportService', jsonParser, async function(req, res){

    let i,y =0

    let AuxnroReport = req.params.nroReportService
    let auxBody = req.body
    let AuxElemenReports = false
    console.log('variables params'+AuxnroReport+'--------'+ ' AuxElemenItems  :'+AuxElemenReports)    

if (AuxnroReport != ' ') {
    // AuxElemenItems = await validaItemsOrdenExisten(AuxnroOrder)
    // console.log('variables params'+AuxnroOrder+'--------'+AuxnroReport+ ' AuxElemenItems  :'+AuxElemenItems)
    // if (AuxElemenItems) {
          
            AuxElemenReports = await searchReportmodifydatafooter(AuxnroReport,auxBody )
            console.log('AuxElemenReports :'+AuxElemenReports) 
            if (AuxElemenReports) {
                respuesta = {
                        error : false,
                        codigo: 200,
                        mensaje: 'reporte modificado data footer en informe numero'+AuxnroReport
                    };
                    res.send(respuesta);
                    consultaReport=[] 
                    itemconsulta=[]

            }else{    
                 respuesta = {
                      error : true,
                      codigo: 520,
                      mensaje: 'FALLO! modificacion data footer en informe numero'+AuxnroReport
                  };
                  res.send(respuesta);
                  consultaReport=[] 
                    itemconsulta=[]
            }
   

    }else{
                 respuesta = {
                       error : true,
                       codigo: 510,
                       mensaje: 'no hay informes de servicio cargados'
                   };
                   res.send(respuesta);
                   consultaReport=[] 
                    itemconsulta=[]
    }


})


async function  searchReportmodifydatafooter(AuxnroReportArg,auxBody ) {
    let encontrofinalitems = false
    let i=0
    if (reportsAllOrders.length > 0) {        
        for (let index = 0; index < reportsAllOrders.length && encontrofinalitems === false; index++) {
            const element = JSON.stringify(reportsAllOrders[index]);
            if (element !== ' ') {                  
                console.log('element:'+element, element.length+' index:'+index+' - '+AuxnroReportArg)
                console.log('element.search(AuxnroReportArg)'+element.search(AuxnroReportArg))
                if (element.search(AuxnroReportArg)>0) {
                    console.log('reportsAllOrders[index].nroReportService'+reportsAllOrders[index].nroReportService+' === '+AuxnroReportArg )
                    if (reportsAllOrders[index].nroReportService === AuxnroReportArg){

                    
                        consultaReport[i++]=reportsAllOrders[index]   
                        encontrofinalitems = true
                        
                        reportsAllOrders[index].dateService = auxBody.dateService
                        reportsAllOrders[index].nameworkerOrder = auxBody.nameworkerOrder
                        reportsAllOrders[index].dateproximaMantencion = auxBody.dateproximaMantencion

                        index= reportsAllOrders.length+21
                        
                        return true
                     }
                }  

                
            }
          
        }
    }else{
        return false
        // 
   }

}





app.get('/newreportfororderservice/:nroReportService',jsonParser, function(req, res){
    let i =0
   let numreportsearch = req.params.nroReportService

  
   for (let index = 0; index < reportsAllOrders.length; index++) {
       const element = JSON.stringify(reportsAllOrders[index]);
    //    console.log('element:'+element, element.length+' index:'+index)
    //    console.log('element.search(numreportsearch)'+element.search(numreportsearch))
       if (element.search(numreportsearch)>0) {
        consultaReport[i++]=reportsAllOrders[index]
       }
       
       
   }
   for (let x = 0; x < consultaReport.length; x++) {
       const element1 = JSON.stringify(consultaReport[x]);
    //    console.log('itemconsulta pos '+x+'-'+element1)
       
   }
   
   if (consultaReport.length > 0) {
       respuesta = {
           error : false,
           codigo:200,
           mensaje: consultaReport
       }
       res.send(respuesta)

       consultaReport = []
   }else{
       respuesta = {
           error : true,
           codigo:503,
           mensaje: "no se encontro numero informe : "+numreportsearch
       }
       res.send(respuesta) 
   }
   


   
})

app.get('/reportscompleted', function(req, res){
    respuesta = {
        error : false,
        codigo:200,
        mensaje: reportsAllOrders
    }
    res.send(respuesta)
 })

 

app.post('/orderscompleted',jsonParser, function(req, res){



    if (!req.body.numerorden || !req.body.nombreclient || !req.body.diaingress ) {
        respuesta = {
            error: true,
            codigo:502,
            mensaje : "Error al crear orden de servicio"
        }
    }else{
        ordenesCompletas.push(req.body)
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: ordenesCompletas
        }
    }
    res.send(respuesta)
})
 


app.listen(3000, ()=>{
    console.log("el servidor esta ONLINE en el puerto 3000")
})

