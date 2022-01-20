<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitbd37ddb10176e9c1883f8b513bfff39b
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WPFormsGeolocation\\' => 19,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WPFormsGeolocation\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitbd37ddb10176e9c1883f8b513bfff39b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitbd37ddb10176e9c1883f8b513bfff39b::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}