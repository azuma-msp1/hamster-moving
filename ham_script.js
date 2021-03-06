$(function(){
	$('.slider-list').slick({
		autoplay:true,
		autoplayspeed:100,
		centerMode: true,
		arrows: true,
		centerPadding: '50px',
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1, //Prev, Nextボタンで何枚ずつスライドを切り替えるか
		responsive: [
		  {
			breakpoint: 960,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  centerPadding: '10%',
			}
		  },
		  {
			breakpoint: 560,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  centerPadding: '50px',
			}
		  },
		]
	});

	$('.openbtn').click(function(){
		$(this).toggleClass('active');
	});

});


//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
	  //タブ設定
	  $('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
		var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
		if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
		  var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
		  $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
		  $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
		  //表示させるエリア設定
		  $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
		  $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
		}
	});
	}
}

  //タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});


  // 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
	  $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
	  $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});

//MENUボタンの位置
function menuButton() {

	var scroll = $(window).scrollTop(); //スクロール値を取得
	if (scroll >= 215){//145pxスクロールしたら
		$('.openbtn-fixed').addClass('fixed');		// fixedというクラス名を追加
	}else{//それ以外は
		if($('.openbtn-fixed').hasClass('fixed')){//fixedというクラス名が既に付与されていたら
			$('.openbtn-fixed').removeClass('fixed');	//  fixedというクラス名を除去
		}
	}
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	menuButton();/* スクロールした際の動きの関数を呼ぶ*/
	});