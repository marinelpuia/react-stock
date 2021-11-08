import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <App />,
    document.getElementById('app')
);

var toastTrigger = document.getElementById('potatoBtn')
var toastLivePotato = document.getElementById('livePotatoToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLivePotato)

    toast.show()
  })
}

var toastTriggerCucumbers = document.getElementById('cucumbersBtn')
var toastLiveCucumbers = document.getElementById('liveCucumbersToast')
if (toastTriggerCucumbers) {
  toastTriggerCucumbers.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveCucumbers)

    toast.show()
  })
}

var toastTriggerTomatoes = document.getElementById('tomatoesBtn')
var toastLiveTomatoes = document.getElementById('liveTomatoesToast')
if (toastTriggerTomatoes) {
    toastTriggerTomatoes.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveTomatoes)

    toast.show()
  })
}

var toastTriggerOrange = document.getElementById('orangeBtn')
var toastLiveOrange = document.getElementById('liveOrangeToast')
if (toastTriggerOrange) {
    toastTriggerOrange.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveOrange)

    toast.show()
  })
}