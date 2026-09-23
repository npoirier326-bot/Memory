const dimension = 150;
const imgStart = Math.floor(Math.random() * 100) + 1;
const nom = "Nolan";
console.log(`Bonjour ${nom} !`);
const images = [];

for (let i = 0; i < 8; i++) {
  const url = `https://picsum.photos/${dimension}?random=${imgStart + i}`;
  images.push(url);
}

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

