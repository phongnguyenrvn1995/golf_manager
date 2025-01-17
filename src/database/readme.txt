database/
├── migrations/
│   ├── 001_create_users_table.ts
│   ├── 002_create_posts_table.ts
├── models/
│   ├── User.ts
│   ├── Post.ts
├── seed.ts
├── migrationsManager.ts
├── index.ts    <-- Chạy migration và seed
├── db.ts       <-- Quản lý kết nối SQLite


database/:

Tất cả những thứ liên quan đến cơ sở dữ liệu được tổ chức tại đây.

migrations/:

Lưu các tệp .sql dùng để tạo hoặc cập nhật bảng.
Mỗi tệp sẽ đại diện cho một thay đổi trong cơ sở dữ liệu.
models/:

Mỗi file đại diện cho một bảng trong cơ sở dữ liệu.
File này chứa các phương thức như tạo, cập nhật, xóa, hoặc truy vấn dữ liệu.
db.ts:

Kết nối đến cơ sở dữ liệu SQLite, tạo bảng nếu chưa tồn tại.
seed.ts:

File này để chèn dữ liệu mẫu (nếu cần) sau khi thiết lập cơ sở dữ liệu.