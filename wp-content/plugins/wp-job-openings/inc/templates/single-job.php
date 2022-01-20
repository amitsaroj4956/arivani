<?php
/**
 * Template for displaying single job listing
 *
 * This template can be overridden by copying it to currenttheme/wp-job-openings/single-job.php
 *
 * @package wp-job-openings
 * @version 1.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

/**
 * before_awsm_jobs_main_content hook
 *
 * @since 1.1
 */
do_action( 'before_awsm_jobs_main_content' );

?>
<section class="elementor-section elementor-top-section elementor-element elementor-element-27d9362 elementor-section-full_width elementor-section-height-min-height elementor-section-items-stretch elementor-section-stretched elementor-section-height-default" data-id="27d9362" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
   <div class="elementor-container elementor-column-gap-default">
      <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2d9eb34" data-id="2d9eb34" data-element_type="column">
         <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-aa02ead elementor-widget elementor-widget-heading" data-id="aa02ead" data-element_type="widget" data-widget_type="heading.default">
               <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">Career</h2>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
	<div class="awsm-job-main awsm-job-single-content">
		<div class="awsm-job-container">
			<?php
				/**
				 * before_awsm_jobs_single_loop hook
				 *
				 * Fires before The Loop to query for single job listing
				 *
				 * @since 1.1
				 */
				do_action( 'before_awsm_jobs_single_loop' );

			while ( have_posts() ) {
				the_post();

				/**
				 * before_awsm_jobs_single_content hook
				 *
				 * @hooked awsm_jobs_single_title
				 * @hooked awsm_jobs_single_featured_image
				 *
				 * @since 1.1
				 */
				do_action( 'before_awsm_jobs_single_content' );

				the_content();

				/**
				 * after_awsm_jobs_single_content hook
				 *
				 * @since 1.1
				 */
				do_action( 'after_awsm_jobs_single_content' );
			}

				/**
				 * after_awsm_jobs_single_loop hook
				 *
				 * Fires after The Loop
				 *
				 * @since 1.1
				 */
				do_action( 'after_awsm_jobs_single_loop' );
			?>
		</div>
	</div>
<?php
/**
 * after_awsm_jobs_main_content hook
 *
 * @since 1.1
 */
do_action( 'after_awsm_jobs_main_content' );

get_footer();
