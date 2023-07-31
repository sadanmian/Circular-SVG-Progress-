const circle = document.querySelector(".progress-circle");
const circumference = circle.getTotalLength();
const loading = document.querySelector(".loading");

let i = 0;
const fakeUploadPerc = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const interval = setInterval(() => {
  circle.style.strokeDashoffset =
    circumference - (fakeUploadPerc[i] / 100) * circumference;
  loading.innerHTML = `${fakeUploadPerc[i]}%`;
  i++;
  if (i > fakeUploadPerc.length) {
    clearInterval(interval);
    loading.innerHTML = `💯`;
  }
}, 1000);
