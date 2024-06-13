import {__} from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	AlignmentToolbar,
	BlockControls,
	ColorPaletteControl
} from '@wordpress/block-editor';
import {useRef} from "react";
import {__experimentalBoxControl as BoxControl} from '@wordpress/components';
import {__experimentalBorderControl as BorderControl} from '@wordpress/components';
import {ToolbarGroup, FontSizePicker, PanelBody, ToggleControl, RangeControl,} from '@wordpress/components';

import './editor.scss';
import colors from "../assets/colors";

export default function Edit(props) {
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
		},
		clientId, setAttributes
	} = props;
	const panelReference = useRef();
	if (panelReference.current) {
		setAttributes({
			panelId: clientId,
			panelHeight: panelReference.current.scrollHeight
		});
	}
	const blockProps = useBlockProps();
	const togglePanel = () => {
		setAttributes({
			isPanelExpanded: !isPanelExpanded,
		})
	}
	const titleHandleChange = (newContent) => {
		setAttributes({panelTitle: newContent})
	}
	const contentHandleChange = (newContent) => {
		setAttributes({
			panelContent: newContent,
			panelHeight: panelReference.current.scrollHeight
		})
	}
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Toggle Settings', 'accordion-element')}>
					<ToggleControl
						checked={!!isPanelExpanded}
						label={__(
							'Keep panel expanded?',
							'accordion-element'
						)}
						help={
							isPanelExpanded
								? 'Keep panel expanded.'
								: 'Keep panel collapsed.'
						}
						onChange={togglePanel}
					/>
				</PanelBody>
				<PanelBody title={__('Inner Border Settings', 'accordion-element')}>
					<BorderControl
						colors={colors}
						onChange={(value) => setAttributes({border: value})}
						value={border}
						withSlider={true}
					/>
				</PanelBody>
				<PanelBody title={__('Panel title settings', 'accordion-element')}>
					<FontSizePicker
						fontSizes={[
							{
								name: __('Medium'),
								slug: 'small',
								size: 20,
							},
							{
								name: __('Big'),
								slug: 'big',
								size: 24,
							},
						]}
						value={24}
						fallbackFontSize={24}
						onChange={(newFontSize) =>
							setAttributes({
								titleFontSize: newFontSize,
							})}
						withSlider
					/>
					<ColorPaletteControl
						label={__(
							'Title color',
							'Accordion element'
						)}
						value={titleColor}
						colors={colors}
						onChange={(newValue) => setAttributes({titleColor: newValue})}
					/>
					<BoxControl
						values={titlePadding}
						label={__(
							'Title Padding',
							'Accordion element'
						)}
						sides={['horizontal', 'vertical', 'left', 'right']}
						splitOnAxis={true}
						allowReset={false}
						onChange={(newValue) =>
							setAttributes({
								...titlePadding,
								titlePadding: {
									top: newValue.top,
									left: newValue.left,
									right: newValue.right,
									bottom: newValue.bottom,
								},
							})
						}
					/>
					<BoxControl
						values={titleMargin}
						label={__(
							'Title Margin',
							'Accordion element'
						)}
						sides={['horizontal', 'vertical', 'left', 'right']}
						splitOnAxis={true}
						allowReset={false}
						onChange={(newValue) =>
							setAttributes({
								...titleMargin,
								titleMargin: {
									top: newValue.top,
									left: newValue.left,
									right: newValue.right,
									bottom: newValue.bottom,
								},
							})
						}
					/>
				</PanelBody>
				<PanelBody title={__('Panel Content settings', 'accordion-element')}>
					<FontSizePicker
						fontSizes={[
							{
								name: __('Medium'),
								slug: 'small',
								size: 20,
							},
							{
								name: __('Big'),
								slug: 'big',
								size: 24,
							},
						]}
						value={20}
						fallbackFontSize={20}
						onChange={(newFontSize) =>
							setAttributes({
								contentFontSize: newFontSize,
							})}
						withSlider
					/>
					<ColorPaletteControl
						label={__(
							'Content color',
							'Accordion element'
						)}
						value={contentColor}
						colors={colors}
						onChange={(newValue) => setAttributes({contentColor: newValue})}
					/>
					<BoxControl
						values={contentPadding}
						label={__(
							'Content Padding',
							'Accordion element'
						)}
						sides={['horizontal', 'vertical', 'left', 'right']}
						splitOnAxis={true}
						allowReset={false}
						onChange={(newValue) =>
							setAttributes({
								...contentPadding,
								contentPadding: {
									top: newValue.top,
									left: newValue.left,
									right: newValue.right,
									bottom: newValue.bottom,
								},
							})
						}
					/>
					<BoxControl
						values={contentMargin}
						label={__(
							'Content Margin',
							'Accordion element'
						)}
						sides={['horizontal', 'vertical', 'left', 'right']}
						splitOnAxis={true}
						allowReset={false}
						onChange={(newValue) =>
							setAttributes({
								...contentMargin,
								contentMargin: {
									top: newValue.top,
									left: newValue.left,
									right: newValue.right,
									bottom: newValue.bottom,
								},
							})
						}
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<ToolbarGroup>
					<AlignmentToolbar
						value={panelAlign}
						onChange={(nextAlign) => {
							setAttributes({
								panelAlign: nextAlign,
							});
						}}
					/>
				</ToolbarGroup>
			</BlockControls>
			<div {...blockProps}
				 style={{
					 borderTop: `${border.width} ${border.style} ${border.color}`
				 }}>
				<h3 className='accordion-heading'>
					<button className="accordion-trigger"
							aria-expanded={isPanelExpanded}
							aria-controls={"sect" + panelId}
							id={"accordion" + panelId + "ID"}
							onClick={togglePanel}
					>
						<RichText {...blockProps} tagName='span'
								  className='accordion-title'
								  onChange={titleHandleChange}
								  value={panelTitle}
								  style={{
									  color: titleColor,
									  textAlign: panelAlign,
									  fontSize: titleFontSize,
									  padding: `${titlePadding.top} ${titlePadding.left} ${titlePadding.bottom} ${titlePadding.right}`,
									  margin: `${titleMargin.top} ${titleMargin.left} ${titleMargin.bottom} ${titleMargin.right}`,
								  }}
								  placeholder={__('First item of accordion', 'accordion-element')}
						/>
						<span className="accordion-icon"> </span>
					</button>
				</h3>
				<div ref={panelReference}
					 id={"sect" + panelId}
					 role="region"
					 className={`accordion-panel ${isPanelExpanded ? 'expanded' : 'collapsed'}`}
					 aria-labelledby={"accordion" + panelId + "ID"}
					 style={{
						 height: isPanelExpanded ? panelHeight : 0
					 }}>
					<RichText
						tagName='p'
						onChange={contentHandleChange}
						style={{
							color: contentColor,
							textAlign: panelAlign,
							fontSize: contentFontSize,
							padding: `${contentPadding.top} ${contentPadding.left} ${contentPadding.bottom} ${contentPadding.right}`,
							margin: `${contentMargin.top} ${contentMargin.left} ${contentMargin.bottom} ${contentMargin.right}`,
						}}
						value={panelContent}
						placeholder={__('Lorem ipsum dolor sit amet consectetur. Mauris sit ullamcorper vitae sit adipiscing elementum nam. Ut pretium ipsum odio volutpat hendrerit. Eleifend sit nibh morbi tellus ultricies pellentesque netus commodo. Turpis dignissim hendrerit id lobortis auctor congue sagittis quam purus.', 'accordion-element')}
					/>
				</div>
			</div>
		</>
	);
}
