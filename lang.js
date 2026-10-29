// Lao / English switch.
// English text lives in index.html; Lao text lives here.
(function () {
  var lo = {
    "meta.title": "ພຸດທະສອນ ສຸລິຍະວົງ | ນັກພັດທະນາ Back-End ອາວຸໂສ",

    "nav.about": "ກ່ຽວກັບຂ້ອຍ",
    "nav.experience": "ປະສົບການ",
    "nav.education": "ການສຶກສາ",
    "nav.skills": "ທັກສະ",
    "nav.contact": "ຕິດຕໍ່",

    "hero.hello": "ສະບາຍດີ, ຂ້ອຍຊື່",
    "hero.name": "ພຸດທະສອນ <span>ສຸລິຍະວົງ</span>",
    "hero.role": "ນັກພັດທະນາ Back-End ອາວຸໂສ",
    "hero.lead": "ຈົບປະລິນຍາຕີ ສາຂາວິທະຍາສາດຄອມພິວເຕີ ຈາກມະຫາວິທະຍາໄລແຫ່ງຊາດ. ຂ້ອຍພັດທະນາ API, ລະບົບ USSD ແລະ ລະບົບຖານຂໍ້ມູນ ດ້ວຍ JavaScript ແລະ Node.js.",
    "hero.contact": "ຕິດຕໍ່ຂ້ອຍ",
    "hero.viewExp": "ເບິ່ງປະສົບການ",

    "about.title": "ກ່ຽວກັບ <span>ຂ້ອຍ</span>",
    "about.objectiveTitle": "ຈຸດປະສົງ",
    "about.objective": "ສະບາຍດີ, ຂ້ອຍຊື່ ພຸດທະສອນ ສຸລິຍະວົງ, ຊື່ຫຼິ້ນ ເປົາ, ອາຍຸ 30 ປີ. ບ້ານເກີດຢູ່ບ້ານໝາກນາວ, ເມືອງປາກງື່ມ, ນະຄອນຫຼວງວຽງຈັນ, ປັດຈຸບັນອາໄສຢູ່ບ້ານດົງຂາມຊ້າງ, ເມືອງຫາດຊາຍຟອງ, ນະຄອນຫຼວງວຽງຈັນ. ຈົບການສຶກສາລະດັບປະລິນຍາຕີ ສາຂາວິທະຍາສາດຄອມພິວເຕີ ຈາກມະຫາວິທະຍາໄລແຫ່ງຊາດ. ກຳລັງຊອກຫາໂອກາດນຳໃຊ້ຄວາມຮູ້ດ້ານການພັດທະນາຊອບແວ ເພື່ອເປັນສ່ວນໜຶ່ງທີ່ສຳຄັນຂອງທີມ ແລະ ຮຽນຮູ້ປະສົບການໃໝ່ໆຈາກການເຮັດວຽກ.",
    "about.profileTitle": "ຂໍ້ມູນສ່ວນຕົວ",
    "about.hobbiesTitle": "ງານອະດິເລກ",

    "profile.name": "ຊື່",
    "profile.nameVal": "ພຸດທະສອນ",
    "profile.surname": "ນາມສະກຸນ",
    "profile.surnameVal": "ສຸລິຍະວົງ",
    "profile.nickname": "ຊື່ຫຼິ້ນ",
    "profile.nicknameVal": "ເປົາ",
    "profile.gender": "ເພດ",
    "profile.genderVal": "ຊາຍ",
    "profile.dob": "ວັນເດືອນປີເກີດ",
    "profile.dobVal": "29 ກໍລະກົດ 1996",
    "profile.status": "ສະຖານະ",
    "profile.statusVal": "ແຕ່ງງານແລ້ວ",

    "hobby.football": "⚽ ຫຼິ້ນບານເຕະ",
    "hobby.game": "🎮 ຫຼິ້ນເກມ",

    "exp.title": "ປະສົບການ <span>ເຮັດວຽກ</span>",
    "exp.dbAnalysis": "ວິເຄາະຖານຂໍ້ມູນ",
    "exp.tplus.company": "ບໍລິສັດ TPLUS",
    "exp.tplus.role": "Back-End ອາວຸໂສ",
    "exp.tplus.date": "2023 – ປັດຈຸບັນ",
    "exp.tplus.api": "ພັດທະນາ API (JavaScript)",
    "exp.tplus.ussd": "ພັດທະນາ USSD (JavaScript)",
    "exp.sadv.company": "ບໍລິສັດ S-Advance Software ຈຳກັດ",
    "exp.sadv.role": "ໂປຣແກຣມເມີ",
    "exp.sadv.vb": "ໃຊ້ VB.net ສ້າງໂປຣເຈັກລະບົບບັນຊີ",
    "exp.sadv.report": "ຂຽນລາຍງານດ້ວຍ SAP Crystal Report",

    "edu.title": "<span>ການສຶກສາ</span>",
    "edu.nuol": "ມະຫາວິທະຍາໄລແຫ່ງຊາດ",
    "edu.degree": "ປະລິນຍາຕີ",
    "edu.major": "ສາຂາ: ວິທະຍາສາດຄອມພິວເຕີ",
    "edu.college": "ວິທະຍາໄລເຕັກນິກວິຊາຊີບ ມິດຕະພາບ ວຽງຈັນ-ຮ່າໂນ້ຍ",
    "edu.school": "ໂຮງຮຽນໝາກນາວ",

    "skills.title": "<span>ທັກສະ</span>",
    "skills.programming": "ການຂຽນໂປຣແກຣມ",
    "skills.database": "ຖານຂໍ້ມູນ",
    "skills.devops": "DevOps ແລະ ການອອກແບບ",
    "skills.sad": "ການວິເຄາະ ແລະ ອອກແບບລະບົບ",
    "skills.language": "ພາສາ",
    "skills.lao": "ລາວ",
    "skills.thai": "ໄທ",
    "skills.english": "ອັງກິດ (ພື້ນຖານ)",

    "contact.title": "ມາຮ່ວມງານກັນ",
    "contact.text": "ສາມາດຕິດຕໍ່ຂ້ອຍໄດ້ທາງໂທລະສັບ ຫຼື ອີເມວ.",
    "contact.phone": "ເບີໂທ",
    "contact.email": "ອີເມວ",

    "footer": "© 2026 ພຸດທະສອນ ສຸລິຍະວົງ · ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ"
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  var en = {};
  nodes.forEach(function (el) { en[el.dataset.i18n] = el.innerHTML; });

  var buttons = document.querySelectorAll(".lang-switch button");

  function setLang(lang) {
    var dict = lang === "lo" ? lo : en;
    nodes.forEach(function (el) {
      var text = dict[el.dataset.i18n];
      if (text !== undefined) el.innerHTML = text;
    });
    document.documentElement.lang = lang;
    buttons.forEach(function (b) {
      b.classList.toggle("active", b.dataset.lang === lang);
      b.setAttribute("aria-pressed", b.dataset.lang === lang);
    });
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  // Pick language: ?lang=lo in the link, then the visitor's last choice, then English.
  var fromUrl = new URLSearchParams(location.search).get("lang");
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var start = fromUrl || saved || "en";
  setLang(start === "lo" ? "lo" : "en");
})();
