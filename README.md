# 70. Reactプロジェクトの作成
npx create-react-app web-knock-7  
cd web-knock-7  
npm start  

→デフォルトの画面がlocalhost:3000に表示される  

# 71. 最初のコンポーネントの作成
profile.js  
![](images/kadai71_Profile.png)  
App.js  
![](images/kadai71_app.png)  
結果   
![](images/kadai71_kekka.png)  

# 72. propsを用いたデータ受け渡し
profile.js  
引数にpropsを追加  
親コンポーネント(App.js)から受け取る  
![](images/kadai72_profile.png)  
App.js  
子コンポーネント(Profile.js)にデータを渡す  
数値は{}で囲む  
![](images/kadai72_app.png)  
結果  
![](images/kadai72_kekka.png)  

# 73. useStateによる状態管理
counter.js    
![](images/kadai73_counter.png)
結果  
![](images/kadai73_kekka.png)

# 74. リストの動的描画
FruitList.js  
![](images/kadai74_FruitList.png)  
ToDoList.js  
![](images/kadai74_ToDoList.png)  
結果  
![](images/kadai74_kekka.png)  

# 75. フォーム入力とイベント処理
[ToDoList.js](src/ToDoList.js)  
結果  
![](images/kadai75_kekka.png)  

# 76. useEffectによる副作用処理
[Console.js](src/Console.js)  
結果  
![](images/kadai76_kekka.png)  

# 77. 複数コンポーネントの分割・再利用
[Header.js](src/components/Header.js)  
[Main.js](src/components/Main.js)  
[Footer.js](src/components/Footer.js)  
これらをApp.jsで組み合わせる  
![](images/kadai77_app.png)  
結果  

![](images/kadai77_kekka.png)  

# 78. react-router-domを利用したルーティング
npm install react-router-dom  
[Header.js](src/components/Header.js)  
[About.js](src/components/About.js)  
[Home.js](src/components/Home.js)  
![](images/kadai78_app.png)  
結果  
![](images/kadai78_kekka.png)  