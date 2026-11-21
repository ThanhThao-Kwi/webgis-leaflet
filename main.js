
// 1. Khởi tạo bản đồ tại phường Dầu Giây, Thành phố Đồng Nai
var map = L.map('map').setView([10.9214, 107.1285], 13);

// 2. Thêm lớp bản đồ nền OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);
