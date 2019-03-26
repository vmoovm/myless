/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'mylessIcons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-search': '&#xe8b6;',
		'icon-navigate_before': '&#xe408;',
		'icon-navigate_next': '&#xe409;',
		'icon-more_horiz': '&#xe5d3;',
		'icon-more_vert': '&#xe5d4;',
		'icon-add': '&#xe145;',
		'icon-control_point': '&#xe3ba;',
		'icon-apps': '&#xe5c3;',
		'icon-cancel': '&#xe5c9;',
		'icon-check_box': '&#xe834;',
		'icon-check_box_outline_blank': '&#xe835;',
		'icon-check_circle': '&#xe86c;',
		'icon-lock': '&#xe897;',
		'icon-keyboard_arrow_down': '&#xe313;',
		'icon-keyboard_arrow_up': '&#xe316;',
		'icon-radio_button_unchecked': '&#xe836;',
		'icon-person': '&#xe7fd;',
		'icon-personal_video': '&#xe63b;',
		'icon-phone_android': '&#xe324;',
		'icon-remove': '&#xe15b;',
		'icon-remove_circle_outline': '&#xe15d;',
		'icon-reply': '&#xe15e;',
		'icon-share': '&#xe80e;',
		'icon-download': '&#xe8d7;',
		'icon-thumb_down': '&#xe8db;',
		'icon-thumb_up': '&#xe8dc;',
		'icon-view_list': '&#xe8ef;',
		'icon-view_module': '&#xe8f0;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
