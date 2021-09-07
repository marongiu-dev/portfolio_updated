    class AudioController {
        constructor(){
            this.bgMusic = new Audio('/Users/andremarongiu/Desktop/portfolio/Project-Files-Language-Learning-Game/Project 09 - Styling the App/audio/audio1.wav');
            this.rightSelectionSound = new Audio('/Users/andremarongiu/Desktop/portfolio/Project-Files-Language-Learning-Game/Project 09 - Styling the App/audio/correctAnswer.mp3');
            this.wrongSelectionSound = new Audio('/Users/andremarongiu/Desktop/portfolio/Project-Files-Language-Learning-Game/Project 09 - Styling the App/audio/WrongAnswer.wav');
            this.victorySound= new Audio('/Users/andremarongiu/Desktop/portfolio/Project-Files-Language-Learning-Game/Project 09 - Styling the App/audio/horn-victory.wav');
            this.gameOverSound = new Audio('/Users/andremarongiu/Desktop/portfolio/Project-Files-Language-Learning-Game/Project 09 - Styling the App/audio/rcade-game-over.wav');
            this.bgMusic.volume=0.07;
            this.bgMusic.loop=true;
            this.gameOverSound.volume=0.1;

        }

        startMusic(){
            this.bgMusic.play();
        }
        stopMusic(){
            this.bgMusic.pause();
            this.bgMusic.currentTime=0;
            this.bgMusic.volume=0;  
        }
        rightSelect(){
            this.rightSelectionSound.play();
        }
        wrongSelect(){
            this.wrongSelectionSound.play();
        }
        victory(){
            this.stopMusic();
            this.victorySound.play();
        }
        gameOver(){
            this.stopMusic();
            this.gameOverSound.play();
        }



    }    
   
   
   
   
   
   
   function ready(){
        let overlays = Array.from(document.getElementsByClassName('overlay-text'));

        overlays.forEach(overlay =>{

            overlay.addEventListener('click', () =>{

                overlay.classList.remove('visible');
                // game.startGame();

                let audiocontroller = new AudioController();
                //audiocontroller.startMusic();
                

                



            });

        });
    };




let questions = [
    {
        title: 'gatto',
        alternatives: ['dog', 'cat', 'bird', 'fish'],
        correctAnswer: 1
    },
    {
        title: 'uccello',
        alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
        correctAnswer: 3
    },
    {
        title: 'topo',
        alternatives: ['cat', 'fish', 'rat', 'shark'],
        correctAnswer: 2
    },
    {
        title: 'mosca',
        alternatives: ['fly', 'puma', 'fish', 'dog'],
        correctAnswer: 0
    }
];


let app = {



    
    start: function() {
        this.currPosition = 0;
        this.score = 0;
        
        // get alternatives
        let alts = document.querySelectorAll('.alternative');

        alts.forEach((element, index) => {

            element.addEventListener('click', () => {
                // check correct answer
                this.checkAnswer(index);

                if ('click'!=0){
                this.changeImage();
                }

            });
        });
        // refresh stats
        this.updateStats();


        

        // show first question
        this.showQuestion(questions[this.currPosition]);
        this.changeImage();
        this.changeLifePoints();
        
        

    },


         changeLifePoints: function(){
            var LifePoints= 100;
            console.log(LifePoints);

            let contorno_carta = document.getElementById('copertina');
            console.log(contorno_carta);
          
            
            contorno_carta.addEventListener("click",() => { 
                
                if(LifePoints>0){

                    LifePoints -= 10 ;    
                    console.log(LifePoints);
                }else {
                    
                        console.log('Game Over');
                        let audiocontroller = new AudioController();
        
                        audiocontroller.gameOver();
        
        

                };

                
            });
           
             
            
            

          


        },

   
    


    changeImage: function() {
        
        let titolo_carta= document.getElementById('title');
        
        console.log(titolo_carta.textContent);

        placeholder=titolo_carta.textContent;
        
                                                                     
        let evento_click= document.getElementById('immagini').src = `../images/lang_images/${placeholder}.jpg`; 
        console.log(evento_click);
        
    },



    

    showQuestion: function(q) {

        // show question title
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;
        console.log(titleDiv);

        // show alternatives
        let alts = document.querySelectorAll('.alternative');
        
        alts.forEach(function(element, index){
            element.textContent = q.alternatives[index];        
        });
    },



    checkAnswer: function(userSelected) {

        let currQuestion = questions[this.currPosition];



        if(currQuestion.correctAnswer ==  userSelected) {
            // correct
            console.log('correct');
            this.score++;
            this.showResult(true);
        }
        else {
            // not correct
            console.log('wrong');
            this.showResult(false);
        }

        // refresh stats
        this.updateStats();

        // increase position
        this.increasePosition();

        // show next question
        this.showQuestion(questions[this.currPosition]);
    },

    increasePosition: function() {
        this.currPosition++;

        if(this.currPosition == questions.length) {
            this.currPosition = 0;
        }
    },

    updateStats: function() {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Your score: ${this.score}`;
    },

    showResult: function(isCorrect) {
        let resultDiv = document.getElementById('result');
        let result = '';

        // checks
        if(isCorrect) {
            result = 'Correct Answer!';
        }
        else {
            // get the current question
            let currQuestion = questions[this.currPosition];

            // get correct answer (index)
            let correctAnswIndex = currQuestion.correctAnswer;

            // get correct answer (text)
            let correctAnswText = currQuestion.alternatives[correctAnswIndex];

            result = `Wrong! Correct answer: ${correctAnswText}`;
        }

        resultDiv.textContent = result;
    }


    
};




app.start();
ready();






