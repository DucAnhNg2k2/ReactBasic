``
React.memo là một Higher Order Component (HOC) trong React, giúp tối ưu hóa hiệu suất của ứng dụng bằng cách ngăn ngừa các re-render không cần thiết của các component con. Nó hoạt động giống như một cơ chế memoization (ghi nhớ), giúp React chỉ re-render lại component con khi props của nó thay đổi.
``

### Mục đích của React.memo:
- Tối ưu hiệu suất: React.memo giúp tránh việc re-render lại các component con khi props không thay đổi, tiết kiệm tài nguyên và thời gian tính toán, đặc biệt trong các ứng dụng phức tạp với nhiều component.
- Giảm việc tính toán lại: Nếu một component không thay đổi trong suốt thời gian đó, React.memo giúp React không phải tính toán lại hoặc cập nhật lại DOM cho component đó.

### Cách hoạt động của React.memo:
- Khi bạn sử dụng React.memo, React sẽ so sánh props hiện tại với props trước đó để xem có sự thay đổi nào không.
- Nếu props không thay đổi, React sẽ skip việc re-render và chỉ tái sử dụng kết quả render trước đó.
- Nếu props thay đổi, React sẽ tiếp tục re-render lại component đó.

### So sánh giữa không sử dụng React.memo và có sử dụng React.memo:
- Không sử dụng React.memo:
Khi component cha re-render, tất cả các component con sẽ re-render lại, bất kể props có thay đổi hay không.
- Sử dụng React.memo:
Nếu props không thay đổi, component con sẽ không re-render lại, giúp tối ưu hiệu suất.