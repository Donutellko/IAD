// https://www.autoevolution.com/ford/?sort=name

carmods = document.querySelectorAll('.carmod')

s = ""
for (carmod of carmods) {
    s += carmod.querySelector('h4').innerText + ';'
    s += carmod.querySelector('.col3width span').innerText + ';'
    s += carmod.innerText.indexOf('Gasoline') > 0 + ';'
    s += carmod.innerText.indexOf('Diesel') > 0 + ';'
    s += carmod.innerText.indexOf('Hybrid') > 0 + ';'
    s += '\n'
}