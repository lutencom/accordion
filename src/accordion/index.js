/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import {registerBlockType} from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import '../assets/icons/style.css'
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

const accordionIcon = (
	<svg xmlns="http://www.w3.org/2000/svg"
		 viewBox="0 0 512 512"
		 aria-hidden="true"
		 focusable="false">
		<path
			d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM448 192V416H64V192H448zM436.7 96c7.1 0 10.7 8.6 5.7 13.7l-36.7 36.7c-3.1 3.1-8.2 3.1-11.3 0l-36.7-36.7c-5-5-1.5-13.7 5.7-13.7h73.4zM128 232c-13.3 0-24 10.7-24 24s10.7 24 24 24H384c13.3 0 24-10.7 24-24s-10.7-24-24-24H128zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H384c13.3 0 24-10.7 24-24s-10.7-24-24-24H128z"/>
	</svg>
);
function ButtonBlockAppender( { rootClientId } ) {
	return (
		<Inserter
			rootClientId={ rootClientId }
			renderToggle={ ( { onToggle, disabled } ) => (
				<IconButton
					className="my-button-block-appender"
					onClick={ onToggle }
					disabled={ disabled }
					label="Add a Block"
					icon="plus"
				/>
			) }
			isAppender
		/>
	);
}

registerBlockType(metadata.name, {
	icon: accordionIcon,
	edit: Edit,
	save,
});