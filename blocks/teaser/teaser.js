/* /blocks/teaser/teaser.js */

/**
 * Bock options are applied as classes to the block's DOM
 * element along side the `block` and `<block-name>` classes.
 *
 * @param {HTMLElement} block represents the block's' DOM element/tree
 * */
function getOptions(block) {
  /**
     * Get the block's classes, excluding 'block' and 'teaser'.
     *
     * @param {HTMLElement} block represents the block's' DOM element/tree
     * @returns {string[]} an array of classes
     */
  return [...block.classList].filter((c) => !['block', 'teaser'].includes(c));
}

/**
* Adds a zoom effect to image using event listeners.
*
* When the CTA button is hovered over, the image zooms in.
*
* @param {HTMLElement} block represents the block's' DOM tree
*/
function addEventListeners(block) {
  block.querySelector('.button').addEventListener('mouseover', () => {
    block.querySelector('.image').classList.add('zoom');
  });

  block.querySelector('.button').addEventListener('mouseout', () => {
    block.querySelector('.image').classList.remove('zoom');
  });
}

/**
 * Entry point to block's JavaScript.
 *
 * @param {HTMLElement} block represents the block's' DOM element/tree
 */
/**
 * Must be exported as default and accept a block's DOM element.
 * This function is called by the project's style.js, and passed the block's element.
 *
 * @param {HTMLElement} block represents the block's' DOM element/tree
 */
export default function decorate(block) {
  /**
     * This JavaScript makes minor adjustments to the block's DOM
     *
     * @param {HTMLElement} block represents the block's' DOM element/tree
     */

  /**
     * Common treatments for all options
     *
     * @param {HTMLElement} block represents the block's' DOM element/tree
     */
  block.querySelector(':scope > div:last-child').classList.add('content');
  block.querySelector('h1,h2,h3,h4,h5,h6').classList.add('title');
  block.querySelector('img').classList.add('image');

  /**
     * Process each paragraph and mark it as text or terms-and-conditions
     *
     * @param {HTMLElement} block represents the block's' DOM element/tree
     */
  block.querySelectorAll('p').forEach((p) => {
    const innerHTML = p.innerHTML?.trim();
    if (innerHTML?.startsWith('Terms and conditions:')) {
      p.classList.add('terms-and-conditions');
    }
  });

  /**
     * Conditional treatments for specific options
     *
     * @param {HTMLElement} block represents the block's' DOM element/tree
     */
  if (getOptions(block).includes('side-by-side')) {
    /**
        * For side-by-side teaser, add the image-wrapper a higher-level div to support CSS
        *
        * @param {HTMLElement} block represents the block's' DOM element/tree
        */
    block.querySelector(':scope > div:first-child').classList.add('image-wrapper');
    /**
         * For the default option, add the image-wrapper to the picture element to support CSS
         *
         * @param {HTMLElement} block represents the block's' DOM element/tree
         */
  } else if (!getOptions(block)) {
    /**
        * For the default option, add the image-wrapper to the picture element to support CSS
        *
        * @param {HTMLElement} block represents the block's' DOM element/tree
        */
    block.querySelector('picture').classList.add('image-wrapper');
  }

  /**
     * Add event listeners to the block
     *
     * @param {HTMLElement} block represents the block's' DOM element/tree
     */
  addEventListeners(block);
}
