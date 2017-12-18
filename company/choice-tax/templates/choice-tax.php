<?php foreach ($taxSystem as $key => $value): ?> 
    <label for="<?=$key?>">
        <input id="<?=$key?>" type="radio" name="<?=$attrName?>" value="<?=$key?>">
        <?=$value?>
    </label>
    <br>
<?php endforeach; ?>
