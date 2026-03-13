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
