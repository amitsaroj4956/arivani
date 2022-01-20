<?php
/*
 * Plugin Name: Contact Form 7 Database Lite
 * Plugin URI: http://ninjateam.org
 * Description: Contact Form 7 Database is a plugin for WordPress allows you save all submitted from contact form 7 to database and display in Contact > Database menu
 * Version: 2.5
 * Author: NinjaTeam
 * Author URI: http://ninjateam.org
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit( 'Direct\'s not allowed' );
}

define( 'CF7D_PREFIX', 'cf7-database' );
define( 'CF7D_FILE', __FILE__ );
define( 'CF7D_PLUGIN_DIR', dirname( __FILE__ ) );
define( 'CF7D_PLUGIN_URL', plugins_url( '', __FILE__ ) );
define( 'CF7D_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );

require_once CF7D_PLUGIN_DIR . '/functions.php';
require_once CF7D_PLUGIN_DIR . '/frontend/init.php';
require_once CF7D_PLUGIN_DIR . '/frontend/save-files.php';

require_once CF7D_PLUGIN_DIR . '/admin/init.php';
require_once CF7D_PLUGIN_DIR . '/admin/Helper.php';
require_once CF7D_PLUGIN_DIR . '/admin/Ajax.php';
require_once CF7D_PLUGIN_DIR . '/admin/unique-id.php';
