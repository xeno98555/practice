# sass および scssについて
cssのプリプロセッサ。メタ言語とも。  
cssをより高速に、保守性を高めて記述できる便利拡張子。  
ただし、.sass, .scssともにブラウザを直接その記法を解釈できないため、cssファイルにコンパイルしてあげる必要がある。  
コンパイルの方法はGUIを使う、バッチファイルを使う等複数あるが、最近はNodejsを利用したコンパイルコマンドの実行がメジャー。  
.sassと.scssは記法が異なる。よく使われるのはscssのほうなので、scssの記法のみ説明する。  
## scssの記法
### 入れ子
cssと最も異なり、最も恩恵の大きい点。  
cssだとこう書いているところを  
```
.hogeContainer {
  width: 100%;
  display: flex;
}

.hogeContainer .hoge {
  width: 50%;
}

.hogeContainer .hoge .text {
  font-size: 14px;
}
```
scssではこう書ける。  
```
.hogeContainer {
  width: 100%;
  display: flex;
  .hoge {
    width: 50%;
    .text {
      font-size: 14px;
    }
  }
}
```
cssみたいにいちいち親を書かなくていい。楽。  
### &(アンパサンド)
親の要素, classの指定を子に引き継ぐことができる。  
```
.hoge {
  &.huga {
    width: 100%;
  }
  a {
    &:hover {
      opacity: 0.8;
    }
  }
}
```
これをコンパイルしてcssにすると以下のようになる。  
```
.hoge.huga {
  width: 100%;
}

.hoge a:hover {
  opacity: 0.8;
}
```
このように、&をうまく使うことで記述をシンプルにできる。賢い。  
### 変数
scssはコンパイルを前提にしているので、変数を使うことができる。  
※近々cssでも変数は使えるようになるらしい。各種ブラウザが対応完了するまでの期間を考えると、業務で利用できるのはだいぶ先になりそう。
```
$blue: #3399cc;

.hoge {
  color: $blue;
}

.huga {
  backgroud-color: $blue;
}
```
上記をコンパイルすると以下のようになる。
```
.hoge {
  color: #3399cc;
}

.huga {
  backgroud-color: #3399cc;
}
```
上記のようによく使う指定を変数にしておけば、それをまとめて変更しなければいけないときに変更する箇所が一箇所で済む。  
色だけでなく、mediaqueryで指定する横幅、font-sizeなんかにも使える。便利。  
### import
scssは他のscssを取り込むことができる。
```
// _hoge.scss
.hoge {
  width:100%;
}
```
```
// huga.scss
@import "hoge"; // hoge.scssとhuga.scssが同じ階層にいる場合

.huga {
  width: 50%;
}
```
上記をコンパイルすると以下のようになる。
```
// huga.css
.hoge {
  width: 100%;
}

.huga {
  width: 50%;
}
```
このように、 `_hoge.scss` は `huga.scss` に取り込まれ、コンパイル後に作成される `huga.css` には両方の記述が載っている状態になる。  
例えば `_header.scss` `_footer.scss` のように各パーツ毎にscssを作成して一つのファイルにimportする作りにしておけば、一つのファイルの中に書かれた大量の記述から特定の記述のみを探す手間を省くこともできるだろう。メンテナンス性が工場する。素敵。  
※importされる側のファイルには頭に `_` をつける。
### mixin
jsの関数を作るイメージ。  
引数を渡すことで、適宜値を調整することもできる。  
`@mixin` でmixinの内容を定義 → `@include` でmixinを利用
```
@mixin text($color: #333, $size: 14px, $weight: 300) {// これが初期値
  color: $color;
  font-size: $size;
  font-weight: $weight;
}

.hoge {
  @include text();
}

.huga {
  @include text(#fff, 12px, 600);
}
```
上記をコンパイルした場合、以下のようになる。  
```
.hoge {
  color: #333;
  font-size: 14px;
  font-weight: 300;
}

.huga {
  color: #fff;
  font-size: 12px;
  font-weight: 600;
}
```
これは代表的な例。mixinは割といろいろ使い道が広い。すごい。  
### extend
プロパティの継承。  
共通の部分だけ利用、あとは各要素で調整をしたいという時に便利。
mixinと異なり特別な定義は必要なく、記述されたstyleをそのまま利用する。  
```
.button {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 3px;
  &:hover {
    opacity: 0.8;
  }
}

.submitButton {
  @extend .button;
  background-color: #e03311;
  border: 1px solid #e03311;
}
```
上記をコンパイルすると、以下のようになる。
```
.button,
.submitButton {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.button:hover,
.submitButton:hover {
  opacity: 0.8;
}

.submitButton {
  background-color: #e03311;
  border: 1px solid #e03311;
}
```
このように、共通している部分のみをまとめてくれる。クレバー。  
mixinとextendは割とどちらを使うか頻繁に迷うポイント。  
考え方として、
- mixinは固定された記述を再利用する
- extendはすでにあるstyleを拡張する
という考え方でいると使い分けがしやすいように思う。