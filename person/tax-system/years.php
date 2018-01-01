<div id="years-wrap" style="display: none;">
    <span id="years-text">Выберите период</span><br>
    <?php
        $years = array(
            'wrapClass' => 'div-years',
            'labelTexts' => array(
                '2017 год',
                '2016 год',
                '2015 год',
            )
        );
        
        echo yearsIpSimple($years);
    ?>
</div>

