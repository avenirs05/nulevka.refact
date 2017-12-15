var showAndHideUK = function () {
    if (($('#qrt-4-2017')).prop('checked')) {
         $('#uk-question-0').show();
    } else $('#uk-question-0').hide();

    if (($('#qrt-4-2016')).prop('checked')) {
         $('#uk-question-1').show();
    } else $('#uk-question-1').hide();
    
    if (($('#qrt-4-2015')).prop('checked')) {
         $('#uk-question-2').show();
    } else $('#uk-question-2').hide();
    
    if ( ($('#qrt-4-2014')).prop('checked') ) {
         $('#uk-question-3').show();
    } else $('#uk-question-3').hide();
}

function findYear (str) {
    if (str.match(/2017/)) {
        return '2017';
    }
    if (str.match(/2016/)) {
        return '2016';
    }
    if (str.match(/2015/)) {
        return '2015';
    }
    if (str.match(/2014/)) {
        return '2014';
    }      
}

function listOfMonths (label) {
    if ( label.text().match(/^1/) ) {
        return '<div><label for="final-szv-jan-' 
        + findYear(label.text()) + '" ' 
        + '><input id="final-szv-jan-' 
        + findYear(label.text()) + '" ' + ' ' 
        + ' type="checkbox" name="final-szv-jan-' 
        + findYear(label.text()) + '" ' + ' ' 
        + '>Январь</label></div><div><label for="final-szv-feb-' 
        + findYear(label.text()) + '" ' 
        + '><input id="final-szv-feb-' 
        + findYear(label.text()) + '" ' + ' ' 
        + ' type="checkbox" name="final-szv-feb-' 
        + findYear(label.text()) + '" ' + ' ' 
        + '>Февраль</label></div><div><label for="final-szv-mar-' 
        + findYear(label.text()) + '" ' 
        + '><input id="final-szv-mar-' 
        + findYear(label.text()) + '" ' + ' ' 
        + ' type="checkbox" name="final-szv-mar-' 
        + findYear(label.text()) + '" ' + ' ' 
        + '>Март</label></div>';
    }
    if ( label.text().match(/^2/) ) {
        return '<div><label for="final-szv-apr-' 
        + findYear(label.text()) + '" ' 
        + '><input id="final-szv-apr-' 
        + findYear(label.text()) + '" ' + ' ' 
        + ' type="checkbox" name="final-szv-apr-' 
        + findYear(label.text()) + '" ' + ' ' 
        + '>Апрель</label></div><div><label for="final-szv-may-' 
        + findYear(label.text()) + '" ' 
        + '><input id="final-szv-may-' 
        + findYear(label.text()) + '" ' + ' ' 
        + ' type="checkbox" name="final-szv-may-' 
        + findYear(label.text()) + '" ' + ' ' 
        + '>Май</label></div><div><label for="final-szv-jun-' 
        + findYear(label.text()) + '" ' 
        + '><input id="final-szv-jun-' 
        + findYear(label.text()) + '" ' + ' ' 
        + ' type="checkbox" name="final-szv-jun-' 
        + findYear(label.text()) + '" ' + ' ' 
        + '>Июнь</label></div>';
    }
    if ( label.text().match(/^3/) ) {
        return '<div><label for="final-szv-jul-' 
        + findYear(label.text()) + '" ' 
        + '><input id="final-szv-jul-' 
        + findYear(label.text()) + '" ' + ' ' 
        + ' type="checkbox" name="final-szv-jul-' 
        + findYear(label.text()) + '" ' + ' ' 
        + '>Июль</label></div><div><label for="final-szv-aug-' 
        + findYear(label.text()) + '" ' 
        + '><input id="final-szv-aug-' 
        + findYear(label.text()) + '" ' + ' ' 
        + ' type="checkbox" name="final-szv-aug-' 
        + findYear(label.text()) + '" ' + ' ' 
        + '>Август</label></div><div><label for="final-szv-sep-' 
        + findYear(label.text()) + '" ' 
        + '><input id="final-szv-sep-' 
        + findYear(label.text()) + '" ' + ' ' 
        + ' type="checkbox" name="final-szv-sep-' 
        + findYear(label.text()) + '" ' + ' ' 
        + '>Сентябрь</label></div>';
    }
    if ( label.text().match(/^4/) ) {
        return '<div><label for="final-szv-oct-' 
        + findYear(label.text()) + '" ' 
        + '><input id="final-szv-oct-' 
        + findYear(label.text()) + '" ' + ' ' 
        + ' type="checkbox" name="final-szv-oct-' 
        + findYear(label.text()) + '" ' + ' ' 
        + '>Октябрь</label></div><div><label for="final-szv-nov-' 
        + findYear(label.text()) + '" ' 
        + '><input id="final-szv-nov-' 
        + findYear(label.text()) + '" ' + ' ' 
        + ' type="checkbox" name="final-szv-nov-' 
        + findYear(label.text()) + '" ' + ' ' 
        + '>Ноябрь</label></div><div><label for="final-szv-dec-' 
        + findYear(label.text()) + '" ' 
        + '><input id="final-szv-dec-' 
        + findYear(label.text()) + '" ' + ' ' 
        + ' type="checkbox" name="final-szv-dec-' 
        + findYear(label.text()) + '" ' + ' ' 
        + '>Декабрь</label></div>';
    }
}


var showAndHideSzvMonths = function () {
    if ( ($('div')).is('.month') ) {
        $('.month').show();
        return;
    }

    if ( ($('#szv-quest-yes')).prop('checked') ) {
          $('#btn-next-tax-system').hide();
          $('#choice-months').show();              
          
          var inputs = $('#choice-quarters > div > label > input');
          for (var i = inputs.length - 1; i >= 0; i--) {
               if ( inputs.eq(i).prop('checked') ) {
                    $('#choice-months')
                    .after('<div class="month"><span>' 
                            + inputs.eq(i).parent('label').text() 
                            + '</span>' + listOfMonths( inputs.eq(i).parent('label'), i ) 
                            + '</div>');
               } 
          }

          $('#choice-months').show();
    }
}


function hideAllInputsWillSend () {
    $('#decl-nds').parent().parent().hide();
    $('#decl-profit').parent().parent().hide();
    $('#count-ins').parent().parent().hide();        
    $('#count-fss').parent().parent().hide();
    $('#decl-one').parent().parent().hide();
    $('#szv-m').parent().parent().hide();        
}


function showInputsWillSendSzv () {
    if ( ($('div')).is('.month') ) {

        $('#div-szv-quest').show();            
        $('#div-szv-quest > span').hide();
        $('#choice-months span').hide();
        $('#div-szv-quest br').hide();
        $('#szv-quest-yes').parent('label').hide();
        $('#szv-quest-no').parent('label').hide(); 
        $('#btn-back-szv-quest').hide();
        $('#btn-next-szv-quest').hide();  
        $('#form-tax-system').append( $('#div-szv-quest') );  
        $('#form-tax-system').append( $('#div-from-customer') ); 

        var inputs = $('.month').children('div').children('label').children('input');
        for (var i = 0; i < inputs.length; i++) {
            if ( $(inputs).eq(i).prop('checked') ) {
                $(inputs).eq(i).parent('label').parent('div').hide();
            } 
            if ( $(inputs).eq(i).prop('checked') == false ) {
                $(inputs).eq(i).prop('checked', true);
            }
        }

        var divs = $('.month');
        for (var i = 0; i < divs.length; i++) {
            if ( divs.eq(i).children('div').eq(0).css('display') == 'none' && 
                divs.eq(i).children('div').eq(1).css('display') == 'none' && 
                divs.eq(i).children('div').eq(2).css('display') == 'none' ) 
            {
                divs.eq(i).css('display', 'none');
            }
        }
        diffHeaderWeWillSend();
        if ( $('.month > span').length === 1) {
            $('.month > span').hide();
        }

    } else {
        $('#btn-next-tax-system').hide();
        $('#choice-months').show();

        var inputs = $('#choice-quarters > div > label > input');
        for (var i = inputs.length - 1; i >= 0; i--) {
             if ( inputs.eq(i).prop('checked') ) {
                  $('#choice-months')
                  .after('<div class="month"><span>' + inputs.eq(i).parent('label').text() + '</span>' + listOfMonths( inputs.eq(i).parent('label'), i ) + '</div>');
             } 
        }

        $('#choice-months').show();
        $('#div-szv-quest').show();            
        $('#div-szv-quest > span').hide();
        $('#choice-months span').hide();
        $('#div-szv-quest br').hide();
        $('#szv-quest-yes').parent('label').hide();
        $('#szv-quest-no').parent('label').hide(); 
        $('#btn-back-szv-quest').hide();
        $('#btn-next-szv-quest').hide();  

        $('#form-tax-system').append( $('#div-szv-quest') );  
        $('#form-tax-system').append( $('#div-from-customer') ); 

        var divs = $('.month');
        for (var i = 0; i < divs.length; i++) {
            divs.eq(i).children('div').children('label').children('input').prop('checked', true);
        } 

        diffHeaderWeWillSend();
        if ( $('.month > span').length === 1) {
            $('.month > span').hide();
        }
    }     
}
            
function showAndHideChildChecksSzv (reportId) {
    if ( $(reportId).prop('checked') == false ) {
        var inputs = $('.month').children('div').children('label').children('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs.eq(i).prop("checked", false);
        }      
    }

    if ( $(reportId).prop('checked')) {
        var inputs = $('.month').children('div').children('label').children('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs.eq(i).prop("checked", true);
        }
    }
} 

function insertDeclUsnIfQuartIs4 () {
    if ( $('#simple').prop('checked') && ( 
            $('#qrt-4-2014').prop('checked') || 
            $('#qrt-4-2015').prop('checked') || 
            $('#qrt-4-2016').prop('checked') || 
            $('#qrt-4-2017').prop('checked') ) )  {
        if ( $('#qrt-4-2017').prop('checked') ) {
            $('#div-from-customer').before('<div><label id="label-decl-usn-4-2017" for="decl-usn-4-2017"><input id="decl-usn-4-2017" type="checkbox" name="decl-usn-4-2017" checked>Налоговая декларация по УСН за 2017 год</label></div>');
        }
        if ( $('#qrt-4-2016').prop('checked') ) {
            $('#div-from-customer').before('<div><label id="label-decl-usn-4-2016" for="decl-usn-4-2016"><input id="decl-usn-4-2016" type="checkbox" name="decl-usn-4-2016" checked>Налоговая декларация по УСН за 2016 год</label></div>');
        }
        if ( $('#qrt-4-2015').prop('checked') ) {
            $('#div-from-customer').before('<div><label id="label-decl-usn-4-2015" for="decl-usn-4-2015"><input id="decl-usn-4-2015" type="checkbox" name="decl-usn-4-2015" checked>Налоговая декларация по УСН за 2015 год</label></div>');
        }
        if ( $('#qrt-4-2014').prop('checked') ) {
            $('#div-from-customer').before('<div><label id="label-decl-usn-4-2014" for="decl-usn-4-2014"><input id="decl-usn-4-2014" type="checkbox" name="decl-usn-4-2014" checked>Налоговая декларация по УСН за 2014 год</label></div>');
        }
    }  
}

function insertDiffReportsIfQuartIs4 () {
    if ( $('#qrt-4-2017').prop('checked') ) {
        $('#div-from-customer').before('<div><label id="label-buh-rep-ifns-4-2017" for="buh-rep-ifns-4-2017"><input id="buh-rep-ifns-4-2017" type="checkbox" name="buh-rep-ifns-4-2017" checked>Бухгалтерская(финансовая) отчетность за 2017 год в ИФНС</label></div><div><label id="label-buh-rep-stat-4-2017" for="buh-rep-stat-4-2017"><input id="buh-rep-stat-4-2017" type="checkbox" name="buh-rep-stat-4-2017" checked>Бухгалтерская(финансовая) отчетность за 2017 год в Росстат</label></div><div><label id="label-workers-cnt-4-2017" for="workers-cnt-4-2017"><input id="workers-cnt-4-2017" type="checkbox" name="workers-cnt-4-2017" checked>Сведения о среднесписочной численности работников за 2017 год</label></div>');
    }
    if ( $('#qrt-4-2016').prop('checked') ) {
        $('#div-from-customer').before('<div><label id="label-buh-rep-ifns-4-2016" for="buh-rep-ifns-4-2016"><input id="buh-rep-ifns-4-2016" type="checkbox" name="buh-rep-ifns-4-2016" checked>Бухгалтерская(финансовая) отчетность за 2016 год в ИФНС</label></div><div><label id="label-buh-rep-stat-4-2016" for="buh-rep-stat-4-2016"><input id="buh-rep-stat-4-2016" type="checkbox" name="buh-rep-stat-4-2016" checked>Бухгалтерская(финансовая) отчетность за 2016 год в Росстат</label></div><div><label id="label-workers-cnt-4-2016" for="workers-cnt-4-2016"><input id="workers-cnt-4-2016" type="checkbox" name="workers-cnt-4-2016" checked>Сведения о среднесписочной численности работников за 2016 год</label></div>');
    }
    if ( $('#qrt-4-2015').prop('checked') ) {
        $('#div-from-customer').before('<div><label id="label-buh-rep-ifns-4-2015" for="buh-rep-ifns-4-2015"><input id="buh-rep-ifns-4-2015" type="checkbox" name="buh-rep-ifns-4-2015" checked>Бухгалтерская(финансовая) отчетность за 2015 год в ИФНС</label></div><div><label id="label-buh-rep-stat-4-2015" for="buh-rep-stat-4-2015"><input id="buh-rep-stat-4-2015" type="checkbox" name="buh-rep-stat-4-2015" checked>Бухгалтерская(финансовая) отчетность за 2015 год в Росстат</label></div><div><label id="label-workers-cnt-4-2015" for="workers-cnt-4-2015"><input id="workers-cnt-4-2015" type="checkbox" name="workers-cnt-4-2015" checked>Сведения о среднесписочной численности работников за 2015 год</label></div>');
    }
    if ( $('#qrt-4-2014').prop('checked') ) {
        $('#div-from-customer').before('<div><label id="label-buh-rep-ifns-4-2014" for="buh-rep-ifns-4-2014"><input id="buh-rep-ifns-4-2014" type="checkbox" name="buh-rep-ifns-4-2014" checked>Бухгалтерская(финансовая) отчетность за 2014 год в ИФНС</label></div><div><label id="label-buh-rep-stat-4-2014" for="buh-rep-stat-4-2014"><input id="buh-rep-stat-4-2014" type="checkbox" name="buh-rep-stat-4-2014" checked>Бухгалтерская(финансовая) отчетность за 2014 год в Росстат</label></div><div><label id="label-workers-cnt-4-2014" for="workers-cnt-4-2014"><input id="workers-cnt-4-2014" type="checkbox" name="workers-cnt-4-2014" checked>Сведения о среднесписочной численности работников за 2014 год</label></div>');
    }
}


