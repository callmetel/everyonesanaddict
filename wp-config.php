<?php
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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u438631152_QouLA' );

/** MySQL database username */
define( 'DB_USER', 'u438631152_KYctv' );

/** MySQL database password */
define( 'DB_PASSWORD', '683DMgVbBd' );

/** MySQL hostname */
define( 'DB_HOST', 'mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'C&`1.:JQVLj^f{k{<B5N?Ti}b[9.kRhwfHouEKOW@k(h0h#y n1|~[>>>V{*><5h' );
define( 'SECURE_AUTH_KEY',   '~*WYLXSK-,be(;k|.Wr4ZIO/x:o1g#/m; a.(w(D~M04d?|dr2<yX-m9CLB%$o% ' );
define( 'LOGGED_IN_KEY',     'VO |x[iB7n*Wa,NYfZzh+hi=,*Td>`{1,B]j`bOB rqV+.YzBgd5U?X%M0<BP`}L' );
define( 'NONCE_KEY',         'PX10aYmBIY}0,cf9Jo4?ITs`!-/6J!Q_8O&1Z?VCzVpN_b,6J9{FF>Pq6^de*T@y' );
define( 'AUTH_SALT',         'i^Q:fvd+ f?LSZnp`se(r`<e`iFlqb<Uv;0dw0s?H^kp+)8GLRi}S_05J-6R@8Rm' );
define( 'SECURE_AUTH_SALT',  'DbcFuE,GbB..lPM&>`xQb@^F`NFnE(b7Hav?!xO8iV2wXA?jl&#!$%&1+R,),qqr' );
define( 'LOGGED_IN_SALT',    'U;N12eFHhm[1MA7=p6C^f)(~v{clKyigJg[r.-=Yf])XbAQqi]7,FSN9#{8[$~$w' );
define( 'NONCE_SALT',        '+cYQCg+q[hv-[e&~e?usq|YuG7V1joE51D>OktO=xD3^}G:3Xahc^Rm-,NVF.:u-' );
define( 'WP_CACHE_KEY_SALT', 'XzyR1vu>&-?]V+k*1q BAQtF?0P<7.Z?XpX;8>2cWJy(h0)^Wpf;L|)%EC[RB;W=' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
