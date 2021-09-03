const key = `e3738717ee038d5dae2d4a0963f4a1fb`;
const loadTemperature = () => {
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
        .catch(err => errorMessage(err));
}

const errorMessage = (err) => {
    const error = document.getElementById('city');
    error.style.color = 'red';
    error.innerText = `Please write correct city name`;
    const temp = document.getElementById('temp').style.display = 'none';
    const image = document.getElementById('image').style.display = 'none';
    const condition = document.getElementById('condition').style.display = 'none';
}

const setText = (id, name) => {
    const city = document.getElementById(id).innerText = name;
}

const displayTemperature = temp => {
    console.log(temp)
    setText('city', temp.name)
    setText('temperature', temp.main.temp);
    setText('condition', temp.weather[0].main)

    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const icon = document.getElementById('image');
    icon.setAttribute('src', url);
}