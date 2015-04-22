var express = require('express');
var fs = require('fs');
var app = express();
app.set('port', (process.env.PORT || 80));
console.log(fs.readFile("./main_page.html"));
app.get('/', function(req, res) {
    res.send("<html><head><title>Some Title</title></head><body><script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1603688843233149',
      xfbml      : true,
      version    : 'v2.3'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = '//connect.facebook.net/en_US/sdk.js';
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script><div
  class="fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">
</div></body></html>");
});
app.listen(app.get('port'));
