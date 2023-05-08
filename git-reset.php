<?php
echo "Are you sure you want to git reset --hard HEAD (y/n): ";
$confirm = readline();

if (strtolower($confirm) != 'y') {
    exit;
}
$output = shell_exec('"C:\Program Files\Git\bin\bash.exe" -c "git reset --hard HEAD"');
echo $output;


