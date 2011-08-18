function FileSelect(fileUrl, fileName) {
    var $ = window.top.opener.django.jQuery
    $($.markItUp.focused).trigger('insertImage', [fileUrl, fileName])
    window.top.close()
    window.top.opener.focus()
}
