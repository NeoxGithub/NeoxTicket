const { readFileSync, writeFileSync } = require("fs");

function checkConfig() {
  const configFile = readFileSync("./config.json", { encoding: "utf-8", flag: "a+" });
  if (!configFile.length) {
    writeFileSync(
      "./config.json",
      JSON.stringify({ TOKEN: "MTA5NjA1OTA1NzE3NTAyMzc0Ng.GHZ1Fk.UvLO7dtQEmI-qSuqdCA8IpA8nKUaLVpmyOncxE" }, undefined, 2)
    );
    console.warn("[CONFIG] Config dosyası sıfırdan oluşturuldu. Lütfen ayarları doldurunuz.");
    return false;
  }
  return true;
}

module.exports = {
  checkConfig,
};
