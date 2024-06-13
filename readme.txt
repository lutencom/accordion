=== Accordion ===
Contributors:      Maria Claichnet
Tags:              Accordion
Tested up to:      6.1
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

== Description ==

Gutenberg block for creating accordion drop-downs.

== Description ==

Accordion is a simple plugin that adds a Gutenberg block for adding accordion drop-downs to your pages.

= Features =

* Adds a Gutenberg block for adding accordions to your site.
* Supports multiple accordions with individual settings for each accordion item.
* Fully responsive.
* Support for item IDs and direct links.
* Accessible (for users requiring tabbed keyboard navigation control).git

= Optional Features =

* Open individual accordion items by default.
* Disable auto closing of accordion items.
* Manually close items by clicking the title again.
* Set defaults to be applied to all new accordion items or reset a specific accordion item to the defaults.

= Output =

The plugin will ultimately output following HTML (simplified for this example):

<div class="wp-block-create-block-accordion-element">
	<h3 class="accordion-heading">
		<button class="accordion-trigger" aria-expanded="true" aria-controls="sectID" id="accordionID"
			<span class="accordion-title">Title of accordion</span>
			<span class="accordion-icon">Icon</span>
		</button>
	</h3>
	<div id="secteID" role="region" class="accordion-panel expanded" aria-labelledby="accordionID">
		<p>
			Content of accordion panel
		</p>
	</div>
</div>

= Custom CSS =

You can use the following CSS classes to customize the look of the accordion.
	.wp-block-create-block-accordion {} /*The accordion container*/
	.wp-block-create-block-accordion-element {} /* The accordion item container */
	.accordion-heading {} /* An accordion item title */
	.accordion-panel {} /* An accordion item panel */
	.accordion-panel p {} /* An accordion item panel content */
	.accordion-panel.expanded {} /* An accordion item panel which is expanded */
	.accordion-panel.expanded {} /* An accordion item panel which is collapsed */

== Installation ==
1. Upload the 'accordion-blocks' folder to the '/wp-content/plugins/' directory.
2. Activate the plugin through the Plugins menu in WordPress.
3. Add the accordions to your content.

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/accordion` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Changelog ==

= 0.1.0 =
* Release

== Arbitrary section ==

You may provide arbitrary sections, in the same format as the ones above. This may be of use for extremely complicated
plugins where more information needs to be conveyed that doesn't fit into the categories of "description" or
"installation." Arbitrary sections will be shown below the built-in sections outlined above.
