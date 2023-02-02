import moment from 'moment';

setInterval(() => {
  let dateNow = moment().format('DD/MMM/YYYY hh:mm:ss a');
  // console.info(dateNow);

  let time = document.getElementById('time');

  time.innerHTML = dateNow;
}, 5000);
