var flipContainer = document.querySelector('.flip-container')
    front = document.querySelector('.front')
    back = document.querySelector('.back');
front.addEventListener('click',function(event){
	flipContainer.classList.remove('turnBack');
	flipContainer.classList.add('turnFront');
},false);

back.addEventListener('click',function(event){
   flipContainer.classList.remove('turnFront');
   flipContainer.classList.add('turnBack');
},false);