/**
 * @providesModule SendIntentAndroid
 */

var {NativeModules} = require("react-native");
var RNSendIntentAndroid = NativeModules.SendIntentAndroid || {};

var SendIntentAndroid = {
    startActivityForResult(requestCode, url, data) {
        return RNSendIntentAndroid.startActivityForResult(requestCode, url, data);
    },
};

 module.exports = SendIntentAndroid;
