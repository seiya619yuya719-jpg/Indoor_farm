const fertilizerSlider = document.getElementById('fertilizer');
const fertilizerValue = document.getElementById('fertilizer-value');
const plantStatus = document.getElementById('plant-status');

fertilizerSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    fertilizerValue.textContent = value;

    if (value < 30) {
        plantStatus.textContent = "🥀 栄養不足で枯れてしまいそうです…";
    } else if (value >= 30 && value <= 70) {
        plantStatus.textContent = "🥦 ちょうどいい肥料バランス！大収穫です！";
    } else {
        plantStatus.textContent = "🍂 肥料が多すぎて根腐れしてしまいました…";
    }
});
