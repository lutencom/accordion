import {useBlockProps, RichText} from '@wordpress/block-editor';

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
