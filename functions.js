    // Выбранные периоды пользователем, если сдавался сзв
    var szvCheckboxCheckedByUser = [];


    // Выбранные кварталы из tax-system, в html. 
    // Добавляюься месяцы, в зависмимости от номера квартала
    // Попадает сюда из функции fillSzvCheckboxWrapIfSentYes 
    var szvCheckboxWrapIfSentYes = [];


    // Отмеченные кварталы из tax-system
    var checkedQuartersTaxSystem = [];


    // Отмеченные годы
    var checkedYearsTaxSystem = [];


    // Месяцы и кварталы вообще
    var quarters = {
        first: { 
                jan: 'Январь', 
                feb: 'Февраль', 
                mar: 'Март' 
        },
        second: { 
                apr: 'Апрель', 
                may: 'Май', 
                jun: 'Июнь' 
        },
        third: { 
                jul: 'Июль', 
                aug: 'Август', 
                sep: 'Сентябрь' 
        },
        fourth: { 
                oct: 'Октябрь', 
                nov: 'Ноябрь', 
                dec: 'Декабрь' 
        }
    }

    // -------------------------------------------------------------------------------------
    /* Company - Tax-system*/

    // Делает кнопку неактивной
    function disableElement (elementId, className) {
        $(elementId).attr('disabled', 'disabled');
        $(elementId).addClass(className);
    }


    // Делает кнопку активной
    function enableElement (elementId, className) {
        $(elementId).removeAttr('disabled');
        $(elementId).removeClass(className);
    }


    // Отмечен ли хотя бы 1 чекбокс из числа чекбоксов 4-го квартала
    function noCheckedFourQuart () {
        var cntChecked = 0;

        $('#choice-quarters input:checkbox').each(function(index, input) {  
                if ( $(input).parent().parent().data('is-four') == 'yes' && $(input).prop('checked') ) {        
                            cntChecked++;   
                            return false; 
                }                         
        }); 

        if (cntChecked === 0) {
             return true;
        }
    }


    // Отмечен ли хотя бы 1 чекбокс из чекбоксов-кварталов
    function noCheckedQuart (checkbox) {
        var cntChecked = 0;

        $(checkbox).each(function(index, checkbox) {            
                if ( $(checkbox).prop('checked') ) { 
                        cntChecked++;
                        return false; 
                }
        });

        if (cntChecked === 0) {
                return true; 
        }
    }
    /* End Company - Tax-system*/
    //-----------------------------------------------------------------------------------------


   
    // ----------------------------------------------------------------------------------------
    /* Company - Разное */


    // Формирует массив szvCheckboxWrapIfSentYes, в котором каждый его элемент - это html-wrapper 
    // квартала, выбранного в tax-system
    // В зависимости от номера квартала, подставляет те или иные месяцы
    function fillSzvCheckboxWrapIfSentYes () {
        var res = null;
        $(".div-quarters input:checkbox").each(function(index, el) {
            if ( $(this).prop('checked') ) {
                    var quartText = $(this).parent().text();
                    var quartNum = $(this).attr('id')[4];
                    var year = quartText.match( /20\d\d/g );
                    year = year[0];
                    var divQuartMonths = '<div class="quart-months-wrap">';
                    var divCloseQuartMonths = '</div>';
                    var labelInput = '<label><input id="szv-sent-';
                    var checkboxAndName = ' type="checkbox" name="szv-sent-';
            }
            
            switch (quartNum) {                     
                case '1':
                res = 
                    divQuartMonths + 
                        '<p>' + quartText + '</p>' + 
                        labelInput + 'jan-' + year + '"' + checkboxAndName + 'jan-' + year + '">' + quarters.first.jan + '</label><br>' +                               
                        labelInput + 'feb-' + year + '"' + checkboxAndName + 'feb-' + year + '">' + quarters.first.feb + '</label><br>' +
                        labelInput + 'mar-' + year + '"' + checkboxAndName + 'mar-' + year + '">' + quarters.first.mar + '</label><br>' +
                    divCloseQuartMonths;
                szvCheckboxWrapIfSentYes.push(res);
                break;              

                case '2':
                res = 
                    divQuartMonths + 
                        '<p>' + quartText + '</p>' +
                        labelInput + 'apr-' + year + '"' + checkboxAndName + 'apr-' + year + '">' + quarters.second.apr + '</label><br>' +
                        labelInput + 'may-' + year + '"' + checkboxAndName + 'may-' + year + '">' + quarters.second.may + '</label><br>' +
                        labelInput + 'jun-' + year + '"' + checkboxAndName + 'jun-' + year + '">' + quarters.second.jun + '</label><br>' +
                    divCloseQuartMonths;
                szvCheckboxWrapIfSentYes.push(res);
                break;                

                case '3':
                res = 
                    divQuartMonths + 
                        '<p>' + quartText + '</p>' +
                        labelInput + 'jul-' + year + '"' + checkboxAndName + 'jul-' + year + '">' + quarters.third.jul + '</label><br>' +
                        labelInput + 'aug-' + year + '"' + checkboxAndName + 'aug-' + year + '">' + quarters.third.aug + '</label><br>' +
                        labelInput + 'sep-' + year + '"' + checkboxAndName + 'sep-' + year + '">' + quarters.third.sep + '</label><br>' +
                    divCloseQuartMonths;
                szvCheckboxWrapIfSentYes.push(res);
                break;                

                case '4':
                res = 
                    divQuartMonths + 
                        '<p>' + quartText + '</p>' +
                        labelInput + 'oct-' + year + '"' + checkboxAndName + 'oct-' + year + '">' + quarters.fourth.oct + '</label><br>' +
                        labelInput + 'nov-' + year + '"' + checkboxAndName + 'nov-' + year + '">' + quarters.fourth.nov + '</label><br>' +
                        labelInput + 'dec-' + year + '"' + checkboxAndName + 'dec-' + year + '">' + quarters.fourth.dec + '</label><br>' +
                    divCloseQuartMonths;
                szvCheckboxWrapIfSentYes.push(res);
                break;                
            }
        });
    }


    // Преобразует массив выбранных кварталов из tax-system в html и возвращает его
    function showAllItemsOfSzvCheckboxWrapIfSentYes () {
        var res = '';

        for (var i = 0; i < szvCheckboxWrapIfSentYes.length; i++) {
                res += szvCheckboxWrapIfSentYes[i];
        }

        return res;
    }


    // Если сзв-да и юзер отметил периоды, отметит эти периоды
    // При btn-back из сзв, обертка периодов уничтожается, но id-шники
    // инпутов сохраняются в массиве szvCheckboxCheckedByUser
    function makeCheckedSzvIfBtnBack () {
        $('.quart-months-wrap input').each(function() {
            var inputId = $(this).attr('id');
                                        
            if ( $.inArray(inputId, szvCheckboxCheckedByUser) !== -1 ) {
                        $(this).prop('checked', true);
            } 
        }); 
    }


    // берет кварталы отмеченные из tax-system и отображает их в will-send
    // wrap - с # указывать
    // partOfInputName - без # указывать!
    function quartersWillSend (wrap, partOfInputName) {
        var year = null;
        var textOfElem = null;
        var quarter = null;        
        $(wrap).show();

        $('#choice-quarters input:checkbox').each(function(indx, el) {
            if ( $(el).prop('checked') ) {
                  textOfElem = $(el).parent('label').text().trim();  

                  if ( $.inArray(textOfElem, checkedQuartersTaxSystem) === -1 ) {
                        checkedQuartersTaxSystem.push(textOfElem);
                  }                  
            }
        });

        for (var i = 0; i < checkedQuartersTaxSystem.length; i++) {
              year = checkedQuartersTaxSystem[i].match( /20\d\d/g )[0];
              quarter = checkedQuartersTaxSystem[i][0];

              $(wrap).append(
                '<div class="quarters-will-send">' + 
                    '<label>' + 
                        '<input type="checkbox" name="' + partOfInputName + '-' + quarter + '-' + year + '"' + ' checked>' + '&nbsp;' +
                         checkedQuartersTaxSystem[i] +                                     
                    '</label>' +
                '</div>'
              );
        }
    }


    // берет годы отмеченные из tax-system и отображает их в will-send
    // wrap - с # указывать
    // partOfInputName - без # указывать!
    function yearsWillSend (wrap, partOfInputName, textOfReport, simpleIp) {
        var year = null;
        var textOfElem = null;
        var quarter = null;  
        var whatToLoop = '#choice-quarters input:checkbox';
        $(wrap).show();     

        if (simpleIp) {
            whatToLoop = '#years-wrap input:checkbox';
        }

        $(whatToLoop).each(function(indx, el) {
            if ( $(el).prop('checked') && $(el).parent().parent().data('is-four') == 'yes' ) {
                  textOfElem = $(el).parent('label').text().trim();  
                  year = textOfElem.match( /20\d\d/g )[0];

                  if ( $.inArray(year, checkedYearsTaxSystem) === -1 ) {                    
                        checkedYearsTaxSystem.push(year);                     
                  }                  
            }

            if ( $(el).prop('checked') && simpleIp ) {
                  textOfElem = $(el).parent('label').text().trim();  
                  year = textOfElem.match( /20\d\d/g )[0];

                  if ( $.inArray(year, checkedYearsTaxSystem) === -1 ) {                    
                        checkedYearsTaxSystem.push(year);                     
                  }  
            }
        });


        for (var i = 0; i < checkedYearsTaxSystem.length; i++) {
              year = checkedYearsTaxSystem[i];

              $(wrap).append(
                '<div class="years-will-send">' + 
                    '<label>' + 
                        '<input type="checkbox" name="' + partOfInputName + '-' + year + '"' + ' checked>' + '&nbsp;' + 
                         '<strong>' +
                            textOfReport + year + ' год' +
                         '</strong>' +                                                            
                    '</label>' +
                '</div>'
              );
        }
    }


    // Возвращает месяц на русском и английском
    function whatMonth (quartNum) {
        var res = {}

        switch (quartNum) {                     
            case '1':
            res = [ ['Январь', 'jan'], ['Февраль', 'feb'], ['Март', 'mar'] ];
            break;

            case '2':
            res = [ ['Апрель', 'apr'], ['Май', 'may'], ['Июнь', 'jun'] ];
            break;

            case '3':
            res = [ ['Июль', 'jul'], ['Август', 'aug'], ['Сентябрь', 'sep'] ];
            break;

            case '4':
            res = [ ['Октябрь', 'oct'], ['Ноябрь', 'nov'], ['Декабрь', 'dec'] ];
            break;
        }

        return res;
    }


    // Если блок сзв появился, но пользователь выбрал, что сзв он не сдавал
    function szvWillSendIfNo () {
        var res = '<div class="szv-wrap-if-no-final">';
        var quartNum = null;
        var year = null;
        
        for (var i = 0; i < checkedQuartersTaxSystem.length; i++) {
                quartNum = checkedQuartersTaxSystem[i][0];
                year = checkedQuartersTaxSystem[i].match( /20\d\d/g )[0];

            res +=  '<div class="szv-wrap-if-no-final">' + 
                        '<div class="quarter-name">' + checkedQuartersTaxSystem[i] + '</div>' +
                        '<div class="month">' +
                            '<div>' + 
                                '<label>' +
                                    '<input type="checkbox" name="final-szv-' + whatMonth(quartNum)[0][1] + '-' + year + '"' + ' checked>' +
                                    whatMonth(quartNum)[0][0] +
                                '</label>' +
                            '</div>' +
                            '<div>' + 
                                '<label>' +
                                    '<input type="checkbox" name="final-szv-' + whatMonth(quartNum)[1][1] + '-' + year + '"' + ' checked>' +
                                    whatMonth(quartNum)[1][0] + 
                                '</label>' +
                            '</div>' +
                            '<div>' + 
                                '<label>' +
                                    '<input type="checkbox" name="final-szv-' + whatMonth(quartNum)[2][1] + '-' + year + '"' + ' checked>' +
                                    whatMonth(quartNum)[2][0] + 
                                '</label>'
                            '</div>' +                            
                        '</div>' +
                    '</div>';                
        }

        return res + '</div>';
    }


    // Если ООО. 
    // Отображает отчеты в will-send в зависимости от параметров, данных пользователем.
    // Если сзв-экран не показывался, то сзв-отчета не будет.
    function showReportsWillSendCompany (szv) {         
        $('#will-send-section').show(); 

        if ( $('#general').prop('checked') ) {
                if ( $('#trans-yes').prop('checked') ) {
                        quartersWillSend('#decl-nds-wrap', 'decl-nds-final');
                        quartersWillSend('#decl-profit-wrap', 'decl-profit-final');
                } else {
                    quartersWillSend('#decl-one-wrap', 'decl-one-final');
                }

                quartersWillSend('#count-ins-wrap', 'count-ins-final');
                quartersWillSend('#count-fss-wrap', 'count-fss-final');

                if (szv) {                    
                    $('#szv-m-wrap').show();
                    
                    if ( $('#szv-quest-no').prop('checked') ) {
                        $('#szv-m-wrap').append( szvWillSendIfNo() );
                    }                    
                }                 

                if ( !(noCheckedFourQuart() ) ) {
                       yearsWillSend('#buh-rep-ifns-wrap', 'buh-rep-ifns-final', 'Бухгалтерская (финансовая) отчетность в ИФНС за ');
                       yearsWillSend('#buh-rep-stat-wrap', 'buh-rep-stat-final', 'Бухгалтерская (финансовая) отчетность в Росстат за ');
                       yearsWillSend('#workers-cnt-wrap', 'workers-cnt-final', 'Сведения о среднесписочной численности работников за ');  
                }                
        }

        if ( $('#simple').prop('checked') ) {
                if ( !(noCheckedFourQuart() ) ) {
                       yearsWillSend ('#decl-usn-wrap', 'decl-usn', 'Налоговая декларация по УСН за ');
                }   
                
                quartersWillSend('#count-ins-wrap', 'count-ins-final');
                quartersWillSend('#count-fss-wrap', 'count-fss-final');  
                
                if (szv === true) {
                     quartersWillSend('#szv-m-wrap', 'szv-final');
                } 
                
                if ( !(noCheckedFourQuart() ) ) {
                       yearsWillSend('#buh-rep-ifns-wrap', 'buh-rep-ifns-final', 'Бухгалтерская (финансовая) отчетность в ИФНС за ');
                       yearsWillSend('#buh-rep-stat-wrap', 'buh-rep-stat-final', 'Бухгалтерская (финансовая) отчетность в Росстат за ');
                       yearsWillSend('#workers-cnt-wrap', 'workers-cnt-final', 'Сведения о среднесписочной численности работников за ');                     
                }   
        }
    }


    // Отображает отчеты в will-send в зависимости от параметров, данных пользователем
    // Если сзв-экран не показывался, то сзв-отчета не будет.
    function showReportsWillSendIp () {
        $('#will-send-section').show(); 
        
        if ( $('#simple').prop('checked') ) { 
                yearsWillSend('#decl-usn-wrap', 'decl-usn-final', 'Налоговая декларация по УСН за ', true);
        }

        if ( $('#general').prop('checked') ) { 
              if ( $('#trans-yes').prop('checked') ) {
                      quartersWillSend('#decl-nds-wrap', 'decl-nds-final');
              } else {                
                  quartersWillSend('#decl-one-wrap', 'decl-one-final');
              }

              if ( !(noCheckedFourQuart() ) ) {
                     yearsWillSend('#decl-ndfl-wrap', 'decl-ndfl-final', 'Налоговая декларация 3-НДФЛ за ');
              }
        }

    }

    /* End Company - Разное */
    // -------------------------------------------------------------------------------------


