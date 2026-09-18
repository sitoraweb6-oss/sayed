const fs = require('fs');
let content = fs.readFileSync('src/data/portfolio.ts', 'utf8');

const updates = {
  "1": "E-commerce",
  "2": "Custom Web Applications",
  "3": "E-commerce",
  "4": "Healthcare",
  "5": "Custom Web Applications",
  "6": "Business Websites",
  "7": "E-commerce",
  "8": "E-commerce",
  "9": "Agency Websites",
  "10": "Landing Pages",
  "11": "Landing Pages",
  "12": "Interactive / 3D",
  "13": "Interactive / 3D",
  "14": "Custom Web Applications",
  "15": "Interactive / 3D"
};

for (const [id, cat] of Object.entries(updates)) {
  const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?category:\\s*")[^"]+(")`, 'g');
  content = content.replace(regex, `$1${cat}$2`);
}

fs.writeFileSync('src/data/portfolio.ts', content);
