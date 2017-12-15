<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <meta name="format-detection" content="telephone=no" />	

    <title>Сдать отчетность для ИП</title>   

    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet">    
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="shortcut icon" href="/imgs/fav.png" type="image/png">
    <link href="style.css" rel="stylesheet">
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="functions-general.js"></script>
    <script src="functions-person.js"></script>
    <script src="events-general.js"></script>
    <script src="person-js/choice-tax.js"></script>
    <script src="person-js/tax-base.js"></script>
    <script src="person-js/will-send.js"></script>


    
    <!-- Yandex.Metrika counter --> <script type="text/javascript"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter45030163 = new Ya.Metrika({ id:45030163, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/45030163" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->

    <!-- BEGIN JIVOSITE CODE {literal} -->
    <script type='text/javascript'>
    (function(){ var widget_id = '2WsMo5ROvu';var d=document;var w=window;function l(){
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();</script>
    <!-- {/literal} END JIVOSITE CODE -->
</head>
<body>
<?php require_once 'modals.php'; ?>
<?php require_once 'header.php'; ?> 

<div class="container-fluid questions-wrapper">
<div class="row">
<div class="col-md-12">

<!-- Свойство novalidate в форме установлено -->
<form id="form-tax-system" action="handler.php" method="post" novalidate>
    <div id="div-tax-system">
        <span id="span-choice-tax-system" class="question" >Выберите систему налогообложения:</span><br>
        <label id="label-choice-tax-system" class="tax-system-answer" for="simple-ip"><input id="simple-ip" type="radio" name="tax-system" value="simple-ip">Упрощенная</label><br>
        <div style="display: none" class="tax-answer-1"></div>
        <div id="choice-years" style="display: none">
            <i><a id="years-simple" href="#" onclick="return false;">Выберите период</a></i><br>
            <div id="div-years">
                <div><label for="year-2017-ip-simple"><input id="year-2017-ip-simple" type="checkbox" name="year-2017-ip-simple">2017 год</label></div>
                <div><label for="year-2016-ip-simple"><input id="year-2016-ip-simple" type="checkbox" name="year-2016-ip-simple">2016 год</label></div>      
                <div><label for="year-2015-ip-simple"><input id="year-2015-ip-simple" type="checkbox" name="year-2015-ip-simple">2015 год</label></div>
            </div> 
        </div>    
        <label class="tax-system-answer" for="general-ip"><input id="general-ip" type="radio" name="tax-system" value="general-ip">Общая</label><br>        
        <div style="display: none" class="tax-answer-0"></div>  
        
        <div id="choice-quarters" style="display: none"><i><span>Выберите период</span></i><br>
            
            <div data-is-four="yes" class="div-quarters"><label for="qrt-4-2017"><input id="qrt-4-2017" type="checkbox" name="qrt-4-2017" checked>4-й квартал 2017 года (годовая)</label></div>            
            
            <a id="another-periods" href="#" onclick="return false;">Другие периоды</a><br>
            
            <div data-is-four="no" class="div-quarters" id="first-another-period"><label style="display: none;" for="qrt-3-2017"><input id="qrt-3-2017" type="checkbox" name="qrt-3-2017">3-й квартал 2017 года</label></div>
            
            <div data-is-four="no" class="div-quarters"><label style="display: none;" for="qrt-2-2017"><input id="qrt-2-2017" type="checkbox" name="qrt-2-2017">2-й квартал 2017 года</label></div>   
            
            <div data-is-four="no" class="div-quarters"><label style="display: none;" for="qrt-1-2017"><input id="qrt-1-2017" type="checkbox" name="qrt-1-2017">1-й квартал 2017 года</label></div>
            
            <div data-is-four="yes" class="div-quarters"><label style="display: none;" for="qrt-4-2016"><input id="qrt-4-2016" type="checkbox" name="qrt-4-2016">4-й квартал 2016 года (годовая)</label></div>
            
            <div data-is-four="no" class="div-quarters"><label style="display: none;" for="qrt-3-2016"><input id="qrt-3-2016" type="checkbox" name="qrt-3-2016">3-й квартал 2016 года</label></div>
            
            <div data-is-four="no" class="div-quarters"><label style="display: none;" for="qrt-2-2016"><input id="qrt-2-2016" type="checkbox" name="qrt-2-2016">2-й квартал 2016 года</label></div>     
            
            <div data-is-four="no" class="div-quarters"><label style="display: none;" for="qrt-1-2016"><input id="qrt-1-2016" type="checkbox" name="qrt-1-2016">1-й квартал 2016 года</label></div>
            
            <div data-is-four="yes" class="div-quarters"><label style="display: none;" for="qrt-4-2015"><input id="qrt-4-2015" type="checkbox" name="qrt-4-2015">4-й квартал 2015 года (годовая)</label></div>
            
            <div data-is-four="no" class="div-quarters"><label style="display: none;" for="qrt-3-2015"><input id="qrt-3-2015" type="checkbox" name="qrt-3-2015">3-й квартал 2015 года</label></div>
            
            <div data-is-four="no" class="div-quarters"><label style="display: none;" for="qrt-2-2015"><input id="qrt-2-2015" type="checkbox" name="qrt-2-2015">2-й квартал 2015 года</label></div>       
            
            <div data-is-four="no" class="div-quarters"><label style="display: none;" for="qrt-1-2014"><input id="qrt-1-2014" type="checkbox" name="qrt-1-2015">1-й квартал 2015 года</label></div>
            
            <div data-is-four="yes" class="div-quarters"><label style="display: none;" for="qrt-4-2014"><input id="qrt-4-2014" type="checkbox" name="qrt-4-2014">4-й квартал 2014 года (годовая)</label></div>
        </div>  
      
        <label class="tax-system-answer" for="envd-ip"><input id="envd-ip" type="radio" name="tax-system" value="envd-ip">ЕНВД<br></label><br>
        <div style="display: none" class="tax-answer-2"></div>    

        <label class="tax-system-answer" for="patent-ip"><input id="patent-ip" type="radio" name="tax-system" value="patent-ip">Патент</label><br>
        <div style="display: none" class="tax-answer-3"></div>    

        <label class="tax-system-answer" for="not-know-ip"><input id="not-know-ip" type="radio" name="tax-system" value="not-know-ip">Я не знаю</label><br>
        <div style="display: none" class="tax-answer-4"></div><br>
        

        <button id="btn-next-tax-system-ip-0" style="display: none;" onclick="return false;">Дальше</button>
        <button id="btn-next-tax-system-ip" style="display: none;" onclick="return false;">Дальше</button>
    </div>
    
    <div id="div-final-sum" style="display: none;">
        <span id="final-sum-text" style="display: none;">Стоимость заказа составляет 
            <span id="final-sum-digits">299</span> руб. 
        </span>
        <span id="discount-text" style="display: none;">Скидка составляет 
            <span id="discount-digits"></span> руб.
        </span>
    </div>

    <div id="div-will-send" style="display: none">
        <span id="span-we-will-send">Мы Вам подготовим и отправим на e-mail:</span>
        <div style="display: none;">
            <label for='decl-nds'><input id='decl-nds' type='checkbox' name='decl-nds' checked><strong>Налоговая декларация по НДС</strong></label>
        </div>
        <div style="display: none;">
            <label for='decl-profit'><input id='decl-profit' type='checkbox' name='decl-profit' checked><strong>Налоговая декларация по налогу на прибыль</strong></label>
        </div>
        <div style="display: none;">
            <label for='decl-one'><input id='decl-one' type='checkbox' name='decl-one' checked><strong>Единая упрощенная декларация</strong></label>
        </div>
        <div style="display: none;">
            <label for='count-ins'><input id='count-ins' type='checkbox' name='count-ins' checked><strong>Расчет по страховым взносам</strong></label>
        </div>
        <div style="display: none;">
            <label for='count-fss'><input id='count-fss' type='checkbox' name='count-fss' checked><strong>Расчетная ведомость в ФСС</strong></label>
        </div>
        <div style="display: none;">
            <label for='szv-m'><input id='szv-m' type='checkbox' name='szv-m' checked><strong>СЗВ-М</strong></label>
        </div>
    </div>

    <div id="div-from-customer-ip" style="display: none;">
        <input id="total-amount" type="hidden" name="total-amount" value="">
        <div><div>ФИО</div><input id="fio-ip" type="text" name="fio-ip"></div>
        <div><div>ИНН</div><input id="inn" type="text" name="inn"></div>
        <div><div>ОКТМО</div><input id="oktmo" type="text" name="oktmo-ip"></div>
        <div><div>Телефон</div><input id="phone-ip" type="text" name="phone-ip"></div>
        <div><div>E-mail</div><input id="email-ip" type="text" name="email-ip"></div>
        <div><div>Паспорт серия</div><input id="pasp-ser-ip" type="text" name="pasp-ser-ip"></div>
        <div><div>Паспорт №</div><input id="pasp-num-ip" type="text" name="pasp-num-ip"></div>
        <div><div>Дата выдачи</div><input id="pasp-date-issue-ip" type="text" name="pasp-date-issue-ip"></div>
        <div><div>Кем выдан</div><input id="pasp-who-issue-ip" type="text" name="pasp-who-issue-ip"></div>
        <div><div>Код подразделения</div><input id="pasp-kp-ip" type="text" name="pasp-kp-ip"></div>       

        <button id="btn-back-will-send-ip" onclick="return false;">Назад</button>
        <input id="submit-go-to-pay-ip" type="submit" value="Перейти к оплате" name="submit-go-to-pay-ip">
    </div>

    <div id="div-base" style="display: none">
        <span class="question">Какая у Вас база налогообложения?</span><br>
        <label id="label-base-inc" for="base-inc"><input id="base-inc" type="radio" name="base" value="base-inc">Доходы</label><br>
        <label id="label-base-inc-spent" for="base-inc-spent"><input id="base-inc-spent" type="radio" name="base" value="base-inc-spent">Доходы минус расходы</label><br>
        <button id="btn-back-base" onclick="return false;" style="background-color: #339933;">Назад</button> 
        <button id="btn-next-base" style="display: none; " onclick="return false;">Дальше</button> 
    </div>

    <div id="dialog-callback" title="" style="display: none;">
        <form action="">
            <span class="title-input">Имя:</span>
            <input type="text" name="name" placeholder="Введите имя">
            <span class="title-input">Телефон: <span class="red">*</span></span>
            <input type="text" name="phone" placeholder="Введите номер телефона">
            <input type="submit" value="Отправить">
        </form>
    </div>



</form>
</div>
</div>
</div>



<div id="clickfrog_counter_container" style="width:0px;height:0px;overflow:hidden;"></div><script type="text/javascript">(function(d, w) {var clickfrog = function() {if(!d.getElementById('clickfrog_js_container')) {var sc = document.createElement('script');sc.type = 'text/javascript';sc.async = true;sc.src = "//stat.clickfrog.ru/c.js?r="+Math.random();sc.id = 'clickfrog_js_container';var c = document.getElementById('clickfrog_counter_container');c.parentNode.insertBefore(sc, c);}};if(w.opera == "[object Opera]"){d.addEventListener("DOMContentLoaded",clickfrog,false);}else {clickfrog();}})(document, window);</script><noscript><div style="width:0px;height:0px;overflow:hidden;"><img src="//stat.clickfrog.ru/no_script.php?img" style="width:0px; height:0px;" alt=""/></div></noscript><script type="text/javascript">var clickfrogru_uidh='83b9bb40dc0b3675e271f4459ed1e693';</script>

</body>
</html>