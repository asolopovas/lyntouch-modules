<?php

namespace Lyntouch\Twig;

use Carbon\Carbon;
use Lyntouch\Lib\Media;

class Filters
{

    public function heightByRatio($width, float $ratio = 2 / 3): int
    {
        return heightByRatio((int)$width, $ratio);
    }


}
