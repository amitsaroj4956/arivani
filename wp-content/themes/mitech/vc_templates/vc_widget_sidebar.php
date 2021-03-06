<?php
defined( 'ABSPATH' ) || exit;

/**
 * Shortcode attributes
 *
 * @var $atts
 * @var $title
 * @var $el_class
 * @var $sidebar_id
 * Shortcode class
 * @var $this WPBakeryShortCode_VC_Widget_sidebar
 */
$title = $el_class = $sidebar_id = $sidebar_position = '';
$atts  = vc_map_get_attributes( $this->getShortcode(), $atts );
extract( $atts );

if ( '' === $sidebar_id ) {
	return null;
}

$el_class = $this->getExtraClass( $el_class );

ob_start();
Mitech_Templates::generated_sidebar( $sidebar_id );
$sidebar_value = ob_get_contents();
ob_end_clean();

$sidebar_value = trim( $sidebar_value );
$sidebar_value = ( '<li' === substr( $sidebar_value, 0, 3 ) ) ? '<ul>' . $sidebar_value . '</ul>' : $sidebar_value;

$css_class = apply_filters( VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, 'wpb_widgetised_column wpb_content_element' . $el_class, $this->settings['base'], $atts );

$css_class .= " page-sidebar page-sidebar-$sidebar_position";
?>
<div class="<?php echo esc_attr( $css_class ); ?>">
	<div class="page-sidebar-inner">
		<div class="page-sidebar-content">
			<?php
			echo wpb_widget_title( array(
					'title'      => $title,
					'extraclass' => 'wpb_widgetised_column_heading',
				) ) . $sidebar_value; ?>
		</div>
	</div>
</div>
