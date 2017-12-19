<div id="choice-quarters" style="display: none">
    <i>Выберите период</i><br>
    <?php   
        $firstQuarterAttr = array(
            'isFour'    => 'yes',        
            'wrapClass' => 'div-quarters',
            'inputId'   => 'qrt-4-2017',
            'name'      => 'qrt-4-2017',
            'checked'   => 'checked',
            'labelText' => '4-й квартал 2017 года (годовая)'
        );   
 
        echo firstQuarter($firstQuarterAttr);
        require_once 'another-quarters.php'; 
    ?>    
</div>

