<?php
$image_size = $image_size_width = $image_size_height = '';
extract( $mitech_shortcode_atts );

$box_link = vc_build_link( $box_link );
if ( $image_size === '' ) {
	$image_size = '480x298';
}
?>
<?php if ( $image ) : ?>
	<div class="image">
		<?php
		Mitech_Image::the_attachment_by_id( array(
			'id'     => $image,
			'size'   => $image_size,
			'width'  => $image_size_width,
			'height' => $image_size_height,
		) );
		?>
	</div>
<?php endif; ?>

<div class="content">
	<?php if ( $heading ) : ?>
		<h4 class="heading">
			<?php echo esc_html( $heading ); ?>
		</h4>
	<?php endif; ?>

	<?php if ( $text ) : ?>
		<?php echo '<div class="text">' . $text . '</div>'; ?>
	<?php endif; ?>

	<?php
	if ( $button && $button !== '' ) {

	$button         = vc_build_link( $button );
	$button_classes = 'btn';
	?>
	<?php if ( $button['title'] !== '' ) { ?>
	<?php if ( $box_link['url'] === '' && $button['url'] !== '' ) { ?>
	<a class="<?php echo esc_attr( $button_classes ); ?>"
	   href="<?php echo esc_url( $button['url'] ) ?>"
		<?php if ( $button['target'] !== '' ) { ?>
			target="<?php echo esc_attr( $button['target'] ); ?>"
		<?php } ?>
	>
		<?php } else { ?>
			<?php echo '<div class="' . esc_attr( $button_classes ) . '">'; ?>
		<?php } ?>

		<span class="button-text"><?php echo esc_html( $button['title'] ); ?></span>
		<span class="button-icon far fa-long-arrow-right"></span>

		<?php if ( $box_link['url'] === '' && $button['url'] !== '' ) { ?>
			<?php echo '</a>'; ?>
		<?php } else { ?>
			<?php echo '</div>'; ?>
		<?php } ?>
		<?php } ?>
		<?php } ?>
</div>
