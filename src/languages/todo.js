export default [
	{
		match: /\b(TODO|FIXME|DEBUG|OPTIMIZE|WARNING|XXX|BUG)\b/g,
		type: 'err'
	},
	{
		match: /\bIDEA\b/g,
		type: 'class'
	},
	{
		match: /\b(CHANGED|FIX|CHANGE)\b/g,
		type: 'insert'
	},
	{
		match: /\bQUESTION\b/g,
		type: 'oper'
	}
]
export let type = 'cmnt';