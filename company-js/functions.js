	// Выбранные периоды пользователем, если сдавался сзв
	var szvCheckboxCheckedByUser = [];


	// Выбранные кварталы из tax-system, в html
	// Попадает сюда из функции fillSzvCheckboxWrapIfSentYes 
	var szvCheckboxWrapIfSentYes = [];


	// Месяцы и кварталы вообще
	var monthsAndQuartals = {
			firstQuart: { 
					jan: 'Январь', 
					feb: 'Февраль', 
					mar: 'Март' 
			},
			secQuart: { 
					apr: 'Апрель', 
					may: 'Май', 
					jun: 'Июнь' 
			},
			thirdQuart: { 
					jul: 'Июль', 
					aug: 'Август', 
					sep: 'Сентябрь' 
			},
			fourthQuart: { 
					oct: 'Октябрь', 
					nov: 'Ноябрь', 
					dec: 'Декабрь' 
			}
	}


	// формирует массив szvCheckboxWrapIfSentYes, в котором каждый его элемент - это html-wrapper 
	// квартала, выбранного в tax-system
	// в зависимости от номера квартала, подставляет те или иные месяцы
	function fillSzvCheckboxWrapIfSentYes () {
			var res = null;
	    $(".div-quarters input:checkbox").each(function(index, el) {
			    if ( $(this).prop('checked') ) {
			    			var quartText = $(this).parent().text();
			    			var quartNum = $(this).attr('id')[4];
			    			var year = quartText.match( /20\d\d/g );
			    			year = year[0];
			    }

	    		if (quartNum == 1) {
	    		    res = 
	    		    	`<div class="quart-months-wrap">
	        			   <p>${quartText}</p>
	        			   <label><input id="szv-sent-jan-${year}" type="checkbox" name="szv-sent-jan-${year}">` + monthsAndQuartals.firstQuart.jan + '</label><br>' +	    						
	    						`<label><input id="szv-sent-feb-${year}" type="checkbox" name="szv-sent-feb-${year}">` + monthsAndQuartals.firstQuart.feb + '</label><br>' +
	    						`<label><input id="szv-sent-mar-${year}" type="checkbox" name="szv-sent-mar-${year}">` + monthsAndQuartals.firstQuart.mar + '</label><br>' +
	        			`</div>`;
	    			  szvCheckboxWrapIfSentYes.push(res);
	    		}

	    		if (quartNum == 2) {
	    		    res = 
	    		    	`<div class="quart-months-wrap">
	        			   <p>${quartText}</p>
	        			   <label><input id="szv-sent-apr-${year}" type="checkbox" name="szv-sent-apr-${year}">` + monthsAndQuartals.secQuart.apr + '</label><br>' +
	    						`<label><input id="szv-sent-may-${year}" type="checkbox" name="szv-sent-may-${year}">` + monthsAndQuartals.secQuart.may + '</label><br>' +
	    						`<label><input id="szv-sent-jun-${year}" type="checkbox" name="szv-sent-jun-${year}">` + monthsAndQuartals.secQuart.jun + '</label><br>' +
	        			`</div>`;
	    			  szvCheckboxWrapIfSentYes.push(res);
	    		}

	    		if (quartNum == 3) {
	    		    res = 
	    		    	`<div class="quart-months-wrap">
	        			   <p>${quartText}</p>
	        			   <label><input id="szv-sent-jul-${year}" type="checkbox" name="szv-sent-jul-${year}">` + monthsAndQuartals.thirdQuart.jul + '</label><br>' +
	    						`<label><input id="szv-sent-aug-${year}" type="checkbox" name="szv-sent-aug-${year}">` + monthsAndQuartals.thirdQuart.aug + '</label><br>' +
	    						`<label><input id="szv-sent-sep-${year}" type="checkbox" name="szv-sent-sep-${year}">` + monthsAndQuartals.thirdQuart.sep + '</label><br>' +
	        			`</div>`;
	    			  szvCheckboxWrapIfSentYes.push(res);
	    		}

	    		if (quartNum == 4) {
	    		    res = 
	    		    	`<div class="quart-months-wrap">
	        			   <p>${quartText}</p>
	        			   <label><input id="szv-sent-oct-${year}" type="checkbox" name="szv-sent-oct-${year}">` + monthsAndQuartals.fourthQuart.oct + '</label><br>' +
	    						`<label><input id="szv-sent-nov-${year}" type="checkbox" name="szv-sent-nov-${year}">` + monthsAndQuartals.fourthQuart.nov + '</label><br>' +
	    						`<label><input id="szv-sent-dec-${year}" type="checkbox" name="szv-sent-dec-${year}">` + monthsAndQuartals.fourthQuart.dec + '</label><br>' +
	        			`</div>`;
	    			  szvCheckboxWrapIfSentYes.push(res);
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

