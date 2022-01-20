<?php
define( 'WP_CACHE', false ); // Added by WP Rocket

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'arivani_newweb' );

/** MySQL database username */
define( 'DB_USER', 'arivani_newweb' );

/** MySQL database password */
define( 'DB_PASSWORD', 'gnrL688#' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ovaljo9rwifcgah5xypyza4yqdz9cguievr3mebohj08imenp5bcqcubugruykpj' );
define( 'SECURE_AUTH_KEY',  '5pxur2cl6ecr51o0lc5v7wwslclh67b0i48wjdaj73wtna4twbcjm3pwxdj4deln' );
define( 'LOGGED_IN_KEY',    'q56aqmnoreirmp93hvtby4mn5cut9ntzhuhnic9yc69d67v80qaocugiivaaqckp' );
define( 'NONCE_KEY',        'f7phfnxlvf0xalurtjlv5oc4xtwzc59d5x07lzxvsii8owqw0bvzkd7mpqdzsuvj' );
define( 'AUTH_SALT',        'fsp94rxow2yfqsktzwhgasrcb2kmwhg3gbdmjan578oxw5yxi9e8aue4oyjtzhyx' );
define( 'SECURE_AUTH_SALT', '4csf8sklx8uv7kqhnfetuhflwrhgbknbt17vpr8orwhvbn8hmwwpqhwu1mgaxjnm' );
define( 'LOGGED_IN_SALT',   'eerjvwcwxxyeu6usyxixyu4xz3thrm22coavplgfjxqivvkafm8ykvde0lhwc1or' );
define( 'NONCE_SALT',       '99kooaiys6zave9mhgrbpufv3yf3b9mg8h4xv087gak6ptepelaqzgv5nstsho9g' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wppp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
