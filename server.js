// Fungsi untuk memeriksa apakah nama pengguna valid
function isValidUsername(username) {
    // Nama pengguna hanya boleh mengandung karakter alfanumerik dan garis bawah
    const regex = /^[a-zA-Z0-9_]+$/;
    return regex.test(username);
}

// Fungsi untuk memeriksa apakah email valid
function isValidEmail(email) {
    // Validasi email sederhana menggunakan regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Fungsi untuk memeriksa apakah kata sandi valid
function isValidPassword(password) {
    // Kata sandi harus memiliki panjang minimal 8 karakter dan mengandung setidaknya satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// Fungsi untuk mendaftarkan pengguna baru
function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Memeriksa apakah nama pengguna valid
    if (!isValidUsername(username)) {
        alert('Nama pengguna tidak valid. Harap gunakan hanya karakter alfanumerik dan garis bawah.');
        return;
    }

    // Memeriksa apakah email valid
    if (!isValidEmail(email)) {
        alert('Alamat email tidak valid. Harap masukkan alamat email yang valid.');
        return;
    }

    // Memeriksa apakah kata sandi valid
    if (!isValidPassword(password)) {
        alert('Kata sandi tidak valid. Kata sandi harus memiliki panjang minimal 8 karakter dan mengandung setidaknya satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus.');
        return;
    }

    // Memeriksa apakah pengguna sudah ada
    if (localStorage.getItem(username)) {
        alert('Nama pengguna sudah ada. Harap pilih yang lain.');
        return;
    }

    // Menyimpan detail pengguna di penyimpanan lokal
    const user = {
        email: email,
        password: password
    };
    localStorage.setItem(username, JSON.stringify(user));
    alert('Pendaftaran berhasil! Anda sekarang dapat login.');
    window.location.href = 'login.html'; // Mengalihkan ke halaman login setelah pendaftaran berhasil
}

// Fungsi untuk login pengguna
function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mengambil detail pengguna dari penyimpanan lokal
    const user = JSON.parse(localStorage.getItem(username));

    if (!user) {
        alert('Pengguna tidak ditemukan. Harap daftar terlebih dahulu.');
        return;
    }

    // Memeriksa apakah kata sandi cocok
    if (user.password === password) {
        alert('Login berhasil!');
        // Opsional, Anda dapat mengalihkan ke halaman lain setelah login berhasil
        // window.location.href = 'dashboard.html';
    } else {
        alert('Kata sandi salah. Harap coba lagi.');
    }
}
