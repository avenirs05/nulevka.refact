<div id="choice-quarters" style="display: none">
    <i>Выберите период</i><br>
    <?php   
        $firstQuarterAttr = array(
            'isFour'    => 'yes',        
            'wrapClass' => 'div-quarters',
            'checked'   => 'checked',
            'labelText' => '4-й квартал 2017 года (годовая)'
        );   
 
        echo firstQuarter($firstQuarterAttr);
        require_once 'another-quarters.php'; 
    ?>    
</div>

