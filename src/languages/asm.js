export default [
	{
		type: 'cmnt',
		match: /;.*/gm
	},
	{
		expand: 'str'
	},
	{
		expand: 'num'
	},
	{
		type: 'kwd',
		match: /^[a-z]+\s+[a-z.]+/gm,
		sub: [
			{
				type: 'func',
				match: /^[a-z]+/g
			}
		]
	},
	{
		type: 'kwd',
		match: /^\t*[a-z]+/gm,
	},
	{
		match: /%|\$/g,
		type: 'oper'
	}
]
