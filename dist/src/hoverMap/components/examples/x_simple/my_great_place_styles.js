'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var K_WIDTH = 40;
var K_HEIGHT = 40;

var greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

exports.greatPlaceStyle = greatPlaceStyle;
//# sourceMappingURL=my_great_place_styles.js.map