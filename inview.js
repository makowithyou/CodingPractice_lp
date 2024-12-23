$(function () {
  $(".js_slideIn").on("inview", function () {
    $(this).addClass("is_inview");
  });
});

// スクロールして表示領域に入ったらclass付与
$(function () {
  $(".js_fadeIn").on("inview", function () {
    $(this).addClass("is_inview");
  });
});
