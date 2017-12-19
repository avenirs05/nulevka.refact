<span id="another-quarters-text">Другие периоды</span><br>
<div id="another-quarters-wrap" style="display: none;">
    <?php
        $anotherQuartersAttr = array(
            'isFour' => 'yes',
            'wrapClass' => 'div-quarters',
            'inputIds' => array(
                'qrt-3-2017',
                'qrt-2-2017',
                'qrt-1-2017',
                'qrt-4-2016',
                'qrt-3-2016',
                'qrt-2-2016',
                'qrt-1-2016',
                'qrt-4-2015',
                'qrt-3-2015',
                'qrt-2-2015',
                'qrt-1-2015',
                'qrt-4-2014'
             ),
            'labelTexts' => array(
                '3-й квартал 2017 года',
                '2-й квартал 2017 года',
                '1-й квартал 2017 года',
                '4-й квартал 2016 года (годовая)',
                '3-й квартал 2016 года',
                '2-й квартал 2016 года',
                '1-й квартал 2016 года',
                '4-й квартал 2015 года (годовая)',
                '3-й квартал 2015 года',
                '2-й квартал 2015 года',
                '1-й квартал 2015 года',
                '4-й квартал 2014 года (годовая)'
             )
        );
        echo anotherQuarters($anotherQuartersAttr);
    ?>
</div>