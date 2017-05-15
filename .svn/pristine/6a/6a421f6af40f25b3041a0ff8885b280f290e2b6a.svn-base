;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconfontcha" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M754.782 212.596 512 455.368 269.218 212.596c-13.081-13.081-34.29-13.081-47.369 0-13.081 13.081-13.081 34.288 0 47.367l242.782 242.771L221.849 745.507c-13.081 13.081-13.081 34.288 0 47.367 13.081 13.081 34.29 13.081 47.369 0L512 550.103l242.782 242.771c13.081 13.081 34.289 13.081 47.37 0 13.081-13.081 13.081-34.288 0-47.367L559.37 502.735l242.782-242.771c13.081-13.081 13.081-34.288 0-47.367C789.07 199.517 767.862 199.517 754.782 212.596z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanjiaowangtubiao35" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M904.918187 115.2C896.384853 102.4 883.584853 85.333333 866.518187 85.333333L38.784853 85.333333C25.984853 85.333333 8.918187 102.4 4.65152 115.2c-8.533333 12.8-4.266667 34.133333 4.266667 46.933333L299.05152 482.133333l0 354.133333c0 12.8 8.533333 29.866667 25.6 34.133333l217.6 98.133333c4.266667 4.266667 12.8 4.266667 17.066667 4.266667 8.533333 0 17.066667 0 21.333333-4.266667 12.8-8.533333 21.333333-17.066667 21.333333-34.133333l12.8-456.533333 281.6-320C909.184853 149.333333 909.184853 132.266667 904.918187 115.2zM520.918187 874.666667 384.384853 810.666667l0-298.666667 149.333333 0L520.918187 874.666667zM555.05152 422.4c-4.266667 0-4.266667 4.266667-8.533333 4.266667L363.05152 426.666667 132.65152 170.666667l644.266667 0L555.05152 422.4z"  ></path>' +
    '' +
    '<path d="M1024.384853 716.8c0-17.066667-17.066667-34.133333-34.133333-34.133333l-273.066667 0c-17.066667 0-34.133333 17.066667-34.133333 34.133333l0 17.066667c0 17.066667 17.066667 34.133333 34.133333 34.133333l273.066667 0c17.066667 0 34.133333-17.066667 34.133333-34.133333L1024.384853 716.8z"  ></path>' +
    '' +
    '<path d="M1024.384853 546.133333c0-17.066667-17.066667-34.133333-34.133333-34.133333l-273.066667 0c-17.066667 0-34.133333 17.066667-34.133333 34.133333l0 17.066667c0 17.066667 17.066667 34.133333 34.133333 34.133333l273.066667 0c17.066667 0 34.133333-17.066667 34.133333-34.133333L1024.384853 546.133333z"  ></path>' +
    '' +
    '<path d="M1024.384853 887.466667c0-17.066667-17.066667-34.133333-34.133333-34.133333l-273.066667 0c-17.066667 0-34.133333 17.066667-34.133333 34.133333l0 17.066667c0 17.066667 17.066667 34.133333 34.133333 34.133333l273.066667 0c17.066667 0 34.133333-17.066667 34.133333-34.133333L1024.384853 887.466667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)