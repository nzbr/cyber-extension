browser.storage.sync.get("enabled").then(function(v) {

    if (v.enabled) {
        if (document.documentElement.innerHTML.search(/cyber/i) > -1) {
            console.log("CYBER triggered on: " + document.location.href);

            var cyberImage = browser.runtime.getURL("cyber_plain.png");

            var headInsert = `<style>
                  .cyber-header {
                      background-image: url(` + cyberImage + `);
                      background-repeat: repeat-x;
                      background-size: contain;
                      height: 100px;
                      -webkit-animation: backgroundScroll 10s linear infinite;
                      animation: backgroundScroll 10s linear infinite;
                      -ms-transform: rotate(2deg); /* IE 9 */
                      -webkit-transform: rotate(2deg); /* Chrome, Safari, Opera */
                      transform: rotate(2deg);
                      position: fixed;
                      width: 100%;
                      margin-top: 10px;
                      z-index: 255;
                  }

                  @-webkit-keyframes backgroundScroll {
                      from {
                          background-position: 0 0;
                      }
                      to {
                          background-position: -277px 0;
                      }
                  }

                  @keyframes backgroundScroll {
                      from {
                          background-position: 0 0;
                      }
                      to {
                          background-position: -277px 0;
                      }
                  }
              </style>`;

            Array.prototype.slice.call(document.getElementsByTagName("title")).forEach(function callback(currentValue) {
                currentValue.innerHTML = "[CYBER] " + currentValue.innerHTML;
            });

            Array.prototype.slice.call(document.getElementsByTagName("head")).forEach(function callback(currentValue) {
                currentValue.innerHTML += headInsert;
            });

            Array.prototype.slice.call(document.getElementsByTagName("body")).forEach(function callback(currentValue) {
                currentValue.innerHTML = "<div class='cyber-header' onclick='this.hidden = true;'></div>" + currentValue.innerHTML;
            });

        };
    };
});
