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


	function szvSent (quartText, quartNum, year) {
			var res = null;

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
			}

			return res;
	}

