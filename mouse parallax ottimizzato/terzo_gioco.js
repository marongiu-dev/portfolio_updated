

/////////////////////////////////////////////////APP START
    let app = {

        start: function() {

          this.inizio();


         
         
///////////////////////////////chiamata funzione che crea parole e correttezza            
var new_words=[];
var a=createNewWord("Tronco",true);
var b=createNewWord("Spiaggia",false);
var c=createNewWord("castello",false);
var d=createNewWord("Lupo",true);
var e=createNewWord("Foglie",true);
var f=createNewWord("Palazzo",false);

var risposte_corrette=0;
var clicked=0;

///////////////////////////   Salviamo le parole in new words e 
//distribuiamo alle altre funzioni!!
var copiaArray=[];
var copiaArray_complete=[];
var arrayTrueoFalse=[];
var array_of_ids_for_button_hiding =[];
var array_of_ids_for_button_hiding_complete=[];
var arrayTrueoFalse_complete= [];


//////////////////////////////////////////Ciclo for
for(i=0;i<new_words.length;i++){

new_words[i].is_clicked=false;  
copiaArray=new_words[i].parola;
arrayTrueoFalse=new_words[i].isCorrect;
array_of_ids_for_button_hiding = new_words[i].parola.toLowerCase();
copiaArray_complete += new_words[i].parola + " ";
array_of_ids_for_button_hiding_complete +=new_words[i].parola.toLowerCase() + " ";
arrayTrueoFalse_complete += new_words[i].isCorrect;
//console.log(array_of_ids_for_button_hiding);
//console.log(copiaArray_complete);
//console.log(arrayTrueoFalse);
this.aggiungiBottone_ennesimo(copiaArray,arrayTrueoFalse,array_of_ids_for_button_hiding,i);
//this.aggiungiBottoni_clone(copiaArray,arrayTrueoFalse,array_of_ids_for_button_hiding,i);
//this.aggiungiBottoni_clone2(copiaArray,arrayTrueoFalse,array_of_ids_for_button_hiding,i);

}
///////////////////////////////////////EVENT LISTENER : CLICK
let parole = document.querySelectorAll('.front');       

parole.forEach((element) => {

      element.addEventListener('click', () => {

        var copiaArray_complete_split=copiaArray_complete.split(" ");

        var array_of_ids_for_button_hiding_complete_split=array_of_ids_for_button_hiding_complete.split(" ");
  
         
          
        
       
        
        for(i=0;i<new_words.length;i++){

          var id_true=[];
          id_true=new_words[i].isCorrect;

  
        if(element.textContent==copiaArray_complete_split[i] && id_true && new_words[i].is_clicked==false){
          console.log(element.id);
      
         


        this.push_for_all_buttons(array_of_ids_for_button_hiding_complete_split[i]);
          risposte_corrette++;
          new_words[i].is_clicked=true;
          console.log(risposte_corrette);
          console.log(new_words);
          this.buttonClone(i);
          this.click_button_clone_light(i);
///////////////////////////////////////////conteggio  parole trovate primo livello
          document.getElementById("parole_mancanti").innerHTML = "Parole trovate " + risposte_corrette+"/3" ;
          console.log(risposte_corrette);
         //////////////////////////////////////////////////Fine livello

        if(risposte_corrette==3){

         
          console.log('Clicca per andare alla storia');
          this.finePrimoLivello();
          this.vintoLivello();



        }






          
        }

            }
    });
});  






///////////////////////////////////////Maps lenght of array
var len_array_new_words=this.stringLengths(new_words);
console.log(len_array_new_words);

////////////////////////Max lenght of buttons array
this.max_bottoni(len_array_new_words,30);


///////////////////////////////////////////////////////Automated random grid

const randomiseFlexOrder = querySelector => {
    [...querySelector].map((c,i,a) => c.style.order = Math.floor(Math.random() * a.length + 1));
  };
  randomiseFlexOrder(document.querySelectorAll('.item'));








//////////////////////////////////////////////////FUNZIONE CREA NUOVA PAROLA             
            function createNewWord(parola,isCorrect){
                
                 parola_inserita = {
                    parola,
                    isCorrect
                };

                    new_words.push(parola_inserita);
                    return parola_inserita
            }
               
         
            console.log(new_words);
        
        },      

////////////////////////////////////AGGIUNGI BOTTONI AUTOMATICO
aggiungiBottone_ennesimo:function(nuova_parola,arrayTrueoFalse,id_of_edge,i) {

  //create a new div
  const divs = document.createElement('div');
  const bottoni = document.createElement('button');
  const primo_span = document.createElement('span');
  const secondo_span = document.createElement('span');
  const terzo_span = document.createElement('span');

  //set div class & id
  divs.setAttribute("id","");
  divs.setAttribute("class","item_pieni");
  divs.classList.add('item');
  divs.setAttribute("style","order:1;");
  

  //set button id & class
  //bottoni.setAttribute("id",'cliccabili');
  bottoni.setAttribute("id",i); 
  bottoni.setAttribute("class","pushable");
  
  bottoni.setAttribute("type","button");

  //set span id & class
  primo_span.setAttribute("id","ombra");
  primo_span.setAttribute("class","shadow");
  /////////////////////
  secondo_span.setAttribute("id",id_of_edge);
  secondo_span.setAttribute("class","edge");
  /////////////////////
  if(arrayTrueoFalse==true){
    terzo_span.setAttribute("id","corrette");
  }
 
  terzo_span.setAttribute("class","front");
  terzo_span.textContent = nuova_parola;




  //add the new div  element to html
  var grid1 = document.getElementById('grid1');
  grid1.appendChild(divs);

  //add the new button element to html
  var tuttiBottoni = Array.from(document.getElementsByClassName('item_pieni'));
  
  tuttiBottoni.forEach(bottone =>{
      
    bottone.classList.add('new_buttons');

  bottone.appendChild(bottoni);

  //add the 1st new spans in the button element
  var tuttispan = Array.from(document.getElementsByClassName('pushable'));
  
  tuttispan.forEach(singolo_span =>{
      
   // bottone.classList.add('');

    singolo_span.appendChild(primo_span);
    singolo_span.appendChild(secondo_span);
    singolo_span.appendChild(terzo_span);

  //add the 2nd new spans in the button element
  

});
});
},

aggiungiBottoni_vuoti:function() {

  //create a new div
  const divs = document.createElement('div');
  const bottoni = document.createElement('button');
  const primo_span = document.createElement('span');
  const secondo_span = document.createElement('span');
  const terzo_span = document.createElement('span');

  //set div class & id
  //divs.setAttribute("id","corrette");
  divs.setAttribute("class","item");
  divs.classList.add('item_vuoti');
  //divs.setAttribute("style","order:1;");
  

  //set button id & class
  bottoni.setAttribute("id","1");
  bottoni.setAttribute("class","pushable");
  bottoni.setAttribute("type","button");

  //set span id & class
 // primo_span.setAttribute("id","ombra");
 // primo_span.setAttribute("class","shadow");
  /////////////////////
//  secondo_span.setAttribute("id","sfondo_problematico4");
//  secondo_span.setAttribute("class","edge");
  /////////////////////
 // terzo_span.setAttribute("id","parola");
  //terzo_span.setAttribute("class","front");
  //terzo_span.textContent = nuova_parola;




  //add the new div  element to html
  var grid1 = document.getElementById('grid1');
  grid1.appendChild(divs);

  //add the new button element to html
  var tuttiBottoni = Array.from(document.getElementsByClassName('item_vuoti'));
  
  tuttiBottoni.forEach(bottone =>{
      
    bottone.style.visibility='hidden';

  bottone.appendChild(bottoni);

  //add the 1st new spans in the button element
  var tuttispan = Array.from(document.getElementsByClassName('pushable'));
  
  tuttispan.forEach(singolo_span =>{
      
   // bottone.classList.add('');

  //  singolo_span.appendChild(primo_span);
  //  singolo_span.appendChild(secondo_span);
    singolo_span.appendChild(terzo_span);

  //add the 2nd new spans in the button element
  

});
});
},
/*
aggiungiBottoni_clone: function(nuova_parola,arrayTrueoFalse,id_of_edge,i){

console.log(nuova_parola,arrayTrueoFalse,id_of_edge,i);
  //create a new div
  const divs = document.createElement('div');
  const bottoni = document.createElement('button');
  const primo_span = document.createElement('span');
  const secondo_span = document.createElement('span');
  const terzo_span = document.createElement('span');

  //set div class & id
  
  divs.setAttribute("id","");
  if(arrayTrueoFalse==true){
  divs.setAttribute("class","item_clone");
  
  

  //set button id & class
  //bottoni.setAttribute("id",'cliccabili');
  bottoni.setAttribute("id",i); 
  bottoni.setAttribute("class","pushable_clone");
  
    
    
    bottoni.classList.add("button_clone");

    bottoni.classList.add("button_clone_pos");
    

  
  
  

  //set span id & class
  primo_span.setAttribute("id","ombra");
  primo_span.setAttribute("class","shadow");
  /////////////////////
  secondo_span.setAttribute("id",id_of_edge);
  secondo_span.setAttribute("class","edge");
  /////////////////////
  terzo_span.setAttribute("class","front");
  terzo_span.textContent = nuova_parola;
  }



  //add the new div  element to html
  
  var first_clone_effect = document.getElementById('second_box');
  first_clone_effect.appendChild(divs);


  //add the new button element to html
  var tuttiBottoni = Array.from(document.getElementsByClassName('item_clone'));
  
  tuttiBottoni.forEach(bottone =>{
      
    bottone.classList.add('new_buttons');

  bottone.appendChild(bottoni);

  //add the 1st new spans in the button element
  var tuttispan = Array.from(document.getElementsByClassName('pushable_clone'));
  
  tuttispan.forEach(singolo_span =>{
      
   // bottone.classList.add('');
   
   

    singolo_span.appendChild(primo_span);
    singolo_span.appendChild(secondo_span);
    singolo_span.appendChild(terzo_span);
   
  //add the 2nd new spans in the button element
  

});
});
  
},    

aggiungiBottoni_clone2: function(nuova_parola,arrayTrueoFalse,id_of_edge,i){


  //create a new div
  const divs = document.createElement('div');
  const bottoni = document.createElement('button');
  const primo_span = document.createElement('span');
  const secondo_span = document.createElement('span');
  const terzo_span = document.createElement('span');

  //set div class & id
  
  divs.setAttribute("id","");
  if(arrayTrueoFalse==true){
  divs.setAttribute("class","item_doble_clone");
  
  

  //set button id & class
  //bottoni.setAttribute("id",'cliccabili');
  bottoni.setAttribute("id",i); 
  bottoni.setAttribute("class","pushable_doble_clone");
  
    bottoni.classList.add("doble_button_clone");
    bottoni.classList.add("doble_button_clone_pos");
  }
  
  
  
  

  //set span id & class
  primo_span.setAttribute("id","ombra");
  primo_span.setAttribute("class","doble_shadow");
  /////////////////////
  secondo_span.setAttribute("id",id_of_edge);
  secondo_span.setAttribute("class","doble_edge");
  /////////////////////
  terzo_span.setAttribute("class"," front");
  terzo_span.textContent = nuova_parola;




  //add the new div  element to html
  
  var first_clone_effect = document.getElementById('second_box');
  first_clone_effect.appendChild(divs);


  //add the new button element to html
  var tuttiBottoni = Array.from(document.getElementsByClassName('item_doble_clone'));
  
  tuttiBottoni.forEach(bottone =>{
      
    bottone.classList.add('new_buttons');

  bottone.appendChild(bottoni);

  //add the 1st new spans in the button element
  var tuttispan = Array.from(document.getElementsByClassName('pushable_doble_clone'));
  
  tuttispan.forEach(singolo_span =>{
      
   // bottone.classList.add('');
if(id_of_edge==nuova_parola){
    singolo_span.appendChild(primo_span);
    singolo_span.appendChild(secondo_span);
    singolo_span.appendChild(terzo_span);
}
  //add the 2nd new spans in the button element
  

});
});
  
},    

*/



push_for_all_buttons: function(e){

var button_click=document.getElementById(e);
button_click.classList.remove('edge');
console.log(e);


},



stringLengths:function(...args) {
 var len_array = args.map(x => x.length);

  return len_array

},




max_bottoni: function(parole_inserite,max_bott){

  const tot_bottoni = [];
  tot_bottoni.length=max_bott;
  let bottoni_vuoti_da_creare = max_bott - parole_inserite;
  
for(i=0;i<bottoni_vuoti_da_creare;i++){

  this.aggiungiBottoni_vuoti();

}

},

buttonClone:function(){

  let clones = document.getElementById(i);
  clones.classList.remove('button_clone');
  clones.classList.add('button_clone_animation');

},

click_button_clone_light: function(){
  let clones = Array.from(document.getElementsByClassName('pushable')[i]);
  clones.forEach(clone => {

      

      clone.classList.remove('button_clone');
      clone.classList.add('button_clone_animation');

  });

},

inizio: function(){
  let overlays = Array.from(document.getElementsByClassName('first-overlay'));

  overlays.forEach(overlay =>{

      overlay.addEventListener('click', () =>{

    // game.startGame();      
    overlay.classList.remove('visible');
      });

  });
},

finePrimoLivello: function(){
  let overlays = Array.from(document.getElementsByClassName('level-up'));

  overlays.forEach(overlay =>{

      overlay.addEventListener('click', () =>{

    // game.startGame();      
    overlay.classList.remove('visible');

    //cambio livello
    let section2=document.getElementById('secondo_livello');
    section2.classList.remove('disabilitato');
    let section1=document.getElementById('primo_livello');
    section1.classList.add('disabilitato');


      });

  });
},
  
vintoLivello: function(){
  let vittorie = Array.from(document.getElementsByClassName('level-up'));

  vittorie.forEach(vittoria =>{
    
      vittoria.classList.add('visible');
      this.createNextLevel();
  });
},
//////////////////////////////////////////////nuovi livelli   
createNextLevel: function(){

let cambio_n_livello_nascondi=document.getElementById('primo_livello');
cambio_n_livello_naacondi.classList.add("disabilitato");
let cambio_n_livello_mostra=document.getElementById('secondo_livello');
cambio_n_livello_mostra.classList.remove("disabilitato");


//let n_grid=document.getElementById('grid1');
//n_grid.classList.add('disabilitato');

},



    };

app.start();


const pos = document.documentElement;
        pos.addEventListener("mousemove", e => { 
        pos.style.setProperty ('--x', e.clientX + "px");
        pos.style.setProperty ('--y', e.clientY + "px");
           }) 

