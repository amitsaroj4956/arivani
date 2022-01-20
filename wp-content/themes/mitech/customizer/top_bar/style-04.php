<?php
$section  = 'top_bar_style_04';
$priority = 1;
$prefix   = 'top_bar_style_04_';

Mitech_Kirki::add_field( 'theme', array(
	'type'     => 'textarea',
	'settings' => $prefix . 'text',
	'label'    => esc_html__( 'Text', 'mitech' ),
	'section'  => $section,
	'priority' => $priority++,
	'default'  => wp_kses( sprintf( __( '<i class="fa fa-map-marker-alt"></i>  58 Howard Street #2 San Francisco', 'mitech' ), defined( 'MITECH_TOP_BAR_LINK' ) ? MITECH_TOP_BAR_LINK : '#' ), 'mitech-default' ),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'         => 'repeater',
	'settings'     => $prefix . 'info',
	'label'        => esc_html__( 'Info List', 'mitech' ),
	'section'      => $section,
	'priority'     => $priority++,
	'button_label' => esc_html__( 'Add new info', 'mitech' ),
	'row_label'    => array(
		'type'  => 'field',
		'field' => 'text',
	),
	'default'      => array(
		array(
			'text'       => wp_kses( '<strong>0122 8899900</strong>', 'mitech-default' ),
			'url'        => 'tel:01228899900',
			'icon_class' => 'fa fa-phone',
		),
	),
	'fields'       => array(
		'text'       => array(
			'type'    => 'textarea',
			'label'   => esc_html__( 'Title', 'mitech' ),
			'default' => '',
		),
		'url'        => array(
			'type'    => 'text',
			'label'   => esc_html__( 'Link', 'mitech' ),
			'default' => '',
		),
		'icon_class' => array(
			'type'    => 'text',
			'label'   => esc_html__( 'Icon Class', 'mitech' ),
			'default' => '',
		),
	),
) );

Mitech_Customize::instance()->field_language_switcher_enable( array(
	'settings' => $prefix . 'language_switcher_enable',
	'section'  => $section,
	'priority' => $priority++,
	'default'  => '1',
) );

Mitech_Customize::instance()->field_user_link_enable( array(
	'settings' => $prefix . 'user_link_enable',
	'section'  => $section,
	'priority' => $priority++,
	'default'  => '1',
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'      => 'slider',
	'settings'  => $prefix . 'padding_top',
	'label'     => esc_html__( 'Padding top', 'mitech' ),
	'section'   => $section,
	'priority'  => $priority++,
	'default'   => 0,
	'transport' => 'auto',
	'choices'   => array(
		'min'  => 0,
		'max'  => 200,
		'step' => 1,
	),
	'output'    => array(
		array(
			'element'  => '.top-bar-04',
			'property' => 'padding-top',
			'units'    => 'px',
		),
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'      => 'slider',
	'settings'  => $prefix . 'padding_bottom',
	'label'     => esc_html__( 'Padding bottom', 'mitech' ),
	'section'   => $section,
	'priority'  => $priority++,
	'default'   => 0,
	'transport' => 'auto',
	'choices'   => array(
		'min'  => 0,
		'max'  => 200,
		'step' => 1,
	),
	'output'    => array(
		array(
			'element'  => '.top-bar-04',
			'property' => 'padding-bottom',
			'units'    => 'px',
		),
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'        => 'kirki_typography',
	'settings'    => $prefix . 'typography',
	'label'       => esc_html__( 'Typography', 'mitech' ),
	'description' => esc_html__( 'These settings control the typography of texts of top bar section.', 'mitech' ),
	'section'     => $section,
	'priority'    => $priority++,
	'transport'   => 'auto',
	'default'     => array(
		'font-family'    => '',
		'variant'        => '500',
		'line-height'    => '1.78',
		'letter-spacing' => '',
		'font-size'      => '14px',
	),
	'output'      => array(
		array(
			'element' => '.top-bar-04, .top-bar-04 a',
		),
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'        => 'color-alpha',
	'settings'    => $prefix . 'bg_color',
	'label'       => esc_html__( 'Background', 'mitech' ),
	'description' => esc_html__( 'Controls the background color of top bar.', 'mitech' ),
	'section'     => $section,
	'priority'    => $priority++,
	'transport'   => 'auto',
	'default'     => '#fff',
	'output'      => array(
		array(
			'element'  => '.top-bar-04',
			'property' => 'background-color',
		),
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'      => 'slider',
	'settings'  => $prefix . 'border_width',
	'label'     => esc_html__( 'Border Bottom Width', 'mitech' ),
	'section'   => $section,
	'priority'  => $priority++,
	'default'   => 1,
	'transport' => 'auto',
	'choices'   => array(
		'min'  => 0,
		'max'  => 50,
		'step' => 1,
	),
	'output'    => array(
		array(
			'element'  => '.top-bar-04',
			'property' => 'border-bottom-width',
			'units'    => 'px',
		),
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'        => 'color-alpha',
	'settings'    => $prefix . 'border_color',
	'label'       => esc_html__( 'Border Bottom Color', 'mitech' ),
	'description' => esc_html__( 'Controls the border bottom color of top bar.', 'mitech' ),
	'section'     => $section,
	'priority'    => $priority++,
	'transport'   => 'auto',
	'default'     => '#eee',
	'output'      => array(
		array(
			'element'  => '.top-bar-04',
			'property' => 'border-bottom-color',
		),
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'        => 'color',
	'settings'    => $prefix . 'text_color',
	'label'       => esc_html__( 'Text', 'mitech' ),
	'description' => esc_html__( 'Controls the color of text on top bar.', 'mitech' ),
	'section'     => $section,
	'priority'    => $priority++,
	'transport'   => 'auto',
	'default'     => '#696969',
	'output'      => array(
		array(
			'element'  => '.top-bar-04',
			'property' => 'color',
		),
	),
) );

Mitech_Kirki::add_field( 'theme', array(
	'type'        => 'multicolor',
	'settings'    => $prefix . 'link_color',
	'label'       => esc_html__( 'Link Color', 'mitech' ),
	'description' => esc_html__( 'Controls the color of links on top bar.', 'mitech' ),
	'section'     => $section,
	'priority'    => $priority++,
	'transport'   => 'auto',
	'choices'     => array(
		'default' => esc_attr__( 'Default', 'mitech' ),
		'hover'   => esc_attr__( 'Hover', 'mitech' ),
	),
	'default'     => array(
		'default' => Mitech::TEXT_COLOR,
		'hover'   => Mitech::PRIMARY_COLOR,
	),
	'output'      => array(
		array(
			'choice'   => 'default',
			'element'  => '.top-bar-04 a',
			'property' => 'color',
		),
		array(
			'choice'   => 'hover',
			'element'  => '.top-bar-04 a:hover, .top-bar-04 a:focus',
			'property' => 'color',
		),
	),
) );
