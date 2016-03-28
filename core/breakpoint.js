'use strict';

goog.provide('Blockly.Breakpoint');

goog.require('Blockly.Icon');


/**
 * Class for a mutator dialog.
 * @param {!Array.<string>} quarkNames List of names of sub-blocks for flyout.
 * @extends {Blockly.Icon}
 * @constructor
 */
Blockly.Breakpoint = function() {
  Blockly.Breakpoint.superClass_.constructor.call(this, null);
};
goog.inherits(Blockly.Breakpoint, Blockly.Icon);

/**
 * Draw the mutator icon.
 * @param {!Element} group The icon group.
 * @private
 */
Blockly.Breakpoint.prototype.drawIcon_ = function(group) {
  // Red circle.
  Blockly.createSvgElement('circle',
      {'r': '7', 'cx': '10', 'cy': '10', 'stroke': 'black', 'fill': 'red'},
       group);
};

/**
 * Clicking on the icon toggles if the mutator bubble is visible.
 * Disable if block is uneditable.
 * @param {!Event} e Mouse click event.
 * @private
 * @override
 */
Blockly.Breakpoint.prototype.iconClick_ = function(e) {
  if (this.block_.isEditable()) {
    Blockly.Icon.prototype.iconClick_.call(this, e);
  }
};

/**
 * Add or remove the UI indicating if this icon may be clicked or not.
 */
Blockly.Breakpoint.prototype.updateEditable = function() {
  if (this.block_.isEditable()) {
    // Default behaviour for an icon.
    Blockly.Icon.prototype.updateEditable.call(this);
  } else {
    if (this.iconGroup_) {
      Blockly.addClass_(/** @type {!Element} */ (this.iconGroup_),
                        'blocklyIconGroupReadonly');
    }
  }
};

Blockly.Breakpoint.prototype.setVisible = function() {

}

/**
 * Dispose of this mutator.
 */
Blockly.Breakpoint.prototype.dispose = function() {
  this.block_.breakpoint = null;
  Blockly.Icon.prototype.dispose.call(this);
};
