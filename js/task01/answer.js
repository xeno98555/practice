$(function() {
  // ここから処理を書く
  var $parent = $('.carousel');
  var $itemList = $parent.find('.itemList');
  var $prevButton = $parent.find('.prevButton');
  var $nextButton = $parent.find('.nextButton');
  var slideCount = 0; // スライド移動した回数
  var SLIDE_WIDTH = 190; // 一回の移動距離
  // スライド処理
  function slide(left) {
    $itemList.css("left", -left);
  }
  // ボタンの表示チェック
  function buttonDisplayCheck() {
    var itemLength = $itemList.find('.item').length;
    // 表示されている個数をカルーセルの横幅 / item一個の横幅（小数点切り上げ）で取得
    var displayCount = Math.ceil($parent.width() / SLIDE_WIDTH);
    // (item数-初期表示数)回以上スライドしていたらnextボタン非表示
    if(slideCount > itemLength - displayCount) {
      $nextButton.addClass('hide');
    } else {
      $nextButton.removeClass('hide');
    }
    // スライド回数0ならprevボタン非表示
    if(slideCount === 0) {
      $prevButton.addClass('hide');
    } else {
      $prevButton.removeClass('hide');
    }
  }
  // 初期設定
  $itemList.css("left", 0);
  buttonDisplayCheck();
  // nextボタンクリック時の処理
  $nextButton.on('click', function() {
    slideCount++;
    slide(slideCount * SLIDE_WIDTH);
    buttonDisplayCheck()
  });
  // prevボタンクリック時の処理
  $prevButton.on('click', function() {
    slideCount--;
    slide(slideCount * SLIDE_WIDTH);
    buttonDisplayCheck();
  });
});