const engineRev = new Audio('/sounds/car-ignition-1.wav');
const letsDrive = document.querySelector('.btn-get-started');;
letsDrive.addEventListener('click', ()=>{
    engineRev.play()
});