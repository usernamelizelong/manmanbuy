;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-arrows_circle_left" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M445.664 795.312l274.336-272v-22.624l-274.336-272-23.808 22.624L681.968 512 422.16 772.688z" fill="" ></path>' +
    '' +
    '<path d="M511.984 1024h0.032c136.768 0 265.328-53.28 362.032-149.968S1024 648.752 1023.984 511.984c0-136.768-53.248-265.344-149.952-362.032C777.344 53.264 648.784 0 512.016 0h-0.032C375.216 0 246.656 53.264 149.952 149.968 53.264 246.672 0 375.248 0.016 512.016c0 136.768 53.248 265.344 149.952 362.032C246.656 970.736 375.216 1024 511.984 1024zM172.592 172.592C263.232 81.936 383.776 32 512.016 32h0.032c128.192 0 248.72 49.936 339.376 140.576 90.656 90.656 140.576 211.2 140.56 339.408 0 128.224-49.92 248.768-140.56 339.424S640.24 992 512.016 992h-0.064c-128.192 0-248.72-49.936-339.376-140.576C81.936 760.768 32 640.24 32.016 512.016 32 383.792 81.936 263.248 172.592 172.592z" fill="" ></path>' +
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