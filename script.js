let firstName = prompt("Adınız:");

let title = document.querySelector("#title");
let user = document.querySelector("#user");
let time = document.querySelector("#time");
let para = document.querySelector("#para");
let todayTime = document.querySelector("#today-time");
let todayDate = document.querySelector("#today-date");
let haftaninGunu = document.querySelector("day-of-week");
let yilinGunu = document.querySelector("day-of-year");
let haftaninYili = document.querySelector("week-of-year");

title.innerHTML = `<b>KODLUYORUZ</b>`;
title.classList.add("fw-bold");
document.getElementById("title").style.fontSize = "xx-large";

document.querySelector("#user").style.fontSize = "x-large";
if (firstName.length > 0) {
    user.innerHTML = `Merhaba, <b>${firstName}!</b> Hoş geldin!`;
} else {
    user.innerHTML = `Merhaba, Guest! Hoş geldin!`;
}

// fetch("http://worldtimeapi.org/api/timezone/Europe/Istanbul")
//     .then((response) => response.json())
//     .then((result) => {
//         const rightNow = result.datetime.slice(11, 19);
//         const date = result.datetime.slice(0, 10);
//         const dayOfWeek = result.day_of_week;
//         const dayOfYear = result.day_of_year;
//         const weekOfYear = result.week_number;

//         todayTime.innerHTML = `Saat: <b>${rightNow}</b>`;
//         todayDate.innerHTML = `Tarih: <b>${date}</b>`;
//         document.querySelector(
//             "#day-of-week"
//         ).innerHTML = `Bugün haftanın <b>${dayOfWeek}</b>. günü.`;
//         document.querySelector(
//             "#day-of-year"
//         ).innerHTML = `Bugün yılın <b>${dayOfYear}</b>. günü.`;
//         document.querySelector(
//             "#week-of-year"
//         ).innerHTML = `Bu hafta yılın <b>${weekOfYear}</b>. haftası.`;
//     });

// const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
// ];

const d = new Date();
// const day = d.getDay();
// const month = d.getMonth();
// const year = d.getFullYear();
// const sec = d.getSeconds();
// const min = d.getMinutes();
// const hour = d.getHours();
const fullDate = d.toLocaleDateString();
const fullTime = d.toLocaleTimeString();

// console.log(asdsa);

{
    todayTime.innerHTML = `Saat: <b>${fullTime}</b>`;
    todayDate.innerHTML = `Tarih: <b>${fullDate}</b>`;
    //     document.querySelector(
    //         "#day-of-week"
    //     ).innerHTML = `Bugün haftanın <b>${monthAsString}</b>. günü.`;
    //     document.querySelector(
    //         "#day-of-year"
    //     ).innerHTML = `Bugün yılın <b>${dayOfYear}</b>. günü.`;
    //     document.querySelector(
    //         "#week-of-year"
    //     ).innerHTML = `Bu hafta yılın <b>${weekOfYear}</b>. haftası.`;
}

document.querySelector(
    "#para"
).innerHTML = `<b>Kodluyoruz Frontend Web Development Patikası</b>'nın Javascript bölümü 1. ödevindesiniz.`;
