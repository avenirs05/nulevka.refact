function insertDeclNdflIfIpIfQuartIs4 () {
    if ( $('#general-ip').prop('checked') && 
        ( $('#qrt-4-2015').prop('checked') || 
          $('#qrt-4-2016').prop('checked') || 
          $('#qrt-4-2017').prop('checked') ) )  
    {
        if ( $('#qrt-4-2017').prop('checked') ) {
            $('#div-from-customer-ip').before('<div><label id="label-decl-ndfl-ip-4-2017" for="decl-ndfl-ip-4-2017"><input id="decl-ndfl-ip-4-2017" type="checkbox" name="decl-ndfl-ip-4-2017" checked>Налоговая декларация 3-НДФЛ за 2017 год</label></div>');
        }
        if ( $('#qrt-4-2016').prop('checked') ) {
            $('#div-from-customer-ip').before('<div><label id="label-decl-ndfl-ip-4-2016" for="decl-ndfl-ip-4-2016"><input id="decl-ndfl-ip-4-2016" type="checkbox" name="decl-ndfl-ip-4-2016" checked>Налоговая декларация 3-НДФЛ за 2016 год</label></div>');
        }
        if ( $('#qrt-4-2015').prop('checked') ) {
            $('#div-from-customer-ip').before('<div><label id="label-decl-ndfl-ip-4-2015" for="decl-ndfl-ip-4-2015"><input id="decl-ndfl-ip-4-2015" type="checkbox" name="decl-ndfl-ip-4-2015" checked>Налоговая декларация 3-НДФЛ за 2015 год</label></div>');
        }
    }  
}

function insertNalogDecl () {
    if ( $('#simple-ip').prop('checked') && 
        ( $('#year-2017-ip-simple').prop('checked') || 
          $('#year-2016-ip-simple').prop('checked') || 
          $('#year-2015-ip-simple').prop('checked') ) )  
    {
        $('#div-from-customer-ip').before('<div id="will-prepare-email"><span>Мы Вам подготовим и отправим на e-mail:</span></div>');
        if ( $('#year-2017-ip-simple').prop('checked') ) {
            $('#div-from-customer-ip').before('<div class="nalog-decl"><label><input id="decl-year-2017-ip-simple" type="checkbox" name="decl-year-2017-ip-simple" checked>Налоговая декларация за 2017 год</label></div>');
        }
        if ( $('#year-2016-ip-simple').prop('checked') ) {
            $('#div-from-customer-ip').before('<div class="nalog-decl"><label><input id="decl-year-2016-ip-simple" type="checkbox" name="decl-year-2016-ip-simple" checked>Налоговая декларация за 2016 год</label></div>');
        }
        if ( $('#year-2015-ip-simple').prop('checked') ) {
            $('#div-from-customer-ip').before('<div class="nalog-decl"><label><input id="decl-year-2015-ip-simple" type="checkbox" name="decl-year-2015-ip-simple" checked>Налоговая декларация за 2015 год</label></div>');
        }
    }  
}

// function showHideBtnNextSimpleIp () {
//     if ( $('#year-2016-ip-simple').prop('checked')) {
//         $('#btn-next-tax-system-ip').show();
//     } 
//     if ( $('#year-2015-ip-simple').prop('checked')) {
//         $('#btn-next-tax-system-ip').show();
//     } 
//     if ( $('#year-2014-ip-simple').prop('checked')) {
//         $('#btn-next-tax-system-ip').show();
//     } 

//     if ( $('#year-2016-ip-simple').prop('checked') == false &&
//          $('#year-2015-ip-simple').prop('checked') == false &&
//          $('#year-2014-ip-simple').prop('checked') == false ) 
//     {
//         $('#btn-next-tax-system-ip').hide();
//     }
// }

function showHideBtnNextSimpleIp () {
    if ( $('#year-2017-ip-simple').prop('checked')) {
        $('#btn-next-tax-system-ip-0').show();
    } 
    if ( $('#year-2016-ip-simple').prop('checked')) {
        $('#btn-next-tax-system-ip-0').show();
    } 
    if ( $('#year-2015-ip-simple').prop('checked')) {
        $('#btn-next-tax-system-ip-0').show();
    } 

    if ( $('#year-2017-ip-simple').prop('checked') == false &&
         $('#year-2016-ip-simple').prop('checked') == false &&
         $('#year-2015-ip-simple').prop('checked') == false ) 
    {
        $('#btn-next-tax-system-ip-0').hide();
    }
}



