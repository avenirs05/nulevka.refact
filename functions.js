    // отладочная функция
    function showArrays () {
        console.log(szvCheckboxCheckedByUser);
        console.log(szvCheckboxWrapIfSentYes);
        console.log(checkedQuartersTaxSystem);
        console.log(checkedYearsTaxSystem);
    }

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
                if ( $(input).parent().parent().data('is-four') == 'yes' && 
                     $(input).prop('checked') ) 
                {        
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
    function szvWillSend () {
        var res = '<div class="szv-wrap-final">';
        var quartNum = null;
        var year = null;
        
        for (var i = 0; i < checkedQuartersTaxSystem.length; i++) {
                quartNum = checkedQuartersTaxSystem[i][0];
                year = checkedQuartersTaxSystem[i].match( /20\d\d/g )[0];

            res +=  '<div class="quarter-and-month-wrap">' + 
                        '<div class="quarter-name">' + 
                            checkedQuartersTaxSystem[i] + 
                        '</div>' + 
                        '<div class="month">' + 
                            '<label>' +
                                '<input type="checkbox" name="final-szv-' + whatMonth(quartNum)[0][1] + '-' + year + '"' + ' checked>' +
                                whatMonth(quartNum)[0][0] +
                            '</label>' +
                        '</div>' +                        
                        '<div class="month">' + 
                            '<label>' +
                                '<input type="checkbox" name="final-szv-' + whatMonth(quartNum)[1][1] + '-' + year + '"' + ' checked>' +
                                whatMonth(quartNum)[1][0] + 
                            '</label>' +
                        '</div>' +                        
                        '<div class="month">' + 
                            '<label>' +
                                '<input type="checkbox" name="final-szv-' + whatMonth(quartNum)[2][1] + '-' + year + '"' + ' checked>' +
                                whatMonth(quartNum)[2][0] + 
                            '</label>' +
                        '</div>' +                          
                    '</div>';                    
        }

        return res + '</div>';
    }

    
    // удаляет "n-й квартал из сзв итогового"
    function deleteQuarterNameSzv () {
        $('.quarter-and-month-wrap').each(function(indx, el) {
             $(el).children('.quarter-name').each(function(indx, el) {
                if ( $(el).siblings('.month:hidden').length === 3) {
                        $(el).remove();
                }
             });
        });
    }


    // Если ООО. 
    // Отображает отчеты в will-send в зависимости от параметров, данных пользователем.
    // Если сзв-экран не показывался, то сзв-отчета не будет.
    function showReportsWillSendCompany (szv) {
        var fakeId = null;         
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
                            $('#szv-m-wrap').append( szvWillSend() );
                    } else {
                        $('#szv-m-wrap').append( szvWillSend() );

                        $('#szv-m-wrap input:checkbox').each(function(indx, el) {
                            fakeId =  'szv-sent-' + $(el).attr('name').substring(10);
                            
                            if ( $.inArray(fakeId, szvCheckboxCheckedByUser) !== -1 ) {
                                   $(el).removeAttr('checked'); 
                                   $(el).parent().parent().hide();
                            } 
                        });

                        deleteQuarterNameSzv();                   
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


    // Отметить все дочерние чекбоксы, если отмечен родительский
    // В will-send (кварталы). Не входит сюда сзв
    function makeCheckedChildChecks () {
        var childInput = null;     

        if ( $(this).attr('id') == 'szv-m' ) {
            childInput = $('.month').children().children('input');

            if ( $(this).prop('checked') ) {
                    $(childInput).each(function(indx, el) {
                        $(el).prop('checked', true);
                    });
            }

            if ( $(this).prop('checked') === false ) {
                    $(childInput).each(function(indx, el) {
                        $(el).prop('checked', false);
                    });
            }  
        }

        var childInput = $(this).parent().siblings('.quarters-will-send').children().children('input');        

        if ( $(this).prop('checked') ) {
                $(childInput).each(function(indx, el) {
                    $(el).prop('checked', true);
                });
        }

        if ( $(this).prop('checked') === false ) {
                $(childInput).each(function(indx, el) {
                    $(el).prop('checked', false);
                });
        }    
    }


    // Ставит, убирает чекбоксы там где надо в will-send. Не содержит СЗВ
    function smartCheckUncheck () {
        $(document).on('change', '.quarters-will-send input', function() {
            var wrap = null;
            var inputSet = null;

            if ( $(this).prop('checked') ) {
                    $(this).parent().parent().siblings('label').children('input').prop('checked', true);
            }

            if ( $(this).prop('checked') == false) {
                    wrapId = $(this).parent().parent().parent().attr('id');     
                    inputSet = ' .quarters-will-send input';

                for (var i = 0; i < $('#' + wrapId + inputSet).length; i++) {
                        if ( $('#' + wrapId + inputSet).eq(i).prop('checked') ) {
                                    break;
                        }

                        if (i == $('#' + wrapId + inputSet).length - 1) {
                                $('#' + wrapId).children('label').children('input').prop('checked', false);
                        }                                                               
                }           
            }
        });
    }


    // Если только один квартал, то добавляется фраза "...сдадим за n-й квартал 20ХХ года"
    function addPhraseIfOneQuarter () {
        if (checkedQuartersTaxSystem.length == 1) {
            $('#span-we-will-send').text('Мы за Вас подготовим и сдадим за ' + checkedQuartersTaxSystem[0] + ':' );
            $('.quarters-will-send').hide();
            $('.quarter-name').hide();
            $('.month').hide();
        } else $('#span-we-will-send').text('Мы за Вас подготовим и сдадим:');
    }


    // если на экране сзв юзер отметил все галочки, то в will-send сзв не показывается
    function delSzvIfWillSendIfZero () {
        if ($('.month:visible').length === 0) {
                $('#szv-m-wrap').hide();
        }
    }



    // управляет массивом SzvCheckboxCheckedByUser
    // добавляет (удаляет) в массив szvCheckboxCheckedByUser
    // в зависмимости от раставленных галочек юзером на экране сзв
    function manageSzvCheckboxCheckedByUser () {
        var inputs = '.quart-months-wrap input';
        var inputId = $(this).attr('id');
        var input = $(this);
        var indexInput = szvCheckboxCheckedByUser.indexOf(inputId);

        if ( input.prop('checked') && 
                 $.inArray(inputId, szvCheckboxCheckedByUser) === -1 ) 
        {
                 szvCheckboxCheckedByUser.push(inputId);
        }       

        if ( input.prop('checked') === false ) {
                if ( $.inArray(inputId, szvCheckboxCheckedByUser) !== -1 ) {
                        delete szvCheckboxCheckedByUser[indexInput];
                }           
        }
    }


    function isFourQuarter (quarterNum) {
        switch(quarterNum) {
            case 1:
                return false;
            break;

            case 2:
                return false;
            break;

            case 3:
                return false;
            break;

            case 4:
                return true;
            break;
        }
    }


    function calculateFinalSumCompany () {
        showArrays ();
        var finalSum = 0;
        var base = 1499;  
        var isFourQuart;       

        for (var i = 0; i < checkedQuartersTaxSystem.length; i++) {
                if ( $('#trans-no').prop('checked') && $('#one-face-yes').prop('checked') ) {
                        finalSum = finalSum + base;
                } 

                if ( $('#trans-yes').prop('checked') && $('#one-face-yes').prop('checked') ||
                     $('#trans-no').prop('checked') && $('#one-face-no').prop('checked') )
                {
                        finalSum = finalSum + base + 500;
                } 

                if ( $('#trans-yes').prop('checked') && $('#one-face-no').prop('checked') ) {
                        finalSum = finalSum + base + 1000;
                } 
                
                if ( isFourQuarter( parseInt(checkedQuartersTaxSystem[i][0]) ) ) {
                        finalSum = finalSum + 1000;
                }
        }
        
        return finalSum;
    }

    /* End Company - Разное */
    // -------------------------------------------------------------------------------------


