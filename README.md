# 我的餐廳清單
此餐廳清單收藏了我最喜歡的8家餐廳，除了可以看到餐廳的詳細資訊，還可以透過餐廳名稱或餐廳類別來找到特定的餐廳，且能新增餐廳、修改餐廳資訊與刪除餐廳

## 專案畫面
![Index](https://github.com/aziz0916/restaurant_list_a7_revise2/blob/main/public/images/index.png)
![Detail](https://github.com/aziz0916/restaurant_list_a7_revise2/blob/main/public/images/detail.png)
![Match](https://github.com/aziz0916/restaurant_list_a7_revise2/blob/main/public/images/match.png)
![Unmatch](https://github.com/aziz0916/restaurant_list_a7_revise2/blob/main/public/images/unmatch.png)
![New](https://github.com/aziz0916/restaurant_list_a7_revise2/blob/main/public/images/new.png)
![Edit](https://github.com/aziz0916/restaurant_list_a7_revise2/blob/main/public/images/edit.png)

## 專案功能
1. 使用者可以在首頁看到所有餐廳與它們的簡單資料：
   + 餐廳照片
   + 餐廳名稱
   + 餐廳分類
   + 餐廳評分
2. 使用者可以再點進去看餐廳的詳細資訊：
   + 類別
   + 地址
   + 電話
   + 描述
   + 圖片
3. 使用者可以透過搜尋餐廳名稱來找到特定的餐廳
4. 使用者可以透過搜尋餐廳類別來找到特定的餐廳
5. 使用者可以新增一家餐廳
6. 使用者可以修改一家餐廳的資訊
7. 使用者可以刪除一家餐廳

## 使用工具
- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎
- [MongoDB](https://www.mongodb.com/) - 資料庫
- [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB 的 ODM 可以在程式中與資料庫溝通
- [body-parser](https://www.npmjs.com/package/body-parser) - Express用於解析請求(body)資料的中介軟體

## 安裝
1. 開啟終端機(Terminal)，Clone 此專案至本機電腦

```
git clone https://github.com/aziz0916/restaurant_list_a7_revise2.git
```
2. 進入存放此專案的資料夾

```
cd restaurant_list_a7_revise2
```
3. 安裝 npm 套件

```
npm install
```
4. 引入種子資料

```
npm run seed
```
5. 執行程式

```
npm run dev
```
