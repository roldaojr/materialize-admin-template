/* global $ Materialize */
$(document).ready(function(){
    // sidenav button
    $('[data-activates=side-nav]').sideNav()
    // form-submit link
    $('.form-submit').click(function(e){
        var target = $(this).attr("href")
        $(target).submit()
        return false
    })
    // select input
    $('select').not('.django-select2').material_select()
    // right panel slide out
    $('.right-slide-out').sideNav({edge: 'right', menuWidth: 300})
})

$(document).ajaxStart(function() { $("#ajax-loader").show() })
           .ajaxStop(function() { $("#ajax-loader").hide() })
