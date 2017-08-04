/*
 * base64-file
 *
 * Copyright (c) 2017 
 * Licensed under the MIT license.
 */
;
define(function(require, exports, module) {
    "use strict";

    exports._base64ToArrayBuffer = function(base64) {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    }
    exports.encode = function(base64, filename) {
        var ab = exports._base64ToArrayBuffer(base64);
        return new File([ab], filename, {
            type: "image/png",
        });
    }
});