const getValueInput = () =>{
  const inputValue = document.getElementById("km").value; 
  const consAuto = document.getElementById("cons").value; 
  const nafta = document.getElementById("nafta").value; 
  console.log(nafta)
  const litrosgastados = inputValue / consAuto;
    var word = '';
    if (litrosgastados != 1 ) {
        word = "s";
    }else{
        word = ""
    }
    var pesos = litrosgastados * nafta ;
    pesos = Math.round(pesos)
     
  document.getElementById("valueInput").innerHTML =`Usted gasto ${litrosgastados} litro${word} de nafta, lo cual equivale a $${pesos}` ;  

}
