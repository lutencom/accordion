import {__} from '@wordpress/i18n';

import {useBlockProps, useInnerBlocksProps, InspectorControls, InnerBlocks} from '@wordpress/block-editor';
import {__experimentalBorderControl as BorderControl, PanelBody, RangeControl} from '@wordpress/components';
import './editor.scss';
import colors from "../assets/colors";

const TEMPLATE = [["create-block/accordion-element", {}]];

export default function Edit(props) {
	const {
		attributes: {
			border,
			borderRadius
		},
		setAttributes
	} = props;
	const blockProps = useBlockProps({className: "accordion"});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
			allowedBlocks: ["create-block/accordion-element"],
			template: TEMPLATE,
			templateLock: false,
			renderAppender: () => (
				<InnerBlocks.ButtonBlockAppender/>
			),
		}
	)
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Border Settings', 'accordion')}>
					<BorderControl /*control for border editing of Accordion wrapper*/
						colors={colors}
						onChange={(value) => setAttributes({border: value})}
						value={border}
						withSlider={true}
					/>
					<RangeControl /*control which adds border radius of Accordion wrapper*/
						label={__('Border Radius', 'accordion')}
						value={borderRadius}
						onChange={(borderRadius) =>
							setAttributes({borderRadius})
						}
						min={0}
						max={50}
					/>
				</PanelBody>
			</InspectorControls>
			<div className='accordion-wrapper'>
				<div {...innerBlocksProps}
					 style={{
						 border: `${border.width} ${border.style} ${border.color}`,
						 borderRadius: borderRadius
					 }}
				/>
			</div>
		</>
	);
}
