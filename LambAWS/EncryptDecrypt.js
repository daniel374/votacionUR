//https://gist.github.com/yoavniran/c78a0991e0152b306c25
var crypto = require("crypto");

var EncryptDecrypt = (function () {
    var params = {
        alg : "aes256",
        key : "",
        iv  : ""
    }
    function setParams(_alg, _key, _iv){
        params.alg  = _alg;
        params.key  = _key;
        params.iv   = _iv;
    }
    
    function encryptText(text, encoding) {

        var cipher = crypto.createCipheriv(params.alg, params.key, params.iv);

        encoding = encoding || "base64";

        var result = cipher.update(text, "utf8", encoding);
        result += cipher.final(encoding);

        return result;
    }

    function decryptText(text, encoding) {

        var decipher = crypto.createDecipheriv(params.alg, params.key, params.iv);

        encoding = encoding || "base64";

        var result = decipher.update(text, encoding);
        result += decipher.final();

        return result;
    }

    return {
        encryptText : encryptText,
        decryptText : decryptText,
        setParams   : setParams
    };
})();

module.exports = EncryptDecrypt;