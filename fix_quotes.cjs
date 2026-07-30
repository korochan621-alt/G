const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

html = html.replace(
  /"・ホテルプラム横浜：10:10前に荷物預かり可能かフロントに確認\n・新大阪発 7:21の新幹線に遅れずに乗車する"/,
  '\`・ホテルプラム横浜：10:10前に荷物預かり可能かフロントに確認\\n・新大阪発 7:21の新幹線に遅れずに乗車する\`'
);

fs.writeFileSync('index.html', html);
