class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string,

    ) {
        this.fullName = firstName + '' + middleInitial + '' + lastName;
    }
}






interface Person {
    firstName: string;
    lastName: string;

}






const containerEl = document.getElementById('container')
const btn = document.querySelector('.button')

let number = 0


const displayNumber = document.querySelector('.display-number')
const btnReset = document.querySelector('.button-reset')

btnReset.addEventListener('click', ()=>{
     number = 0
    let resetNumber = number.toString()

     displayNumber.textContent = resetNumber
})



btn.addEventListener("click", ()=> {
       console.log('i was clicked', number)







       if(number >= 10){
           number = 0
       } else{
            number++
       }


       let newNumber = number.toString()

       displayNumber.textContent = newNumber


   })


const sliderCount = document.querySelector('.slider-number')
const slider = document.querySelector('#slider')




slider.addEventListener('input', function(){

    let sliderValue = this.value

    sliderCount.textContent = sliderValue;

    console.log(this.value)


})









