$(document).ready(function () {
   $('header button').click(function () {
      $('form').slideDown();
   })

   $('button[type="reset"]').click(function () {
      $('form').slideUp();
   })

   $('form').on('submit', function (e) {
      e.preventDefault();

      const addressImg = $('#address-new-img').val();
      const newImg = $('<li style="display: none"></li>');

      $(`<img src="${addressImg}" />`).appendTo(newImg);
      $(`
         <div class="overlay-img-link">
            <a href="${addressImg}" target="_blank" title="Ver imagem em tamanho real">
               Ver imagem em tamanho real
            </a>
         </div>
      `).appendTo(newImg);
      $(newImg).appendTo('ul');
      $(newImg).fadeIn(1000);

      $('#address-new-img').val('');
   })
});