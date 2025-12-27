(function(){
    var script = {
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "downloadEnabled": false,
 "scrollBarVisible": "rollOver",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "horizontalAlign": "left",
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "verticalAlign": "top",
 "minHeight": 20,
 "paddingLeft": 0,
 "defaultVRPointer": "laser",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "borderRadius": 0,
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256",
   "camera": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_camera"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256",
   "camera": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 6.57,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_50810D7B_5FCC_FD77_41A3_32D5E19AD9E1",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_50810D7B_5FCC_FD77_41A3_32D5E19AD9E1_0_4.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 858
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 4.4,
 "hideEasing": "cubic_out",
 "yaw": 92.27
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "id": "window_76FDF394_6047_C5DB_41C7_6FE8AD5F7D06",
 "titleFontColor": "#000000",
 "width": 400,
 "titlePaddingLeft": 5,
 "overflow": "scroll",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarMargin": 2,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "titleFontSize": "1.29vmin",
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "titlePaddingRight": 5,
 "minHeight": 20,
 "backgroundColorRatios": [],
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "shadowOpacity": 0.5,
 "modal": true,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadowBlurRadius": 6,
 "scrollBarWidth": 10,
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "borderRadius": 5,
 "headerBorderColor": "#000000",
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "bodyBorderSize": 0,
 "backgroundColor": [],
 "headerPaddingRight": 10,
 "title": "\u0622\u0628 \u0633\u0631\u062f \u0628\u0647 \u0633\u0645\u062a \u0645\u0646\u0627\u0628\u0639 \u06a9\u0644\u06a9\u062a\u0648\u0631",
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "class": "Window",
 "contentOpaque": false,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "titlePaddingTop": 5,
 "headerBackgroundOpacity": 1,
 "headerVerticalAlign": "middle",
 "scrollBarColor": "#000000",
 "shadow": true,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconLineWidth": 2,
 "footerHeight": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "children": [
  "this.htmlText_76C3D394_6047_C5DB_41D3_3F389C6B1A93"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "headerPaddingBottom": 10,
 "titlePaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "bodyPaddingBottom": 5,
 "layout": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "data": {
  "name": "Window20850"
 },
 "shadowHorizontalLength": 3
},
{
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256",
   "camera": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_camera"
  }
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist"
},
{
 "levels": [
  {
   "url": "media/popup_50810D7B_5FCC_FD77_41A3_32D5E19AD9E1_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 8456,
   "height": 7092
  },
  {
   "url": "media/popup_50810D7B_5FCC_FD77_41A3_32D5E19AD9E1_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 8192,
   "height": 6870
  },
  {
   "url": "media/popup_50810D7B_5FCC_FD77_41A3_32D5E19AD9E1_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 4096,
   "height": 3435
  },
  {
   "url": "media/popup_50810D7B_5FCC_FD77_41A3_32D5E19AD9E1_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1717
  },
  {
   "url": "media/popup_50810D7B_5FCC_FD77_41A3_32D5E19AD9E1_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 858
  },
  {
   "url": "media/popup_50810D7B_5FCC_FD77_41A3_32D5E19AD9E1_0_5.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 429
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4CE59240_5FC5_4695_41D7_4E8300EBB1B8"
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256",
   "camera": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_camera"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist"
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256",
   "camera": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_camera"
  }
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist"
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonBorderColor": "#000000",
 "id": "window_765B1F75_604F_BD5E_41B8_87250F24916C",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "overflow": "scroll",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarMargin": 2,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "titleFontSize": "2vmin",
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "titlePaddingRight": 5,
 "minHeight": 20,
 "backgroundColorRatios": [],
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "shadowOpacity": 0.5,
 "modal": true,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadowBlurRadius": 6,
 "scrollBarWidth": 10,
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "borderRadius": 5,
 "headerBorderColor": "#000000",
 "title": "\u0634\u06cc\u0631 \u0633\u0648\u0632\u0646\u06cc \u0628\u0631\u0646\u062c\u06cc \u06a9\u06cc\u0632 \u0627\u06cc\u0631\u0627\u0646  \u0633\u0627\u06cc\u0632 \"1/2 1",
 "borderSize": 0,
 "bodyBorderSize": 0,
 "backgroundColor": [],
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "class": "Window",
 "contentOpaque": false,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "titlePaddingTop": 5,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerVerticalAlign": "middle",
 "closeButtonPaddingRight": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconLineWidth": 2,
 "footerHeight": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "headerBackgroundOpacity": 1,
 "scrollBarVisible": "rollOver",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "children": [
  "this.htmlText_765CAF74_604F_BD5E_41C0_4683869860E5"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 1,
 "headerPaddingLeft": 10,
 "closeButtonPaddingBottom": 0,
 "headerPaddingBottom": 10,
 "closeButtonBorderSize": 0,
 "titlePaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "bodyPaddingBottom": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "layout": "vertical",
 "horizontalAlign": "center",
 "titleFontFamily": "B Nazanin",
 "closeButtonBackgroundColor": [],
 "data": {
  "name": "Window13366"
 },
 "shadowHorizontalLength": 3
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256",
   "camera": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_51365D41_5FC7_C2FA_41AB_C022FD74C6C3",
  "this.overlay_50B94836_5FC5_C287_41A1_A99C0E1B5D3B",
  "this.overlay_502CE094_5FC3_439B_41D3_58CBF951F2D4",
  "this.popup_50810D7B_5FCC_FD77_41A3_32D5E19AD9E1",
  "this.overlay_76071558_6045_CD53_41CB_776EE78AA8CA",
  "this.overlay_7677CF99_604F_BDD6_41B4_C1189311AE0F",
  "this.overlay_761E3AD1_6045_C75D_41C5_E105694929D9",
  "this.overlay_75F85AF0_6045_475B_41D4_699CE01FB972"
 ],
 "label": "Mechanical_Room_360 View_01",
 "hfovMin": "120%",
 "id": "panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256",
 "thumbnailUrl": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_t.jpg",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256",
   "camera": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_camera"
  }
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist"
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonBorderColor": "#000000",
 "id": "window_75C1C66B_6044_CF74_41D6_2C0406FEB92E",
 "titleFontColor": "#000000",
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "titlePaddingLeft": 5,
 "overflow": "scroll",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarMargin": 2,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBorderSize": 0,
 "titleFontSize": "2vmin",
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "titlePaddingRight": 5,
 "minHeight": 20,
 "backgroundColorRatios": [],
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "shadowOpacity": 0.5,
 "modal": true,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadowBlurRadius": 6,
 "scrollBarWidth": 10,
 "footerBackgroundColorDirection": "vertical",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "borderRadius": 5,
 "headerBorderColor": "#000000",
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "bodyBorderSize": 0,
 "backgroundColor": [],
 "headerPaddingRight": 10,
 "title": "\u0634\u06cc\u0631\u06a9\u0634\u0648\u06cc\u06cc \u0641\u0644\u0646\u062c \u062f\u0627\u0631 \u0645\u06cc\u0631\u0627\u0628 \u0633\u0627\u06cc\u0632 4 \u0627\u06cc\u0646\u0686",
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "class": "Window",
 "contentOpaque": false,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "titlePaddingTop": 5,
 "headerBackgroundOpacity": 1,
 "headerVerticalAlign": "middle",
 "closeButtonPaddingRight": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonIconLineWidth": 2,
 "footerHeight": 5,
 "scrollBarOpacity": 0.5,
 "closeButtonBackgroundColorRatios": [],
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "children": [
  "this.htmlText_75C6066C_6044_CF4C_41C7_35E22B7AE394"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonBackgroundOpacity": 1,
 "headerPaddingLeft": 10,
 "closeButtonPaddingBottom": 0,
 "headerPaddingBottom": 10,
 "closeButtonBorderSize": 0,
 "titlePaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "bodyPaddingBottom": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "layout": "vertical",
 "horizontalAlign": "center",
 "titleFontFamily": "B Nazanin",
 "closeButtonBackgroundColor": [],
 "data": {
  "name": "Window13366"
 },
 "shadowHorizontalLength": 3
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256",
   "camera": "this.panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_camera"
  }
 ],
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist"
},
{
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundOpacity": 1,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "B Nazanin",
 "playbackBarBottom": 5,
 "progressBorderColor": "#FFFFFF",
 "minHeight": 50,
 "paddingLeft": 0,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipPaddingBottom": 7,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontWeight": "normal",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "progressHeight": 10,
 "minWidth": 100,
 "borderRadius": 0,
 "toolTipTextShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "height": "100%",
 "progressBarBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipShadowSpread": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressOpacity": 1,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipPaddingTop": 7,
 "toolTipTextShadowBlurRadius": 3,
 "shadow": false,
 "toolTipBorderSize": 1,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarLeft": 0,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressOpacity": 1,
 "toolTipShadowColor": "#333333",
 "toolTipBorderRadius": 3,
 "toolTipBorderColor": "#767676",
 "progressBarBorderSize": 0,
 "toolTipPaddingRight": 10,
 "progressLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressRight": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowColor": "#000000",
 "top": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarRight": 0,
 "progressBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "progressBarOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "vrPointerColor": "#FFFFFF",
 "toolTipFontStyle": "normal",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderSize": 0,
 "toolTipOpacity": 0.5,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarOpacity": 1,
 "playbackBarHeadWidth": 6
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 30,
 "width": 271,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "children": [
  "this.Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918"
 ],
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "bottom": 20,
 "minWidth": 1,
 "borderRadius": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "height": 97,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--STICKER"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "horizontalAlign": "left",
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "top": 0,
 "scrollBarWidth": 10,
 "height": 60,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": true,
 "class": "Container",
 "backgroundColor": [
  "#F7931E"
 ],
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--BUTTON SET"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "width": 60,
 "scrollBarVisible": "rollOver",
 "right": 15,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "backgroundOpacity": 1,
 "minHeight": 1,
 "backgroundColorRatios": [
  0.02
 ],
 "paddingLeft": 0,
 "top": 62,
 "scrollBarWidth": 10,
 "height": 300,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#F7931E"
 ],
 "contentOpaque": false,
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
  "this.IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
  "this.IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 30,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "bottom": "0%",
 "minWidth": 1,
 "borderRadius": 0,
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "class": "Container",
 "height": 90,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "-button set container"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "data": {
  "name": "---INFO photo"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "horizontalAlign": "left",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "data": {
  "name": "---PANORAMA LIST"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "horizontalAlign": "left",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "data": {
  "name": "---LOCATION"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "horizontalAlign": "left",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "data": {
  "name": "---FLOORPLAN"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "horizontalAlign": "left",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "data": {
  "name": "---PHOTOALBUM"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "horizontalAlign": "left",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "scrollBarColor": "#04A3E1",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "data": {
  "name": "---REALTOR"
 }
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "right": 0,
 "paddingRight": 0,
 "backgroundOpacity": 0.55,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "UIComponent",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "UIComponent22275"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "minHeight": 0,
 "backgroundColorRatios": [],
 "paddingLeft": 0,
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [],
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "ZoomImage",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage22276"
 }
},
{
 "textDecoration": "none",
 "pressedIconColor": "#888888",
 "iconLineWidth": 5,
 "id": "closeButtonPopupPanorama",
 "data": {
  "name": "CloseButton22277"
 },
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "iconColor": "#000000",
 "backgroundOpacity": 0.3,
 "minHeight": 0,
 "paddingLeft": 5,
 "rollOverIconColor": "#666666",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "iconHeight": 20,
 "top": 10,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "shadowBlurRadius": 6,
 "minWidth": 0,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingBottom": 5,
 "label": "",
 "paddingTop": 5,
 "propagateClick": false,
 "gap": 5,
 "fontStyle": "normal",
 "class": "CloseButton",
 "fontSize": "1.29vmin",
 "layout": "horizontal",
 "iconWidth": 20,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 1,
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "width": 60,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "height": 60,
 "pressedIconWidth": 30,
 "shadowBlurRadius": 6,
 "minWidth": 1,
 "borderRadius": 0,
 "pressedIconHeight": 30,
 "data": {
  "name": "Button Settings Mute"
 },
 "mode": "toggle",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingTop": 0,
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "propagateClick": false,
 "fontStyle": "normal",
 "class": "Button",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 5,
 "layout": "horizontal",
 "iconWidth": 30,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "horizontalAlign": "center",
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 1,
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "width": 60,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "height": 60,
 "pressedIconWidth": 30,
 "shadowBlurRadius": 6,
 "minWidth": 1,
 "borderRadius": 0,
 "pressedIconHeight": 30,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "mode": "toggle",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingTop": 0,
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "propagateClick": false,
 "fontStyle": "normal",
 "class": "Button",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 5,
 "layout": "horizontal",
 "iconWidth": 30,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "horizontalAlign": "center",
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_76C3D394_6047_C5DB_41D3_3F389C6B1A93",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "HTMLText20851"
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "minWidth": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 10,
 "paddingTop": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'B Nazanin';\">\u0622\u0628 \u0633\u0631\u062f \u0628\u0647 \u0633\u0645\u062a \u0645\u0646\u0627\u0628\u0639 \u06a9\u0644\u06a9\u062a\u0648\u0631</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": false
},
{
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 1,
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "width": 60,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "height": 60,
 "pressedIconWidth": 30,
 "rollOverIconHeight": 30,
 "shadowBlurRadius": 6,
 "minWidth": 1,
 "borderRadius": 0,
 "pressedIconHeight": 30,
 "data": {
  "name": "Button Settings HS"
 },
 "mode": "toggle",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingTop": 0,
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "propagateClick": false,
 "fontStyle": "normal",
 "class": "Button",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 5,
 "layout": "horizontal",
 "iconWidth": 30,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "rollOverIconWidth": 30,
 "horizontalAlign": "center",
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 1,
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "width": 60,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "height": 60,
 "pressedIconWidth": 30,
 "rollOverIconHeight": 30,
 "shadowBlurRadius": 6,
 "minWidth": 1,
 "borderRadius": 0,
 "pressedIconHeight": 30,
 "data": {
  "name": "Button Settings Gyro"
 },
 "mode": "toggle",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "paddingTop": 0,
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "propagateClick": false,
 "fontStyle": "normal",
 "class": "Button",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 5,
 "iconWidth": 30,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "shadow": false,
 "rollOverIconWidth": 30,
 "horizontalAlign": "center",
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "width": 60,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "height": 60,
 "shadowBlurRadius": 6,
 "minWidth": 1,
 "borderRadius": 0,
 "data": {
  "name": "Button settings VR"
 },
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "propagateClick": false,
 "fontStyle": "normal",
 "class": "Button",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 5,
 "layout": "horizontal",
 "iconWidth": 30,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "center",
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_765CAF74_604F_BD5E_41C0_4683869860E5",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "HTMLText13367"
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "minWidth": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 10,
 "paddingTop": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'B Nazanin';\">\u0634\u06cc\u0631 \u0633\u0648\u0632\u0646\u06cc \u0628\u0631\u0646\u062c\u06cc \u06a9\u06cc\u0632 \u0627\u06cc\u0631\u0627\u0646 \u0633\u0627\u06cc\u0632 \"1/2 1</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_50810D7B_5FCC_FD77_41A3_32D5E19AD9E1, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'paddingLeft':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4CE59240_5FC5_4695_41D7_4E8300EBB1B8, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.27,
   "hfov": 6.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.4
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.27,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 150,
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.4,
   "hfov": 6.57
  }
 ],
 "id": "overlay_51365D41_5FC7_C2FA_41AB_C022FD74C6C3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.96,
   "hfov": 6.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.04
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 158.96,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 150,
      "height": 164
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.04,
   "hfov": 6.59
  }
 ],
 "id": "overlay_50B94836_5FC5_C287_41A1_A99C0E1B5D3B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.1,
   "hfov": 6.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.1,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 150,
      "height": 164
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.35,
   "hfov": 6.44
  }
 ],
 "id": "overlay_502CE094_5FC3_439B_41D3_58CBF951F2D4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_75C1C66B_6044_CF74_41D6_2C0406FEB92E, null, false)",
   "toolTip": "\u0634\u06cc\u0631\u06a9\u0634\u0648\u06cc\u06cc \u0641\u0644\u0646\u062c \u062f\u0627\u0631 \u0645\u06cc\u0631\u0627\u0628 \u0633\u0627\u06cc\u0632 4 \u0627\u06cc\u0646\u0686\u000a\u000a"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64.77,
   "hfov": 6.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.09
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 64.77,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 150,
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.09,
   "hfov": 6.58
  }
 ],
 "id": "overlay_76071558_6045_CD53_41CB_776EE78AA8CA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_765B1F75_604F_BD5E_41B8_87250F24916C, null, false)",
   "toolTip": "\u0634\u06cc\u0631 \u0633\u0648\u0632\u0646\u06cc \u0628\u0631\u0646\u062c\u06cc \u06a9\u06cc\u0632 \u0627\u06cc\u0631\u0627\u0646  \u0633\u0627\u06cc\u0632 \"1/2 1\u000a\u000a"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.97,
   "hfov": 4.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.89
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 46.97,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 100,
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.89,
   "hfov": 4.36
  }
 ],
 "id": "overlay_7677CF99_604F_BDD6_41B4_C1189311AE0F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_76FDF394_6047_C5DB_41C7_6FE8AD5F7D06, null, false)",
   "toolTip": "\u0622\u0628 \u0633\u0631\u062f \u0628\u0647 \u0633\u0645\u062a \u0645\u0646\u0627\u0628\u0639 \u06a9\u0644\u06a9\u062a\u0648\u0631"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.08,
   "hfov": 2.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.8
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_75FB9FFC_6044_FD44_4188_669B462D6FF3",
   "pitch": 10.8,
   "yaw": 71.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.33,
   "distance": 100
  }
 ],
 "id": "overlay_761E3AD1_6045_C75D_41C5_E105694929D9",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.08,
   "hfov": 2.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.43
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_75FB4FFC_6044_FD44_41C6_89438086B7A4",
   "pitch": 12.43,
   "yaw": 71.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.32,
   "distance": 100
  }
 ],
 "id": "overlay_75F85AF0_6045_475B_41D4_699CE01FB972",
 "data": {
  "label": "Arrow 03"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_75C6066C_6044_CF4C_41C7_35E22B7AE394",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "HTMLText13367"
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "minWidth": 0,
 "borderRadius": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 10,
 "paddingTop": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:15px;font-family:'B Nazanin';\">\u0634\u06cc\u0631\u06a9\u0634\u0648\u06cc\u06cc \u0641\u0644\u0646\u062c \u062f\u0627\u0631 \u0645\u06cc\u0631\u0627\u0628 \u0633\u0627\u06cc\u0632 4 \u0627\u06cc\u0646\u0686</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false
},
{
 "textDecoration": "none",
 "data": {
  "name": "text 1"
 },
 "textShadowBlurRadius": 10,
 "id": "Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
 "left": 0,
 "width": 271,
 "textShadowColor": "#000000",
 "textShadowVerticalLength": 0,
 "fontFamily": "Montserrat",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "textShadowOpacity": 1,
 "text": "1st Basement",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": 5,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "height": 67,
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "fontStyle": "normal",
 "class": "Label",
 "fontSize": "40px",
 "fontColor": "#FFFFFF",
 "shadow": false,
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "data": {
  "name": "text 2"
 },
 "textShadowBlurRadius": 10,
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "left": 0,
 "width": 236,
 "textShadowColor": "#000000",
 "textShadowVerticalLength": 0,
 "fontFamily": "Montserrat",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "textShadowOpacity": 1,
 "text": "Mechanical Room",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": 66,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "height": 32,
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "fontStyle": "normal",
 "class": "Label",
 "fontSize": 18,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "horizontalAlign": "left",
 "textShadowHorizontalLength": 0,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "data": {
  "name": "Label Company Name"
 },
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "width": 450,
 "fontFamily": "Montserrat",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "text": "DID CLUB",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "height": 60,
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "fontStyle": "normal",
 "class": "Label",
 "fontSize": 31,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "horizontalAlign": "left",
 "fontWeight": "normal"
},
{
 "data": {
  "name": "logo"
 },
 "maxHeight": 30,
 "maxWidth": 40,
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": 30,
 "width": "4.222%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Image",
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 15,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "top": "0%",
 "minWidth": 1,
 "borderRadius": 0,
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": true,
 "class": "Container",
 "height": 60,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "-button set container"
 }
},
{
 "cursor": "hand",
 "maxWidth": 101,
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "maxHeight": 101,
 "width": 44,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "height": 44,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 }
},
{
 "cursor": "hand",
 "maxWidth": 101,
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "maxHeight": 101,
 "width": 44,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "height": 44,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 }
},
{
 "cursor": "hand",
 "maxWidth": 101,
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "maxHeight": 101,
 "width": 44,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "height": 44,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 }
},
{
 "cursor": "hand",
 "maxWidth": 101,
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "maxHeight": 101,
 "width": 44,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "height": 44,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Photoalbum"
 }
},
{
 "cursor": "hand",
 "maxWidth": 101,
 "id": "IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
 "maxHeight": 101,
 "width": 44,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B_rollover.png",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "height": 44,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B.png",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 }
},
{
 "cursor": "hand",
 "maxWidth": 101,
 "id": "IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
 "maxHeight": 101,
 "width": 44,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_rollover.png",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "height": 44,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_pressed.png",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8.png",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Realtor"
 }
},
{
 "cursor": "hand",
 "maxWidth": 101,
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "maxHeight": 101,
 "width": 44,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "height": 44,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "15%",
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "top": "10%",
 "shadowBlurRadius": 25,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "contentOpaque": false,
 "layout": "horizontal",
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Container X global"
 },
 "right": "15%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "overflow": "visible",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "borderRadius": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "propagateClick": false,
 "class": "Container",
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "15%",
 "horizontalAlign": "center",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "top": "10%",
 "shadowBlurRadius": 25,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "15%",
 "horizontalAlign": "left",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "top": "10%",
 "shadowBlurRadius": 25,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "contentOpaque": false,
 "layout": "horizontal",
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Container X global"
 },
 "right": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "overflow": "visible",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "borderRadius": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "propagateClick": false,
 "class": "Container",
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "15%",
 "horizontalAlign": "center",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "top": "10%",
 "shadowBlurRadius": 25,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "15%",
 "horizontalAlign": "center",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "top": "10%",
 "shadowBlurRadius": 25,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "contentOpaque": false,
 "layout": "vertical",
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "right": "15%",
 "horizontalAlign": "left",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "top": "10%",
 "shadowBlurRadius": 25,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "minWidth": 1,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 0,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "contentOpaque": false,
 "layout": "horizontal",
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Container X global"
 },
 "right": "15%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "overflow": "visible",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "borderRadius": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "propagateClick": false,
 "class": "Container",
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_75FB9FFC_6044_FD44_4188_669B462D6FF3",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_54AEAA52_5FC5_C6F0_41C1_917CAB200256_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 780
  }
 ],
 "id": "AnimatedImageResource_75FB4FFC_6044_FD44_41C6_89438086B7A4",
 "frameCount": 24
},
{
 "textDecoration": "none",
 "selectedPopUpBackgroundColor": "#CE6700",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpBackgroundOpacity": 1,
 "width": 116,
 "fontFamily": "Montserrat",
 "popUpShadow": false,
 "popUpBackgroundColor": "#F7931E",
 "popUpFontColor": "#FFFFFF",
 "paddingRight": 15,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 15,
 "popUpPaddingTop": 10,
 "popUpShadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowBlurRadius": 6,
 "data": {
  "name": "DropDown 1"
 },
 "popUpShadowOpacity": 0,
 "arrowColor": "#FFFFFF",
 "height": 60,
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "popUpBorderRadius": 0,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 0,
 "popUpPaddingLeft": 15,
 "popUpGap": 2,
 "paddingTop": 0,
 "arrowBeforeLabel": false,
 "propagateClick": false,
 "popUpShadowColor": "#000000",
 "label": "RECEPTION",
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "class": "DropDown",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "selectedPopUpBackgroundColor": "#CE6700",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "popUpBackgroundOpacity": 1,
 "width": 96,
 "fontFamily": "Montserrat",
 "popUpShadow": false,
 "popUpBackgroundColor": "#F7931E",
 "popUpFontColor": "#FFFFFF",
 "paddingRight": 15,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 15,
 "popUpPaddingTop": 10,
 "popUpShadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowBlurRadius": 6,
 "data": {
  "name": "DropDown 2"
 },
 "popUpShadowOpacity": 0,
 "arrowColor": "#FFFFFF",
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "popUpBorderRadius": 5,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingBottom": 0,
 "gap": 0,
 "popUpPaddingLeft": 15,
 "popUpGap": 2,
 "paddingTop": 0,
 "arrowBeforeLabel": false,
 "propagateClick": false,
 "popUpShadowColor": "#000000",
 "label": "ROOMS",
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "height": "100%",
 "class": "DropDown",
 "fontSize": 12,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "selectedPopUpBackgroundColor": "#CE6700",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "popUpBackgroundOpacity": 1,
 "width": 114,
 "fontFamily": "Montserrat",
 "popUpShadow": false,
 "popUpBackgroundColor": "#F7931E",
 "popUpFontColor": "#FFFFFF",
 "paddingRight": 15,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 15,
 "popUpPaddingTop": 10,
 "popUpShadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowBlurRadius": 6,
 "data": {
  "name": "DropDown 3"
 },
 "popUpShadowOpacity": 0,
 "arrowColor": "#FFFFFF",
 "height": 60,
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "popUpBorderRadius": 0,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 0,
 "popUpPaddingLeft": 15,
 "popUpGap": 2,
 "paddingTop": 0,
 "arrowBeforeLabel": false,
 "propagateClick": false,
 "popUpShadowColor": "#000000",
 "label": "AMENITIES",
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "class": "DropDown",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "selectedPopUpBackgroundColor": "#CE6700",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "popUpBackgroundOpacity": 1,
 "width": 130,
 "fontFamily": "Montserrat",
 "popUpShadow": false,
 "popUpBackgroundColor": "#F7931E",
 "popUpFontColor": "#FFFFFF",
 "paddingRight": 15,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 15,
 "popUpPaddingTop": 10,
 "popUpShadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowBlurRadius": 6,
 "data": {
  "name": "DropDown 4"
 },
 "popUpShadowOpacity": 0,
 "arrowColor": "#FFFFFF",
 "height": 60,
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "popUpBorderRadius": 0,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 0,
 "popUpPaddingLeft": 15,
 "popUpGap": 2,
 "paddingTop": 0,
 "arrowBeforeLabel": false,
 "propagateClick": false,
 "popUpShadowColor": "#000000",
 "label": "SPORTS AREA",
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "class": "DropDown",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "selectedPopUpBackgroundColor": "#CE6700",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "popUpBackgroundOpacity": 1,
 "width": 152,
 "fontFamily": "Montserrat",
 "popUpShadow": false,
 "popUpBackgroundColor": "#F7931E",
 "popUpFontColor": "#FFFFFF",
 "paddingRight": 15,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 15,
 "popUpPaddingTop": 10,
 "popUpShadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowBlurRadius": 6,
 "data": {
  "name": "DropDown 5"
 },
 "popUpShadowOpacity": 0,
 "arrowColor": "#FFFFFF",
 "height": 60,
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "popUpBorderRadius": 0,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 0,
 "popUpPaddingLeft": 15,
 "popUpGap": 2,
 "paddingTop": 0,
 "arrowBeforeLabel": false,
 "propagateClick": false,
 "popUpShadowColor": "#000000",
 "label": "SWIMMING POOL",
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "class": "DropDown",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "selectedPopUpBackgroundColor": "#CE6700",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
 "popUpBackgroundOpacity": 1,
 "width": 136,
 "fontFamily": "Montserrat",
 "popUpShadow": false,
 "popUpBackgroundColor": "#F7931E",
 "popUpFontColor": "#FFFFFF",
 "paddingRight": 15,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 15,
 "popUpPaddingTop": 10,
 "popUpShadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowBlurRadius": 6,
 "data": {
  "name": "DropDown 6"
 },
 "popUpShadowOpacity": 0,
 "arrowColor": "#FFFFFF",
 "height": 60,
 "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "popUpBorderRadius": 0,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 0,
 "popUpPaddingLeft": 15,
 "popUpGap": 2,
 "paddingTop": 0,
 "arrowBeforeLabel": false,
 "propagateClick": false,
 "popUpShadowColor": "#000000",
 "label": "RESTAURANTS",
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "class": "DropDown",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "width": 60,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "iconHeight": 17,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "height": 60,
 "shadowBlurRadius": 6,
 "minWidth": 1,
 "borderRadius": 0,
 "data": {
  "name": "Button Settings"
 },
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "propagateClick": false,
 "fontStyle": "normal",
 "class": "Button",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 5,
 "layout": "horizontal",
 "iconWidth": 17,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "center",
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "center",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "85%",
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "width": 8,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "orange line"
 }
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 50,
 "width": "50%",
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "minWidth": 460,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "gap": 0,
 "paddingTop": 20,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 }
},
{
 "data": {
  "name": "X"
 },
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minWidth": 50,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "height": "75%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "height": 140,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 }
},
{
 "rollOverItemLabelFontColor": "#F7931E",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemPaddingLeft": 3,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 70,
 "scrollBarWidth": 10,
 "itemOpacity": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "minWidth": 1,
 "borderRadius": 5,
 "itemThumbnailOpacity": 1,
 "itemMinWidth": 50,
 "borderSize": 0,
 "height": "92%",
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "class": "ThumbnailGrid",
 "scrollBarColor": "#F7931E",
 "shadow": false,
 "itemHeight": 160,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#F7931E",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 13,
 "rollOverItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingRight": 70,
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelGap": 7,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "gap": 26,
 "itemHorizontalAlign": "center",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "propagateClick": false,
 "itemWidth": 220,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowColor": "#F7931E",
 "itemLabelFontFamily": "Montserrat",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "insetBorder": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "WebFrame",
 "height": "100%",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "data": {
  "name": "X"
 },
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minWidth": 50,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "height": "75%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "data": {
  "name": "Floor Plan"
 },
 "progressBackgroundOpacity": 1,
 "id": "MapViewer",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "B Nazanin",
 "playbackBarBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "minHeight": 1,
 "toolTipBackgroundColor": "#000000",
 "paddingLeft": 0,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 7,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBottom": 2,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontWeight": "normal",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "progressHeight": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "toolTipTextShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "height": "100%",
 "progressBarBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipShadowSpread": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressOpacity": 1,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipPaddingTop": 7,
 "toolTipTextShadowBlurRadius": 3,
 "shadow": false,
 "playbackBarHeadHeight": 15,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarLeft": 0,
 "vrPointerSelectionTime": 2000,
 "toolTipBorderSize": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressOpacity": 1,
 "toolTipShadowColor": "#333333",
 "toolTipBorderRadius": 3,
 "toolTipBorderColor": "#767676",
 "progressBarBorderSize": 0,
 "toolTipPaddingRight": 10,
 "progressLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressRight": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarRight": 0,
 "progressBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "progressBarOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "vrPointerColor": "#FFFFFF",
 "toolTipFontStyle": "normal",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderSize": 0,
 "toolTipOpacity": 0.5,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarOpacity": 1,
 "playbackBarHeadWidth": 6
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "gap": 10,
 "borderSize": 0,
 "height": 140,
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "horizontalAlign": "left",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "center",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "55%",
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "width": 8,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "orange line"
 }
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "horizontalAlign": "left",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 60,
 "width": "45%",
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "paddingLeft": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "minWidth": 460,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "gap": 0,
 "paddingTop": 20,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 }
},
{
 "data": {
  "name": "X"
 },
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minWidth": 50,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "height": "75%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "data": {
  "name": "photo"
 },
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "minHeight": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 0,
 "paddingTop": 20,
 "propagateClick": false,
 "class": "Container",
 "height": 60,
 "contentOpaque": false,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "minWidth": 100,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "height": 40,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 }
},
{
 "data": {
  "name": "IconButton X"
 },
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "right": 20,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "top": 20,
 "minWidth": 50,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "height": "36.14%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "shadow": false,
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "data": {
  "name": "IconButton X"
 },
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "right": 20,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "top": 20,
 "minWidth": 50,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "height": "36.14%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "shadow": false,
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBackgroundOpacity": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "B Nazanin",
 "playbackBarBottom": 0,
 "progressBorderColor": "#FFFFFF",
 "minHeight": 1,
 "paddingLeft": 0,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipPaddingBottom": 7,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBottom": 2,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontWeight": "normal",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "progressHeight": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "toolTipTextShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "playbackBarHeadShadow": true,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "height": "100%",
 "progressBarBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipShadowSpread": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressOpacity": 1,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipPaddingTop": 7,
 "toolTipTextShadowBlurRadius": 3,
 "shadow": false,
 "toolTipBorderSize": 1,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarLeft": 0,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressOpacity": 1,
 "toolTipShadowColor": "#333333",
 "toolTipBorderRadius": 3,
 "toolTipBorderColor": "#767676",
 "progressBarBorderSize": 0,
 "toolTipPaddingRight": 10,
 "progressLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressRight": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowColor": "#000000",
 "top": "0%",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarRight": 0,
 "progressBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "progressBarOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerSelectionColor": "#FF6600",
 "vrPointerColor": "#FFFFFF",
 "toolTipFontStyle": "normal",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderSize": 0,
 "toolTipOpacity": 0.5,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarOpacity": 1,
 "playbackBarHeadWidth": 6
},
{
 "data": {
  "name": "IconButton <"
 },
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "top": "20%",
 "cursor": "hand",
 "bottom": "20%",
 "minWidth": 50,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "horizontalAlign": "center",
 "shadow": false
},
{
 "data": {
  "name": "IconButton >"
 },
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "right": 10,
 "width": "14.22%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "top": "20%",
 "cursor": "hand",
 "bottom": "20%",
 "minWidth": 50,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "propagateClick": false,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "horizontalAlign": "center",
 "shadow": false
},
{
 "data": {
  "name": "IconButton X"
 },
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "right": 20,
 "width": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "top": 20,
 "minWidth": 50,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "height": "10%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "shadow": false,
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "data": {
  "name": "Image"
 },
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "minHeight": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 0,
 "paddingTop": 20,
 "propagateClick": false,
 "class": "Container",
 "height": 60,
 "contentOpaque": false,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "minWidth": 100,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "height": 40,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "HTMLText"
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.61vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.64vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.64vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.87vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.87vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.65vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.87vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.76vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#F7931E",
 "shadow": false
},
{
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": 180,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundOpacity": 0.8,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "borderColor": "#000000",
 "height": 50,
 "pressedBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "minWidth": 1,
 "borderRadius": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "LOREM IPSUM",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "fontSize": "1.96vh",
 "backgroundColor": [
  "#F7931E"
 ],
 "layout": "horizontal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "HTMLText18899"
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "height": "45%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.61vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.64vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.64vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Container",
 "height": "80%",
 "contentOpaque": false,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 }
},
{
 "data": {
  "name": "agent photo"
 },
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "width": "25%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "left",
 "scaleMode": "fit_inside"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "HTMLText19460"
 },
 "width": "75%",
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.98vh;font-family:'Montserrat';\"><B>JOHN DOE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.65vh;font-family:'Montserrat';\">LICENSED REAL ESTATE SALESPERSON</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarColor": "#F7931E",
 "shadow": false
}],
 "paddingTop": 0,
 "propagateClick": true,
 "gap": 10,
 "class": "Player",
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getKey": function(key){  return window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "registerKey": function(key, value){  window[key] = value; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); }
 },
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
