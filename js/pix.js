const qrcodeElement = document.getElementById("qrcode");

 new QRCode(qrcodeElement, {
  text: "https://github.com/HeloMabastos",
  width: 500,
  height: 500,
});