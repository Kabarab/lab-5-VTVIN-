const obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
};

for (const key in obj) {
    console.log(`${key} - это ${obj[key]}.`);
}