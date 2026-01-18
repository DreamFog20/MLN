# THE TRUTH LENS 🔍

**Ứng dụng Web thuyết trình Triết học về Lý luận nhận thức Mác-Lênin**

Một Single Page Application (SPA) với phong cách Cyberpunk, được thiết kế để minh họa các khái niệm triết học về nhận thức, phân biệt thông tin thật/giả trong thời đại số.

---

## 📋 Mục lục

- [Tính năng](#-tính-năng)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Cài đặt & Chạy](#-cài-đặt--chạy)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Hướng dẫn sử dụng](#-hướng-dẫn-sử-dụng)
- [Tùy chỉnh nội dung](#-tùy-chỉnh-nội-dung)

---

## ✨ Tính năng

### 1. **Hero Section với Breaking News Ticker**
- Tiêu đề glitch animation với hiệu ứng neon
- Thanh tin tức chạy màu đỏ cảnh báo về lừa đảo KOL
- Particle effects nền với Particles.js

### 2. **Sensory Perception Test (Nhận thức Cảm tính)**
- 2 flip cards 3D với glassmorphism effect
- Mặt trước: Hình ảnh KOL hào nhoáng + badge "TRUSTED"
- Mặt sau: Cảnh báo lừa đảo với thông tin chi tiết
- Minh họa khái niệm "Hiện tượng vs Bản chất"

### 3. **Rational Perception & Philosophy (Nhận thức Lý tính)**
- **Part A**: 5 floating icons (Brain, Eye, Gear, Network, Lock)
  - Animation antigravity
  - Click vào hiện modal popup giải thích
- **Part B**: 3 Philosophical Gates so sánh quan điểm
  - Duy Tâm (Purple) - Sai lầm
  - Siêu Hình (Blue) - Hạn chế
  - Biện Chứng (Green) - Chính xác ✓

### 4. **The Truth Calculator (Máy tính Chân lý)**
- Giao diện terminal/code editor
- 3 checkbox kiểm tra tiêu chí
- Logic: Tất cả phải đúng → TRUSTED, ngược lại → WARNING
- Sound effects khi verify

### 5. **Library Sidebar (Cơ sở dữ liệu)**
- Nút LIBRARY cố định góc trên phải
- Sidebar trượt vào chứa toàn bộ lý thuyết Mác-Lênin
- Nội dung: Chương 2 - Lý luận nhận thức

### 6. **Smart Tooltips**
- Hover vào từ khóa → hiện tooltip giải thích
- Ví dụ: "Thực tiễn" → "Là tiêu chuẩn của chân lý"

### 7. **Footer với Download Button**
- Nút download với aggressive glitch effect
- Copyright text nhóm thuyết trình

---

## 🛠 Công nghệ sử dụng

- **HTML5** - Cấu trúc semantic
- **CSS3** - Animations, Glassmorphism, Cyberpunk styling
- **Vanilla JavaScript** - Logic tương tác
- **Particles.js** - Hiệu ứng hạt bay nền
- **Google Fonts** - VT323, Courier Prime, Inter, Roboto Mono

---

## 🚀 Cài đặt & Chạy

### Yêu cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Edge, Safari)
- Không cần cài đặt server

### Cách chạy

1. **Clone repository**
```bash
git clone https://github.com/DreamFog20/MLN.git
cd MLN
```

2. **Mở file HTML**
- Cách 1: Double-click vào `index.html`
- Cách 2: Click phải → Open with → Chọn trình duyệt
- Cách 3: Dùng Live Server (VS Code extension)

3. **Truy cập trực tiếp**
```
file:///path/to/MLN/index.html
```

---

## 📁 Cấu trúc dự án

```
MLN/
├── index.html              # File HTML chính
├── style.css               # Toàn bộ CSS styling
├── script.js               # JavaScript logic
├── kol_profile_one.webp    # Ảnh KOL 1 (Alex Chen)
├── kol_profile_two.webp    # Ảnh KOL 2 (Jordan Rivers)
└── README.md               # File này
```

---

## 📖 Hướng dẫn sử dụng

### Khi thuyết trình

#### **Bước 1: Giới thiệu (Hero Section)**
- Scroll từ trên xuống, để audience thấy tiêu đề glitch
- Chỉ vào thanh tin tức đỏ chạy → Nhấn mạnh "thực trạng thông tin hỗn loạn"

#### **Bước 2: Nhận thức Cảm tính (Flip Cards)**
- Hover vào card 1 (Alex Chen) → Lật thẻ
- Giải thích: "Đây là nhận thức cảm tính - chỉ nhìn bề ngoài hào nhoáng"
- Hover vào card 2 (Jordan Rivers) → Lật thẻ
- Kết luận: "Cần vượt qua cảm tính để thấy bản chất"

#### **Bước 3: Nhận thức Lý tính (Floating Icons)**
- Click vào icon Brain/Eye/Gear → Hiện modal
- Đọc nội dung: "Nhận thức lý tính phản ánh bản chất, quy luật bên trong"
- Đóng modal

#### **Bước 4: So sánh Quan điểm (3 Gates)**
- Hover vào từng gate (Duy Tâm, Siêu Hình, Biện Chứng)
- Giải thích sự khác biệt
- Nhấn mạnh: "Biện Chứng là phương pháp đúng" (có animation pulse)

#### **Bước 5: Thực tiễn kiểm nghiệm (Truth Calculator)**
- Check từng checkbox
- Click "VERIFY TRUTH" → Hiện kết quả TRUSTED
- Giải thích: "Thực tiễn là tiêu chuẩn của chân lý"

#### **Bước 6: Cơ sở lý luận (Library)**
- Click nút LIBRARY góc trên phải
- Scroll qua nội dung lý thuyết
- Nói: "Nhóm đã tích hợp toàn bộ giáo trình vào đây để tra cứu"

#### **Bước 7: Kết thúc (Footer)**
- Scroll xuống footer
- Hover vào nút Download → Hiệu ứng glitch
- Kêu gọi: "Các bạn có thể download checklist để tự kiểm tra thông tin"

---

## 🎨 Tùy chỉnh nội dung

### Thay đổi tin tức chạy
**File**: `index.html` (dòng ~36-41)
```html
<div class="ticker-text">
    BREAKING: Nội dung tin tức của bạn... | CẢNH BÁO: ...
</div>
```

### Thay đổi thông tin Flip Cards
**File**: `index.html` (dòng ~62-79, ~95-112)
- Đổi tên: `<h3 class="card-name">Tên KOL</h3>`
- Đổi nghề: `<p class="card-title">Nghề nghiệp</p>`
- Đổi cảnh báo: Sửa trong `<ul>` của `.alert-content`

### Thay đổi nội dung Library
**File**: `index.html` (dòng ~39-82 trong sidebar)
- Thêm/sửa section: `<section class="theory-section">`
- Thêm heading: `<h4>Tiêu đề mới</h4>`
- Thêm nội dung: `<p>Nội dung...</p>`

### Thêm Tooltips mới
**File**: `index.html`
```html
<span class="tooltip" data-text="Giải thích của bạn">Từ khóa</span>
```

### Đổi màu chủ đạo
**File**: `style.css` (dòng ~6-13)
```css
:root {
    --primary-matrix-green: #00ff41;  /* Màu xanh neon */
    --secondary-alert-red: #ff003c;   /* Màu đỏ cảnh báo */
}
```

---

## 🎯 Tips thuyết trình

1. **Mở sẵn web trước khi trình bày** - Tránh load lâu
2. **Zoom trình duyệt 100%** - Đảm bảo hiển thị đúng
3. **Tắt bookmark bar** - Giao diện gọn gàng hơn
4. **Chế độ toàn màn hình** - Press F11
5. **Luyện tập hover/click** - Để tương tác mượt mà
6. **Chuẩn bị script** - Biết nói gì ở mỗi section

---

## 📝 Ghi chú

- Web hoạt động hoàn toàn offline (không cần internet sau khi load Particles.js và Google Fonts)
- Tương thích với mọi thiết bị (responsive design)
- Không có backend, tất cả chạy trên client-side
- Ảnh KOL được tạo bằng AI (không phải người thật)

---

## 👥 Tác giả

**Nhóm Thuyết trình Triết học**  
FPT University

---

## 📄 License

Dự án này được tạo cho mục đích học tập và thuyết trình.

---

## 🙏 Cảm ơn

- **Particles.js** - Vincent Garreau
- **Google Fonts** - VT323, Courier Prime, Inter, Roboto Mono
- **AI Image Generation** - Tạo ảnh KOL demo

---

**Chúc bạn thuyết trình thành công! 🎓✨**
