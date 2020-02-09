$(function(){
    function buildHTML(message){
        if ( message.image ) {
            var html =
             `<div class="chat-message" data-message-id=${message.id}>
                <div class="top-info">
                  <div class="top-info__talker">
                    ${message.user_name}
                  </div>
                  <div class="top-info__data">
                    ${message.data}
                  </div>
                </div>
                <div class="input-box">
                  <p class="input-box__text">
                    ${message.content}
                  </p>
                </div>
                <img src=${message.image} >
              </div>`
            return html;
        } else {
          var html =
           `<div class="chat-message" data-message-id=${message.id}>
              <div class="top-info">
                <div class="top-info__talker">
                  ${message.user_name}
                </div>
                <div class="top-info__data">
                  ${message.data}
                </div>
              </div>
              <div class="input-box">
                <p class="input-box__text">
                  ${message.content}
                </p>
              </div>
            </div>`
          return html;
        };
    }
$('#new_message').on('submoit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
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
        $('#new_message.new_message')[0].reset();
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function() {
        alert('エラーが発生しメッセージが送信できませんでした。');
    });
})
});