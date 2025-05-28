<?php

use Flarum\Database\Migration;

return Migration::addSettings([
    'piwind-quiet-edits.grace_period' => '120',
    'piwind-quiet-edits.ignore_case_differences' => true,
    'piwind-quiet-edits.ignore_whitespace_differences' => true,
]);