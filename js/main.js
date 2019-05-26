const buttonAdd = document.querySelector('.add');
const modalW = document.getElementById('modalWindow');
const buttonClose = document.getElementById('closeButton');
const body = document.querySelector('body');
const load = document.getElementById('loadImg');
const appendBtn = document.getElementById('append');
const gallery = document.querySelector('.gallery');
const modalContent = document.querySelector('.modalContent');
let imgDog= document.createElement('img');

function modalToggle(){
    modalW.classList.toggle('modal-view');
    body.classList.toggle('modal-open');
   	imgDog.remove();
};

function loadingImg(){
	fetch('https://dog.ceo/api/breeds/image/random').then (
		function(response) {
  			return response.json();
		})
	.then(
		function(object) {
			imgDog.className='item-preview';
			modalContent.appendChild(imgDog);
  			imgDog.src = object.message;
	})
};

function appendImg(){
	let finishDog= document.createElement('img');
	gallery.appendChild(finishDog);
	finishDog.src=imgDog.src;
};


function closeWindow(event) {
    if (event.target == modalW) {
        return modalToggle();
    }
}

buttonAdd.addEventListener('click', modalToggle);
buttonClose.addEventListener('click', modalToggle);
load.addEventListener('click', loadingImg);
appendBtn.addEventListener('click', appendImg);
appendBtn.addEventListener('click', modalToggle);
modalW.addEventListener('click', closeWindow);