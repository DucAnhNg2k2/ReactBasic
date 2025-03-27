useCallback trong ReactJS là một hook được sử dụng để memoize (ghi nhớ) một hàm, giúp tránh việc tạo lại hàm đó mỗi khi component re-render. Điều này rất hữu ích trong những trường hợp khi bạn muốn tối ưu hiệu suất và tránh việc tạo lại các hàm không cần thiết khi state hoặc props thay đổi.

### Tại sao cần dùng useCallback?
Mỗi khi component re-render, các hàm được khai báo trong component đó cũng sẽ được tạo lại. Điều này có thể gây ra vấn đề hiệu suất trong một số trường hợp, đặc biệt là khi các hàm này được truyền xuống các component con. Nếu các component con sử dụng các hàm này như props, chúng có thể dẫn đến việc re-render lại các component con không cần thiết.

useCallback giúp bạn chỉ tạo lại hàm khi dependencies của nó thay đổi, thay vì tạo lại hàm mỗi khi component re-render


### Khi nào sử dụng useCallback?
useCallback chủ yếu được dùng để memoize hàm khi bạn cần truyền hàm đó xuống các component con qua props, và bạn muốn tránh việc tạo lại hàm mỗi khi component cha re-render. Nếu bạn không truyền hàm đó xuống con, thì nó không ảnh hưởng gì đến component con và không có lý do để sử dụng useCallback trong trường hợp này.

### Kết luận:
Không truyền hàm xuống component con → Không cần dùng useCallback, trừ khi bạn có một lý do đặc biệt khác (chẳng hạn như cần tối ưu hóa bộ nhớ hoặc có nhiều lần gọi lại phức tạp).

useCallback chủ yếu hữu ích khi bạn truyền hàm qua props và muốn tránh việc tạo lại hàm đó mỗi lần re-render.