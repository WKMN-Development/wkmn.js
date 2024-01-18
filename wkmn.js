function createWKMNAtt(subButtonEl) {
	if (document.getElementById('wkmn-attribution-wrapper')) {
		return;
	}
	const attWrapper = document.createElement('div');
	attWrapper.id = 'wkmn-attribution-wrapper';
	const attButton = document.createElement('button');
	attButton.id = 'att-button';
	attButton.className = 'wkmn-att-btn';
	if (subButtonEl) {
		attButton.classList.add('hidden');
	}
	attButton.type = 'button';
	attButton.style = 'position:relative;overflow:hidden';
	const attImg = document.createElement('img');
	attImg.alt = 'WKMN Logo';
	attImg.loading = 'lazy';
	attImg.decoding = 'async';
	attImg.style = 'color:transparent';
	attImg.src = 'https://cdn.wkmn.dev/WKMN-L-T.png';
	attImg.width = 128;
	attImg.height = 128;
	attButton.appendChild(attImg);
	attButton.appendChild(document.createTextNode('WKMN'));
	const attSpan = document.createElement('span');
	attSpan.className = 'wkmn-big-only';
	attSpan.innerText = 'Development';
	attButton.appendChild(attSpan);
	attWrapper.appendChild(attButton);
	const attBgAnimated = document.createElement('div');
	attBgAnimated.className = 'wkmn-bg-animated hidden';
	attBgAnimated.id = 'wkmn-bg-animated';
	for (let i = 0; i < 40; i++) {
		const attSpan = document.createElement('span');
		attBgAnimated.appendChild(attSpan);
	}
	attWrapper.appendChild(attBgAnimated);
	const attBg = document.createElement('div');
	attBg.className = 'wkmn-bg hidden';
	attBg.id = 'att-bg';
	const attMenu = document.createElement('div');
	attMenu.className = 'wkmn-menu';
	const attCloseButton = document.createElement('button');
	attCloseButton.id = 'wkmn-close-button';
	attCloseButton.className = 'wkmn-exit';
	attCloseButton.role = 'button';
	attCloseButton.innerHTML =
		'<span><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></span>';
	attMenu.appendChild(attCloseButton);
	const attMenuImg = document.createElement('img');
	attMenuImg.alt = 'WKMN Logo';
	attMenuImg.loading = 'lazy';
	attMenuImg.decoding = 'async';
	attMenuImg.src = 'https://cdn.wkmn.dev/WKMN-L-T.png';
	attMenuImg.width = 128;
	attMenuImg.height = 128;
	attMenu.appendChild(attMenuImg);
	const attTitle = document.createElement('h5');
	attTitle.className = 'wkmn-title';
	attTitle.innerText = 'WKMN Development';
	attMenu.appendChild(attTitle);
	const attDesc = document.createElement('p');
	attDesc.className = 'wkmn-desc';
	attDesc.innerText = 'Building Enterprise Solutions For Small Businesses';
	attMenu.appendChild(attDesc);
	const attLinkWrapper = document.createElement('ul');
	attLinkWrapper.className = 'wkmn-link-wrapper';
	const attLinks = [
		{
			href: 'https://www.wkmn.dev/c/get-your-website',
			text: 'Get Your Website',
		},
		{
			href: 'https://www.wkmn.dev/products',
			text: 'Explore Products',
		},
		{
			href: 'https://www.wkmn.dev/about',
			text: 'About WKMN',
		},
	];
	attLinks.forEach((link) => {
		const attLink = document.createElement('li');
		const attLinkA = document.createElement('a');
		attLinkA.href = link.href;
		attLinkA.className = 'wkmn-link';
		attLinkA.target = '_blank';
		attLinkA.innerText = link.text;
		attLink.appendChild(attLinkA);
		attLinkWrapper.appendChild(attLink);
	});
	attMenu.appendChild(attLinkWrapper);
	const attHide = document.createElement('div');
	const attHideButton = document.createElement('button');
	attHideButton.role = 'button';
	attHideButton.id = 'hide-att';
	attHideButton.className = 'wkmn-hide-btn';
	attHideButton.innerText = 'Click here to hide the button for 60 seconds.';
	if (!subButtonEl) {
		attHide.appendChild(attHideButton);
	} else {
		const attText = document.createElement('span');
		attText.innerText =
			'This website was designed and developed by WKMN Development.';
		attText.className = 'wkmn-hide-btn-sub';
		attHide.appendChild(attText);
	}
	attMenu.appendChild(attHide);
	attBg.appendChild(attMenu);
	attWrapper.appendChild(attBg);
	document.body.appendChild(attWrapper);
	attButton.addEventListener('click', function () {
		attBg.classList.remove('hidden');
		attBgAnimated.classList.remove('hidden');
		document.body.classList.add('wkmn-body-reset');
	});
	if (subButtonEl) {
		const subButtonElItem = document.getElementById(subButtonEl);
		subButtonElItem.addEventListener('click', function () {
			attBg.classList.remove('hidden');
			attBgAnimated.classList.remove('hidden');
			document.body.classList.add('wkmn-body-reset');
		});
	}
	attCloseButton.addEventListener('click', function () {
		attBg.classList.add('hidden');
		attBgAnimated.classList.add('hidden');
		document.body.classList.remove('wkmn-body-reset');
	});
	attHideButton.addEventListener('click', function () {
		// Add the "hidden" class to trigger the fade-out effect
		attButton.classList.add('hidden');
		attBgAnimated.classList.add('hidden');
		document.body.classList.remove('wkmn-body-reset');
		attBg.classList.add('hidden');

		// Set a timeout to show the elements again after 60 seconds
		setTimeout(function () {
			// Remove the "hidden" class to trigger the fade-in effect
			attButton.classList.remove('hidden');
			attBg.classList.remove('hidden');
			attBgAnimated.classList.remove('hidden');
		}, 60000);
	});
	const unpaidScript = document.createElement('script');
	unpaidScript.src = 'https://wkmnjs.wkmn.app/unpaidCheck.min.js';
	unpaidScript.async = true;
	document.head.appendChild(unpaidScript);
}

function createWKMNStyles() {
	const cssStyles = `#wkmn-attribution-wrapper .wkmn-bg {
 position: fixed;
     width: 100vw;
     height: 100vh;
     top: 0;
     left: 0;
     overflow: hidden;
     background-color: rgba(31, 32, 35, 0.8);
     min-height: 100vh;
  padding: 0;
  margin: 0;
     display: flex;
     align-items: center;
     z-index: 999;
     justify-content: center;
     line-height: 1.5;
     -webkit-text-size-adjust: 100%;
     -moz-tab-size: 4;
     tab-size: 4;
  font-size: 16px!important;
     font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
     font-feature-settings: normal;
     font-variation-settings: normal;
}
 #wkmn-attribution-wrapper .wkmn-body-reset {
     margin: 0px 0px 0px 0px;
     padding: 0px 0px 0px 0px;
     width: 100%;
     height: 100%;
     overflow: hidden;
}
 #wkmn-attribution-wrapper .hidden {
     display: none!important;
}
 #wkmn-attribution-wrapper .wkmn-link {
     display: flex;
     padding: 0.75rem;
     align-items: center;
     border-radius: 0.5rem;
     font-size: 1rem;
     line-height: 1.5rem;
     font-weight: 600;
     margin-top: 1rem;
     color: #000;
     transition-duration: 150ms;
     transition: transform 0.3s ease-in-out;
     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
     background-color: #e6e6e6;
}
 #wkmn-attribution-wrapper .wkmn-link:hover {
     transform: scale(1.05);
     background-color: #ccc;
}
 #wkmn-attribution-wrapper .wkmn-menu > ul {
     list-style: none;
     margin: 0;
     padding: 0;
}
 #wkmn-attribution-wrapper .wkmn-menu a {
     color: inherit;
     text-decoration: inherit;
}
 #wkmn-attribution-wrapper .wkmn-bg abbr:where([title]) {
     -webkit-text-decoration: underline dotted;
     text-decoration: underline dotted;
}
 #wkmn-attribution-wrapper .wkmn-bg h1, #wkmn-attribution-wrapper .wkmn-bg h2, #wkmn-attribution-wrapper .wkmn-bg h3, #wkmn-attribution-wrapper .wkmn-bg h4, #wkmn-attribution-wrapper .wkmn-bg h5, #wkmn-attribution-wrapper .wkmn-bg h6 {
     font-size: inherit;
     font-weight: inherit;
}
 #wkmn-attribution-wrapper .wkmn-bg a {
     color: inherit;
     text-decoration: inherit;
}
 #wkmn-attribution-wrapper .wkmn-bg b, #wkmn-attribution-wrapper .wkmn-bg strong {
     font-weight: bolder;
}
 #wkmn-attribution-wrapper .wkmn-bg code, #wkmn-attribution-wrapper .wkmn-bg kbd, #wkmn-attribution-wrapper .wkmn-bg pre, #wkmn-attribution-wrapper .wkmn-bg samp {
     font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
     font-size: 1em;
}
 #wkmn-attribution-wrapper .wkmn-bg small {
     font-size: 80%;
}
 #wkmn-attribution-wrapper .wkmn-bg sub, #wkmn-attribution-wrapper .wkmn-bg sup {
     font-size: 75%;
     line-height: 0;
     position: relative;
     vertical-align: baseline;
}
 #wkmn-attribution-wrapper .wkmn-bg sub {
     bottom: -0.25em;
}
 #wkmn-attribution-wrapper .wkmn-bg sup {
     top: -0.5em;
}
 #wkmn-attribution-wrapper .wkmn-bg table {
     text-indent: 0;
     border-color: inherit;
     border-collapse: collapse;
}
 #wkmn-attribution-wrapper .wkmn-bg button, #wkmn-attribution-wrapper .wkmn-bg input, #wkmn-attribution-wrapper .wkmn-bg optgroup, #wkmn-attribution-wrapper .wkmn-bg select, #wkmn-attribution-wrapper .wkmn-bg textarea {
     font-family: inherit;
     font-feature-settings: inherit;
     font-variation-settings: inherit;
     font-size: 100%;
     font-weight: inherit;
     line-height: inherit;
     color: inherit;
     margin: 0;
     padding: 0;
}
 #wkmn-attribution-wrapper .wkmn-bg button, #wkmn-attribution-wrapper .wkmn-bg select {
     text-transform: none;
}
 #wkmn-attribution-wrapper .wkmn-bg [type='button'], #wkmn-attribution-wrapper .wkmn-bg [type='reset'], #wkmn-attribution-wrapper .wkmn-bg [type='submit'], #wkmn-attribution-wrapper .wkmn-bg button {
     -webkit-appearance: button;
     background-color: transparent;
     background-image: none;
}
 #wkmn-attribution-wrapper .wkmn-bg :-moz-focusring {
     outline: auto;
}
 #wkmn-attribution-wrapper .wkmn-bg :-moz-ui-invalid {
     box-shadow: none;
}
 #wkmn-attribution-wrapper .wkmn-bg progress {
     vertical-align: baseline;
}
 #wkmn-attribution-wrapper .wkmn-bg ::-webkit-inner-spin-button, #wkmn-attribution-wrapper .wkmn-bg ::-webkit-outer-spin-button {
     height: auto;
}
 #wkmn-attribution-wrapper .wkmn-bg [type='search'] {
     -webkit-appearance: textfield;
     outline-offset: -2px;
}
 #wkmn-attribution-wrapper .wkmn-bg ::-webkit-search-decoration {
     -webkit-appearance: none;
}
 #wkmn-attribution-wrapper .wkmn-bg ::-webkit-file-upload-button {
     -webkit-appearance: button;
     font: inherit;
}
 #wkmn-attribution-wrapper .wkmn-bg summary {
     display: list-item;
}
 #wkmn-attribution-wrapper .wkmn-bg blockquote, #wkmn-attribution-wrapper .wkmn-bg dd, #wkmn-attribution-wrapper .wkmn-bg dl, #wkmn-attribution-wrapper .wkmn-bg figure, #wkmn-attribution-wrapper .wkmn-bg h1, #wkmn-attribution-wrapper .wkmn-bg h2, #wkmn-attribution-wrapper .wkmn-bg h3, #wkmn-attribution-wrapper .wkmn-bg h4, #wkmn-attribution-wrapper .wkmn-bg h5, #wkmn-attribution-wrapper .wkmn-bg h6, #wkmn-attribution-wrapper .wkmn-bg hr, #wkmn-attribution-wrapper .wkmn-bg p, #wkmn-attribution-wrapper .wkmn-bg pre {
     margin: 0;
}
 #wkmn-attribution-wrapper .wkmn-bg fieldset {
     margin: 0;
     padding: 0;
}
 #wkmn-attribution-wrapper .wkmn-bg legend {
     padding: 0;
}
 #wkmn-attribution-wrapper .wkmn-bg menu, #wkmn-attribution-wrapper .wkmn-bg ol, #wkmn-attribution-wrapper .wkmn-bg ul {
     list-style: none;
     margin: 0;
     padding: 0;
}
 #wkmn-attribution-wrapper .wkmn-bg dialog {
     padding: 0;
}
 #wkmn-attribution-wrapper .wkmn-bg textarea {
     resize: vertical;
}
 #wkmn-attribution-wrapper .wkmn-bg input::placeholder, #wkmn-attribution-wrapper .wkmn-bg textarea::placeholder {
     opacity: 1;
     color: #9ca3af;
}
 #wkmn-attribution-wrapper .wkmn-bg [role='button'], #wkmn-attribution-wrapper .wkmn-bg button {
     cursor: pointer;
}
 #wkmn-attribution-wrapper .wkmn-bg :disabled {
     cursor: default;
}
 #wkmn-attribution-wrapper .wkmn-bg audio, #wkmn-attribution-wrapper .wkmn-bg canvas, #wkmn-attribution-wrapper .wkmn-bg embed, #wkmn-attribution-wrapper .wkmn-bg iframe, #wkmn-attribution-wrapper .wkmn-bg img, #wkmn-attribution-wrapper .wkmn-bg object, #wkmn-attribution-wrapper .wkmn-bg svg, #wkmn-attribution-wrapper .wkmn-bg video {
     display: block;
     vertical-align: middle;
}
 #wkmn-attribution-wrapper .wkmn-bg img, #wkmn-attribution-wrapper .wkmn-bg video {
     max-width: 100%;
     height: auto;
}
 #wkmn-attribution-wrapper .wkmn-link > span{
     flex: 1;
    /* equivalent to flex-1 */
     margin-left: 0.75rem;
    /* equivalent to ms-3 */
     white-space: nowrap;
    /* equivalent to whitespace-nowrap */
}
 #wkmn-attribution-wrapper .wkmn-att-btn > img {
     width: 1.4rem;
     height: 1.4rem;
}
 #wkmn-attribution-wrapper .wkmn-att-btn {
     text-transform: none;
     position: fixed !important;
     bottom: 20px;
     right: 20px;
     display: flex;
     -webkit-user-select: none;
     user-select: none;
     align-items: center;
     gap: 0.25rem;
     border-radius: 0.5rem;
     border-width: 1px;
     background-color: rgba(255, 255, 255, 1)!important;
     padding-left: 1rem;
     padding-right: 1rem;
     padding-top: 0.5rem;
     padding-bottom: 0.5rem;
     z-index: 997;
     text-align: center;
     vertical-align: middle;
     font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
     font-size: 0.75rem;
     line-height: 1rem;
     font-weight: 700;
     text-transform: uppercase;
     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
     transition-property: all;
     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
     transition-duration: 150ms;
}
 #wkmn-attribution-wrapper .wkmn-att-btn:hover {
     transform: translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX(1.05) scaleY(1.05);
}
 #wkmn-attribution-wrapper .wkmn-att-btn:active {
     opacity: 0.85;
}
 #wkmn-attribution-wrapper .wkmn-exit {
     position: absolute;
     right: 10px;
     top: 10px;
     border: none!important;
}
 #wkmn-attribution-wrapper .wkmn-exit>span>svg {
     fill: #000;
     height: 1.5rem;
     width: 1.5rem;

}
 #wkmn-attribution-wrapper .wkmn-menu {
     width: 100%;
    /* equivalent to w-full */
     max-width: 20rem;
    /* equivalent to max-w-sm */
     padding: 1rem;
    /* equivalent to p-4 */
     border: 1px solid #ffcc00;
    /* equivalent to border border-stone-600 */
     background-color: #fff;
    /* equivalent to bg-stone-800 */
     border-radius: 0.5rem;
    /* equivalent to rounded-lg */
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* equivalent to shadow */
     position: relative;
    /* equivalent to relative */
}
 #wkmn-attribution-wrapper .wkmn-menu >img {
     height: 3rem;
     width:3rem;
     margin:auto;
}
 #wkmn-attribution-wrapper .wkmn-title {
     font-size: 1.6rem!important;
    /* equivalent to text-base */
     font-weight: 600;
     font-family: sans-serif!important;
    /* equivalent to font-semibold */
     color: #000;
    /* equivalent to text-stone-400 */
     margin-bottom: 0.5rem;
     text-align: center;
}
 #wkmn-attribution-wrapper .wkmn-hide-btn {
     display: inline-flex;
    /* equivalent to inline-flex */
     align-items: center;
    /* equivalent to items-center */
     font-size: 0.75rem!important;
    /* equivalent to text-xs */
     font-weight: normal;
    /* equivalent to font-normal */
     color: #7B7B7B!important;
    /* equivalent to text-gray-500 */
     margin-top:0.75rem!important;
     border: none;
     text-align: left;
}
 #wkmn-attribution-wrapper .wkmn-hide-btn-sub {
     display: inline-flex;
    /* equivalent to inline-flex */
     align-items: center;
    /* equivalent to items-center */
     font-size: 0.75rem!important;
    /* equivalent to text-xs */
     font-weight: normal;
    /* equivalent to font-normal */
     color: #7B7B7B!important;
    /* equivalent to text-gray-500 */
     margin-top:0.75rem!important;
     border: none;
     text-align: left;
}
 #wkmn-attribution-wrapper .wkmn-hide-btn:hover {
     text-decoration: underline;
    /* equivalent to hover:underline */
}
 #wkmn-attribution-wrapper .wkmn-hide-btn-sub:hover {
     text-decoration: none;
    /* equivalent to hover:underline */
}
 #wkmn-attribution-wrapper .wkmn-desc {
     font-size: 0.92rem;
    /* equivalent to text-sm */
     font-weight: normal;
    /* equivalent to font-normal */
     color: #7B7B7B;
    /* equivalent to text-gray-500 */
}
 @media (prefers-color-scheme: dark) {
     #wkmn-attribution-wrapper .wkmn-desc {
         color: #9E9E9E;
        /* equivalent to dark:text-gray-400 */
    }
     #wkmn-attribution-wrapper .wkmn-hide-btn {
         color: #9E9E9E;
        /* equivalent to dark:text-gray-400 */
    }
     #wkmn-attribution-wrapper .wkmn-link:hover {
         background-color: #57534e;
    }
     #wkmn-attribution-wrapper .wkmn-exit>span>svg {
         fill: #fff;
    }
     #wkmn-attribution-wrapper .wkmn-menu {
         background-color: #292524 
    }
     #wkmn-attribution-wrapper .wkmn-title {
         color: #fff;
    }
     #wkmn-attribution-wrapper .wkmn-att-btn{
         background-color: #292524!important;
         color: #f9fafb!important;
    }
     #wkmn-attribution-wrapper .wkmn-link {
         background-color: #78716c;
         color: #fff!important;
    }
     #wkmn-attribution-wrapper .wkmn-link:hover {
         background-color: #57534e;
    }
}
 #wkmn-attribution-wrapper .wkmn-big-only {
     display: none;
}
 @media (min-width: 768px) {
     #wkmn-attribution-wrapper .wkmn-big-only {
         display: inline-block;
    }
}
 @keyframes wkmn-move {
     100% {
         transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}
 #wkmn-attribution-wrapper .wkmn-bg-animated {
     position: fixed;
     width: 100vw;
     height: 100vh;
     top: 0;
     left: 0;
     overflow: hidden;
     z-index: 998;
     background-color: #000;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span {
     width: 40vmin;
     height: 40vmin;
     border-radius: 40vmin;
     backface-visibility: hidden;
     position: absolute;
     animation: wkmn-move;
     animation-duration: 28;
     animation-timing-function: linear;
     animation-iteration-count: infinite;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(0) {
     color: #5e5c64;
     top: 66%;
     left: 66%;
     animation-duration: 108s;
     animation-delay: -15s;
     transform-origin: 15vw 19vh;
     box-shadow: 80vmin 0 10.906618078365186vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(1) {
     color: #f5c211;
     top: 89%;
     left: 57%;
     animation-duration: 90s;
     animation-delay: -155s;
     transform-origin: 19vw 22vh;
     box-shadow: 80vmin 0 10.166855223805918vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(2) {
     color: #5e5c64;
     top: 90%;
     left: 14%;
     animation-duration: 123s;
     animation-delay: -178s;
     transform-origin: -7vw -16vh;
     box-shadow: 80vmin 0 10.183254887473671vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(3) {
     color: #5e5c64;
     top: 44%;
     left: 71%;
     animation-duration: 225s;
     animation-delay: -143s;
     transform-origin: -23vw -14vh;
     box-shadow: 80vmin 0 10.752091418133691vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(4) {
     color: #241f31;
     top: 83%;
     left: 87%;
     animation-duration: 121s;
     animation-delay: -81s;
     transform-origin: -24vw 8vh;
     box-shadow: 80vmin 0 10.046665579582012vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(5) {
     color: #f5c211;
     top: 9%;
     left: 83%;
     animation-duration: 180s;
     animation-delay: -50s;
     transform-origin: 20vw 17vh;
     box-shadow: 80vmin 0 10.306820049312964vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(6) {
     color: #241f31;
     top: 54%;
     left: 52%;
     animation-duration: 28s;
     animation-delay: -127s;
     transform-origin: -22vw 12vh;
     box-shadow: -80vmin 0 10.232614019872884vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(7) {
     color: #5e5c64;
     top: 95%;
     left: 2%;
     animation-duration: 217s;
     animation-delay: -196s;
     transform-origin: 11vw 4vh;
     box-shadow: -80vmin 0 10.806841982644581vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(8) {
     color: #241f31;
     top: 9%;
     left: 32%;
     animation-duration: 24s;
     animation-delay: -190s;
     transform-origin: -4vw -6vh;
     box-shadow: 80vmin 0 10.069806064691203vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(9) {
     color: #5e5c64;
     top: 84%;
     left: 65%;
     animation-duration: 223s;
     animation-delay: -174s;
     transform-origin: 2vw -7vh;
     box-shadow: 80vmin 0 10.87308596362895vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(10) {
     color: #f5c211;
     top: 87%;
     left: 76%;
     animation-duration: 207s;
     animation-delay: -38s;
     transform-origin: 23vw 5vh;
     box-shadow: 80vmin 0 10.319916259573853vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(11) {
     color: #241f31;
     top: 87%;
     left: 32%;
     animation-duration: 37s;
     animation-delay: -147s;
     transform-origin: -21vw -24vh;
     box-shadow: 80vmin 0 10.131331774922318vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(12) {
     color: #241f31;
     top: 16%;
     left: 20%;
     animation-duration: 90s;
     animation-delay: -2s;
     transform-origin: 25vw 8vh;
     box-shadow: 80vmin 0 10.578574193683943vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(13) {
     color: #241f31;
     top: 9%;
     left: 20%;
     animation-duration: 196s;
     animation-delay: -14s;
     transform-origin: 8vw 15vh;
     box-shadow: -80vmin 0 10.82806449214216vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(14) {
     color: #5e5c64;
     top: 52%;
     left: 59%;
     animation-duration: 41s;
     animation-delay: -59s;
     transform-origin: -14vw 14vh;
     box-shadow: -80vmin 0 10.906896069977432vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(15) {
     color: #5e5c64;
     top: 87%;
     left: 31%;
     animation-duration: 114s;
     animation-delay: -3s;
     transform-origin: 9vw -17vh;
     box-shadow: 80vmin 0 10.829770808729869vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(16) {
     color: #f5c211;
     top: 49%;
     left: 59%;
     animation-duration: 164s;
     animation-delay: -153s;
     transform-origin: 12vw 6vh;
     box-shadow: 80vmin 0 10.218124419302772vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(17) {
     color: #f5c211;
     top: 60%;
     left: 84%;
     animation-duration: 156s;
     animation-delay: -70s;
     transform-origin: 0vw 24vh;
     box-shadow: 80vmin 0 10.987698193401283vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(18) {
     color: #241f31;
     top: 32%;
     left: 96%;
     animation-duration: 197s;
     animation-delay: -191s;
     transform-origin: 10vw 18vh;
     box-shadow: -80vmin 0 10.696176706528728vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(19) {
     color: #5e5c64;
     top: 63%;
     left: 18%;
     animation-duration: 169s;
     animation-delay: -161s;
     transform-origin: -23vw 19vh;
     box-shadow: 80vmin 0 10.45173687873065vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(20) {
     color: #5e5c64;
     top: 64%;
     left: 51%;
     animation-duration: 144s;
     animation-delay: -153s;
     transform-origin: 20vw 16vh;
     box-shadow: -80vmin 0 10.114589952548373vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(21) {
     color: #5e5c64;
     top: 96%;
     left: 28%;
     animation-duration: 108s;
     animation-delay: -118s;
     transform-origin: 12vw -14vh;
     box-shadow: -80vmin 0 10.60287363856796vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(22) {
     color: #5e5c64;
     top: 72%;
     left: 12%;
     animation-duration: 22s;
     animation-delay: -138s;
     transform-origin: 9vw 9vh;
     box-shadow: -80vmin 0 10.332859209095142vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(23) {
     color: #f5c211;
     top: 52%;
     left: 99%;
     animation-duration: 141s;
     animation-delay: -146s;
     transform-origin: -20vw -2vh;
     box-shadow: 80vmin 0 10.624097920743274vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(24) {
     color: #241f31;
     top: 70%;
     left: 16%;
     animation-duration: 123s;
     animation-delay: -134s;
     transform-origin: 19vw -14vh;
     box-shadow: -80vmin 0 10.537556938452699vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(25) {
     color: #f5c211;
     top: 88%;
     left: 9%;
     animation-duration: 128s;
     animation-delay: -120s;
     transform-origin: 9vw -14vh;
     box-shadow: 80vmin 0 10.281175031703645vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(26) {
     color: #241f31;
     top: 86%;
     left: 94%;
     animation-duration: 171s;
     animation-delay: -215s;
     transform-origin: 9vw -6vh;
     box-shadow: 80vmin 0 10.194951510463033vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(27) {
     color: #5e5c64;
     top: 25%;
     left: 78%;
     animation-duration: 137s;
     animation-delay: -125s;
     transform-origin: -15vw -12vh;
     box-shadow: -80vmin 0 10.045540821059763vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(28) {
     color: #f5c211;
     top: 26%;
     left: 40%;
     animation-duration: 88s;
     animation-delay: -22s;
     transform-origin: 14vw 12vh;
     box-shadow: 80vmin 0 10.147518985661096vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(29) {
     color: #241f31;
     top: 67%;
     left: 61%;
     animation-duration: 124s;
     animation-delay: -125s;
     transform-origin: -15vw -8vh;
     box-shadow: 80vmin 0 10.490253837613745vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(30) {
     color: #f5c211;
     top: 21%;
     left: 32%;
     animation-duration: 136s;
     animation-delay: -184s;
     transform-origin: 20vw 19vh;
     box-shadow: 80vmin 0 10.01064580085867vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(31) {
     color: #f5c211;
     top: 17%;
     left: 72%;
     animation-duration: 16s;
     animation-delay: -127s;
     transform-origin: -10vw 3vh;
     box-shadow: -80vmin 0 10.15435434306638vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(32) {
     color: #f5c211;
     top: 46%;
     left: 97%;
     animation-duration: 15s;
     animation-delay: -169s;
     transform-origin: 18vw 6vh;
     box-shadow: 80vmin 0 10.396953279917655vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(33) {
     color: #f5c211;
     top: 10%;
     left: 31%;
     animation-duration: 74s;
     animation-delay: -22s;
     transform-origin: -20vw -7vh;
     box-shadow: -80vmin 0 10.289832136672405vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(34) {
     color: #f5c211;
     top: 73%;
     left: 99%;
     animation-duration: 37s;
     animation-delay: -205s;
     transform-origin: -2vw 21vh;
     box-shadow: 80vmin 0 10.586225178915331vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(35) {
     color: #f5c211;
     top: 47%;
     left: 39%;
     animation-duration: 183s;
     animation-delay: -82s;
     transform-origin: 4vw -8vh;
     box-shadow: -80vmin 0 10.39123976841619vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(36) {
     color: #f5c211;
     top: 71%;
     left: 81%;
     animation-duration: 200s;
     animation-delay: -32s;
     transform-origin: 14vw -19vh;
     box-shadow: 80vmin 0 10.35118977048138vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(37) {
     color: #5e5c64;
     top: 57%;
     left: 83%;
     animation-duration: 182s;
     animation-delay: -5s;
     transform-origin: 22vw 9vh;
     box-shadow: -80vmin 0 10.042461625915381vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(38) {
     color: #f5c211;
     top: 19%;
     left: 78%;
     animation-duration: 207s;
     animation-delay: -19s;
     transform-origin: 15vw 19vh;
     box-shadow: 80vmin 0 10.369039184313307vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(39) {
     color: #241f31;
     top: 29%;
     left: 71%;
     animation-duration: 93s;
     animation-delay: -13s;
     transform-origin: 20vw 25vh;
     box-shadow: -80vmin 0 10.160414269330563vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(40) {
     color: #5e5c64;
     top: 65%;
     left: 57%;
     animation-duration: 215s;
     animation-delay: -38s;
     transform-origin: 25vw 5vh;
     box-shadow: -80vmin 0 10.155121023841486vmin currentColor;
}
 #wkmn-attribution-wrapper .wkmn-bg-animated span:nth-child(41) {
     color: #241f31;
     top: 4%;
     left: 42%;
     animation-duration: 113s;
     animation-delay: -133s;
     transform-origin: 0vw 8vh;
     box-shadow: 80vmin 0 10.33406913996168vmin currentColor;
}
 `;
	document.head.insertAdjacentHTML('beforeend', `<style>${cssStyles}</style>`);
}

createWKMNStyles();
let wkmnElements = document.querySelectorAll('[data-wkmn]');

if (wkmnElements.length === 0) {
	createWKMNAtt();
} else {
	wkmnElements.forEach((element) => {
		let wkmnId = element.id;
		element.style.cursor = 'pointer';

		if (element.tagName == 'A') {
			element.removeAttribute('href');
			element.removeAttribute('target');
			createWKMNAtt(wkmnId);
		} else {
			createWKMNAtt();
		}
	});
}
