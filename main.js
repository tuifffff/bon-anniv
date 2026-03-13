onload = () =>{
        document.body.classList.remove("container");
};
function createStars() {
    const night = document.querySelector('.night');
    const starCount = 100; // Số lượng sao cậu muốn

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Tọa độ ngẫu nhiên
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Kích thước ngẫu nhiên (từ 1px đến 3px)
        const size = Math.random() * 2 + 1;
        
        // Nhịp nháy ngẫu nhiên (từ 3s đến 8s)
        const duration = Math.random() * 5 + 3;
        
        // Độ trễ ngẫu nhiên (để các hạt không nháy cùng lúc)
        const delay = Math.random() * 5;

        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--delay', `${delay}s`);

        night.appendChild(star);
    }
}

// Chạy hàm tạo sao
createStars();
// Sau khi load trang, đợi hoa nở xong rồi hiện nút
// Đợi trang load xong
window.addEventListener('load', function() {
    // Đợi 8 giây cho hoa nở xong rồi mới hiện lời ngỏ
    setTimeout(() => {
        const qBox = document.getElementById('question-box');
        if (qBox) qBox.style.opacity = '1';
    }, 8000); 
});

function openLetter() {
    const qBox = document.getElementById('question-box');
    const letter = document.getElementById('letter-overlay');
    
    qBox.style.opacity = '0';
    setTimeout(() => { qBox.style.display = 'none'; }, 1000);

    letter.style.display = 'flex';
    setTimeout(() => { letter.style.opacity = '1'; }, 100);
}

function skipAll() {
    const qBox = document.getElementById('question-box');
    // Chỉ làm mờ lời ngỏ, để lại hoa và sao cho cô ấy ngắm
    qBox.style.opacity = '0';
    setTimeout(() => { qBox.style.display = 'none'; }, 2000);
}
const message = "Tớ có đôi lời muốn nói, cậu có rảnh không?";
let index = 0;

function typeWriter() {
    const textElement = document.getElementById("typing-text");
    const buttons = document.getElementById("action-buttons");

    if (index < message.length) {
        textElement.innerHTML += message.charAt(index);
        index++;
        // Tốc độ đánh máy: 60ms mỗi chữ (tăng số này nếu muốn chậm hơn nữa)
        setTimeout(typeWriter, 30); 
    } else {
        // Đánh máy xong thì hiện 2 nút bấm ra từ từ
        buttons.style.opacity = "1";
    }
}

window.addEventListener('load', function() {
    // Đợi 6 giây cho hoa nở xong rồi bắt đầu "gõ chữ"
    setTimeout(typeWriter, 8000); 
});