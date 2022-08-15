let editForm = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
closeButton.addEventListener('click', function() {
    editForm.classList.remove('popup_opened')
})

let editButton = document.querySelector('.profile-info__edit-button');
let formName = document.querySelector('.profile-info__name'); 
let formJob = document.querySelector('.profile-info__job');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job'); 
let submitButton = document.querySelector('.popup__submit-button');

editButton.addEventListener('click', function() {
    editForm.classList.add('popup_opened');
    nameInput.value = formName.textContent;
    jobInput.value = formJob.textContent;

})
let formSubmitHandler = function (evt) {
    evt.preventDefault()
    formName.textContent = nameInput.value;
    formJob.textContent = jobInput.value;
    editForm.classList.remove('popup_opened');
}

submitButton.addEventListener('click', formSubmitHandler);


submitButton.addEventListener('submit', formSubmitHandler);

let likeButton = document.querySelector('.elements__like-button');
likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('elements__like-button_active')
})
