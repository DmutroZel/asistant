$('.asistantPreview').hide(0);

$('.messageP').hide(0);

$('.asistantButton').click(function () {
    $('.asistantPreview').slideToggle(300);
})

$('#send').click(function () {


    $('.messageContainer').append(`<div class='messageItem'>${$('#message').val()}
    <span>${new Date().getHours()}:${new Date().getMinutes()}</span>
    </div>`);

    
})

// let currentTime = new Date();

// console.log(currentTime);]


$('#speak').click(function () {
  $('.asistantPreview').slideUp(500); 
  $('.messageP').fadeToggle(500);
})

$('#tg').click(function () {
    $('.asistantPreview').slideUp(500); 
    window.location.href = 'https://creator-it-academy.com/';
})
$('#gt').click(function () {
    $('.asistantPreview').slideUp(500); 
    window.location.href = 'https://github.com/DmutroZel/asistant';
})
$('#inst').click(function () {
    $('.asistantPreview').slideUp(500); 
    window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
})
