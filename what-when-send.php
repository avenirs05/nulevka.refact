<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <meta name="format-detection" content="telephone=no" />

    <title>Оплата</title>

    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="shortcut icon" href="/imgs/fav.png" type="image/png">
    <link href="style.css" rel="stylesheet">

    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="functions-company.js"></script>
    <script src="functions-general.js"></script>
    <script src="events-company.js"></script>
    <script src="events-general.js"></script>

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

<div class="container-fluid what-when-send">
    <div class="row">
        <div class="col-md-12">
            <h2 class="text-center">Что когда сдавать?</h2>
            <h3>Каждый квартал</h3>
            <ol>
                <li>Налоговая декларация по НДС (ИП и ЮЛ на ОСНО)</li>
                <li>Налоговая декларация по налогу на прибыль (ЮЛ на ОСНО)</li>
                <li>Единая (упрощенная) налоговая декларация (ИП и ЮЛ на ОСНО при отсутствии налогооблагаемой базы и движений по расчетному счету)</li>
                <li>Налоговая декларация по ЕНВД (ИП и ЮЛ, состоящие на учете как плательщики ЕНВД)</li>
                <li>Расчет по страховым взносам (ЮЛ и ИП, имеющие работников)</li>
                <li>Расчетная ведомость по средствам Фонда социального страхования РФ  (ЮЛ и ИП, имеющие работников)</li>
            </ol>
            <h3>Каждый год</h3>
            <ol>
                <li>Декларация по налогу, уплачиваемому в связи с применением УСН (ИП и ЮЛ, применяющие УСН)</li>
                <li>Налоговая декларация по ЕСХН (ИП и ЮЛ, являющиеся плательщиками ЕСХН)</li>
                <li>Налоговая декларация по НДФЛ (ИП на ОСНО)</li>
                <li>Бухгалтерская (финансовая) отчетность в ИФНС (ЮЛ независимо от системы налогообложения)</li>
                <li>Бухгалтерская (финансовая) отчетность в Росстат (ЮЛ независимо от системы налогообложения)</li>
                <li>Сведения о страховом стаже застрахованных лиц СЗВ-СТАЖ (ЮЛ и ИП, имеющие работников)</li>
                <li>Сведения о среднесписочной численности (ЮЛ и ИП независимо от наличия работников и системы налогообложения)</li>
            </ol>
            <h3>Каждый месяц</h3>
            <p>Сведения о застрахованных лицах (СЗВ-М) - (юридические лица и ИП, имеющие работников).</p>
        </div>
    </div>
</div>

<?php require_once 'footer.php'; ?>


