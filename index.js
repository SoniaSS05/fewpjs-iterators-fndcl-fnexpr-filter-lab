// Code your solution here

const findMatching = (driv,lookF)=>{
    const nuevo = driv.filter(elem => elem.toUpperCase() === lookF.toUpperCase());
    return nuevo;
}

function fuzzyMatch(driv,lookF){
   const nuevo = [];
   let lookFlen = lookF.length;
   for (const elem of driv){
       let cad = elem.substr(0,lookFlen);
       if (cad === lookF){
            nuevo.push(elem);
       }
    }
    return nuevo;
}

function matchName(driv, lookF){
    const nuevo = [];
    for (const element of driv) {
        if (lookF === element.name) {
           nuevo.push(element);
        }
    }
    return nuevo;
}





 