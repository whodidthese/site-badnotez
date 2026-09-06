# Badnotes 網站

Badnotes 的簡單單頁介紹站，另提供獨立的隱私政策頁。使用原生 HTML、CSS、JavaScript，不依賴框架、套件安裝或建置程序。

- 首頁：https://whodidthese.github.io/site-badnotes/
- 隱私政策：https://whodidthese.github.io/site-badnotes/privacy.html
- 支援：https://github.com/whodidthese/site-badnotes/issues

## 語言與內容

提供英文及繁體中文。`?lang=en`、`?lang=zh-Hant` 可直接連到指定語言；未指定時依瀏覽器語言選擇，不支援的語言回退英文。不使用 Cookie 或 localStorage。停用 JavaScript 時，完整英文內容與導覽仍可使用。

- `index.html`：產品介紹、開發中狀態與支援。
- `privacy.html`：App、本機診斷、Apple TestFlight、網站代管、資料保留／刪除及聯絡方式。
- `assets/site.css`：共用版面與響應式樣式。
- `assets/site.js`：語言切換與跨頁語言連結；英文直接寫於 HTML，翻譯保存在 `data-zh` 屬性。
- `assets/app-icon.png`：Badnotes 現有 App 圖示，未重新繪製或修改。

目前 App 尚在封閉測試，因此不顯示未生效的 App Store 下載按鈕。公開上架後，再以已確認可開啟的 App Store 網址更新首頁狀態與下載入口。隱私政策必須隨實際資料處理行為更新。

## 本機預覽

在此 repository 執行 `python3 -m http.server 8765 --bind 127.0.0.1`，開啟 http://127.0.0.1:8765/ 。預覽結束後停止伺服器。

## GitHub Pages

採用 Settings → Pages → Deploy from a branch，來源為 `main` 的 `/ (root)`。`.nojekyll` 讓 GitHub 直接提供靜態檔案。推送至 `main` 後由 GitHub Pages 發布，無需自訂 Actions workflow 或外部代管服務。

App Store Connect 可使用上述 `privacy.html` 作為 Privacy Policy URL，首頁 `#support` 作為 Support URL。App 內可存取的隱私政策入口與 App Store Connect 欄位設定屬於 App 發行工作，這個網站不會自動變更它們。

## 內容依據與驗證

2026-09-06 初版依 Badnotes 現行需求契約、Privacy Manifest、圖片權限及本機診斷程式核對，產品來源版本為 `851608fce84484c8067df95529ede78200b58e2a`。`site-badplayers` 僅作為簡單靜態站、獨立隱私頁及 GitHub Issues 支援方式的參考，未沿用其音訊產品文案或上架資訊。

隱私政策外部依據：

- [Apple App Review Guidelines §5.1.1](https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage)
- [Apple TestFlight 與隱私](https://www.apple.com/legal/privacy/data/en/test-flight/)
- [GitHub Pages 資料收集](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection)

交付時執行靜態 HTML／本機資源及錨點檢查、JavaScript 語法與語言切換行為驗證、CSS 響應式規則檢查及遠端 Pages HTTP 驗證；不執行 iPad App build、Simulator 或實機測試。
