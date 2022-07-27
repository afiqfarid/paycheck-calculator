const annual = document.getElementById('annual'),
monthly = document.getElementById('monthly'),
weekly = document.getElementById('weekly'),
daily = document.getElementById('daily'),
hourly = document.getElementById('hourly'),
hourspw = document.getElementById('hours_pw');

annual.addEventListener('keyup', () => {
    monthly.value = annual.value / 12;
    weekly.value = Math.round(annual.value / 52);
    daily.value = ((annual.value / 52) / 5).toFixed(2);
    hourly.value = ((annual.value / 52) / hourspw.value).toFixed(2);
});

monthly.addEventListener('keyup', () => {
    annual.value = Math.round(monthly.value * 12);
    weekly.value = Math.round((monthly.value * 12) / 52);
    daily.value = (((monthly.value * 12) / 52) / 5).toFixed(2);
    hourly.value = (((monthly.value * 12) / 52) / hourspw.value).toFixed(2);
});

weekly.addEventListener('keyup', () => {
    annual.value = Math.round(weekly.value * 52);
    monthly.value = Math.round((weekly.value * 52) / 12);
    daily.value = (weekly.value / 5).toFixed(2);
    hourly.value = (weekly.value / hourspw.value).toFixed(2);
});

daily.addEventListener('keyup', () => {
    annual.value = Math.round((daily.value * 5) * 52);
    monthly.value = Math.round(((daily.value * 5) * 52) / 12);
    weekly.value = Math.round(daily.value * 5);
    hourly.value = (daily.value / 8).toFixed(2);
});

hourly.addEventListener('keyup', () => {
    annual.value = Math.round((hourly.value * hourspw.value) * 52);
    monthly.value = Math.round(((hourly.value * hourspw.value) * 52) / 12);
    weekly.value = Math.round(hourly.value * hourspw.value);
    daily.value = ((hourly.value * hourspw.value) / 5).toFixed(2);
});

hourspw.addEventListener('keyup', () => {
    hourly.value = (weekly.value / hourspw.value).toFixed(2);
});