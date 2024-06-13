/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, RichText} from '@wordpress/block-editor';
import {Button} from '@wordpress/components';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save(props) {
	const {
		attributes: {
			panelAlign,
			panelTitle,
			titleFontSize,
			titlePadding,
			titleMargin,
			contentFontSize,
			contentPadding,
			contentMargin,
			panelContent,
			panelId,
			isPanelExpanded,
			panelHeight,
			border,
			titleColor,
			contentColor
		}
	} = props;
	return (
		<div {...useBlockProps.save()}
			 style={{
				 borderTop: `${border.width} ${border.style} ${border.color}`
			 }}>
			<h3 className='accordion-heading'>
				<button className="accordion-trigger"
						aria-expanded={isPanelExpanded}
						aria-controls={"sect" + panelId}
						id={"accordion" + panelId + "ID"}
				>
					<RichText.Content
						tagName='span'
						className='accordion-title'
						value={panelTitle}
						style={{
							color: titleColor,
							textAlign: panelAlign,
							fontSize: titleFontSize,
							padding: `${titlePadding.top} ${titlePadding.left} ${titlePadding.bottom} ${titlePadding.right}`,
							margin: `${titleMargin.top} ${titleMargin.left} ${titleMargin.bottom} ${titleMargin.right}`,
						}}
					/>
					<span className="accordion-icon"> </span>
				</button>
			</h3>
			<div
				id={"sect" + panelId}
				role="region"
				className={`accordion-panel ${isPanelExpanded ? 'expanded' : 'collapsed'}`}
				aria-labelledby={"accordion" + panelId + "ID"}
				style={{
					height: isPanelExpanded ? panelHeight : 0
				}}>
				<RichText.Content
					tagName='p'
					style={{
						color: contentColor,
						textAlign: panelAlign,
						fontSize: contentFontSize,
						padding: `${contentPadding.top} ${contentPadding.left} ${contentPadding.bottom} ${contentPadding.right}`,
						margin: `${contentMargin.top} ${contentMargin.left} ${contentMargin.bottom} ${contentMargin.right}`
					}}
					value={panelContent}
				/>
			</div>
		</div>
	);
}
