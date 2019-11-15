var myModal = new Kmodal('.modal');

$('.popup__open-menu').click(function () {
  $(this).toggleClass('popup__open-menu_active');
  $(this).closest('.popup__row').next('.popup__node-list').toggleClass('popup__node-list_active');
});

$('.popup__input').click(function () {

  let list = $(this).closest('.popup__row').next('.popup__node-list');

  if ($(this).prop('checked') == true) {
    list.find('input').prop('checked', true);

  } else {
    list.find('input').prop('checked', false);
  }

});

/*   let list = $(this).closest('.popup__row').next('.popup__node-list').attr("class");
   console.log(list);

   $(`.${list} input:checkbox`).prop('checked', true) */