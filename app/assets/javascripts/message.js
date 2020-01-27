$(function(){
    function buildHTML(message){
        if ( message.image ) {
            var html =
              `<div class="message" data-message-id=${message.id}>
                <div class="chat-message">
                  <div class="chatr-message__user-name">
                    ${message.user_name}
                  </div>
                  <div class="chat-message__data">
                    ${message.created_at}
                  </div>
                </div>
                <div class="lower-message">
                  <p class="lower-message__content">
                    ${message.content}
                  </p>
                </div>
                <img src=${message.image} >
               </div>`
            return html;
        } else {
          var html =
            `<div class="message" data-message-id=${message.id}>
               <div class="chat-message">
                 <div class="chat-message__user-name">
                   ${message.user_name}
                 </div>
                 <div class="chat-message__data">
                   ${message.created_at}
                 </div>
               </div>
               <div class="lower-message">
                 <p class="lower-message__content">
                   ${message.content}
                 </p>
               </div>
             </div>`
          return html;
        };
    }
    $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
       .done(function(data){
           var html = buildHTML(data);
           $('.messages').append(html);
           $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
           $('form')[0].reset();
       })
    })
  
  });