import colors from './colors'

const directories = [
	{
		name: 'Matemáticas',
		id : 'math-dir',
		icon: 'fas fa-square-root-alt',
		bgPath: 'Matematicas.jpg',
		color: colors.red,
		href : 'matematicas',
		documents: []
	},
	{
		name: 'Estructuras Discretas',
		id : 'est-dir',
		icon: 'fas fa-brain',
		bgPath: 'Estructuras.jpg',
		color: colors.blue,
		href : 'estructuras',
		documents: [
			{
				name: 'Fundamentos de la Matemática - Jorge Saenz',
				path: '/docs/estructuras/Fundamentos de la Matemática - Jorge Saenz.pdf',
				icon: 'fas fa-file-pdf'
			},
		]
	},
	{
		name: 'Programación',
		id : 'code-dir',
		icon: 'fas fa-code',
		bgPath: 'Programacion.jpg',
		color: colors.red,
		href : 'programacion',
		documents: []
	}, 
	{
		name: 'Algebra',
		id : 'alg-dir',
		icon: 'fas fa-superscript',
		bgPath: 'Algebra.jpg',
		color: colors.blue,
		href : 'algebra',
		documents: []
	}, 
	{
		name: 'Contabilidad',
		id : 'cont-dir',
		icon: 'fas fa-clipboard',
		bgPath: 'Contabilidad.jpg',
		color: colors.green,
		href : 'contabilidad',
		documents: []
	},
]

export default directories
