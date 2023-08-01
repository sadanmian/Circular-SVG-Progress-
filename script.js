const circle = document.querySelector(".progress-circle");
const circumference = circle.getTotalLength();
const loading = document.querySelector(".loading");

let i = 0;
const fakeUploadPerc = [];
for (let j = 0; j <= 100; j++) {
  fakeUploadPerc.push(j);
}

const interval = setInterval(() => {
  circle.style.strokeDashoffset =
    circumference - (fakeUploadPerc[i] / 100) * circumference;
  loading.innerHTML = `${fakeUploadPerc[i]}%`;
  i++;
  if (i > fakeUploadPerc.length) {
    clearInterval(interval);
    loading.innerHTML = `:-)`;
  }
}, 100);
