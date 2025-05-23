document.addEventListener('DOMContentLoaded', () => {
    // Lắng nghe sự kiện click trên tất cả các nút đáp án có class 'option-btn'
    const optionButtons = document.querySelectorAll('.option-btn');

    optionButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedButton = event.target;

            // Tìm phần tử câu hỏi cha (div.question) của nút được click
            const questionDiv = selectedButton.closest('.question');

            // Lấy đáp án đúng được lưu trong thuộc tính data-correct-answer của div.question
            const correctAnswerText = questionDiv.dataset.correctAnswer;

            // Lấy phần tử để hiển thị kết quả cho câu hỏi này
            const resultElement = questionDiv.querySelector('.result-text');

            // Lấy tất cả các nút đáp án trong câu hỏi hiện tại
            const buttonsInCurrentQuestion = questionDiv.querySelectorAll('.option-btn');

            // Ẩn tất cả các style 'correct'/'incorrect' cũ và vô hiệu hóa các nút
            buttonsInCurrentQuestion.forEach(btn => {
                btn.classList.remove('correct', 'incorrect');
                btn.disabled = true; // Vô hiệu hóa nút sau khi chọn để tránh chọn lại
            });

            // Lấy nội dung text của nút người dùng chọn (ví dụ: "A. Hà Nội")
            const userAnswerText = selectedButton.textContent.trim();

            // Kiểm tra xem đáp án người dùng chọn có chứa đáp án đúng không
            if (userAnswerText.includes(correctAnswerText)) {
                resultElement.textContent = 'Chính xác! 🎉';
                resultElement.style.color = '#28a745'; // Màu xanh lá cây
                selectedButton.classList.add('correct'); // Thêm class 'correct' cho nút được chọn
            } else {
                resultElement.textContent = `Sai rồi. Đáp án đúng là: ${correctAnswerText} ❌`;
                resultElement.style.color = '#dc3545'; // Màu đỏ
                selectedButton.classList.add('incorrect'); // Thêm class 'incorrect' cho nút được chọn

                // Tìm và làm nổi bật đáp án đúng trong các nút còn lại
                buttonsInCurrentQuestion.forEach(btn => {
                    if (btn.textContent.trim().includes(correctAnswerText)) {
                        btn.classList.add('correct');
                    }
                });
            }
        });
    });
});