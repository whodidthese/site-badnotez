# Badnotez 截圖規格與本次交付

2026-10-17 已以現有 iPad Pro 13-inch (M5)、iPadOS 27.0 模擬器的 Badnotez 1.0 (44) 補拍。英文與繁中各 6 張，無額外行銷外框或標題，直接呈現實際 App。

- 橫式 2752 × 2064、直式 2064 × 2752；RGB PNG、無 alpha，符合 iPad 13 吋槽位。
- 原生擷取用 Device Hub Screenshot，保留方向正確的檔案。原生檔帶 alpha 通道，因此 Store 版本僅轉 RGB、不縮放。
- 示範插畫為 Owner 提供素材及現有模擬器筆記中的匯入圖片，不作為 App 原生筆刷或 AI 生成能力的證據；網站 caption、商店描述與 review notes 已說明。
- 新增 Reference collection：以現有植物、月曆、咖啡三頁的原始 payload 建立 `.badnotes` 展示備份，再由 App 匯入。沒有修改正式 App 或實機筆記。
- 原始檔、RGB 檔與 hash 存於 `/Volumes/WorkHome/workspace/_claude/badnotez_store_refs/ready-2026-10-17/`；對照表見 [capture-receipt.json](capture-receipt.json)。

| Store 檔案（兩語系相同名稱） | 內容 | 方向 | 網站對應 |
| --- | --- | --- | --- |
| 01-editor.png | 京都示範插畫與編輯器 | 橫 | 01-editor.webp |
| 02-tools.png | 螢光筆工具與濃度 50% | 橫 | 05-tools.webp |
| 03-imported-image.png | 匯入圖片選取控制點 | 直 | — |
| 04-thumbnails.png | 三頁縮圖目錄 | 直 | 03-thumbnails.webp |
| 05-library.png | 資料夾、最愛、筆記封面 | 橫 | 02-library.webp |
| 06-export.png | PNG、JPEG、PDF 匯出子選單 | 直 | 04-export.webp |

網站使用英文 UI，五張截圖以 Sharp 轉 WebP 品質 82，橫式寬 1600、直式寬 1200；外框由網頁繪製。原 SVG 佔位圖已移除，六語系 alt 與 caption 已按實圖修正。

Apple [截圖規格](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/)：iPad 13 吋槽最多 10 張、最少 1 張，可自動縮給較小 iPad。App 預覽影片與標題素材屬選用，本次未製作。

這次是商店素材驗證，不是 Apple Pencil 手感或 Owner 實機驗收；沿用 Build 44 已有的發行候選證據。
