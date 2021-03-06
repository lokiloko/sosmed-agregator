var FB = require('fb')

class Facebook {
  static me(accessToken) {
    return new Promise((resolve, reject)=>{
      var fb = new FB.Facebook({
        accessToken: accessToken,
        appId: 507229999655345,
        appSecret: 'dafb592c0501e8bb92072d1e0c700607'
      })
      fb.api('/me', function(response) {
        if (response && response.error) {
          if (response.error.code === 'ETIMEDOUT') {
            console.log('request timeout');
            reject('request timeout')
          } else {
            console.log('error', response.error);
            reject(response.error)
          }
        } else {
          resolve(response)
        }
      })
    })
  }
  static coba(accessToken, id) {
    return new Promise((resolve, reject)=>{
      var fb = new FB.Facebook({
        accessToken: accessToken,
        appId: 507229999655345,
        appSecret: 'dafb592c0501e8bb92072d1e0c700607'
      })
      fb.api(`/me/feed`, function(response) {
        if (response && response.error) {
          if (response.error.code === 'ETIMEDOUT') {
            console.log('request timeout');
            reject('request timeout')
          } else {
            console.log('error', response.error);
            reject(response.error)
          }
        } else {
          console.log(response);
          resolve(response)
        }
      })
    })
  }
  static post(accessToken, id, message) {
    return new Promise((resolve, reject)=>{
      var fb = new FB.Facebook({
        accessToken: accessToken,
        appId: 507229999655345,
        appSecret: 'dafb592c0501e8bb92072d1e0c700607'
      })
      fb.api(
          "/me/feed",
          "POST",
          {
              "message": message
          },
          function (response) {
            console.log(response)
            if (response && !response.error) {
              /* handle the result */
              resolve(response);
            }
          }
      );
    })
  }
}

module.exports = Facebook;
