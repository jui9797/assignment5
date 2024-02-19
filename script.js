// first button click function
function handleButtonClick(){
 document.getElementById('ph-paribahan').scrollIntoView({behavior: 'smooth'});
     
}
// set background color in seats
let totalPrice =0;
let grandTotal =0;
let seatCount=1;
let btnDecrease =40;
const seats =document.querySelectorAll('.seats')
for(let seat of seats){
    // console.log(seat)


    seat.addEventListener('click', function(event){
        
        if( seatCount<=4){
            seat.classList.add('bg-[#1DD100]')
            // selected
             const selected =document.getElementById('selected')
             selected.style.color ='#1DD100';
            //  seat count
            const seatCount=document.getElementById('count').innerText
            // console.log('count',seatCount)
            //  seat decrease color
            const seatDecrease =document.getElementById('btn-decrese')
            seatDecrease.style.color ='#1DD100';
            // console.log('if')
            // seat decrease
           const currentSeatElement = document.getElementById("seat-decrease");
           const currentSeatText = currentSeatElement.innerText;
           const currentSeat = parseInt(currentSeatText);
        //    console.log(currentSeat);
           const newSeat = currentSeat - 1;
            currentSeatElement.innerText=newSeat;
            // seat increase

            const currentSeatCountElement = document.getElementById("count");
           const currentSeatCountText = currentSeatCountElement.innerText;
           const currentSeatCount = parseInt(currentSeatCountText);
        //    console.log(currentSeatCount);
           const newSeatCount = currentSeatCount + 1;
            currentSeatCountElement.innerText=newSeatCount;

            // appendchild
            const title =document.querySelector('.seats')
            const innerText =title.innerText;
            // console.log(event.target.innerText)
            const titleContainer =document.getElementById('append')
            // console.log(titleContainer);
            const p =document.createElement('p')
            p.innerText =event.target.innerText+'' +"Economoy"+ '' +"550"
            titleContainer.appendChild(p);
            // total price
            const price =parseFloat(document.getElementById('price').innerText)
            // console.log(price);
            totalPrice+=price
            // console.log(totalPrice);
            // showing total price
            document.getElementById('total-price').innerText=totalPrice.toFixed(2);
            // grand total price
            const price2 =parseFloat(document.getElementById('price').innerText)
            // console.log(price2);
            grandTotal+=price2;
            document.getElementById('grand-total').innerText=totalPrice.toFixed(2);
        }
        
        else{
            alert('you can not buy ticket more than 4')
        }
       seatCount++;
       btnDecrease=btnDecrease-1;
        // console.log('seatCount:', seatCount);
        // console.log('btnDecrease:', btnDecrease);
    })
}
// open modal
function openModal(){
    const modal =document.getElementById('modal');
    modal.style.display='flex';
}


