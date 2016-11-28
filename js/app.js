(function () {
    var cookieKey = 'mykey';
    var cookieValue = Cookies.get(cookieKey);

    if (!cookieValue) {

        // because we are testing
        cookieValue = 14;

        //return;
    }

    // Create base url
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

    // Generate QR code
    var typeNumber = 4;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(baseUrl + '/receive.html?val=' + cookieValue);
    qr.make();
    document.getElementById('placeHolder').innerHTML = qr.createImgTag();
})();
