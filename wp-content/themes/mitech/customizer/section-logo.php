<?php
$section  = 'logo';
$priority = 1;
$prefix   = 'logo_';

Mitech_Kirki::add_field( 'theme', array(
	'type'        => 'radio-buttonset',
	'settings'    => 'logo',
	'label'       => esc_html__( 'Default Logo', 'mitech' ),
	'description' => esc_html__( 'Choose default logo.', 'mitech' ),
	'section'     => $section,
	'priority'    => $priority++,
	'default'     => 'logo_dark',
	'choices'     => array(
		'logo_dark'  => esc_html__( 'Dark Logo', 'mitech' ),
		'logo_light' => esc_html__( 'Light Logo', 'mitech' ),
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'     => 'image',
	'settings' => 'logo_dark',
	'label'    => esc_html__( 'Dark Version', 'mitech' ),
	'section'  => $section,
	'priority' => $priority++,
	'default'  => array(
		'url' => MITECH_THEME_IMAGE_URI . '/logo/dark-logo.png',
	),
	'choices'  => array(
		'save_as' => 'array',
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'     => 'image',
	'settings' => 'logo_light',
	'label'    => esc_html__( 'Light Version', 'mitech' ),
	'section'  => $section,
	'priority' => $priority++,
	'default'  => array(
		'url' => MITECH_THEME_IMAGE_URI . '/logo/light-logo.png',
	),
	'choices'  => array(
		'save_as' => 'array',
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'        => 'number',
	'settings'    => 'logo_width',
	'label'       => esc_html__( 'Logo Width', 'mitech' ),
	'description' => esc_html__( 'For e.g: 200', 'mitech' ),
	'section'     => $section,
	'priority'    => $priority++,
	'default'     => '160',
	'output'      => array(
		array(
			'element'  => '.branding__logo img,
			.error404--header .branding__logo img
			',
			'property' => 'width',
			'units'    => 'px',
		),
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'        => 'spacing',
	'settings'    => $prefix . 'padding',
	'label'       => esc_html__( 'Logo Padding', 'mitech' ),
	'description' => esc_html__( 'For e.g: 30px 0px 30px 0px', 'mitech' ),
	'section'     => $section,
	'priority'    => $priority++,
	'default'     => array(
		'top'    => '15px',
		'right'  => '0px',
		'bottom' => '15px',
		'left'   => '0px',
	),
	'output'      => array(
		array(
			'element'  => '.branding__logo img',
			'property' => 'padding',
		),
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'     => 'custom',
	'settings' => $prefix . 'group_title_' . $priority++,
	'section'  => $section,
	'priority' => $priority++,
	'default'  => '<div class="big_title">' . esc_html__( 'Sticky Logo', 'mitech' ) . '</div>',
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'        => 'dimension',
	'settings'    => 'sticky_logo_width',
	'label'       => esc_html__( 'Logo Width', 'mitech' ),
	'description' => esc_html__( 'Controls the width of sticky header logo. For e.g: 120', 'mitech' ),
	'section'     => $section,
	'priority'    => $priority++,
	'default'     => '160',
	'output'      => array(
		array(
			'element'  => '
			.header-sticky-both .headroom.headroom--not-top .branding img,
			.header-sticky-up .headroom.headroom--not-top.headroom--pinned .branding img,
			.header-sticky-down .headroom.headroom--not-top.headroom--unpinned .branding img
			',
			'property' => 'width',
			'units'    => 'px',
		),
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'        => 'spacing',
	'settings'    => 'sticky_logo_padding',
	'label'       => esc_html__( 'Logo Padding', 'mitech' ),
	'description' => esc_html__( 'Controls the padding of sticky header logo.', 'mitech' ),
	'section'     => $section,
	'priority'    => $priority++,
	'default'     => array(
		'top'    => '0',
		'right'  => '0',
		'bottom' => '0',
		'left'   => '0',
	),
	'output'      => array(
		array(
			'element'  => '.headroom--not-top .branding__logo .sticky-logo',
			'property' => 'padding',
		),
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'     => 'custom',
	'settings' => $prefix . 'group_title_' . $priority++,
	'section'  => $section,
	'priority' => $priority++,
	'default'  => '<div class="big_title">' . esc_html__( 'Mobile Menu Logo', 'mitech' ) . '</div>',
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'        => 'image',
	'settings'    => 'mobile_menu_logo',
	'label'       => esc_html__( 'Logo', 'mitech' ),
	'description' => esc_html__( 'Select an image file for mobile menu logo.', 'mitech' ),
	'section'     => $section,
	'priority'    => $priority++,
	'default'     => array(
		'url' => MITECH_THEME_IMAGE_URI . '/logo/dark-logo.png',
	),
	'choices'     => array(
		'save_as' => 'array',
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'        => 'number',
	'settings'    => 'mobile_logo_width',
	'label'       => esc_html__( 'Logo Width', 'mitech' ),
	'description' => esc_html__( 'Controls the width of mobile menu logo. For e.g: 120', 'mitech' ),
	'section'     => $section,
	'priority'    => $priority++,
	'default'     => '160',
	'output'      => array(
		array(
			'element'  => '.page-mobile-popup-logo img',
			'property' => 'width',
			'units'    => 'px',
		),
	),
) );
