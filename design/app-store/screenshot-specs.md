# Badnotes 截圖規格

兩組截圖：**A. App Store 產品頁**（送審必備）與 **B. 官網佔位圖替換**。兩組可用同一批實機／模擬器原始截圖製作。

## 共同拍攝準備

- 內容要「有人在用」的質感：用 Apple Pencil 親手寫的真實筆跡，不用 AI 生成圖冒充 App 畫面。建議準備 3 本示範筆記：植物觀察（手寫＋一張照片＋螢光標記）、讀書筆記（文字方塊＋重點）、速寫靈感（線稿＋淡色紙）。
- 不出現個人資料（真名、Email、通知、私人照片）。標題用中性英文／中文，例如 `Field notes`、`Reading`、`Ideas`。
- 淺色模式、App 語言與該組截圖語言一致：英文組用英文介面，繁中組用繁中介面。
- 狀態列乾淨：模擬器可用 `xcrun simctl status_bar booted override --time 9:41 --batteryState charged --batteryLevel 100 --wifiBars 3`。
- 書庫至少 2 個資料夾、6 本以上有封面的筆記、1–2 本加星，切成 Grid。
- 原始檔存 PNG，不壓縮、不加 alpha；原始截圖與設計稿保留在 `design/app-store/source/`（不進網站）。

依專案環境契約，沿用既有模擬器；若要新增 iPad Pro 13 吋模擬器需 Owner 另行同意。用 iPad mini 原生解析度（1488 × 2266）拍攝也可以，但必須再合成到下方 13 吋畫布，不能直接上傳。

## A. App Store 截圖（必備）

App 為 iPad 專用，只需 iPad 截圖，不需 iPhone。

| 項目 | 規格 |
| --- | --- |
| 尺寸槽 | iPad 13 吋（App Store Connect 會自動縮給較小 iPad） |
| 解析度 | 直式 **2064 × 2752**（建議），或橫式 2752 × 2064；也接受 2048 × 2732 |
| 格式 | PNG 或 JPEG，RGB，無透明 |
| 數量 | 最少 1 張，最多 10 張；建議 6 張，前 3 張最重要（搜尋結果只露出前幾張） |
| 語系 | 英文（美國，主要）與繁體中文各一組；未提供的語系會沿用主要語言 |

**版面**：暖象牙底 `#F5F1E9`；上方約 18% 放標題（襯線字 New York 或 Iowan Old Style，墨色 `#292B27`，重點字用金棕 `#806038`）；下方放截圖，寬約畫布 84%，圓角 36 px、柔和陰影，可加深色 iPad 外框（與官網一致）。每張只講一件事，標題不超過 2 行。

| # | 內容 | 英文標題 | 繁中標題 |
| --- | --- | --- | --- |
| 1 | 筆記頁：手寫、螢光標記、一張照片（主視覺） | A little room for your thoughts. | 為思緒留一點空間。 |
| 2 | 工具列第三列展開：筆種、粗細、色盤；螢光筆濃度滑桿 | Pens that feel right. | 順手的筆，輕輕畫重點。 |
| 3 | 頁面上同時有照片與文字方塊，選取圖片顯示控制點 | Photos and text, side by side. | 照片與文字，放在一起。 |
| 4 | 縮圖目錄（四欄，目前頁藍框） | Every page at a glance. | 每一頁，一目了然。 |
| 5 | 書庫 Grid：資料夾、最愛、封面 | A tidy library. | 整齊的書庫。 |
| 6 | `…` 選單展開匯出 PDF／PNG／JPEG | Share what you choose. | 分享什麼，由你決定。 |
| 7（選用） | 純文字卡：No account · No ads · No subscription | Your notebooks stay on your iPad. | 筆記只留在你的 iPad。 |

選用素材：App 預覽影片（iPad 13 吋，15–30 秒，1200 × 1600 或 1600 × 1200）；新的「標題素材」5244 × 2950 或 3840 × 1646。兩者都不是送審必備。

## B. 官網佔位圖

網站目前在 `assets/screens/` 用 SVG 佔位圖，畫面已套 iPad 外框。外框固定裁成 **4:3（橫）／3:4（直）**；13 吋截圖正好是這個比例，iPad mini 截圖（約 2:3）會被上下裁切，請改拍 13 吋或先裁成 3:4。

| 佔位檔 | 位置 | 方向與原始尺寸 | 內容 |
| --- | --- | --- | --- |
| `01-editor.svg` | 首頁主視覺 | 橫式 2752 × 2064 | 橫放 iPad 的筆記頁：手寫＋螢光＋照片（同 App Store #1 的橫式版） |
| `02-library.svg` | A closer look 左上 | 橫式 2752 × 2064 | 書庫 Grid，資料夾區展開 |
| `03-thumbnails.svg` | A closer look 右上 | 直式 2064 × 2752 | 縮圖目錄 |
| `04-export.svg` | A closer look 左下 | 直式 2064 × 2752 | `…` 選單的匯出子選單 |
| `05-tools.svg` | A closer look 右下 | 橫式 2752 × 2064 | 工具列與色盤，頁面上有照片與文字方塊 |

網站用的是**純截圖**（不要加標題或外框，外框由網頁繪製）。交付後的處理：

1. 轉成 WebP：橫式寬 1600 px、直式寬 1200 px，品質約 82（例如 `cwebp -q 82 -resize 1600 0 in.png -o 02-library.webp`）。
2. 放進 `assets/screens/`，把 `index.html` 對應的 `.svg` 改成 `.webp`，並刪除該 SVG 佔位圖。
3. 若截圖內容與 alt 文字描述不同，同步修改 `assets/translations.js` 裡的 `screen*Alt`（六種語言）。
