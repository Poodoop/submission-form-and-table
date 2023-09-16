# Tugas Minggu 5 Rakamin Academy

* Nama: Elbert Dicky Aristyo
* Kelas: FSWD B
* Nama Website: Allowance Submission Form
* Link Hosting Website: https://poodoop.github.io/submission-form-and-table/

## Foto Website

<img width="960" alt="image" src="https://github.com/Poodoop/submission-form-and-table/assets/55837575/70d6fffb-b541-4623-abce-c28acf234976">
<img width="960" alt="image" src="https://github.com/Poodoop/submission-form-and-table/assets/55837575/a4ad8f8c-768f-4c04-8b3c-eaf86af8e7ab">
<img width="315" alt="image" src="https://github.com/Poodoop/submission-form-and-table/assets/55837575/2a6991b1-4eb6-4e31-aa20-33c7501d72e3">
<img width="323" alt="image" src="https://github.com/Poodoop/submission-form-and-table/assets/55837575/b8cd93f7-ed65-45b0-8543-58c5eaab3f19">

## Penjelasan

Website terbagi menjadi 2 bagian, yaitu form registrasi (submission) dan tabel pendaftar (applicant). untuk bertukar diantara kedua bagian, digunakan fitur tab dimana setiap tombol dengan class tab-button akan ditambah event listener. Saat tombol ditekan, semua konten akan disembunyikan dengan class hidden, kemudian konten yang memiliki id sama dengan atribut dari tombol akan dimunculkan dengan menghapus class hidden. 

<img width="435" alt="image" src="https://github.com/Poodoop/submission-form-and-table/assets/55837575/73af3008-536c-4f77-a572-bad97bef3c84">

Untuk fitur validasi, pemasukan, dan pencarian rata-rata data, dibuat sebuah class untuk menampung property dan method yang diperlukan.

Pada constructor, ditambahkan property-property yang isinya merupakan Id dari tag-tag HTML yang didapati lewat getElementById. Ada juga event listener pada registerButton yang akan menjalankan method register.

<img width="486" alt="image" src="https://github.com/Poodoop/submission-form-and-table/assets/55837575/522352f1-6b97-45e3-abd4-e9a50e1a8ffc">

Pada method register tersebut, setelah mendengar event tombol, method akan dijalankan secara asinkron.
setelah menampung data pada variabel yang privat, method akan menunggu promise yang berasal dari method validateInputs, yang apabila true, akan memasukkan data kedalam table melalui insertCell. Method kemudian menjalankan method findAverage, yang akan menampilkan resume, dan data yang dimasukkan pada  tag input akan direset.

<img width="390" alt="image" src="https://github.com/Poodoop/submission-form-and-table/assets/55837575/f281c4db-ec62-40a9-8366-1b836832751d">


Pada method validateInputs, data nama, umur, dan uang sangu yang diinput akan diperiksa sesuai ketentuan dan akan me-return suatu promise untuk method register. Promise tersebut bisa berupa true, sehingga register bisa lanjut dijalankan (fitur asinkron karena menunggu validateInputs). Apabila false, akan diberikan error, dimana method showErrorMessage bisa menambah teks pada HTML dengan id error-message.

<img width="528" alt="image" src="https://github.com/Poodoop/submission-form-and-table/assets/55837575/acfd2048-7698-4d0f-be01-7ada51c7555a">

Pada method findAverage, akan dicari rata-rata dari umur dan uang sangu, yang kemudian ditunjukkan ke HTML dengan id average.

<img width="624" alt="image" src="https://github.com/Poodoop/submission-form-and-table/assets/55837575/91314ddc-3b7e-4aa2-b64f-3173d163b529">
