const engineRev = new Audio('/sounds/car-ignition.mp3');
const letsDrive = document.querySelector('.btn-get-started');;
letsDrive.addEventListener('click', ()=>{
    engineRev.play()
});