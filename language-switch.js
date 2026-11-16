// Use the section currently on screen, rather than a stale URL fragment.
document.querySelectorAll('[data-language-link]').forEach(function (link) {
  link.addEventListener('click', function () {
    var sections = Array.from(document.querySelectorAll('main > section[id]'));
    var focusLine = Math.min(window.innerHeight * 0.4, 280);
    var current = sections.find(function (section) {
      var rect = section.getBoundingClientRect();
      return rect.top <= focusLine && rect.bottom > focusLine;
    });
    link.hash = current && current.id !== 'top' ? current.id : '';
  });
});
