import colors from './colors'

const directories = [
	{
		name: 'Matemáticas',
		id : 'math-dir',
		icon: 'fas fa-square-root-alt',
		bgPath: 'backgrounds/Matematicas.jpg',
		color: colors.red,
		href : 'matematicas',
	},
	{
		name: 'Estructuras Discretas',
		id : 'est-dir',
		icon: 'fas fa-brain',
		bgPath: 'backgrounds/Estructuras.jpg',
		color: colors.green,
		href : 'estructuras',
	},
	{
		name: 'Programación',
		id : 'code-dir',
		icon: 'fas fa-code',
		bgPath: 'backgrounds/Programacion.jpg',
		color: colors.red,
		href : 'programacion',
	}, 
	{
		name: 'Algebra',
		id : 'alg-dir',
		icon: 'fas fa-superscript',
		bgPath: 'backgrounds/Algebra.jpg',
		color: colors.blue,
		href : 'algebra',
	}, 
	{
		name: 'Contabilidad',
		id : 'cont-dir',
		icon: 'fas fa-clipboard',
		bgPath: 'backgrounds/Contabilidad.jpg',
		color: colors.green,
		href : 'contabilidad',
	},
]

export default directories
