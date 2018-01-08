$(document).ready(function() {
  insertTries();

  $("#play").click(function() {
      num = createRandomNumber();
      trie=1
      $("#play").text("Reiniciar");
      $("#instructions").text(constants["MESSAGE_OBJECTIVE"]+'\n\n\n'+ constants["MESSAGE_PLAY"])
      resetNumbersPanel();
      resetTries();
  });

  $(".buttonNumber").click(function() {
    let id = this.id,
        data = $("#input").val();
    if (validators.inputValidator(data, id)) pushButton(data, id);
    if (id == "del") dropButtonn(data);
    if (id == "enter" && num != null) onEnterKey(data);
  });

  $(document).keydown(function(key) {
    let id = (parseInt(key.keyCode ? key.keyCode : key.which) - 48).toString(),
        data = $("#input").val();
    if (validators.inputValidator(data, id)) pushButton(data, id);
    if (id == "-40") dropButtonn(data);
    if (id == "-35" && num != null) onEnterKey(data)
    return false;

  });
});
