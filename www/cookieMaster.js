var cookieMaster = {

    getCookieValue: function(url, cookieName, successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'getCookieValue',
                    [url, cookieName]
        );
    },
    setCookieValue: function (url, cookieName, cookieValue, expirationDays, successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'setCookieValue',
                    [url, cookieName, cookieValue, expirationDays]
        );
    },
    clearCookies: function(successCallback, errorCallback) {
        cordova.exec(successCallback,
                    errorCallback,
                    'CookieMaster', 'clearCookies',
                    []
        );
    },
    clearCookie: function(url, cookieName, successCallback, errorCallback) {
      cordova.exec(successCallback,
                  errorCallback,
                  'CookieMaster', 'clearCookie',
                  [url, cookieName]
      );
    },
};
module.exports = cookieMaster;
