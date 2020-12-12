<?php

namespace Lyntouch\Twig;

use Timber\Twig_Function;
use Timber\Twig_Filter;

class TwigHelper
{
  private $twig;

  public function __construct($twig)
  {
    $this->twig = $twig;
  }

  public function functions()
  {
    $class = new Functions();
    $methods = $this->methods($class);

    foreach ($methods as $method) {
      $this->twig->addFunction(new Twig_Function($method->name, [$class, $method->name]));
    }
  }

  public function filters()
  {
    $class = new Filters();
    $methods = $this->methods($class);
    $this->twig->addFilter(new Twig_Filter('wp', function($content) {
      $content = do_blocks($content);
      return $content;
    }, ['is_safe' => ['html']]));

    foreach ($methods as $method) {
      $this->twig->addFilter(new Twig_Filter($method->name, [$class, $method->name]));
    }
  }


  private function methods($class): array
  {
    $reflect = new \ReflectionClass($class);
    $methods = $reflect->getMethods();

    return $methods;
  }
}
