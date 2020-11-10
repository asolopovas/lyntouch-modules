<?php

use Lyntouch\BlocksInit;
use Lyntouch\Bootstrap\App;

add_action('plugins_loaded', [new App, 'init']);
add_action('init', [new BlocksInit, 'setupBlock']);

