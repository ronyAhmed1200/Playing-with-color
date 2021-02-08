const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const colorList = ['silver', 'gray', 'crimson', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'aqua', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine', 'arure', 'beige', 'bisque', 'blueviolet', 'brown', 'burlywood', 'cadetblue'];

btn.addEventListener('click', colorChanging);

function colorChanging(e) {
    e.preventDefault();
    body.style.background = colorList[Math.floor(Math.random() * colorList.length)];
    body.style.color = colorList[Math.floor(Math.random() * colorList.length)];
}

console.log(colorList.length);