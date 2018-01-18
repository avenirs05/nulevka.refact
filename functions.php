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
            $inputIds[] = 'year-' . mb_substr($value, 0, 4) . '-' . 'ip-simple';
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


    function isGeneralOrSimpleTaxSystem () {
        if ($_POST['tax-system'] == 'general') {
            return '<b>Система налогообложения:</b> общая<br><br>';
        } 
        if ($_POST['tax-system'] == 'simple') {
            return '<b>Система налогообложения:</b> упрощенная<br><br>';
        } 
    }


    function findQuart () {
        $res = '<b>Периоды:</b><br>';
        $pattern = '#^qrt#';        

        foreach ($_POST as $key => $value) {
            $match = preg_match($pattern, $key);
            if ($match) {
                $res .= $key[4] .'-й квартал 20' . $key[8] . $key[9] . ' года <br>';
            }
        }
        
        return $res . '<br>';   
    }

    function findQuartIp () {
        if ($_POST['tax-system'] == 'general') {
                $res = '<b>Периоды:</b><br>';
                $pattern = '#^qrt#';        

                foreach ($_POST as $key => $value) {
                    $match = preg_match($pattern, $key);
                    if ($match) {
                        $res .= $key[4] .'-й квартал 20' . $key[8] . $key[9] . ' года <br>';
                    }
                }
                
                return $res . '<br>';
        }  
    }


    function findUK () {
        $res = '<b>Способы внесения УК:</b><br>';

        $patternUK = '#^deposit-uk#';     
        $patternTypeUk = null;   

        foreach ($_POST as $key => $value) {
            if (preg_match($patternUK, $key)) {
                $patternTypeUk = '#^money#';                 
                if (preg_match($patternTypeUk, $value)) {
                    $res .= 'УК: Деньги-' . $value[9] . '-' . '20' . $value[13] . $value[14] . '<br>';
                }
                
                $patternTypeUk = '#^things#';  
                if (preg_match($patternTypeUk, $value)) {
                    $res .= 'УК: Имущество-' . $value[10] . '-' . '20' . $value[14] . $value[15] . '<br>';
                }                
            }
        }

        return $res .= '<br>';  
    }


    function findYearIfSimpleIp () {
        if ($_POST['tax-system'] == 'simple') {
            $res = '<b>Периоды:</b><br>';

            $pattern = '#^year#';        

            foreach ($_POST as $key => $value) {
                if (preg_match($pattern, $key)) {
                    $res .= substr($key, 5, 4) . ' год <br>';
                }
            }
            
            return $res . '<br>';             
        }     
    }


    function showQuestTrans () {
        if (isset($_POST['trans'])) {
            if ($_POST['trans'] == 'trans-yes') { 
                return '<b>Движения по р/с: </b>да<br><br>';
            }

            if ($_POST['trans'] == 'trans-no') { 
                return '<b>Движения по р/с: </b>нет<br><br>'; 
            }  
        } 
    }


    function showBase () {
        if (isset($_POST['base']) && $_POST['tax-system'] == 'simple') {
            if ($_POST['base'] == 'base-inc') { 
                return '<b>База налогообложения: </b>Доходы<br><br>';
            }

            if ($_POST['base'] == 'base-inc-spent') { 
                return '<b>База налогообложения: </b>Доходы - Расходы<br><br>'; 
            }
        }
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
        if (isset($_POST['pasp-ser-ip']) && $_POST['tax-system'] == 'general') {
            return '<b>Паспорт серия: </b>' . $_POST['pasp-ser-ip'] . 
                   '<br><br>'; 
        } 
    }

    function showPaspNumOfIp () {
        if (isset($_POST['pasp-num-ip']) && $_POST['tax-system'] == 'general') {
            return '<b>Паспорт номер: </b>' . $_POST['pasp-num-ip'] . 
                   '<br><br>'; 
        } 
    }

    function showPaspDateOfIssueOfIp () {
        if (isset($_POST['pasp-date-issue-ip']) && $_POST['tax-system'] == 'general') {
            return '<b>Дата выдачи: </b>' . $_POST['pasp-date-issue-ip'] . 
                   '<br><br>'; 
        } 
    }

    function showPaspWhoIssueOfIp () {
        if (isset($_POST['email-ip']) && $_POST['tax-system'] == 'general') {
            return '<b>Кем выдан: </b>' . $_POST['pasp-who-issue-ip'] . 
                   '<br><br>'; 
        } 
    }

    function showPaspKpOfIp () {
        if (isset($_POST['pasp-kp-ip']) && $_POST['tax-system'] == 'general') {
            return '<b>Код подразделения: </b>' . $_POST['pasp-kp-ip'] . 
                   '<br><br>'; 
        } 
    }


    function willSendDeclOne () {
        $res = "";    
        if ( isset($_POST['decl-one']) && 
             $_POST['trans'] == 'trans-no' && 
             $_POST['tax-system'] == 'general') 
        {
            $res .= '<b>Единая Упрощенная Декларация: </b>' . '<br>';    

            $pattern = '#^decl-one-final#';   
            
            foreach ($_POST as $key => $value) {
                if (preg_match($pattern, $key)) {
                    $res .= $key[15] .'-й квартал 20' . $key[19] . $key[20] . ' года <br>';
                }
            }
        
            return $res . '<br>';
        }
     }


    function willSendDeclNds () {
        $res = "";

        if (isset($_POST['decl-nds']) && 
            $_POST['trans'] == 'trans-yes' &&
            $_POST['tax-system'] == 'general') 
        {
            $res .= '<b>Налоговая декларация по НДС: </b>' . '<br>';

            $pattern = '#^decl-nds-final#';      
           
            foreach ($_POST as $key => $value) {
                if (preg_match($pattern, $key)) {
                    $res .= $key[15] .'-й квартал 20' . $key[19] . $key[20] . ' года <br>';
                }
            }

            return $res . '<br>';
        }
    }


    function willSendDeclNdfl () {
        $res = "";

        if ($_POST['tax-system'] == 'general') {
            $pattern = '#^decl-ndfl-final#';        

            foreach ($_POST as $key => $value) {
                if (preg_match($pattern, $key)) {
                    $res .= '<b>Налоговая декларация 3-НДФЛ за </b>' 
                         . substr($key, 16) 
                         . ' год<br>';
                }
            }   
        }

        return $res . '<br>'; 
    }


    function willSendDeclProfit () {
        $res = "";
        
        if (isset($_POST['decl-profit']) && 
            $_POST['trans'] == 'trans-yes' &&
            $_POST['tax-system'] == 'general') 
        {
            $res .= '<b>Налоговая декларация по налогу на прибыль: </b>' . '<br>';

            $pattern = '#^decl-profit-final#';        

            foreach ($_POST as $key => $value) {
                if (preg_match($pattern, $key)) {
                    $res .= $key[18] .'-й квартал 20' . $key[22] . $key[23] . ' года <br>';
                }
            }

            return $res . '<br>';
        };
    }


    function willSendCountIns () {
        $res = "";
        if (isset($_POST['count-ins'])) {
            $res .= '<b>Расчет по страховым взносам: </b>' . '<br>';

            $pattern = '#^count-ins-final#';        

            foreach ($_POST as $key => $value) {
                if (preg_match($pattern, $key)) {
                    $res .= $key[16] .'-й квартал 20' . $key[20] . $key[21] . ' года <br>';
                }
            }

            return $res . '<br>';
        }
    }


    function willSendCountFss () {
        $res = "";
        if (isset($_POST['count-fss'])) {
            $res .= '<b>Расчетная ведомость в ФСС: </b>' . '<br>';

            $pattern = '#^count-fss-final#';        

            foreach ($_POST as $key => $value) {
                if (preg_match($pattern, $key)) {
                    $res .= $key[16] .'-й квартал 20' . $key[20] . $key[21] . ' года <br>';
                }
            }

            return $res . '<br>';         
        };
    }

    function willSendSzv () {
        $res = "";
        if (isset($_POST['szv-m']) && $_POST['one-face'] == 'one-face-no') {
            $res .= '<b>СЗВ-М: </b>' . '<br>';

            $pattern = '#^final-szv#';        

            foreach ($_POST as $key => $value) {
                if (preg_match($pattern, $key)) {
                    $res .= substr($key, 10) . '<br>';
                }
            }
            
            return $res . '<br>';
        }
    }
    

    function willSendBuhRepIfns () {
        $res = ""; 

        $pattern = '#^buh-rep-ifns-final#';        

        foreach ($_POST as $key => $value) {
            if (preg_match($pattern, $key)) {
                $res .= '<b>Бухгалтерская(финансовая) отчетность в ИФНС за </b>' 
                     . substr($key, 19) 
                     . ' год<br>';
            }
        }    
      
        return $res . '<br>';
    }


    function willSendBuhRepStat () {
        $res = ""; 

        $pattern = '#^buh-rep-stat-final#';        

        foreach ($_POST as $key => $value) {
            if (preg_match($pattern, $key)) {
                $res .= '<b>Бухгалтерская(финансовая) отчетность в Росстат за </b>' 
                     . substr($key, 19) 
                     . ' год<br>';
            }
        }    
        
        return $res . '<br>';
    }


    function willSendRepWorkersCnt () {
        $res = ""; 

        $pattern = '#^workers-cnt-final#';        

        foreach ($_POST as $key => $value) {
            if (preg_match($pattern, $key)) {
                $res .= '<b>Сведения о среднесписочной численности работников за </b>' 
                     . substr($key, 18) 
                     . ' год<br>';
            }
        }    
        
        return $res . '<br>';
    }


    function willSendDeclUsn () {
        $res = "";

        if ($_POST['tax-system'] == 'simple') {
            $pattern = '#^decl-usn#';        

            foreach ($_POST as $key => $value) {
                if (preg_match($pattern, $key)) {
                    $res .= '<b>Налоговая декларация по УСН(годовая) за </b>' 
                         . substr($key, 9) 
                         . ' год<br>';
                }
            }   
        }

        return $res . '<br>';
    }


    function showTotalAmount() {
        $str = "";
        if (isset($_POST['total-amount'])) {
                $str .= '<b>К оплате: </b>' . $_POST['total-amount'] .  ' руб.<br>';    
        }
        return $str . '<br>';
    }
