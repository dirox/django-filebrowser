function FileSelect(fileUrl) {
    var $ = window.top.opener.django.jQuery
    $($.markItUp.focused).trigger('insertImage', fileUrl)
    window.top.close()
    window.top.opener.focus()
}
