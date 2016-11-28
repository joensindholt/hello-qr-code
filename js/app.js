(function () {
    
    var cookieKey = 'mykey';
    var cookieId = Cookies.get(cookieKey);

    if (!cookieId) {

        // because we are testing
        cookieId = 14;

        //return;
    }

    var typeNumber = 4;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData('receive.html?cid=' + cookieId);
    qr.make();
    document.getElementById('placeHolder').innerHTML = qr.createImgTag();
})();
