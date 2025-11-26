//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  //backgroundImg: "", //background can be "NONE" or a URL.
  message: "Enter the solution",
  //placeholder: "Custom placeholder",
  //autoWidth: "false",
  //width: "30",
  //fontSize: "20",
  //fontColor: "#ffffffff",
  //fontColorErrorMessage: "rgb(235, 56, 56);",
  //fontColorSuccessMessage: "rgb(73, 189, 25);",
  //xposition: "RIGHT", //LEFT, CENTER, RIGHT
  //yposition: "BOTTOM", //CENTER, TOP, BOTTOM
  //opacity: "1", // from 0 to 1
  //delay: "3000",

  //Settings that will be automatically specified by the Escapp server
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [1],
    rtc: false,
  },
};