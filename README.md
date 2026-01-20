# メディア一体型EC モック

## 概要
メディアコンテンツ（記事）とEC機能を統合したサイトのモックアップです。

## ファイル構成
- `index.html` - トップページ（記事一覧と商品一覧の統合表示）
- `article.html` - 記事詳細ページ（記事内で商品を購入できる）
- `styles.css` - スタイルシート
- `script.js` - インタラクティブ機能（カート、お気に入りなど）

## 主な機能
1. **トップページ**
   - 注目記事の表示
   - おすすめ商品の表示
   - 記事と商品の統合セクション

2. **記事詳細ページ**
   - 記事本文の表示
   - 記事内に商品を埋め込んで表示（インライン商品）
   - 記事で紹介した商品一覧

3. **インタラクティブ機能**
   - カート機能（商品追加、カウント表示）
   - お気に入り機能
   - レスポンシブデザイン

## 確認方法（ローカル）
1. `index.html` をブラウザで開いてください
2. 記事カードや商品カードをクリックして動作を確認してください
3. カート追加ボタンをクリックして通知を確認してください

## GitHub Pages で公開する手順

このモックは、そのまま GitHub Pages にデプロイできます。先方は **GitHub アカウント不要**で、発行されたURLを開くだけで閲覧できます。

### 1. GitHub リポジトリを作成
1. GitHub で新規リポジトリを作成（例：`shecare-mock`）
2. 「Public」を選択して作成

### 2. ローカルから push（ターミナルで実行）

```bash
cd /Users/erisakim/Documents/hatoriri/EC

# まだコミットしていない場合
git add .
git commit -m "Add shecare mock"

# リモートを登録（リポジトリURLは自分のものに置き換える）
git remote add origin https://github.com/あなたのユーザー名/shecare-mock.git

# 初回 push
git push -u origin main
```

### 3. GitHub Pages を有効化
1. GitHub 上でリポジトリを開く
2. **Settings → Pages** を開く
3. 「Branch」を `main`、「フォルダ」を `/ (root)` にして保存
4. 数分待つと、画面上部に **公開URL**（例：`https://ユーザー名.github.io/shecare-mock/`）が表示される

このURLを先方に共有すれば、ブラウザからモックを閲覧できます。
