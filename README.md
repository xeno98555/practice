# git/github あとできたらsass 練習用リポジトリ
## git/github 用語
### git
ファイルのバージョン管理を行うシステム
### github
gitのポスティングサービス
### リポジトリ(repository)
gitで管理するファイル群の一単位。  
githubにはこのリポジトリ単位でファイルが管理される。  
リポジトリにはローカルリポジトリとリモートリポジトリがあり、  
自身のPCにクローンしたリポジトリをローカルリポジトリ、  
githubに上がっている元のリポジトリをリモートリポジトリと呼ぶ。
### クローン(clone)
githubに上がっているリポジトリをローカルにコピーしてくることを指す。  
単純にzip等でコピーするのとは異なり、gitのコミット履歴等を含めたコピーというイメージ。  
クローンすることで、後述のプル(pull)、プッシュ(push)することが可能になり、リモートリポジトリの変更を取得、ローカルリポジトリの変更をリモートリポジトリに反映することが可能になる。
### ブランチ(branch)
説明が難しい。世界線みたいな感じ。  
基準点から派生した分岐。文字通り枝。  
意図して操作しない限り、ブランチ同士は干渉しない。  
こちらもローカルブランチとリモートブランチが存在する。  
手元のPCにあるのがローカルブランチ、githubにあがってるのがリモートブランチ。  
基本的には以下のような名称でブランチが作成される。  
#### masterブランチ
大元のブランチ。基本的にすべてのブランチはmasterから分岐し、masterにマージ(merge)される（後述）
#### featureブランチ
作業用にmasterから分岐したブランチ。  
各作業者、各作業内容等で作成し、その際には `feature/hoge` のような形で作業者・作業内容等の名称をつける。  
### チェックアウト(checkout)
ブランチを移動すること。
### コミット(commit)
リポジトリ内の変更を記録する単位。  
どのファイルを、誰が、いつ、どういう感じに修正したか、を記録するセーブポイント。  
粒度は現場、人によって結構まちまち。  
gitは基本このcommitを重ねることでバージョンを進めていく。
### フェッチ(fetch)
ローカルブランチとリモートブランチに差異がないかを確認する操作。
### プル(pull)
リモートブランチの変更をローカルブランチに反映する操作。
### プッシュ(push)
ローカルブランチの変更をリモートブランチに反映する操作。
### マージ(merge)
ブランチとブランチを混ぜる操作。
### コンフリクト(conflict)
マージの際、マージする側とされる側に同じ行に別々の修正が行われていることによって発生する競合。  
複数人で同じファイルをいじってると割と発生する。  
発生の際はどちらが正しいかを判別し、競合を解決する必要がある。
