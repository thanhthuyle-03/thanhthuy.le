const aInput = document.getElementById('a');
const bInput = document.getElementById('b');
const ketquaEl = document.getElementById('ketqua');

const solveEquation = () => {
    const a = parseFloat(aInput.value);
    const b = parseFloat(bInput.value);
    let result;

    if (a === 0) {
        if (b === 0) {
            result = 'Phương trình vô số nghiệm';
        } else {
            result = 'Phương trình vô nghiệm';
        }
    } else {
        result = `Nghiệm x = ${-b / a}`;
    }

    ketquaEl.textContent = result;
};

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    solveEquation();
});

document.querySelector('#a, #b').addEventListener('input', solveEquation);

