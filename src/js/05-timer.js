/**
 * Напишемо Timer, який буде
 * запускати та зупиняти відлік часу
 */

//!======================================================
/* const refs = {
  startBtn: document.querySelector('[data-action-start]'),
  stopBtn: document.querySelector('[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

const timer = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) return;
    this.isActive = true;

    const initTime = new Date();

    this.intervalId = setInterval(() => {
      const currentTime = new Date();
      const ms = currentTime - initTime;
      renderTime(ms);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});

function renderTime(ms) {
  const parsedTime = convertMilliseconds(ms);
  const timeStr = time2Str(parsedTime);
  refs.clockface.textContent = timeStr;
}

function convertMilliseconds(ms) {
  let total_seconds = parseInt(Math.floor(ms / 1000));
  let total_minutes = parseInt(Math.floor(total_seconds / 60));
  let total_hours = parseInt(Math.floor(total_minutes / 60));
  let days = parseInt(Math.floor(total_hours / 24));

  let seconds = parseInt(total_seconds % 60);
  let minutes = parseInt(total_minutes % 60);
  let hours = parseInt(total_hours % 24);

  return { d: days, h: hours, m: minutes, s: seconds };
}

function time2Str({ d, h, m, s }) {
  d = d.toString().padStart(2, '0');
  h = h.toString().padStart(2, '0');
  m = m.toString().padStart(2, '0');
  s = s.toString().padStart(2, '0');

  return `${h}:${m}:${s}`;
} */

//!======================================================

import pms from 'pretty-ms';

const refs = {
  startBtn: document.querySelector('[data-action-start]'),
  stopBtn: document.querySelector('[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

const finishDate = new Date('2024-07-13 12:42');

refs.startBtn.addEventListener('click', () => {
  console.log('START');

  const intervalID = setInterval(() => {
    const currentDate = new Date();
    const ms = finishDate - currentDate;
    console.log(ms);
    renderTime(ms);

    if (ms < 1000) {
      clearInterval(intervalID);
    }
  }, 1000);
});

function renderTime(ms) {
  const timeStr = pms(ms);
  refs.clockface.textContent = timeStr;
}
