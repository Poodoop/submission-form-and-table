# Tugas Minggu 5 Rakamin Academy

* Nama: Elbert Dicky Aristyo
* Kelas: FSWD B
* Nama Website: Allowance Submission Form
* Link Hosting Website: https://poodoop.github.io/submission-form-and-table/

## Penjelasan

Website terbagi menjadi 2 bagian, yaitu form registrasi (submission) dan tabel pendaftar (applicant). untuk bertukar diantara kedua bagian, digunakan fitur tab dimana setiap tombol dengan class tab-button akan ditambah event listener. Saat tombol ditekan, semua konten akan disembunyikan dengan class hidden, kemudian konten yang memiliki id sama dengan atribut dari tombol akan dimunculkan dengan menghapus class hidden. 

<img width="435" alt="image" src="https://github.com/Poodoop/submission-form-and-table/assets/55837575/73af3008-536c-4f77-a572-bad97bef3c84">

Untuk fitur validasi, pemasukan, dan pencarian rata-rata data, dibuat sebuah class untuk menampung property dan method yang diperlukan.

Pada constructor, ditambahkan property-property yang isinya merupakan Id dari tag-tag HTML yang didapati lewat getElementById. Ada juga event listener pada registerButton yang akan menjalankan method register.

<img width="486" alt="image" src="https://github.com/Poodoop/submission-form-and-table/assets/55837575/522352f1-6b97-45e3-abd4-e9a50e1a8ffc">
