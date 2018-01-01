	// Выбранные периоды пользователем, если сдавался сзв
	var szvCheckboxCheckedByUser = [];


	// Выбранные кварталы из tax-system, в html
	// Попадает сюда из функции fillSzvCheckboxWrapIfSentYes 
	var szvCheckboxWrapIfSentYes = [];


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
		    			var quartMonthsWrapHtml = '<div class="quart-months-wrap">';
		    			var endQuartMonthsWrapHtml = '</div>';
		    			var labelInput = '<label><input id="szv-sent-';
		    			var checkboxAndName = ' type="checkbox" name="szv-sent-';
		    }
		    
		    switch (quartNum) {	    				
  				case '1':
    		    res = 
    		    	quartMonthsWrapHtml + 
    		    		'<p>' + quartText + '</p>' + 
    		    		labelInput + 'jan-' + year + '"' + checkboxAndName + 'jan-' + year + '">' + quarters.first.jan + '</label><br>' +	    						
    						labelInput + 'feb-' + year + '"' + checkboxAndName + 'feb-' + year + '">' + quarters.first.feb + '</label><br>' +
    						labelInput + 'mar-' + year + '"' + checkboxAndName + 'mar-' + year + '">' + quarters.first.mar + '</label><br>' +
        			endQuartMonthsWrapHtml;
    			  szvCheckboxWrapIfSentYes.push(res);
    				break;	    		

  				case '2':
    		    res = 
    		    	quartMonthsWrapHtml + 
    		    		'<p>' + quartText + '</p>' +
        			  labelInput + 'apr-' + year + '"' + checkboxAndName + 'apr-' + year + '">' + quarters.second.apr + '</label><br>' +
    						labelInput + 'may-' + year + '"' + checkboxAndName + 'may-' + year + '">' + quarters.second.may + '</label><br>' +
    						labelInput + 'jun-' + year + '"' + checkboxAndName + 'jun-' + year + '">' + quarters.second.jun + '</label><br>' +
        			endQuartMonthsWrapHtml;
    			  szvCheckboxWrapIfSentYes.push(res);
    			  break;	    		

  				case '3':
    		    res = 
    		    	quartMonthsWrapHtml + 
    		    		'<p>' + quartText + '</p>' +
        			  labelInput + 'jul-' + year + '"' + checkboxAndName + 'jul-' + year + '">' + quarters.third.jul + '</label><br>' +
    						labelInput + 'aug-' + year + '"' + checkboxAndName + 'aug-' + year + '">' + quarters.third.aug + '</label><br>' +
    						labelInput + 'sep-' + year + '"' + checkboxAndName + 'sep-' + year + '">' + quarters.third.sep + '</label><br>' +
        			endQuartMonthsWrapHtml;
    			  szvCheckboxWrapIfSentYes.push(res);
    			  break;	    		

 					case '4':
    		    res = 
    		    	quartMonthsWrapHtml + 
    		    		'<p>' + quartText + '</p>' +
    		    		labelInput + 'oct-' + year + '"' + checkboxAndName + 'oct-' + year + '">' + quarters.fourth.oct + '</label><br>' +
    						labelInput + 'nov-' + year + '"' + checkboxAndName + 'nov-' + year + '">' + quarters.fourth.nov + '</label><br>' +
    						labelInput + 'dec-' + year + '"' + checkboxAndName + 'dec-' + year + '">' + quarters.fourth.dec + '</label><br>' +
        			endQuartMonthsWrapHtml;
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



