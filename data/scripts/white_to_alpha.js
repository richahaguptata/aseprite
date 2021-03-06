// Aseprite
// Copyright (C) 2015-2017 by David Capello

var col = app.pixelColor
var img = app.activeImage

for (var y=0; y<img.height; ++y) {
  for (var x=0; x<img.width; ++x) {
    var c = img.getPixel(x, y)
    var v = (col.rgbaR(c)+
             col.rgbaG(c)+
             col.rgbaB(c))/3

    img.putPixel(x, y,
                 col.rgba(col.rgbaR(c),
                          col.rgbaG(c),
                          col.rgbaB(c),
                          255-v))
  }
}
