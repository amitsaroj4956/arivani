<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit027f5cffaeabdb8fcca9f3c10f34efed
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WPFormsWebhooks\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WPFormsWebhooks\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit027f5cffaeabdb8fcca9f3c10f34efed::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit027f5cffaeabdb8fcca9f3c10f34efed::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
