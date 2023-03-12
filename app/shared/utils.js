import { Application } from '@nativescript/core'
const platform = require("@nativescript/core/platform");
const utilsModule = require("@nativescript/core/utils");

export const showDrawer = () => {
  let drawerNativeView = Application.getRootView()
  if (drawerNativeView && drawerNativeView.showDrawer) {
    drawerNativeView.showDrawer()
  }
}

export const closeDrawer = () => {
  let drawerNativeView = Application.getRootView()
  if (drawerNativeView && drawerNativeView.showDrawer) {
    drawerNativeView.closeDrawer()
  }
}

export const openUrl = (url) => {
  utilsModule.openUrl(url);
};

export const screenHeight = platform.Screen.mainScreen.heightPixels;

export const log = (command) => {
  console.log(command);
};
