import colors from './colors'

const directories = [
	{
		name: 'Matemáticas',
		id : 'math-dir',
		icon: 'fas fa-square-root-alt',
		bgPath: 'Matematicas.jpg',
		color: colors.red,
		href : 'matematicas',
		documents: [
			{
				name: 'Cálculo Diferencial - Jorge Saenz',
				path: '/docs/matematicas/Calculo diferencial - Jorge Saenz.pdf',
				icon: 'fas fa-file-pdf',
			},
			{
				name: 'Cálculo Integral - Jorge Saenz',
				path: '/docs/matematicas/Calculo Integral Jorge Saenz.pdf',
				icon: 'fas fa-file-pdf',
			},
			{
				name: 'Cálculo Vectorial - Jorge Saenz',
				path: '/docs/matematicas/Calculo-Vectorial-Jorge-Saenz.pdf',
				icon: 'fas fa-file-pdf',
			},
			{
				name: 'Cálculo Vectorial - Susan Colley',
				path: '/docs/matematicas/Cálculo vectorial - Susan Colley.pdf',
				icon: 'fas fa-file-pdf',
			},
			{
				name: 'Photomath - App',
				path: 'https://photomath.es/',
				icon: 'fas fa-mobile-alt',
			},
		]
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
			{
				name: 'Matemáticas Discretas - Johnsonbaugh',
				path: '/docs/estructuras/Matemáticas discretas.pdf',
				icon: 'fas fa-file-pdf'
			},
		]
	},
	{
		name: 'Contabilidad',
		id : 'cont-dir',
		icon: 'fas fa-calculator',
		bgPath: 'Contabilidad.jpg',
		color: colors.green,
		href : 'contabilidad',
		documents: [
			{
				name: 'Contabilidad 1 - Francisco Calleja',
				path: '/docs/contabilidad/Contabilidad 1.pdf',
				icon: 'fas fa-file-pdf'
			},
			{
				name: 'Contabilidad - Horngren',
				path: '/docs/contabilidad/Contabilidad - Horngren.pdf',
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
		documents: [
			{
				name: 'Curso de C++ - Programación ATS',
				path: 'https://youtube.com/playlist?list=PLWtYZ2ejMVJlUu1rEHLC0i_oibctkl0Vh',
				icon: 'fab fa-youtube'
			},
			{
				name: 'Free Programming books - github repo',
				path: 'https://github.com/EbookFoundation/free-programming-books',
				icon: 'fab fa-github'
			},
			{
				name: 'Clean Code - Robert C Martin',
				path: '/docs/programacion/Clean Code.pdf',
				icon: 'fas fa-file-pdf'
			},
			{
				name: 'Lucidchart - Diseño diagramas',
				path: 'https://www.lucidchart.com/pages/es',
				icon: 'fas fa-mouse-pointer'
			},
		]
	}, 
	{
		name: 'Algebra',
		id : 'alg-dir',
		icon: 'fas fa-superscript',
		bgPath: 'Algebra.jpg',
		color: colors.blue,
		href : 'algebra',
		documents: [
			{
				name: 'Álgebra - Garza',
				path: '/docs/algebra/Álgebra - Garza.pdf',
				icon: 'fas fa-file-pdf'
			},
			{
				name: 'Álgebra Lineal y sus aplicaciones - Lay',
				path: '/docs/algebra/Álgebra lineal y sus aplicaciones - David Lay.pdf',
				icon: 'fas fa-file-pdf'
			},
			{
				name: 'Calculadora de matrices',
				path: 'https://matrixcalc.org/es/',
				icon: 'fas fa-mouse-pointer'
			},
		]
	}, 
	]

export default directories
