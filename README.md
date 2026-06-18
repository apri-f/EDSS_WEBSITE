Early Depression Screening System (EDSS)

Website skrining awal depresi berbasis PHQ-9 yang terintegrasi dengan Machine Learning untuk membantu meningkatkan kesadaran dan deteksi dini terhadap kondisi kesehatan mental.

---

Overview

Early Depression Screening System (EDSS) merupakan aplikasi web yang dirancang untuk membantu pengguna melakukan skrining awal gejala depresi secara mandiri menggunakan instrumen Patient Health Questionnaire-9 (PHQ-9).

Sistem menyediakan dashboard informasi kesehatan mental, asesmen digital PHQ-9, hasil prediksi Machine Learning, rekomendasi personal, serta integrasi dengan backend Flask yang menjalankan model Random Forest Classifier.

---

Live Demo

🌐 Website

https://earlydepressionscreeningsystem.netlify.app

🔗 Backend API

https://edssprojectbackend-production.up.railway.app

---

Features

Home Dashboard

- Informasi kesehatan mental di Indonesia
- Statistik kesehatan mental nasional
- Visualisasi data menggunakan Chart.js
- Edukasi mengenai pentingnya kesehatan mental
- Navigasi terintegrasi menuju asesmen

Assessment PHQ-9

- Kuesioner PHQ-9 digital
- Progress tracking
- Validasi jawaban pengguna
- Pengiriman data ke backend secara real-time
- Integrasi dengan model Machine Learning

Result Dashboard

- Menampilkan hasil prediksi tingkat depresi
- Deskripsi hasil skrining
- Rekomendasi personal berdasarkan hasil asesmen
- Tampilan hasil yang interaktif dan mudah dipahami
- Prototype AI Mental Health Assistant

---

Project Structure

EDSS_Frontend/
│
├── assets/
├── css/
├── data/
├── html/
├── js/
├── index.html
└── README.md

---

Technology Stack

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- Chart.js
- REST API
- Netlify

---

Pages

Home

Halaman utama yang menampilkan informasi kesehatan mental, statistik nasional, serta pengenalan sistem EDSS.

Assessment

Halaman asesmen yang menggunakan instrumen PHQ-9 untuk melakukan skrining awal depresi secara mandiri.

Result

Halaman hasil yang menampilkan prediksi Machine Learning, deskripsi kondisi, rekomendasi personal, dan AI Mental Health Assistant.

---

Backend Integration

Frontend terhubung dengan backend Flask melalui REST API.

Endpoint utama:

POST https://edssprojectbackend-production.up.railway.app/predict

---

Deployment

Frontend di-deploy menggunakan Netlify dan dapat diakses secara online melalui:

https://earlydepressionscreeningsystem.netlify.app

Backend yang digunakan:

https://edssprojectbackend-production.up.railway.app

---

Disclaimer

EDSS merupakan alat skrining awal yang bertujuan membantu meningkatkan kesadaran terhadap kesehatan mental. Hasil asesmen tidak dapat digunakan sebagai diagnosis medis dan tidak menggantikan konsultasi dengan psikolog, psikiater, maupun tenaga kesehatan profesional.
