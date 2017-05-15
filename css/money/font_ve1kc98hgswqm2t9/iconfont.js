;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M699.682032 196.538235 654.097834 150.954037 338.868359 466.183512 338.859149 466.174302 293.274952 511.759523 293.283138 511.768733 293.274952 511.776919 338.859149 557.361117 338.868359 557.351907 654.097834 872.581382 699.682032 826.997184 384.452557 511.768733Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-groupcopy5" viewBox="0 0 1088 1024">' +
    '' +
    '<path d="M544 992c-12.608 0-24.832-5.248-33.6-14.4l0 0c0 0-111.744-115.328-154.56-160.256L186.688 817.344C102.848 817.344 32 742.4 32 653.632L32 188.096C32 102.016 100.16 32 184 32l720 0c83.84 0 152 70.016 152 156.096l0 465.472c0 88.768-70.848 163.776-154.752 163.776l-174.08 0c-61.248 60.544-147.712 158.272-148.608 159.232C568.832 986.752 556.608 992 544 992zM184 96C135.488 96 96 137.344 96 188.096l0 465.472c0 53.12 42.432 99.776 90.688 99.776l196.736 0 9.472 10.048c25.664 27.328 116.608 121.344 150.592 156.352 27.776-31.04 98.048-108.672 148.416-157.44l9.344-9.024 200.064 0c48.32 0 90.752-46.656 90.752-99.776L992.064 188.096c0-50.816-39.488-92.096-88-92.096L184 96z"  ></path>' +
    '' +
    '<path d="M304 374.336c-33.152 0-59.968 27.776-59.968 62.08 0 34.304 26.88 62.08 59.968 62.08s59.968-27.776 59.968-62.08C363.968 402.112 337.152 374.336 304 374.336L304 374.336z"  ></path>' +
    '' +
    '<path d="M544 374.336c-33.152 0-59.968 27.776-59.968 62.08 0 34.304 26.88 62.08 59.968 62.08s59.968-27.776 59.968-62.08C603.968 402.112 577.152 374.336 544 374.336L544 374.336z"  ></path>' +
    '' +
    '<path d="M784 374.336c-33.152 0-60.032 27.776-60.032 62.08 0 34.304 26.88 62.08 60.032 62.08s59.968-27.776 59.968-62.08C844.032 402.112 817.152 374.336 784 374.336L784 374.336z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiazai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M873.152 319.552 873.152 378.496 965.184 378.496 965.184 965.056 58.816 965.056 58.816 378.496 148.16 378.496 148.16 319.552 0 319.552 0 1024 1024 1024 1024 319.552Z"  ></path>' +
    '' +
    '<path d="M481.728 0l60.224 0 0 564.608-60.224 0 0-564.608Z"  ></path>' +
    '' +
    '<path d="M512 546.688 782.592 317.056 830.144 374.912 512 641.856 193.856 374.912 241.408 317.056Z"  ></path>' +
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