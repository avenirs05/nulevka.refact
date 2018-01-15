<div class="container-fluid questions-wrapper">
  <div class="row">
    <div class="col-md-12">
      <form id="form-tax-system" action="handler.php" method="post" novalidate>
        <div id="tax-system-section">
          <p class="question">Выберите систему налогообложения:</p>
          
          <?php 
              $taxSystem = array(
                'simple'   => 'Упрощенная',
                'general'  => 'Общая',                 
                'envd'     => 'ЕНВД',
                'patent'   => 'Патент', 
                'not-know' => 'Не знаю'
              );          
              
              echo taxSystemList($taxSystem, 'tax-system'); 
                 
              require_once 'years.php'; 
              require_once 'choice-quarters.php';           
          ?>
          
          <button id="btn-next-tax-system" style="display: none;" onclick="return false;">Дальше</button>
        </div>
      </form>
    </div>
  </div>
</div>

<?php getInputIdsIp($years); ?>