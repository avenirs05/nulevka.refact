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

    ?>


