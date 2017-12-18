<?php

/**
 * Выводит список систем налогообложения
 * @param array $taxSystem - массив систем налогообложения. 
 * array $taxSystem: key - id элемента, value - название системы налогообложения
 * @param string $attrName - атрибут name
 */
function showTaxSystemList ($taxSystem, $attrName) {
    require_once 'templates/choice-tax.php';  
} 


/**
 * Выводит первый период в списке периодов
 * @param array $firstQuarterAttr - массив атрибутов
 * @return string html - первый период
 */
function getFirstQuarter ($firstQuarterAttr) {
    extract($firstQuarterAttr);    
    $html = "<div data-is-four={$isFour} class={$divClass}>
                <label for={$inputId}>
                    <input id={$inputId} type='checkbox' name={$name} {$checked}>{$labelText}
                </label>
             </div>";     

    return $html;
}


/**
 * Если 4-й квартал есть или нет, атрибут data-is-for 'yes' или 'no'  
 * @param array $quarterText - текст чекбокса (например, "2-й квартал 2015 года")
 * @return string 'yes' or 'no' 
 */
function isFourQuarter ($quarterText) {
    if ($quarterText[0] === '4') {
        return 'yes';
    } else return 'no';
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
    foreach ($inputIds as $value) {
        $isFour = isFourQuarter($labelTexts[$i]);
        $html .= "<div data-is-four={$isFour} class={$divClass}>
                    <label for={$inputIds[$i]}>
                        <input id={$inputIds[$i]} type='checkbox' name={$inputIds[$i]}>{$labelTexts[$i]}
                    </label>
                 </div>";   
        $i = $i + 1;     
    }  

    return $html;
}


