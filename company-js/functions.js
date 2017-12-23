var szvState = [];

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

function szvSent () {
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
        			   <label>	 
    						   <input id="szv-sent-${year}" type="checkbox" name="szv-sent-${year}">` + monthsAndQuartals.firstQuart.jan + '<br>' +
    						   `<input id="szv-sent-${year}" type="checkbox" name="szv-sent-${year}">` + monthsAndQuartals.firstQuart.feb + '<br>' +
    						   `<input id="szv-sent-${year}" type="checkbox" name="szv-sent-${year}">` + monthsAndQuartals.firstQuart.mar + '<br>' +
        			   `</label>	    					
    			     </div>`;
    			  szvState.push(res);
    		}

    		if (quartNum == 2) {
    		    res = 
    		    	`<div class="quart-months-wrap">
        			   <p>${quartText}</p>
        			   <label>	 
    						   <input id="szv-sent-${year}" type="checkbox" name="szv-sent-${year}">` + monthsAndQuartals.secQuart.apr + '<br>' +
    						   `<input id="szv-sent-${year}" type="checkbox" name="szv-sent-${year}">` + monthsAndQuartals.secQuart.may + '<br>' +
    						   `<input id="szv-sent-${year}" type="checkbox" name="szv-sent-${year}">` + monthsAndQuartals.secQuart.jun + '<br>' +
        			   `</label>	    					
    			     </div>`;
    			     szvState.push(res);
    		}

    		if (quartNum == 3) {
    		    res = 
    		    	`<div class="quart-months-wrap">
        			   <p>${quartText}</p>
        			   <label>	 
    						   <input id="szv-sent-${year}" type="checkbox" name="szv-sent-${year}">` + monthsAndQuartals.thirdQuart.jul + '<br>' +
    						   `<input id="szv-sent-${year}" type="checkbox" name="szv-sent-${year}">` + monthsAndQuartals.thirdQuart.aug + '<br>' +
    						   `<input id="szv-sent-${year}" type="checkbox" name="szv-sent-${year}">` + monthsAndQuartals.thirdQuart.sep + '<br>' +
        			   `</label>	    					
    			     </div>`;
    			     szvState.push(res);
    		}

    		if (quartNum == 4) {
    		    res = 
    		    	`<div class="quart-months-wrap">
        			   <p>${quartText}</p>
        			   <label>	 
    						   <input id="szv-sent-${year}" type="checkbox" name="szv-sent-${year}">` + monthsAndQuartals.fourthQuart.oct + '<br>' +
    						   `<input id="szv-sent-${year}" type="checkbox" name="szv-sent-${year}">` + monthsAndQuartals.fourthQuart.nov + '<br>' +
    						   `<input id="szv-sent-${year}" type="checkbox" name="szv-sent-${year}">` + monthsAndQuartals.fourthQuart.dec + '<br>' +
        			   `</label>	    					
    			     </div>`;
    			  szvState.push(res);
    		}

    });
}

function showAllItemsOfSzvState () {
		var res = '';

		for (var i = 0; i < szvState.length; i++) {
			res += szvState[i];
		}

		// console.log(res);
		return res;
}

