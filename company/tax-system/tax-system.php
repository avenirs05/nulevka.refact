<div class="container-fluid questions-wrapper">
  <div class="row">
    <div class="col-md-12">
      <form id="form-tax-system" action="handler.php" method="post" novalidate>
        <div id="tax-system-section">
            <p>Выберите систему налогообложения:</p>
            <?php 
                $taxSystem = array(
                  'general' => 'Общая', 
                  'simple'  => 'Упрощенная', 
                  'envd'    => 'ЕНВД', 
                  'not-know' => 'Не знаю'
                  );          
                echo taxSystemList($taxSystem, 'tax-system'); 
                   
                require_once 'choice-quarters.php'; 
            ?>
            <button id="btn-next-tax-system" style="display: none;" onclick="return false;">Дальше</button>
        </div>
      </form>
    </div>
  </div>
</div>

<?php getInputIds ($anotherQuartersAttr); ?>