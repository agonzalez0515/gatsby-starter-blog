---
title: setBounds() in Electron
date: "2019-05-08"
---


I'm working on an Electron App that will mostly be used by Windows users. The app is a sidebar that opens and closes to show a list of items. Think the VS Code sidebar with all the icons, and when you click on the icons a panel opens to list stuff. The requirements were the sidebar should be docked at the edge of the screen and it should be the whole height of the screen. Electron lets you set the size of the window with `setSize`, so at first this felt pretty easy. But then.....it wasn't.

I could set the width by giving it a set pixel size, but how do I set the height to be the whole screen? There's all kinds of screen sizes!! I tried `height: 100%` and `height: 100vh`, but that didn't work. 

Ok off to Electron documentation we go!!

After some search, I see that Electron has an API for the Screen. This is the magic of Electron, it can interact with your machine! Using `let displays = electron.screen.getPrimaryDisplay()` I can get the width and height of the user's screen!

```javascript
let display = electron.screen.getPrimaryDisplay()
const { height } = display.bounds
win.setSize({width: 40, height: height})
```

Cool, so when the app is launched, the width will be 40px and the height will be the height of the primary screen. Next, how do I dock it? Right now, it opens in the middle of the screen. Back to Google and documentation!

I find a method called `setBounds()` which not only sets the width and height, it also sets the x,y coordinates of where to place the window on the screen. If I set the coordinates to 0, 0 then the top left corner of the window will be placed at 0,0 on the screen, docking the app all the way to the left. Woo!!!!

```javascript
let display = electron.screen.getPrimaryDisplay()
const { height } = display.bounds

win.setBounds({
  x: 0,
  y: 0,
  width: 40,
  height: height
})
```

Next step, is 'opening' a drawer when the user clicks on an icon. This one was easy for me, I use `setSize()` again and resize the window on click. The bounds will stay the same from when I first set them. The window grows to the right and it shows the lists of stuff.

**Mission accomplished!**

Then product says that since most of our users use Windows OS, we actually need it to dock to the right. Windows places icons and the start menu on the left, so having the sidebar there too would just be too much clutter. 

Ok, I got this. Let's just set x,y coordinates to the right side of the screen. I'm going to need the width of the screen now. To find the x coordinate, I need to subtract the width of my app from the width of the primary screen.

```javascript
let display = electron.screen.getPrimaryDisplay()
const { height, width } = display.bounds

win.setBounds({
  x: width - 40,
  y: 0,
  width: 40,
  height: height
})
```

Well, the app docks to the right as expected, but now when you click on an icon, it also opens to the right! Oops!!!

This one took me awhile to figure out. Awhileeeeee. I even asked on [Stack Overflow](https://stackoverflow.com/questions/55581488/how-can-i-resize-a-window-towards-the-left-when-the-electron-app-is-docked-on-th).


First, when it opens I reset the bounds for the window to move towards the right the amount that I want it to open/the width. This way it doesnt open off screen. But the problem was how to show the sidebar still docked? I want to make it look like it's opening towards the left, even if it's not. 

What I ended up doing required a little CSS too. I used flexbox to give the sidebar an order of 2. This way the sidebar visually presented on the right side at all times. 

```javascript
let display = electron.screen.getPrimaryDisplay()
const { height, width } = display.bounds

win.setBounds({
  x: width - 400,
  y: 0,
  width: 400,
  height: height
})
```

```css

.parent-div {
  display: flex;
}

.child-div {
  order: 2;
}

```



