import {useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';
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
				 border:`${border.width} ${border.style} ${border.color}`,
				 borderRadius: borderRadius
			 }} />
	)
}
export default Save;
