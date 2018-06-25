'use strict';

$(document).ready(function() {
  $('.gallery').fancybox({
    selector: '[data-fancybox="gallery"]',
    loop: true,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close"
    ],
    lang: "ru",
    i18n: {
      // en: {
      //     CLOSE: "Close",
      //     NEXT: "Next",
      //     PREV: "Previous",
      //     ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
      //     PLAY_START: "Start slideshow",
      //     PLAY_STOP: "Pause slideshow",
      //     FULL_SCREEN: "Full screen",
      //     THUMBS: "Thumbnails",
      //     DOWNLOAD: "Download",
      //     SHARE: "Share",
      //     ZOOM: "Zoom"
      // },
      // de: {
      //     CLOSE: "Schliessen",
      //     NEXT: "Weiter",
      //     PREV: "Zurück",
      //     ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
      //     PLAY_START: "Diaschau starten",
      //     PLAY_STOP: "Diaschau beenden",
      //     FULL_SCREEN: "Vollbild",
      //     THUMBS: "Vorschaubilder",
      //     DOWNLOAD: "Herunterladen",
      //     SHARE: "Teilen",
      //     ZOOM: "Maßstab"
      // },
      ru: {
        CLOSE: "Закрыть",
        NEXT: "Следующий",
        PREV: "Предыдущий",
        ERROR: "Запрошенный контент не может быть загружен. <br/> Повторите попытку позже.",
        PLAY_START: "Запустить слайд-шоу",
        PLAY_STOP: "Слайд-шоу на паузу",
        FULL_SCREEN: "Во весь экран",
        THUMBS: "Миниатюры",
        DOWNLOAD: "Загрузить",
        SHARE: "Поделиться",
        ZOOM: "Увеличить"
      }
    }
  });
});