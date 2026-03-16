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

function skipAll(reason) {
        const qBox = document.getElementById('question-box');
    const letterOverlay = document.getElementById('letter-overlay');
    if (reason === 'refuse') {
        trackAction("No");
    } else if (reason === 'return') {
        trackAction("Return");
    }
    if(letterOverlay) {
        letterOverlay.style.opacity = '0';
        // Đợi mờ hẳn rồi mới cất đi
        setTimeout(() => {
            letterOverlay.style.display = 'none';
        }, 5000);
    }
    if(qBox){
        qBox.style.opacity = '0';
        setTimeout(() => {
            qBox.style.display = 'none';
        }, 2000);
    }
}
const message = "Tớ có đôi lời muốn nói, cậu có rảnh không?";
let index = 0;

function typeWriter() {
    const textElement = document.getElementById("typing-text");
    const buttons = document.getElementById("action-buttons");

    if (index < message.length) {
        textElement.innerHTML += message.charAt(index);
        index++;
        //  60ms 
        setTimeout(typeWriter, 50); 
    } else {
        // Đánh máy xong thì hiện 2 nút bấm ra từ từ
        buttons.style.opacity = "1";
    }
}

window.addEventListener('load', function() {
    setTimeout(typeWriter, 8000); 
});
const textToType = "Có lẽ tớ nợ cậu một lời xin lỗi vì trước đó tớ đã hơi vồ vập làm cậu thấy khó xử. Tớ vẫn thực sự trân trọng và muốn tìm hiểu cậu, nhưng giờ tớ để mọi chuyện thuận theo tự nhiên. Cứ thoải mái nhé, mình vẫn là bạn mà.";
let charIndex = 0;

function typeLetter() {
    const letterBody = document.getElementById("letter-body");
    const birthdayWish = document.getElementById("birthday-wish");
    const anh1 = document.getElementById("anh1");
    const backBtn = document.getElementById("back-to-flowers");
    if (charIndex < textToType.length) {
        letterBody.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        // Tốc độ gõ: 50ms (vừa đủ để đọc kịp)
        setTimeout(typeLetter, 50); 
    } else {
        // Gõ xong thì hiện lời chúc
        birthdayWish.style.opacity = "1";
        // Hiện ảnh Shin-chan
        anh1.style.opacity = "1";
        setTimeout(() => {
            backBtn.style.opacity = "1";
        }, 1000);
    }
}

// function openLetter() {
//         trackAction("mở thư");
//     const letterOverlay = document.getElementById('letter-overlay');
//     const qBox = document.getElementById('question-box');

//     // Ẩn lời ngỏ
//     if(qBox) qBox.style.opacity = '0';
//     setTimeout(() => { if(qBox) qBox.style.display = 'none'; }, 1000);

//     // Hiện thư: Quan trọng là phải chỉnh display TRƯỚC khi opacity
    
//     setTimeout(() => {
//         letterOverlay.style.display = 'flex';
//     }, 1000);
//     setTimeout(() => {
//         letterOverlay.style.opacity = '1';
//         // Reset lại index nếu muốn chữ gõ lại từ đầu
//         charIndex = 0;
//         document.getElementById("letter-body").innerHTML = "";
//         setTimeout(typeLetter, 2000);
//     }, 1000);
// }
function trackAction(actionName) {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxqUF2-mNIZmVWaza0ucN7rD_8cMVUvSAvZ-mUBQ6F7Ac9Ex2ASa7i4SqF694ieQsER/exec';
    fetch(`${scriptURL}?action=${encodeURIComponent(actionName)}`, { mode: 'no-cors' })
        .then(() => console.log('Đã lưu: ' + actionName))
        .catch(error => console.error('Lỗi lưu DB:', error));
}
function openLetter() {
    trackAction("mở thư");
    const letterOverlay = document.getElementById('letter-overlay');
    const qBox = document.getElementById('question-box');

    // Ẩn lời ngỏ
    if(qBox) qBox.style.opacity = '0';
    setTimeout(() => { if(qBox) qBox.style.display = 'none'; }, 1000);

    // Hiện thư:
    setTimeout(() => {
        // 1. Chuyển display trước
        letterOverlay.style.display = 'flex';
        
        // 2. Nghỉ 50ms rồi mới tăng opacity và trượt tờ giấy lên
        setTimeout(() => {
            letterOverlay.style.opacity = '1';
            letterOverlay.classList.add('active'); // Thêm dòng này để tờ giấy trượt lên
            
            // Chuẩn bị gõ chữ
            charIndex = 0;
            document.getElementById("letter-body").innerHTML = "";
            setTimeout(typeLetter, 1500);
        }, 50); 
    }, 1000);
}