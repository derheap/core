export default [
	{
		match: /^(?!\/).*/gm,
		sub: 'todo'
	},
	{
		match: /\[((?!\])[^\\]|\\.)*\]/g,
		type: 'num'
	},
	{
		match: /\||\^|\$|\\.|\w+($|\r|\n)/g,
		type: 'kwd'
	},
	{
		match: /\*|\+|\{\d+,\d+\}/g,
		type: 'var'
	}
];
export let type = 'oper';