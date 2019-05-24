'use strict';
window.onload = function() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const clock = document.getElementById('clock');
    const clockHandHours = clock.querySelector('.clock__hand--hours');
    const clockHandMinutes = clock.querySelector('.clock__hand--minutes');
    const clockHandSeconds = clock.querySelector('.clock__hand--seconds');

    setHours(clockHandHours, hours, minutes);
    setMinutes(clockHandMinutes, minutes, seconds);
    setSeconds(clockHandSeconds, seconds);

    clockScale(clock, clock.offsetWidth);

};

function clockScale(elem, elemDiameter) {
    let scaleVal = 1;
    let parent = elem.parentNode;
    let parentPadding = getComputedStyle(parent);

    let parentWidth = parent.clientWidth - parseInt(parentPadding.paddingRight) - parseInt(parentPadding.paddingLeft);

    let parentHeight = parent.clientHeight - parseInt(parentPadding.paddingTop) - parseInt(parentPadding.paddingBottom);

    if (parentWidth <= parentHeight) {
        scaleVal = parentWidth / elemDiameter;
    } else {
        scaleVal = parentHeight / elemDiameter;
    }
    elem.style.transform = 'scale(' + scaleVal + ')';
}

function setRotateValue(elem, rotateValue) {
    elem.style.transform = 'translateX(-50%) rotate('+ rotateValue +'deg)';
    elem.style.opacity = '1';
}
function setHours(elem, hours, minutes) {
    const step = 30; // 360 / 12
    let rotateVal = (hours * step) + (step / 60 * minutes);
    setRotateValue(elem, rotateVal);
}
function setMinutes(elem, minutes, seconds) {
    const step = 6; // 360 / 60
    let rotateVal = (minutes * step) + (step / 60 * seconds);
    setRotateValue(elem, rotateVal);
}
function setSeconds(elem, seconds) {
    const step = 6; // 360 / 60
    let rotateVal = seconds * step;
    setRotateValue(elem, rotateVal);
}
