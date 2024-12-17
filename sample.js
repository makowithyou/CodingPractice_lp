// スクロールして表示領域に入ったらclass付与
$(function () {
  $(".js_sample").on("inview", function () {
    $(this).addClass("cg_color");
  });
});
