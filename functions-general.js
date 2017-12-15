function showAndHideParentCheckbox () {
    var divs = $(this).parent().parent().siblings();
    var childrElem = $(this).parent().parent().parent().children();
    if ( $(this).prop('checked') ) {
        divs.eq(0).children('input').prop('checked', true);
    }         
    for (var i = 1; i < childrElem.length; i++) {
        if ( childrElem.eq(i).children('label').children('input').prop('checked') ) {
            break;
        }
        if ( i == (childrElem.length - 1) ) {
            if ( childrElem.eq(i).children('label').children('input').prop('checked') == false ) {
                divs.eq(0).children('input').prop('checked', false);
            }
        }
    }
}

function showInputsWillSend (idOfReport) {
    var periods = $('#choice-quarters > div > label');
    var inputs = $('#choice-quarters > div > label > input');
    var cntQrt = 0;
    var idOfReportNoPrison = idOfReport.substring(1);
    
    for (var i = 0; i < periods.length; i++) {                    
        if (inputs.eq(i).prop('checked')) {
            cntQrt = cntQrt + 1;
        }
    }

    if (cntQrt > 1) {
        for (var i = 0; i < periods.length; i++) {                    
            if (inputs.eq(i).prop('checked')) {
                var textOfQuart = periods.eq(i).text(); 
                $(idOfReport)
                    .parent()
                    .parent()
                    .append("<div class='periods-will-send'><label><input type='checkbox' name=" 
                            + idOfReportNoPrison 
                            + "-final-"
                            + textOfQuart[0]
                            + '-' 
                            + textOfQuart[14]
                            + textOfQuart[15]
                            + " checked>" 
                            + periods.eq(i).text() 
                            + "</input></label></div>");
            }
        }
    } else if (cntQrt < 2) { 
        $("#span-we-will-send").show();
    };

    diffHeaderWeWillSend ();

}

function showAndHideChildChecks (reportId) {
    if ( $(reportId).prop('checked') == false ) {
        var quarter = $(reportId).parent().siblings();
        for (var i = 0; i < quarter.length; i++) {
            quarter.children('label').children('input').eq(i).prop("checked", false);
        }
    }
    if ( $(reportId).prop('checked')) {
        var quarter = $(reportId).parent().siblings();
        for (var i = 0; i < quarter.length; i++) {
            quarter.children('label').children('input').eq(i).prop("checked", true);
        }
    }
}

function diffHeaderWeWillSend () {
    var periods = $('#choice-quarters > div > label');
    var inputs = $('#choice-quarters > div > label > input');
    var cntQrt = 0;
    var singleQrt = '';
    for (var i = 0; i < periods.length; i++) {                    
        if (inputs.eq(i).prop('checked')) {
            cntQrt = cntQrt + 1;
        }
    }
    if (cntQrt < 2) {            
        for (var i = 0; i < periods.length; i++) {                    
            if (inputs.eq(i).prop('checked')) {
               singleQrt = inputs.eq(i).parent('label').text();
            }
        }
        $("#span-we-will-send").text( 'Мы за Вас подготовим и сдадим' + ' за ' + singleQrt);
    } else $("#span-we-will-send").text( 'Мы за Вас подготовим и сдадим:');
}  

function calculateFinalSum () {
    var res = 0;
    if ( $('#general').prop('checked') ) {
        if ( $('#tranz-yes').prop('checked') && $('#one-face-yes').prop('checked') ) { 
            for (var i = 0; i < $('.div-quarters').length; i++) {
                if ( $('.div-quarters').eq(i).children('label').children('input').prop('checked') ) {
                    if ( $('.div-quarters').eq(i).data('is-four') == 'no' ) {
                        res = res + 1999;
                    } else res = res + 2999;
                }            
            }
        }

        if ( $('#tranz-yes').prop('checked') && $('#one-face-yes').prop('checked') == false ) { 
            for (var i = 0; i < $('.div-quarters').length; i++) {
                if ( $('.div-quarters').eq(i).children('label').children('input').prop('checked') ) {
                    if ( $('.div-quarters').eq(i).data('is-four') == 'no' ) {
                        res = res + 2499;
                    } else res = res + 3499;
                }            
            }
        }

        if ( $('#tranz-yes').prop('checked') == false && $('#one-face-yes').prop('checked') ) { 
            for (var i = 0; i < $('.div-quarters').length; i++) {
                if ( $('.div-quarters').eq(i).children('label').children('input').prop('checked') ) {
                    if ( $('.div-quarters').eq(i).data('is-four') == 'no' ) {
                        res = res + 1499;
                    } else res = res + 2499;
                }            
            }
        }

        if ( $('#tranz-yes').prop('checked') == false && $('#one-face-yes').prop('checked') == false ) { 
            for (var i = 0; i < $('.div-quarters').length; i++) {
                if ( $('.div-quarters').eq(i).children('label').children('input').prop('checked') ) {
                    if ( $('.div-quarters').eq(i).data('is-four') == 'no' ) {
                        res = res + 1999;
                    } else res = res + 2999;
                }            
            }
        }
       
    }

    if ( $('#simple').prop('checked') ) {
        if ( $('#one-face-yes').prop('checked') ) { 
            for (var i = 0; i < $('.div-quarters').length; i++) {
                if ( $('.div-quarters').eq(i).children('label').children('input').prop('checked') ) {
                    if ( $('.div-quarters').eq(i).data('is-four') == 'no' ) {
                        res = res + 999;
                    } else res = res + 1999;
                }            
            }
        }
        if ( $('#one-face-yes').prop('checked') == false ) { 
            for (var i = 0; i < $('.div-quarters').length; i++) {
                if ( $('.div-quarters').eq(i).children('label').children('input').prop('checked') ) {
                    if ( $('.div-quarters').eq(i).data('is-four') == 'no' ) {
                        res = res + 1499;
                    } else res = res + 2499;
                }            
            }
        }       
    }

    if ( $('#general-ip').prop('checked') ) {
        for (var i = 0; i < $('.div-quarters').length; i++) {
            if ( $('.div-quarters').eq(i).children('label').children('input').prop('checked') ) {
                if ( $('.div-quarters').eq(i).data('is-four') == 'no' ) {
                    res = res + 299;
                } else res = res + 499;
            }            
        }            
    }

    if ( $('#simple-ip').prop('checked') ) {    
        if ( $('#decl-year-2017-ip-simple').prop('checked') ) {
            res = res + 299;
        } 
        if ( $('#decl-year-2016-ip-simple').prop('checked') ) {
            res = res + 299;
        } 
        if ( $('#decl-year-2015-ip-simple').prop('checked') ) {
            res = res + 299;
        }         
    }

    return res;

}