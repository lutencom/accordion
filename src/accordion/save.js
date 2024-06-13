/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
const Save = (props) => {
	const {
		attributes: {
			border,
			borderRadius
		}
	} = props;
	const blockProps = useBlockProps.save({className: "accordion"});
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);
	return (
		<div {...innerBlocksProps}
			 style={{
				 border: `${border.width} ${border.style} ${border.color}`,
				 borderRadius: borderRadius
			 }} />
	)
}
export default Save;
