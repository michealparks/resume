export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.ico","icomoon.woff","icons.css","me.jpg","robots.txt"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".woff":"font/woff",".css":"text/css",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		entry: {"file":"start-a402f9fb.js","js":["start-a402f9fb.js","chunks/vendor-f8549862.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		validators: async () => {
			
			return {  };
		}
	}
};
