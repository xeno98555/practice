# Nodejsについて
サーバーサイドで動作するJavaScript。  
ブラウザ上でしか動作しなかったJavaScriptの立場を多方面に引き上げた立役者。  
すごいjsぐらいの認識でとりあえずはOK。  
フロントエンド開発では主に開発環境の構築に利用する。  
例をあげると
- sass, scssのコンパイル
- ES6以降の記法で書かれたjavascriptのトランスパイル(babel)
- webpackを利用したjsファイルの結合(bundle)
- ローカルサーバーの立ち上げ
- ファイルの監視
つまり、scssやjsが更新されたら必要なコマンドを走らせて画面に反映する、等の環境構築が可能になる。  
また、 `package.js` をgithub等で共有することにより、その環境を容易に再現可能。  
以下はフロントの環境構築手順。
## npm init
`package.json` が作成されていない状態で行う最初の操作。  
このディレクトリでnpmを利用しますよーという宣言を行い、最低限の設定をする。  
基本はenter連打でいい。
## npm install
`package.json` に記述されている `devDependencies` `dependencies` の内容に従って、node modulesをインストールする。
## npm run [コマンド名]
`package.json` 内で `scripts` に定義されたコマンドを呼び出す。  
`npx` を使うのと同様。  
`npm run [コマンド名] --` とすることで `--` に続いて引数を渡すこともできる。  