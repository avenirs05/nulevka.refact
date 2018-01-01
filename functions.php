    <?php

    /**
     * Debug
     */
    function d ($data) {
        echo "<pre>";
        print_r($data);
        echo "</pre>";
    }

    /**
     * Выводит список систем налогообложения
     * @param array $taxSystem - массив систем налогообложения. 
     * array $taxSystem: key - id элемента, value - название системы налогообложения
     * @param string $attrName - атрибут name
     * @return string html - список input(ов)
     */
    function taxSystemList ($taxSystem, $attrName) {
        $html = null;
        
        foreach ($taxSystem as $key => $value) {
            $html .= "<label for='{$key}'>
                        <input id='{$key}' type='radio' name='{$attrName}' value='{$key}'>
                        {$value}
                      </label><br>";        
        }
        
        return $html;
    } 


    /**
     * Выводит первый период в списке периодов
     * @param array $firstQuarterAttr - массив атрибутов
     * @return string html - первый квартал
     */
    function firstQuarter ($firstQuarterAttr) {
        extract($firstQuarterAttr);    
        $inputId = 'qrt-' . mb_substr($labelText, 0, 1) . '-' . mb_substr($labelText, 12, 4);
        $quarterAndText = substr($inputId, 4);

        $html = "<div data-is-four='{$isFour}' class='{$wrapClass}'>
                    <label id='first-quarter-label' for='{$inputId}'>
                        <input id='{$inputId}' type='checkbox' name='{$inputId}' {$checked}>
                        {$labelText}
                    </label>
                 </div>";  
        
        if ($isFour =='yes') {
            $html .= 
                "<p class='uk-wrap'><b>Как внесен уставный капитал?</b><br>
                    <label>
                        <input type='radio' name='deposit-uk-{$quarterAndText}' value='money-uk-{$quarterAndText}'>
                        Деньгами
                    </label><br>
                    <label>
                        <input type='radio' name='deposit-uk-{$quarterAndText}' value='things-uk-{$quarterAndText}'>
                        Имуществом
                    </label><br>
                </p>"; 
        }   

        return $html;
    }


    /**
     * Если 4-й квартал есть или нет, атрибут data-is-for 'yes' или 'no'  
     * @param array $quarterText - текст чекбокса (например, "2-й квартал 2015 года")
     * @return string 'yes' or 'no' 
     */
    function isFour ($quarterText) {
        if ($quarterText[0] === '4') {
            return 'yes';
        } else return 'no';
    }


    /**
     * 
     * @param array $anotherQuartersAttr - массив атрибутов
     * @return array id of inputs 
     */
    function getInputIds ($anotherQuartersAttr) {
        $inputIds = null;
        $labelTextsArr = $anotherQuartersAttr['labelTexts'];
       
        foreach ($labelTextsArr as $value) {
            $inputIds[] = 'qrt-' . mb_substr($value, 0, 1) . '-' . mb_substr($value, 12, 4);
        }

        return $inputIds; 
    }


    /**
     * Выводит иные периоды в списке периодов
     * @param array $anotherQuartersAttr - массив атрибутов
     * @return string html 
     */
    function anotherQuarters ($anotherQuartersAttr) {
        extract($anotherQuartersAttr);   
        $html = null; 
        $i = 0;
        $inputIds = getInputIds($anotherQuartersAttr);
        
        foreach ($inputIds as $value) {
            $isFour = isFour($labelTexts[$i]);
            $quarterAndText = substr($inputIds[$i], 4);
            
            $html .= 
                "<div data-is-four='{$isFour}' class='{$wrapClass}'>
                    <label for='{$inputIds[$i]}'>
                        <input id='{$inputIds[$i]}' type='checkbox' name='{$inputIds[$i]}'>
                        {$labelTexts[$i]}
                    </label>
                </div>";
            
            if ($isFour =='yes') {
                $html .= 
                    "<p class='uk-wrap' style='display: none;'><b>Как внесен уставный капитал?</b><br>
                        <label>
                            <input type='radio' name='deposit-uk-{$quarterAndText}' value='money-uk-{$quarterAndText}'>
                            Деньгами
                        </label><br>
                        <label>
                            <input type='radio' name='deposit-uk-{$quarterAndText}' value='things-uk-{$quarterAndText}'>
                            Имуществом
                        </label><br>
                    </p>";  
            }

            $i++;     
        }  

        return $html;
    }


    /**
     * 
     * @param array $anotherQuartersAttr - массив атрибутов
     * @return array id of inputs 
     */
    function getInputIdsIp ($years) {
        $inputIds = null;
        $labelTextsArr = $years['labelTexts'];
       
        foreach ($labelTextsArr as $value) {
            $inputIds[] = 'qrt-' . mb_substr($value, 0, 4) . '-' . 'ip-simple';
        }

        return $inputIds; 
    }


    /**
     * Выводит иные периоды в списке периодов (годы), если ИП - упрощенка
     * @param array $anotherQuartersAttr - массив атрибутов
     * @return string html 
     */
    function yearsIpSimple ($years) {
        extract($years);   
        $html = null; 
        $i = 0;
        $inputIds = getInputIdsIp($years);
        
        foreach ($inputIds as $value) {
            $isFour = isFour($labelTexts[$i]);
            $quarterAndText = substr($inputIds[$i], 4);
            
            $html .= 
                "<div class='{$wrapClass}'>
                    <label for='{$inputIds[$i]}'>
                        <input id='{$inputIds[$i]}' type='checkbox' name='{$inputIds[$i]}'>
                        {$labelTexts[$i]}
                    </label>
                </div>";
            
            $i++;     
        }  

        return $html;
    }


    


    function isGeneralOrSimpleTaxSystemCompany () {
        if ($_POST['tax-system'] == 'general') {
            return '<b>Система налогообложения:</b> общая<br><br>';
        } 
        if ($_POST['tax-system'] == 'simple') {
            return '<b>Система налогообложения:</b> упрощенная<br><br>';
        } 
    }

    function isGeneralOrSimpleTaxSystemIp () {
        if ($_POST['tax-system'] == 'general-ip') {
            return '<b>Система налогообложения:</b> общая<br><br>';
        } 
        if ($_POST['tax-system'] == 'simple-ip') {
            return '<b>Система налогообложения:</b> упрощенная<br><br>';
        } 
    }

    function findQuart () {
        if (isset($_POST['submit-go-to-pay-ip']) && ($_POST['tax-system'] == 'simple-ip')) {
            return null;
        }
        $str = '<b>Периоды:</b><br>';
        if (isset($_POST['qrt-4-2017'])) { $str = $str . '4-й квартал 2017 года' . '<br>'; }
        if (isset($_POST['qrt-3-2017'])) { $str = $str . '3-й квартал 2017 года' . '<br>'; }
        if (isset($_POST['qrt-2-2017'])) { $str = $str . '2-й квартал 2017 года' . '<br>'; }
        if (isset($_POST['qrt-1-2017'])) { $str = $str . '1-й квартал 2017 года' . '<br>'; }
        if (isset($_POST['qrt-4-2016'])) { $str = $str . '4-й квартал 2016 года' . '<br>'; }
        if (isset($_POST['qrt-3-2016'])) { $str = $str . '3-й квартал 2016 года' . '<br>'; }
        if (isset($_POST['qrt-2-2016'])) { $str = $str . '2-й квартал 2016 года' . '<br>'; }
        if (isset($_POST['qrt-1-2016'])) { $str = $str . '1-й квартал 2016 года' . '<br>'; }
        if (isset($_POST['qrt-4-2015'])) { $str = $str . '4-й квартал 2015 года' . '<br>'; } 
        if (isset($_POST['qrt-3-2015'])) { $str = $str . '3-й квартал 2015 года' . '<br>'; }
        if (isset($_POST['qrt-2-2015'])) { $str = $str . '2-й квартал 2015 года' . '<br>'; }
        if (isset($_POST['qrt-1-2015'])) { $str = $str . '1-й квартал 2015 года' . '<br>'; } 
        if (isset($_POST['qrt-4-2014'])) { $str = $str . '4-й квартал 2014 года' . '<br>'; }
        
        return $str . '<br>';   
    }

    function findYearIfSimpleIP () {
        if ($_POST['tax-system'] == 'general-ip') {
            return null;
        }
        $str = '<b>Периоды:</b><br>';
        if (isset($_POST['year-2017-ip-simple'])) { $str = $str . '2017 год' . '<br>'; }
        if (isset($_POST['year-2016-ip-simple'])) { $str = $str . '2016 год' . '<br>'; }
        if (isset($_POST['year-2015-ip-simple'])) { $str = $str . '2015 год' . '<br>'; }
        
        return $str . '<br>';   
    }

    function findUK () {
        $str = '';
        if (isset($_POST['deposit-uk-4-2017'])) {
            if ($_POST['deposit-uk-4-2017'] == 'money-0') {
                $str .= 'УК: Деньги-4-2017<br>';
            } else $str .= 'УК: Имущество-4-2017<br>';
        }
        if (isset($_POST['deposit-uk-4-2016'])) {
            if ($_POST['deposit-uk-4-2016'] == 'money-1') {
                $str .= 'УК: Деньги-4-2016<br>';
            } else $str .= 'УК: Имущество-4-2016<br>';
        }
        if (isset($_POST['deposit-uk-4-2015'])) {
            if ($_POST['deposit-uk-4-2015'] == 'money-2') {
                $str .= 'УК: Деньги-4-2015<br>';
            } else $str .= 'УК: Имущество-4-2015<br>';
        }
        if (isset($_POST['deposit-uk-4-2014'])) {
            if ($_POST['deposit-uk-4-2014'] == 'money-3') {
                $str .= 'УК: Деньги-4-2014<br>';
            } else $str .= 'УК: Имущество-4-2014<br>';
        }
        return $str .= '<br>';  
    }

    function showQuestTranz () {
        if (isset($_POST['tranz'])) {
            if ($_POST['tranz'] == 'tranz-yes') { 
                return '<b>Движения по р/с: </b>да<br><br>';
            }
            if ($_POST['tranz'] == 'tranz-no') { 
                return '<b>Движения по р/с: </b>нет<br><br>'; 
            }  
        } 
    }

    function showBase () {
        if (isset($_POST['base'])) {
            if ($_POST['base'] == 'base-inc') { 
                return '<b>База налогообложения: </b>Доходы<br><br>';
            }
            if ($_POST['base'] == 'base-inc-spent') { 
                return '<b>База налогообложения: </b>Доходы - Расходы<br><br>'; 
            }  
        } 
    }

    function showBaseIp () {
        if (isset($_POST['base'])) {
            if ($_POST['base'] == 'base-inc') { 
                return '<b>База налогообложения: </b>Доходы<br><br>';
            }
            if ($_POST['base'] == 'base-inc-spent') { 
                return '<b>База налогообложения: </b>Доходы - Расходы<br><br>'; 
            }  
        } else return "-";
    }

    function showOneFace () {
        if (isset($_POST['one-face'])) {
            if ($_POST['one-face'] == 'one-face-yes') { 
                return '<b>Директор и учредитель в одном лице: </b>Да<br><br>';
            }
            if ($_POST['one-face'] == 'one-face-no') { 
                return '<b>Директор и учредитель в одном лице: </b>Нет<br><br>'; 
            }  
        } 
    }

    function showSzvQuest () {
        if (isset($_POST['szv-quest'])) {
            if ($_POST['szv-quest'] == 'szv-quest-yes') { 
                return '<b>Сдавали ли Вы форму СЗВ-М: </b>Да<br><br>';
            }
            if ($_POST['szv-quest'] == 'szv-quest-no') { 
                return '<b>Сдавали ли Вы форму СЗВ-М: </b>Нет<br><br>'; 
            }  
        } 
    }

    function showCntWorkers () {
        if (isset($_POST['cnt-workers-ooo'])) {
            return '<b>Количество работников: </b>' . $_POST['cnt-workers-ooo'] . 
                   '<br><br>'; 
        } 
    }

    function showSnilsDir () {
        if (isset($_POST['snils-dir-ooo'])) {
            return '<b>СНИЛС директора: </b>' . $_POST['snils-dir-ooo'] . 
                   '<br><br>'; 
        } 
    }

    function showNameOfCompany () {
        if (isset($_POST['name-ooo'])) {
            return '<b>Название компании: </b>' . $_POST['name-ooo'] . 
                   '<br><br>'; 
        } 
    }

    function showNameOfIp () {
        if (isset($_POST['fio-ip'])) {
            return '<b>ФИО: </b>' . $_POST['fio-ip'] . 
                   '<br><br>'; 
        } 
    }

    function showOktmoOfCompany () {
        if (isset($_POST['oktmo'])) {
            return '<b>ОКТМО: </b>' . $_POST['oktmo'] . 
                   '<br><br>'; 
        } 
    }

    function showOktmoOfIP () {
        if (isset($_POST['oktmo-ip'])) {
            return '<b>ОКТМО: </b>' . $_POST['oktmo-ip'] . 
                   '<br><br>'; 
        } 
    }

    function showInnOfCompany () {
        if (isset($_POST['inn'])) {
            return '<b>ИНН: </b>' . $_POST['inn'] . 
                   '<br><br>'; 
        } 
    }

    function showInnOfIp () {
        if (isset($_POST['inn'])) {
            return '<b>ИНН: </b>' . $_POST['inn'] . 
                   '<br><br>'; 
        } 
    }

    function showPhoneOfCompany () {
        if (isset($_POST['phone-ooo'])) {
            return '<b>Телефон: </b>' . $_POST['phone-ooo'] . 
                   '<br><br>'; 
        } 
    }


    function showPhoneOfIP () {
        if (isset($_POST['phone-ip'])) {
            return '<b>Телефон: </b>' . $_POST['phone-ip'] . 
                   '<br><br>'; 
        } 
    }

    function showEmailOfCompany () {
        if (isset($_POST['email-ooo'])) {
            return '<b>Email: </b>' . $_POST['email-ooo'] . 
                   '<br><br>'; 
        } 
    }

    function showEmailOfIp () {
        if (isset($_POST['email-ip'])) {
            return '<b>Email: </b>' . $_POST['email-ip'] . 
                   '<br><br>'; 
        } 
    }

    function showPaspSerOfIp () {
        
        if (isset($_POST['pasp-ser-ip']) && $_POST['tax-system'] == 'general-ip') {
            return '<b>Паспорт серия: </b>' . $_POST['pasp-ser-ip'] . 
                   '<br><br>'; 
        } 
    }

    function showPaspNumOfIp () {
        if (isset($_POST['pasp-num-ip']) && $_POST['tax-system'] == 'general-ip') {
            return '<b>Паспорт номер: </b>' . $_POST['pasp-num-ip'] . 
                   '<br><br>'; 
        } 
    }

    function showPaspDateOfIssueOfIp () {
        if (isset($_POST['pasp-date-issue-ip']) && $_POST['tax-system'] == 'general-ip') {
            return '<b>Дата выдачи: </b>' . $_POST['pasp-date-issue-ip'] . 
                   '<br><br>'; 
        } 
    }

    function showPaspWhoIssueOfIp () {
        if (isset($_POST['email-ip']) && $_POST['tax-system'] == 'general-ip') {
            return '<b>Кем выдан: </b>' . $_POST['pasp-who-issue-ip'] . 
                   '<br><br>'; 
        } 
    }

    function showPaspKpOfIp () {
        if (isset($_POST['pasp-kp-ip']) && $_POST['tax-system'] == 'general-ip') {
            return '<b>Код подразделения: </b>' . $_POST['pasp-kp-ip'] . 
                   '<br><br>'; 
        } 
    }

    function willSendDeclOne () {
        $str = "";    
        if ( isset($_POST['decl-one']) && $_POST['tranz'] == 'tranz-no') {
            $str .= '<b>Единая Упрощенная Декларация: </b>' . '<br><br>';    
            if (isset($_POST['decl-one-final-4-17'])) { $str .= '4-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-one-final-3-17'])) { $str .= '3-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-one-final-2-17'])) { $str .= '2-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-one-final-1-17'])) { $str .= '1-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-one-final-4-16'])) { $str .= '4-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-one-final-3-16'])) { $str .= '3-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-one-final-2-16'])) { $str .= '2-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-one-final-1-16'])) { $str .= '1-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-one-final-4-15'])) { $str .= '4-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-one-final-3-15'])) { $str .= '3-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-one-final-2-15'])) { $str .= '2-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-one-final-1-15'])) { $str .= '1-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-one-final-4-14'])) { $str .= '4-й квартал 2014 года' . '<br>'; }
        
            return $str . '<br>' . '<br>';
        }
     }

    function willSendDeclNds () {
        $str = "";
        if (isset($_POST['decl-nds']) && $_POST['tranz'] == 'tranz-yes') {
            $str .= '<b>Налоговая декларация по НДС: </b>' . '<br><br>';
            if (isset($_POST['decl-nds-final-4-17'])) { $str .= '4-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-3-17'])) { $str .= '3-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-2-17'])) { $str .= '2-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-1-17'])) { $str .= '1-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-4-16'])) { $str .= '4-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-3-16'])) { $str .= '3-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-2-16'])) { $str .= '2-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-1-16'])) { $str .= '1-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-4-15'])) { $str .= '4-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-3-15'])) { $str .= '3-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-2-15'])) { $str .= '2-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-1-15'])) { $str .= '1-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-4-14'])) { $str .= '4-й квартал 2014 года' . '<br>'; }
            
            return $str . '<br>' . '<br>';
        };
    }

    function willSendDeclProfit () {
        $str = "";
        if (isset($_POST['decl-profit']) && $_POST['tranz'] == 'tranz-yes') {
            $str .= '<b>Налоговая декларация по налогу на прибыль: </b>' . '<br><br>';
            if (isset($_POST['decl-profit-final-4-17'])) { $str .= '4-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-profit-final-3-17'])) { $str .= '3-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-profit-final-2-17'])) { $str .= '2-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-profit-final-1-17'])) { $str .= '1-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-profit-final-4-16'])) { $str .= '4-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-profit-final-3-16'])) { $str .= '3-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-profit-final-2-16'])) { $str .= '2-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-profit-final-1-16'])) { $str .= '1-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-profit-final-4-15'])) { $str .= '4-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-profit-final-3-15'])) { $str .= '3-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-profit-final-2-15'])) { $str .= '2-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-profit-final-1-15'])) { $str .= '1-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-profit-final-4-14'])) { $str .= '4-й квартал 2014 года' . '<br>'; }

            return $str . '<br>' . '<br>';
        };
    }

    function willSendCountIns () {
        $str = "";
        if (isset($_POST['count-ins'])) {
            $str .= '<b>Расчет по страховым взносам: </b>' . '<br><br>';
            if (isset($_POST['count-ins-final-4-17'])) { $str .= '4-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['count-ins-final-3-17'])) { $str .= '3-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['count-ins-final-2-17'])) { $str .= '2-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['count-ins-final-1-17'])) { $str .= '1-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['count-ins-final-4-16'])) { $str .= '4-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['count-ins-final-3-16'])) { $str .= '3-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['count-ins-final-2-16'])) { $str .= '2-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['count-ins-final-1-16'])) { $str .= '1-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['count-ins-final-4-15'])) { $str .= '4-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['count-ins-final-3-15'])) { $str .= '3-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['count-ins-final-2-15'])) { $str .= '2-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['count-ins-final-1-15'])) { $str .= '1-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['count-ins-final-4-14'])) { $str .= '4-й квартал 2014 года' . '<br>'; }

            return $str . '<br>' . '<br>';
        }
    }

    function willSendCountFss () {
        $str = "";
        if (isset($_POST['count-fss'])) {
            $str .= '<b>Расчетная ведомость в ФСС: </b>' . '<br><br>';
            if (isset($_POST['count-fss-final-4-17'])) { $str .= '4-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['count-fss-final-3-17'])) { $str .= '3-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['count-fss-final-2-17'])) { $str .= '2-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['count-fss-final-1-17'])) { $str .= '1-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['count-fss-final-4-16'])) { $str .= '4-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['count-fss-final-3-16'])) { $str .= '3-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['count-fss-final-2-16'])) { $str .= '2-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['count-fss-final-1-16'])) { $str .= '1-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['count-fss-final-4-15'])) { $str .= '4-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['count-fss-final-3-15'])) { $str .= '3-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['count-fss-final-2-15'])) { $str .= '2-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['count-fss-final-1-15'])) { $str .= '1-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['count-fss-final-4-14'])) { $str .= '4-й квартал 2014 года' . '<br>'; }
            
            return $str . '<br>' . '<br>';
        };
    }

    function willSendSzv () {
        $str = "";
        if (isset($_POST['szv-m']) && $_POST['one-face'] == 'one-face-no') {
            $str .= '<b>СЗВ-М: </b>' . '<br><br>';

            if (isset($_POST['final-szv-oct-2017'])) { $str .= 'Октябрь 2017 года<br>'; }
            if (isset($_POST['final-szv-nov-2017'])) { $str .= 'Ноябрь 2017 года<br>'; }
            if (isset($_POST['final-szv-dec-2017'])) { $str .= 'Декабрь 2017 года<br><br>'; }

            if (isset($_POST['final-szv-jul-2017'])) { $str .= 'Июль 2017 года<br>'; }
            if (isset($_POST['final-szv-aug-2017'])) { $str .= 'Август 2017 года<br>'; }
            if (isset($_POST['final-szv-sep-2017'])) { $str .= 'Сентябрь 2017 года<br><br>'; }

            if (isset($_POST['final-szv-apr-2017'])) { $str .= 'Апрель 2017 года<br>'; }
            if (isset($_POST['final-szv-may-2017'])) { $str .= 'Май 2017 года<br>'; }
            if (isset($_POST['final-szv-jun-2017'])) { $str .= 'Июнь 2017 года<br><br>'; }

            if (isset($_POST['final-szv-jan-2017'])) { $str .= 'Январь 2017 года<br>'; }
            if (isset($_POST['final-szv-feb-2017'])) { $str .= 'Февраль 2017 года<br>'; }
            if (isset($_POST['final-szv-mar-2017'])) { $str .= 'Март 2017 года<br><br>'; }

            if (isset($_POST['final-szv-oct-2016'])) { $str .= 'Октябрь 2016 года<br>'; }
            if (isset($_POST['final-szv-nov-2016'])) { $str .= 'Ноябрь 2016 года<br>'; }
            if (isset($_POST['final-szv-dec-2016'])) { $str .= 'Декабрь 2016 года<br><br>'; }

            if (isset($_POST['final-szv-jul-2016'])) { $str .= 'Июль 2016 года<br>'; }
            if (isset($_POST['final-szv-aug-2016'])) { $str .= 'Август 2016 года<br>'; }
            if (isset($_POST['final-szv-sep-2016'])) { $str .= 'Сентябрь 2016 года<br><br>'; }

            if (isset($_POST['final-szv-apr-2016'])) { $str .= 'Апрель 2016 года<br>'; }
            if (isset($_POST['final-szv-may-2016'])) { $str .= 'Май 2016 года<br>'; }
            if (isset($_POST['final-szv-jun-2016'])) { $str .= 'Июнь 2016 года<br><br>'; }

            if (isset($_POST['final-szv-jan-2016'])) { $str .= 'Январь 2016 года<br>'; }
            if (isset($_POST['final-szv-feb-2016'])) { $str .= 'Февраль 2016 года<br>'; }
            if (isset($_POST['final-szv-mar-2016'])) { $str .= 'Март 2016 года<br><br>'; }

            if (isset($_POST['final-szv-oct-2015'])) { $str .= 'Октябрь 2015 года<br>'; }
            if (isset($_POST['final-szv-nov-2015'])) { $str .= 'Ноябрь 2015 года<br>'; }
            if (isset($_POST['final-szv-dec-2015'])) { $str .= 'Декабрь 2015 года<br><br>'; }

            if (isset($_POST['final-szv-jul-2015'])) { $str .= 'Июль 2015 года<br>'; }
            if (isset($_POST['final-szv-aug-2015'])) { $str .= 'Август 2015 года<br>'; }
            if (isset($_POST['final-szv-sep-2015'])) { $str .= 'Сентябрь 2015 года<br><br>'; }

            if (isset($_POST['final-szv-apr-2015'])) { $str .= 'Апрель 2015 года<br>'; }
            if (isset($_POST['final-szv-may-2015'])) { $str .= 'Май 2015 года<br>'; }
            if (isset($_POST['final-szv-jun-2015'])) { $str .= 'Июнь 2015 года<br><br>'; }

            if (isset($_POST['final-szv-jan-2015'])) { $str .= 'Январь 2015 года<br>'; }
            if (isset($_POST['final-szv-feb-2015'])) { $str .= 'Февраль 2015 года<br>'; }
            if (isset($_POST['final-szv-mar-2015'])) { $str .= 'Март 2015 года<br><br>'; }

            if (isset($_POST['final-szv-oct-2014'])) { $str .= 'Октябрь 2014 года<br>'; }
            if (isset($_POST['final-szv-nov-2014'])) { $str .= 'Ноябрь 2014 года<br>'; }
            if (isset($_POST['final-szv-dec-2014'])) { $str .= 'Декабрь 2014 года<br><br>'; }
            
            return $str . '<br>' . '<br>';
        }
    }

    function willSendBuhRepIfns () {
        $str = ""; 
        if (isset($_POST['buh-rep-ifns-4-2017'])) { 
            $str .= '<b>Бухгалтерская(финансовая) отчетность в ИФНС за</b> 2017 год' . '<br>'; 
        }
        if (isset($_POST['buh-rep-ifns-4-2016'])) { 
            $str .= '<b>Бухгалтерская(финансовая) отчетность в ИФНС за</b> 2016 год' . '<br>'; 
        }
        if (isset($_POST['buh-rep-ifns-4-2015'])) { 
            $str .= '<b>Бухгалтерская(финансовая) отчетность в ИФНС за</b> 2015 год' . '<br>'; 
        }

        return $str . '<br>' . '<br>';
    }

    function willSendBuhRepStat () {
        $str = ""; 
        if (isset($_POST['buh-rep-stat-4-2017'])) { 
            $str .= '<b>Бухгалтерская(финансовая) отчетность в Росстат за</b> 2017 год' . '<br>'; 
        }
        if (isset($_POST['buh-rep-stat-4-2016'])) { 
            $str .= '<b>Бухгалтерская(финансовая) отчетность в Росстат за</b> 2016 год' . '<br>'; 
        }
        if (isset($_POST['buh-rep-stat-4-2015'])) { 
            $str .= '<b>Бухгалтерская(финансовая) отчетность в Росстат за</b> 2015 год' . '<br>'; 
        }

        return $str . '<br>' . '<br>';
    }

    function willSendWorkersCnt () {
        $str = "";
        if (isset($_POST['workers-cnt-4-2017'])) {
            $str .= '<b>Сведения о среднесписочной численности работников за</b> 2017 год' . '<br>';
        }
        if (isset($_POST['workers-cnt-4-2016'])) {
            $str .= '<b>Сведения о среднесписочной численности работников за</b> 2016 год' . '<br>';
        }
        if (isset($_POST['workers-cnt-4-2015'])) {
            $str .= '<b>Сведения о среднесписочной численности работников за</b> 2015 год' . '<br>';
        }

        return $str . '<br>' . '<br>';
    }

    function willSendDeclUsn () {
        $str = "";
        if (isset($_POST['decl-usn-4-2017'])) {
            $str .= '<b>Налоговая декларация по УСН(годовая) за</b> 2017 год' . '<br>';
        }
        if (isset($_POST['decl-usn-4-2016'])) {
            $str .= '<b>Налоговая декларация по УСН(годовая) за</b> 2016 год' . '<br>';
        }
        if (isset($_POST['decl-usn-4-2015'])) {
            $str .= '<b>Налоговая декларация по УСН(годовая) за</b> 2015 год' . '<br>';
        }

        return $str . '<br>' . '<br>';
    }

    function willSendDeclNdsIp () {
        $str = "";
        if (isset($_POST['decl-nds']) && $_POST['tax-system'] == 'general-ip') {
            $str .= '<b>Налоговая декларация по НДС: </b>' . '<br><br>';
            if (isset($_POST['decl-nds-final-4-17'])) { $str .= '4-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-3-17'])) { $str .= '3-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-2-17'])) { $str .= '2-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-1-17'])) { $str .= '1-й квартал 2017 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-4-16'])) { $str .= '4-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-3-16'])) { $str .= '3-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-2-16'])) { $str .= '2-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-1-16'])) { $str .= '1-й квартал 2016 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-4-15'])) { $str .= '4-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-3-15'])) { $str .= '3-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-2-15'])) { $str .= '2-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-1-15'])) { $str .= '1-й квартал 2015 года' . '<br>'; }
            if (isset($_POST['decl-nds-final-4-14'])) { $str .= '4-й квартал 2014 года' . '<br>'; }
            
            return $str . '<br>' . '<br>';
        };
    }

    function willSendDeclNdflIp () {
        $str = "";
        if ($_POST['tax-system'] == 'general-ip') {
            if (isset($_POST['decl-ndfl-ip-4-2017'])) { $str .= '<b>Налоговая декларация 3-НДФЛ за 2017 год</b>' . '<br>'; }
            if (isset($_POST['decl-ndfl-ip-4-2016'])) { $str .= '<b>Налоговая декларация 3-НДФЛ за 2016 год</b>' . '<br>'; }
            if (isset($_POST['decl-ndfl-ip-4-2015'])) { $str .= '<b>Налоговая декларация 3-НДФЛ за 2015 год</b>' . '<br>'; }
            
            return $str . '<br>' . '<br>';
        };
    }

    function willSendDeclYearIp () {
        $str = "";
        if ($_POST['tax-system'] == 'simple-ip') {
            if (isset($_POST['decl-year-2017-ip-simple'])) { $str .= '<b>Налоговая декларация за 2017 год</b>' . '<br>'; }
            if (isset($_POST['decl-year-2016-ip-simple'])) { $str .= '<b>Налоговая декларация за 2016 год</b>' . '<br>'; }
            if (isset($_POST['decl-year-2015-ip-simple'])) { $str .= '<b>Налоговая декларация за 2015 год</b>' . '<br>'; }
            
            return $str . '<br>' . '<br>';
        }
    }

    function showTotalAmount() {
        $str = "";
        if (isset($_POST['total-amount'])) {
                $str .= '<b>К оплате: </b>' . $_POST['total-amount'] .  ' руб.<br>';    
        }
        return $str . '<br>' . '<br>';
    }
