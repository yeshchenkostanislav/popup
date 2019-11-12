$('.popup__open-menu').click(function () {
  $(this).text("-").addClass('popup__open-menu_active');
  $(this).closest('.popup__row').next('.popup__node-list').toggleClass('popup__node-list_active');
});

$('.popup__row').on('click', '.popup__open-menu_active', function () {

  $(this).text("+").removeClass('popup__open-menu_active');

})