window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title
  const attentionMessage = "Don't leave!"

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = 'assets/images/icons8-r-60.svg'
    } else {
      document.title = attentionMessage
      favicon.href = 'assets/images/icons8-r-60.svg'
    }
  }
}
