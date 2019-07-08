msHundredsCounter = 0
msTensCounter = 0
secCounter = 0
tenSecCounter = 0

class Counter {
    constructor(digits) {
        this.digits = document.querySelectorAll('.digit');
        this.secondTens = document.querySelector('#secondTens');
        this.secondOnes = document.querySelector('#secondOnes');
        this.colon = document.querySelector('#colon');
        this.msHundreds = document.querySelector('#msHundreds');
        this.msTens = document.querySelector('#msTens');
        this.reset();
        this.startTimer = setInterval(this.timer, 10);
        console.log(this.startTimer.type)
        this.endTimer = setTimeout(() => {
            clearInterval(this.startTimer);
            this.digits.forEach(function (i) {
                i.classList.add('redDigit')
            }) 
        }, 10100)
    }
    reset() {
        this.secondTens.innerHTML = 0;
        this.secondOnes.innerHTML = 0;
        this.msHundreds.innerHTML = 0;
        this.msTens.innerHTML = 0;
    }
    timer() {


        this.msHundreds.innerHTML = msHundredsCounter.toString().split('').pop();
        this.msTens.innerHTML = msTensCounter.toString().split('').pop();
        this.secondOnes.innerHTML = secCounter.toString().split('').pop();
        this.secondTens.innerHTML = tenSecCounter.toString().split('').pop();
        if (tenSecCounter < 1) {

            msHundredsCounter += 1;

            if (msHundredsCounter === 10) {
                msHundredsCounter = 0;
                msTensCounter += 1;
            }
            if (msTensCounter === 10) {
                msTensCounter = 0;
                secCounter += 1;
            }
            if (secCounter === 10) {
                secCounter = 0;
                tenSecCounter += 1;

            }
        }




    }

}



const digits = document.querySelector('.digits');

let first_counter = new Counter(digits);


