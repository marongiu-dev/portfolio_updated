"use strict"

const pos = document.documentElement;
let dim_schermo =screen.width 


if(dim_schermo>720){
    pos.addEventListener("mousemove", e => { 
    pos.style.setProperty ('--x', e.clientX + "px");
    pos.style.setProperty ('--y', e.clientY + "px");
       }) 
    } else {
        

        pos.addEventListener("pointerdown", e => { 
            pos.style.setProperty ('--x', e.clientX + "px");
            pos.style.setProperty ('--y', e.clientY + "px");
    

}) 


            pos.addEventListener("pointermove", e => { 
                pos.style.setProperty ('--x', e.clientX + "px");
                pos.style.setProperty ('--y', e.clientY + "px");
        
    
}) 
    }



let dizionario = ['Tronco', 'Spiaggia', 'Castello', 'Lupo','Palazzo','Foglie'];

let story_words= ['Tronco','Lupo','Foglie','Tana','Branco','Ululare'];

//Livello1
 //bottone1
 function addClass() {
    var v = document.getElementById('sfondo_problematico');
    v.className -= ".edge";
  
   // document.getElementById("parola").style.visibility = "hidden";
    //document.getElementById("ombra").style.visibility = "hidden";
 }

  //bottone2
  function addClass2() {
    var v = document.getElementById('sfondo_problematico2');
    v.className -= ".edge";
  
    //document.getElementById("parola2").style.visibility = "hidden";
   // document.getElementById("ombra2").style.visibility = "hidden";
 }

 //bottone3
 function addClass3() {
    var v = document.getElementById('sfondo_problematico3');
    v.className -= ".edge";
  
   // document.getElementById("parola3").style.visibility = "hidden";
   // document.getElementById("ombra3").style.visibility = "hidden";
 }
 
//Livello2
 //bottone1
 function secondLeveladdClass() {
    var v = document.getElementById('secondLevel_sfondo_problematico');
    v.className -= ".edge";
  
    //document.getElementById("secondLevel_parola").style.visibility = "hidden";
    //document.getElementById("secondLevel_ombra").style.visibility = "hidden";
 }

  //bottone2
  function secondLeveladdClass2() {
    var v = document.getElementById('secondLevel_sfondo_problematico2');
    v.className -= ".edge";
  
    //document.getElementById("secondLevel_parola2").style.visibility = "hidden";
    //document.getElementById("secondLevel_ombra2").style.visibility = "hidden";
 }

 //bottone3
 function secondLeveladdClass3() {
    var v = document.getElementById('secondLevel_sfondo_problematico3');
    v.className -= ".edge";
  
   // document.getElementById("secondLevel_parola3").style.visibility = "hidden";
    //document.getElementById("secondLevel_ombra3").style.visibility = "hidden";
 }


    


let app = {

    start: function() {

        this.inizio();
        
        

        let risposte_corrette_gen = 0;
        var bottoni_premuti = [primo_bottone,secondo_bottone];
        var primo_bottone=Boolean;
        var secondo_bottone=Boolean;
        primo_bottone=false;
        secondo_bottone=false;

       

         
         let parole = document.querySelectorAll('.front');
         let contaclick1=0;
         let contaclick2=0;
         let contaclick3=0;
         let contaclick4=0;
         let contaclick5=0;
         let contaclick6=0;
         
         

         
         
        

         parole.forEach((element) => {
 
             element.addEventListener('click', () => {
                
                //button_clones
                
               

                



                // check if clicked word is correct answer
                console.log(this.checkAnswer(element));

                //contiamo i click
               
                if (this.checkClicked1(element)==1){
                    contaclick1++;
                    console.log('1contaclick' + ' ' + contaclick1);
                    this.click_button_clone1();
                    this.click_button_clone_light1();
                }
                if (this.checkClicked2(element)==1){
                    contaclick2++;
                    console.log('2contaclick' + ' ' + contaclick2);
                    this.click_button_clone2();
                    this.click_button_clone_light2();
                }
                if (this.checkClicked3(element)==1){
                    contaclick3++;
                    console.log('3contaclick' + ' ' + contaclick3);
                    this.click_button_clone3();
                    this.click_button_clone_light3();
                }
                if (this.checkClicked4(element)==1){
                    contaclick4++;
                    console.log('4contaclick' + ' ' + contaclick4);
                    this.click_button_clone_light4();
                    this.click_button_clone4();
                }
                if (this.checkClicked5(element)==1){
                    contaclick5++;
                    console.log('5contaclick' + ' ' + contaclick5);
                    this.click_button_clone5();
                    this.click_button_clone_light5();
                }
                if (this.checkClicked6(element)==1){
                    contaclick6++;
                    console.log('6contaclick' + ' ' + contaclick6);
                    this.click_button_clone6();
                    this.click_button_clone_light6();
                }
                
                
                

                if(this.checkAnswer(element)[0]==true && contaclick1<2) {
                    primo_bottone=true;
                    risposte_corrette_gen++
                    console.log("risposte corrette totali: " + risposte_corrette_gen);

                    //conteggio primo livello
                    document.getElementById("parole_mancanti").innerHTML = "Parole trovate " + risposte_corrette_gen+"/3" ;
                     //conteggio secondo livello
                    document.getElementById("secondLevel_parole_mancanti").innerHTML = "Parole trovate " + risposte_corrette_gen+"/6" ;

                 

                
                    
                };
                if(this.checkAnswer(element)[1]==true && contaclick2<2) {
                    secondo_bottone=true;
                    risposte_corrette_gen++
                    console.log("risposte corrette totali: " + risposte_corrette_gen);

                     //conteggio primo livello
                    document.getElementById("parole_mancanti").innerHTML = "Parole trovate " + risposte_corrette_gen+"/3" ;
                     //conteggio secondo livello
                    document.getElementById("secondLevel_parole_mancanti").innerHTML = "Parole trovate " + risposte_corrette_gen+"/6" ;

                };

                if(this.checkAnswer(element)[2]==true && contaclick3<2) {
                    secondo_bottone=true;
                    risposte_corrette_gen++
                    console.log("risposte corrette totali: " + risposte_corrette_gen);

                    //conteggio primo livello
                    document.getElementById("parole_mancanti").innerHTML = "Parole trovate " + risposte_corrette_gen+"/3" ;

                    //conteggio secondo livello
                    document.getElementById("secondLevel_parole_mancanti").innerHTML = "Parole trovate " + risposte_corrette_gen+"/6" ;

                };
                if(this.checkAnswer(element)[3]==true && contaclick4<2) {
                    secondo_bottone=true;
                    risposte_corrette_gen++
                    console.log("risposte corrette totali: " + risposte_corrette_gen);

                    //conteggio primo livello
                    document.getElementById("parole_mancanti").innerHTML = "Parole trovate " + risposte_corrette_gen+"/3" ;

                    //conteggio secondo livello
                    document.getElementById("secondLevel_parole_mancanti").innerHTML = "Parole trovate " + risposte_corrette_gen+"/6" ;

                };
                if(this.checkAnswer(element)[4]==true && contaclick5<2) {
                    secondo_bottone=true;
                    risposte_corrette_gen++
                    console.log("risposte corrette totali: " + risposte_corrette_gen);

                    //conteggio primo livello
                    document.getElementById("parole_mancanti").innerHTML = "Parole trovate " + risposte_corrette_gen+"/3" ;

                    //conteggio secondo livello
                    document.getElementById("secondLevel_parole_mancanti").innerHTML = "Parole trovate " + risposte_corrette_gen+"/6" ;

                };
                if(this.checkAnswer(element)[5]==true && contaclick6<2) {
                    secondo_bottone=true;
                    risposte_corrette_gen++
                    console.log("risposte corrette totali: " + risposte_corrette_gen);

                    //conteggio primo livello
                    document.getElementById("parole_mancanti").innerHTML = "Parole trovate " + risposte_corrette_gen+"/3" ;

                    //conteggio secondo livello
                    document.getElementById("secondLevel_parole_mancanti").innerHTML = "Parole trovate " + risposte_corrette_gen+"/6" ;

                };



                if(risposte_corrette_gen==3){

                    this.vintoLivello();
                    console.log('Clicca per andare alla storia');
                    this.finePrimoLivello();
                    
                   

                };

                if(risposte_corrette_gen==6){

                    this.vintoSecondoLivello();

                };

                
               
                
                 
                

                
                 
               
 
                 
 
             });
         });

},

checkClicked1 : function(element) {

    var clicked1 = 0;
    

        if(element.textContent == story_words[0]){
            clicked1 ++;
            console.log('1cliccato ' + clicked1);
            return clicked1;
        }
       
       
        

},

checkClicked2 : function(element) {
    var clicked2 = 0;
    if(element.textContent == story_words[1]){
        clicked2 ++;
        console.log('2cliccato ' + clicked2);
        return clicked2;
    }

},

checkClicked3 : function(element) {
    var clicked3 = 0;
    if(element.textContent == story_words[2]){
        clicked3 ++;
        console.log('3cliccato ' + clicked3);
        return clicked3;
    }

},

checkClicked4 : function(element) {
    var clicked4 = 0;
    if(element.textContent == story_words[3]){
        clicked4 ++;
        console.log('4cliccato ' + clicked4);
        return clicked4;
    }

},
checkClicked5 : function(element) {
    var clicked5 = 0;
    if(element.textContent == story_words[4]){
        clicked5 ++;
        console.log('5cliccato ' + clicked5);
        return clicked5;
    }

},

checkClicked6 : function(element) {
    var clicked6 = 0;
    if(element.textContent == story_words[5]){
        clicked6 ++;
        console.log('6cliccato ' + clicked6);
        return clicked6;
    }

},


checkAnswer : function(element) {
    var prima_risposta=Boolean;
    var seconda_risposta=Boolean;
    var terza_risposta=Boolean;
    var quarta_risposta=Boolean;
    var quinta_risposta=Boolean;
    var sesta_risposta=Boolean;
    
    
    prima_risposta=false;
    seconda_risposta=false;
    terza_risposta=false;
    quarta_risposta=false;
    quinta_risposta=false;
    sesta_risposta=false;
    

    let risposte_corrette = [prima_risposta,seconda_risposta,terza_risposta,quarta_risposta,quinta_risposta,sesta_risposta];
   
    
   if(element.textContent == story_words[0]){
        risposte_corrette[0]=true;
        console.log("prima risposta corretta");
        
    }

     if(element.textContent == story_words[1]){
        risposte_corrette[1]=true;
        console.log("seconda risposta corretta");
     }
     if(element.textContent == story_words[2]){
        risposte_corrette[2]=true;
        console.log("terza risposta corretta");
     }
     if(element.textContent == story_words[3]){
        risposte_corrette[3]=true;
        console.log("quarta risposta corretta");
     }
     if(element.textContent == story_words[4]){
        risposte_corrette[4]=true;
        console.log("quarta risposta corretta");
     }
     if(element.textContent == story_words[5]){
        risposte_corrette[5]=true;
        console.log("quarta risposta corretta");
     }

    
     return risposte_corrette;
              
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


vintoSecondoLivello: function(){
    let vittorie = Array.from(document.getElementsByClassName('second-level-up'));

    vittorie.forEach(vittoria =>{
      
        vittoria.classList.add('visible_buttons');
    });
},





vinto: function(){
    let vittorie = Array.from(document.getElementsByClassName('vittoria_parziale'));

    vittorie.forEach(vittoria =>{
      
        vittoria.classList.add('visible');
    });
},

vintoLivello: function(){
    let vittorie = Array.from(document.getElementsByClassName('level-up'));

    vittorie.forEach(vittoria =>{
      
        vittoria.classList.add('visible_buttons');
    });
},



click_button_clone1: function(){
    let clones = document.getElementById('button1');
   

        

        
        clones.classList.remove('button_clone');
        clones.classList.add('button_clone_animation');

    

},
    click_button_clone_light1: function(){
        let clones = Array.from(document.getElementsByClassName('button1'));
        clones.forEach(clone => {
    
            
    
            console.log('button_clone')
            clone.classList.remove('button_clone');
            clone.classList.add('button_clone_animation');
    
        });
    
},

click_button_clone2: function(){
    let clones = document.getElementById('button2');
   

        

        
        clones.classList.remove('button_clone');
        clones.classList.add('button_clone_animation');

    

},
    click_button_clone_light2: function(){
        let clones = Array.from(document.getElementsByClassName('button2'));
        clones.forEach(clone => {
    
            
    
            console.log('button_clone')
            clone.classList.remove('button_clone');
            clone.classList.add('button_clone_animation');
    
        });
    
},
click_button_clone3: function(){
    let clones = document.getElementById('button3');
   

        

        
        clones.classList.remove('button_clone');
        clones.classList.add('button_clone_animation');

    

},
    click_button_clone_light3: function(){
        let clones = Array.from(document.getElementsByClassName('button3'));
        clones.forEach(clone => {
    
            
    
            clone.classList.remove('button_clone');
            clone.classList.add('button_clone_animation');
    
        });
    
},


    click_button_clone_light4: function(){
        let clones = Array.from(document.getElementsByClassName('button4'));
        clones.forEach(clone => {
    
            
    
            clone.classList.remove('button_clone');
            clone.classList.add('button_clone_animation2');
    
        });
    
},
click_button_clone4: function(){
    let clones = document.getElementById('button4');
   

        

        
        clones.classList.remove('button_clone');
        clones.classList.add('button_clone_animation2');

    

},


    click_button_clone_light5: function(){
        let clones = Array.from(document.getElementsByClassName('button5'));
        clones.forEach(clone => {
    
            
    
            clone.classList.remove('button_clone');
            clone.classList.add('button_clone_animation2');
    
        });
    
},
click_button_clone5: function(){
    let clones = document.getElementById('button5');
   

        
    
        
        clones.classList.remove('button_clone');
        clones.classList.add('button_clone_animation2');

    

},

    click_button_clone_light6: function(){
        let clones = Array.from(document.getElementsByClassName('button6'));
        clones.forEach(clone => {
    
            
    
            clone.classList.remove('button_clone');
            clone.classList.add('button_clone_animation2');
    
        });
    
},
click_button_clone6: function(){
    let clones = document.getElementById('button6');

        
        clones.classList.remove('button_clone');
        clones.classList.add('button_clone_animation2');

    

},





};


app.start();


