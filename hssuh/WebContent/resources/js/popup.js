$(function(){
  $("#confirm").click(function(){
      modalClose();
      //컨펌 이벤트 처리
  });
  $("#modal-open").click(function(){
	  alert(1);
	  //$("#popup").css('display','flex').hide().fadeIn();
  });
  $("#close").click(function(){
      modalClose();
  });
  function modalClose(){
    $("#popup").fadeOut();
  }
});