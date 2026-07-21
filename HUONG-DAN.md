# Hướng dẫn đăng tải & tùy chỉnh trang web VJIWU

Trang web gồm 5 file HTML (`index.html`, `gioi-thieu.html`, `hoat-dong.html`, `thanh-vien.html`, `lien-he.html`), 1 file CSS (`css/style.css`) và 1 file JS (`js/main.js`). Không cần cài đặt phần mềm gì để chạy — chỉ cần một nơi lưu trữ tĩnh miễn phí.

## Cách 1: Đăng miễn phí bằng GitHub Pages (khuyên dùng, có tên miền dạng `tenban.github.io`)

1. Tạo tài khoản tại github.com (miễn phí).
2. Tạo repository mới, đặt tên bất kỳ, ví dụ `vjiwu-website`.
3. Upload toàn bộ nội dung trong thư mục `website` (index.html, các file .html khác, thư mục css/ và js/) vào repository đó — dùng nút "Add file → Upload files" trên GitHub, kéo thả cả thư mục vào.
4. Vào **Settings → Pages** của repository → mục "Branch" chọn `main` → Save.
5. Sau 1–2 phút, GitHub cung cấp đường link dạng: `https://<ten-tai-khoan>.github.io/vjiwu-website/` — đó là trang web của Hội.

## Cách 2: Đăng miễn phí bằng Netlify (kéo-thả, nhanh nhất)

1. Vào app.netlify.com, đăng ký tài khoản miễn phí (có thể dùng Google/GitHub).
2. Chọn "Add new site" → "Deploy manually".
3. Kéo thả cả thư mục `website` vào ô upload.
4. Netlify tự tạo link dạng `random-name.netlify.app`. Vào "Site settings" để đổi tên thành ví dụ `vjiwu.netlify.app`.

## Cách 3: Google Sites (không cần biết code, dễ nhất nhưng giao diện ít tùy biến hơn)

Nếu muốn một lựa chọn hoàn toàn kéo-thả không dùng đến các file này, có thể tạo tại sites.google.com và tự dựng lại nội dung — nhưng cách 1 và 2 giữ được đúng thiết kế đã làm.

## Gắn tên miền riêng (tùy chọn, có phí ~300.000–500.000đ/năm)

Cả GitHub Pages và Netlify đều cho phép gắn tên miền riêng (ví dụ `vjiwu.org`) miễn phí về công đăng tải — bạn chỉ trả phí mua tên miền từ nhà cung cấp như Namecheap, GoDaddy, hoặc Name.com. Sau khi mua, vào phần "Custom domain" trong Netlify/GitHub Pages và làm theo hướng dẫn trỏ DNS.

## Cách chỉnh sửa nội dung

Mở file `.html` tương ứng bằng bất kỳ trình soạn thảo văn bản nào (Notepad, VS Code...):

- **Đổi chữ:** tìm đoạn văn bản cần sửa, gõ đè lên.
- **Đổi màu sắc:** mở `css/style.css`, sửa các mã màu trong phần `:root` ở đầu file (ví dụ `--maroon: #7a1f3d;`).
- **Thêm ảnh:** tạo thư mục `images/` cạnh các file HTML, copy ảnh vào, rồi chèn bằng thẻ:
  `<img src="images/ten-anh.jpg" alt="Mô tả ảnh">`
- **Thêm/xóa mục tin tức:** trong `hoat-dong.html`, mỗi tin là một khối `<div class="card">...</div>` — copy một khối, sửa nội dung để thêm tin mới.
- **Đổi link mạng xã hội:** trong `lien-he.html`, tìm phần "Thông tin liên hệ" để thêm link Facebook/Zalo.

## Nhận tin nhắn liên hệ trực tiếp (không qua mailto)

Form liên hệ hiện tại mở ứng dụng email của người gửi. Nếu muốn nhận thẳng vào hộp thư mà không cần người dùng tự bấm gửi:

1. Đăng ký miễn phí tại formspree.io.
2. Tạo một "Form", lấy đường link dạng `https://formspree.io/f/xxxxxxx`.
3. Trong `lien-he.html`, đổi `<form class="contact-form">` thành `<form class="contact-form" action="https://formspree.io/f/xxxxxxx" method="POST">` và xóa đoạn xử lý mailto tương ứng trong `js/main.js`.

## Kiểm tra trước khi đăng

Mở trực tiếp file `index.html` bằng trình duyệt (double-click) để xem thử toàn bộ trang trước khi upload lên GitHub Pages / Netlify.
