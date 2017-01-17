//Maker
var vehmaker = ["Honda", "Hyundai", "Isuzu", "Suzuki", "Toyota"];
    select = document.getElementById('vehmk');
    for (i = 0; i < vehmaker.length; i++){
    var opt = document.createElement('option');
        opt.value = vehmaker[i];
        opt.innerHTML = vehmaker[i];
        select.appendChild(opt);
    }
  
//Model
function vehmkonselect(){
  document.getElementById("vehmd").disabled = false;
  document.getElementById("vehyr").disabled = true;
  document.getElementById("vehopt").disabled = true;
  document.getElementById("form1nextbtn").disabled = true;
  document.getElementById("vehmd").options.length = 1;
  document.getElementById("vehyr").options.length = 1;
  document.getElementById("vehopt").options.length = 1;
  var make = document.getElementById("vehmk").value;
  switch(make) {
    case "Honda":
        var vehmodel = ["City", "Brio", "Jazz", "Mobilio", "BR-V", "Civic", "HR-V", "CR-V", "CR-Z", "Accord", "Odyssey", "Pilot", "Legend"];
        break;
    case "Hyundai":
        var vehmodel = ["Accent", "Eon", "i10", "i20", "Elantra", "Sonata", "Starex"];
        break;
    case "Isuzu":
        var vehmodel = ["Crosswind/Sportivo", "D-Max", "mu-X"];
        break;
    case "Suzuki":
        var vehmodel = ["Alto", "Celerio", "Swift", "Jimny", "Ertiga", "Ciaz", "APV","Grand Vitara"];
        break;
    case "Toyota":
        var vehmodel = ["Wigo", "Vios", "Altis", "Camry", "Innova", "Fortuner", "FJ Cruiser"];
        break;
  }
  //list all models by brand
  select = document.getElementById('vehmd');
  for (i = 0; i < vehmodel.length; i++){
    var opt = document.createElement('option');
    opt.value = vehmodel[i];
    opt.innerHTML = vehmodel[i];
    select.appendChild(opt);
  }
  cardesc('Your Car is: ',make,'', '','');
}


//Year
function vehmdonselect(){
  document.getElementById("vehyr").disabled = false;
  document.getElementById("vehopt").disabled = true;
  document.getElementById("form1nextbtn").disabled = true;
  document.getElementById("vehyr").options.length = 1;
  document.getElementById("vehopt").options.length = 1;
  var make = document.getElementById("vehmk").value;
  var model = document.getElementById("vehmd").value;
  switch(make) {
    case "Honda":
      
        break;
    case "Hyundai":
        switch(model) {
          case "Accent":
                  var min=2006 ; max="Present";
              break;
          case "Eon":
                  var min=2012; max="Present";
              break;
          case "i10":
                  var min=2007; max="Present";
              break;
          case "i20":
                  var min=2016; max=2016;
              break;
          case "Elantra":
                  var min=2011; max="Present";
              break;
          case "Sonata":
                  var min=2010; max="Present";
              break;
          case "Starex":
                  var min=1997; max="Present";
              break;
        }
        break;
    case "Isuzu":
        
        break;
    case "Suzuki":
        
        break;
    case "Toyota":
        
        break;
  }
  
  if(max=="Present"){
    max = new Date().getFullYear();
  }
  select = document.getElementById('vehyr');
  for (var i = max; i>=min; i--){
      var opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = i;
      select.appendChild(opt);
  }
  cardesc('Your Car is: ',make,model, '','');
}

//Option
function vehyronselect(){
  document.getElementById("vehopt").disabled = false;
  document.getElementById("form1nextbtn").disabled = true;
  document.getElementById("vehopt").options.length = 1;
  var make = document.getElementById("vehmk").value;
  var model = document.getElementById("vehmd").value;
  var year = document.getElementById("vehyr").value;
  var Present = new Date().getFullYear();
  switch(make) {
    case "Honda":
        var vehoption = ["Test Mode"];
        break;
    case "Hyundai":
        switch(model) {
          case "Accent":
                  if(year<2012){
                    var vehoption = ["1.5 CRDi turbo 5-speed M/T"];
                  }
                  else if(year>=2012){
                    var vehoption = ["1.6 CRDi GL 6M/T (Dsl)",	"1.6 CRDi GL 7A/T-DCT(Dsl)",	"1.4 GL 6M/T",	"1.4 GL A/T-CVT"];
                  }
              break;
          case "Eon":
                  var vehoption = ["0.8L M/T"];
              break;
          case "i10":
                  if(year<2013){
                    var vehoption = ["1.1L M/T", "1.1L A/T"];
                  }
                  else{
                    var vehoption = ["1.2L A/T"]; 
                  }
              break;
          case "i20":
                  var vehoption = ["1.4L 6M/T","1.4 DSL 6M/T","1.4L 4AT"];
              break;
          case "Elantra":
                  var vehoption = ["1.6L A/T","1.6L M/T"];
                  if(year>=2016)
                  {
                    var vehoption = ["2.0 GLS 6A/T",	"1.6 GL 6A/T",	"1.6 GL 6M/T"];
                  }
                  else if(year>=2012){
                    vehoption.push("1.8L A/T", "1.8L M/T")
                  }
              break;
          case "Sonata":
                var vehoption = ["1.6L Turbocharge 6A/T","1.6L Turbocharge 6M/T"];
                if(year>=2015){
                  var vehoption = ["2.4L 6A/T"];
                }
              break;
          case "Starex":
                    var vehoption = ["2.4L A/T", "2.5L DSL A/T", "2.5L DSL M/T"];
              break;
        }
        break;
    case "Isuzu":
        var vehoption = ["Test Mode"];
        break;
    case "Suzuki":
        var vehoption = ["Test Mode"];
        break;
    case "Toyota":
        var vehoption = ["Test Mode"];
        break;
  }
  select = document.getElementById('vehopt');
  for (i = 0; i < vehoption.length; i++){
  var opt = document.createElement('option');
      opt.value = vehoption[i];
      opt.innerHTML = vehoption[i];
      select.appendChild(opt);
  }
  cardesc('Your Car is: ', year,make, model,'');
}

//Button
function vehoptonselect(){
  var year = document.getElementById("vehyr").value;
  var make = document.getElementById("vehmk").value;
  var model = document.getElementById("vehmd").value;
  var option = document.getElementById("vehopt").value;
  document.getElementById("form1nextbtn").disabled = false;
  cardesc('Your Car is: ', year,make, model, option);
}

function cardesc(title, txtyr, txtmk, txtmd, txtopt){
  document.getElementById("Result").innerHTML=title+txtyr+" "+txtmk+" "+txtmd+" "+txtopt;
  document.getElementById("Result2").innerHTML=title+txtyr+" "+txtmk+" "+txtmd+" "+txtopt;
  document.getElementById("Result3").innerHTML=" "+txtyr+" "+txtmk+" "+txtmd+" "+txtopt;
}

function form1script(){
  document.getElementById("form1").hidden = true;
  document.getElementById("form2").hidden = false;
  initMap();
}
function form2script(){
  document.getElementById("form1").hidden = false;
  document.getElementById("form2").hidden = true;
  document.getElementById("selectcar").reset();
  document.getElementById("vehmd").disabled = true;
  document.getElementById("vehyr").disabled = true;
  document.getElementById("vehopt").disabled = true;
  document.getElementById("form1nextbtn").disabled = true;
  cardesc('Select Your Car:','','','','');
}