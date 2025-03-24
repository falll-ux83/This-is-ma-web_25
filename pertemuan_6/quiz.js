// humberger-menu
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Mencegah event dari merambat ke elemen lain
    menu.classList.toggle("hidden");
});

// Java Kuis
const quizData = [
    {
      question: "Apa yang harus diperhatikan dalam pemilihan warna pada poster?",
      options: [
        "Menggunakan warna sebanyak mungkin agar menarik",
        "Menggunakan warna yang serasi dan mudah dibaca",
        "Warna tidak perlu diperhatikan karena tidak terlalu penting",
        "Warna poster harus selalu hitam dan putih",
      ],
      correct: 1,
    },
    {
      question: "Mengapa tipografi penting dalam desain poster?",
      options: [
        "Agar tulisan terlihat menarik dan mudah dibaca",
        "Hanya untuk gaya-gayaan saja",
        "Supaya bisa menampilkan banyak jenis huruf dalam satu poster",
        "Supaya poster terlihat lebih penuh",
      ],
      correct: 0,
    },
  
    {
      question: "Apa tujuan utama dari sebuah poster?",
      options: [
        "Menghias dinding",
        "Menyampaikan informasi dengan cara menarik",
        "Sebagai tugas sekolah saja",
        "Untuk membuat orang bingung",
      ],
      correct: 1,
    },
  
    {
      question: "Dalam memilih warna untuk poster, apa yang harus diperhatikan??",
      options: [
        "Menggunakan warna sebanyak mungkin",
        "Menggunakan warna yang serasi dan mudah dibaca",
        "Warna harus selalu mencolok",
        "Warna tidak penting dalam desain ",
      ],
      correct: 1,
    },
  
    {
      question: "Apa yang dimaksud dengan tipografi dalam desain poster?",
      options: [
        "Teknik menggambar sketsa",
        "Pemilihan gambar pada poster",
        "Proses pencampuran warna",
        "Seni memilih dan mengatur huruf",
      ],
      correct: 3,
    },
  
    {
      question: "Mengapa gambar atau ilustrasi penting dalam poster?",
      options: [
        "Agar posternya terlihat penuh",
        "Membantu menyampaikan pesan dengan lebih efektif",
        "Supaya warna poster lebih banyak",
        "Hanya sebagai dekorasi tambahan",
      ],
      correct: 1,
    },
  
    {
      question: "Apa yang dimaksud dengan komposisi dalam desain poster?",
      options: [
        "Cara menyusun elemen-elemen desain agar harmonis",
        "Jenis warna yang digunakan",
        "Jenis font yang dipakai",
        "Perpaduan antara tipografi dan warna",
      ],
      correct: 0,
    },
  
    {
      question: "Apa fungsi utama dari headline dalam poster?",
      options: [
        "Sebagai dekorasi tambahan",
        "Untuk memberikan informasi secara lengkap",
        "Sebagai teks utama yang menarik perhatian pembaca",
        "Untuk memperbanyak teks dalam poster",
      ],
      correct: 2,
    },
  
    {
      question: "Apa yang dimaksud dengan ruang negatif dalam desain poster?",
      options: [
        "Area kosong yang memberikan keseimbangan dalam desain",
        "Bagian poster yang berisi teks utama",
        "Ruang yang hanya berisi warna hitam",
        "Bagian poster yang memiliki banyak gambar",
      ],
      correct: 0,
    },
  
    {
      question: "Bagaimana cara membuat teks pada poster lebih mudah dibaca?",
      options: [
        "Menggunakan warna teks yang mirip dengan latar belakang",
        "Menggunakan huruf yang jelas dan cukup besar",
        "Menulis semua teks dalam huruf kapital",
        "Menggunakan font yang rumit dan unik",
      ],
      correct: 1,
    },
  
    {
      question: "Mengapa keseimbangan visual penting dalam poster?",
      options: [
        "Supaya warna-warna tidak terlalu mencolok ",
        "Untuk membuat desain terlihat lebih rumit",
        "Agar poster terlihat lebih menarik dan nyaman dibaca",
        "Untuk membuat poster terlihat kosong ",
      ],
      correct: 2,
    },
  
    {
      question: "Apa yang dimaksud dengan kontras dalam desain poster?",
      options: [
        "Menggunakan font yang kecil agar lebih hemat tempat",
        "Penggunaan warna-warna yang sama",
        "Perbedaan yang mencolok antara elemen desain agar lebih menarik",
        "Tidak menggunakan gambar atau ilustrasi",
      ],
      correct: 2,
    },
  
    {
      question: "Apa jenis font yang paling cocok untuk poster edukasi?",
      options: [
        "Comic Sans",
        "Times New Roman atau Arial",
        "Wingdings",
        "Font dekoratif yang sulit dibaca",
      ],
      correct: 1,
    },
  
    {
      question:
        "Mengapa penting untuk mengetahui target audiens dalam desain poster?",
      options: [
        "Agar desain poster sesuai dengan minat dan kebutuhan mereka",
        "Supaya bisa menggunakan warna sebanyak mungkin",
        "Supaya bisa menghemat biaya cetak",
        "Agar posternya bisa dibuat lebih kecil",
      ],
      correct: 0,
    },
  
    {
      question: "Apa yang perlu diperhatikan dalam memilih gambar untuk poster?",
      options: [
        " Memilih gambar yang tidak sesuai dengan tema",
        "Menggunakan gambar dengan warna hitam putih saja",
        "Menggunakan gambar secara acak",
        "Resolusi tinggi agar tidak pecah saat dicetak",
      ],
      correct: 3,
    },
  ];
  
  function loadQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Reset sebelum memasukkan soal baru
  
    quizData.forEach((item, index) => {
      let questionBlock = `<div class="mb-4 opacity-0 transform translate-y-10 transition-all duration-700" id="question-${index}">
              <p class="font-semibold">${index + 1}. ${item.question}</p>`;
  
      item.options.forEach((option, i) => {
        questionBlock += `
              <label class="block flex items-center gap-2" id="label-${index}-${i}">
                  <input type="radio" name="question${index}" value="${i}" class="mr-2">
                  <span>${option}</span>
              </label>`;
      });
  
      questionBlock += `</div>`;
      quizContainer.innerHTML += questionBlock;
    });
  
    // Tambahkan event listener untuk animasi saat scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    document.querySelectorAll("#quiz-container div").forEach((el) => {
      observer.observe(el);
    });
  }
  
  function cekJawaban() {
    let score = 0;
  
    quizData.forEach((item, index) => {
      const selected = document.querySelector(
        `input[name="question${index}"]:checked`
      );
  
      // Reset warna sebelum mengecek jawaban
      item.options.forEach((_, i) => {
        const label = document.getElementById(`label-${index}-${i}`);
        label.classList.remove("text-green-600", "text-red-600", "font-bold");
      });
  
      if (selected) {
        const selectedValue = parseInt(selected.value);
        const correctLabel = document.getElementById(
          `label-${index}-${item.correct}`
        );
  
        if (selectedValue === item.correct) {
          score++;
          correctLabel.classList.add("text-green-600", "font-bold");
        } else {
          const selectedLabel = document.getElementById(
            `label-${index}-${selectedValue}`
          );
          selectedLabel.classList.add("text-red-600", "font-bold");
          correctLabel.classList.add("text-green-600", "font-bold");
        }
      }
    });
  
    document.getElementById("hasil").innerText =
      "Skor: " + score + " / " + quizData.length;
  }
  
  // Load quiz saat halaman dimuat
  document.addEventListener("DOMContentLoaded", function () {
    loadQuiz();
});

// --- EVENT LISTENER UNTUK TOMBOL "PERIKSA JAWABAN" ---
document.addEventListener("DOMContentLoaded", function () {
    const checkAnswerBtn = document.getElementById("cekJawaban");

    if (!checkAnswerBtn) {
        console.error("Tombol #cekJawaban tidak ditemukan!");
        return;
    }

    checkAnswerBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah tabrakan event
        alert("Yakin mau lihat hasilnya?");
        cekJawaban(); // Panggil fungsi cekJawaban untuk menghitung skor
    });
});
  
  // Update teks poster
  function updatePoster() {
    document.getElementById("posterTitle").textContent =
      document.getElementById("titleInput").value;
    document.getElementById("posterText").textContent =
      document.getElementById("textInput").value;
  }
  
  // Ganti warna latar belakang
  function changeBackground() {
    document.getElementById("posterCanvas").style.backgroundColor =
      document.getElementById("bgColorPicker").value;
  }
  
  // Ganti template poster
  document
    .getElementById("templateSelect")
    .addEventListener("change", function () {
      let template = this.value;
      if (template === "kegiatan") {
        document.getElementById("posterTitle").textContent = "Konser Musik 2025";
        document.getElementById("posterText").textContent =
          "Nikmati konser musik terbaik di kota Anda!";
      } else if (template === "niaga") {
        document.getElementById("posterTitle").textContent = "Diskon Besar!";
        document.getElementById("posterText").textContent =
          "Hemat hingga 50% untuk produk pilihan.";
      } else if (template === "pendidikan") {
        document.getElementById("posterTitle").textContent = "Belajar Bersama";
        document.getElementById("posterText").textContent =
          "Kursus online gratis untuk meningkatkan skill Anda.";
      }
    });

    // Ganti Font
document.getElementById("fontSelect").addEventListener("change", function () {
    document.getElementById("posterTitle").style.fontFamily = this.value;
    document.getElementById("posterText").style.fontFamily = this.value;
});

// Ganti Ukuran Teks
document.getElementById("fontSizeInput").addEventListener("input", function () {
    document.getElementById("posterTitle").style.fontSize = this.value + "px";
    document.getElementById("posterText").style.fontSize = this.value + "px";
});

// Download Poster
document.getElementById("downloadBtn").addEventListener("click", function () {
    html2canvas(document.getElementById("posterCanvas")).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "poster.png";
        link.click();
    });
});