<?php

namespace Lyntouch\Bootstrap;

use Lyntouch\Http\Controllers\MediaController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

class App
{
    private $request;

    public function init()
    {
        $this->request = Request::createFromGlobals();

        $route = new Route('/media', ['controller' => MediaController::class]);
        $routes = new RouteCollection();
        $routes->add('media', $route);

        // Init RequestContext object
        $context = new RequestContext();
        $context->fromRequest($this->request);
        $matcher = new UrlMatcher($routes, $context);

        try {
            $parameters = $matcher->match($context->getPathInfo());
            $controller = di($parameters['controller']);
            $this->respond($controller);
        } catch (ResourceNotFoundException $e) {
            return;
        }
    }

    public function respond($callback)
    {
        call_user_func_array([$callback, 'processMedia'], [$this->request]);
        exit;
    }

}

