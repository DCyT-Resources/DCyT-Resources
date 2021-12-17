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
				path: 'https://firebasestorage.googleapis.com/v0/b/dcyt-resources.appspot.com/o/Calculo%2FCalculo%20diferencial%20-%20Jorge%20Saenz.pdf?alt=media&token=a212c8db-ddc2-43a2-a5f0-4d66145ec7da',
				icon: 'fas fa-file-pdf',
			},
			{
				name: 'Cálculo Integral - Jorge Saenz',
				path: 'https://firebasestorage.googleapis.com/v0/b/dcyt-resources.appspot.com/o/Calculo%2FCalculo%20Integral%20Jorge%20Saenz.pdf?alt=media&token=0960dcdd-74d1-4d66-a848-6eaf5bf75f6f',
				icon: 'fas fa-file-pdf',
			},
			{
				name: 'Cálculo Vectorial - Jorge Saenz',
				path: 'https://firebasestorage.googleapis.com/v0/b/dcyt-resources.appspot.com/o/Calculo%2FCalculo-Vectorial-Jorge-Saenz.pdf?alt=media&token=ed12f8ed-47d9-444d-bf5b-49ad301b1fe8',
				icon: 'fas fa-file-pdf',
			},
			{
				name: 'Cálculo Vectorial - Susan Colley',
				path: 'https://firebasestorage.googleapis.com/v0/b/dcyt-resources.appspot.com/o/Calculo%2FC%C3%A1lculo%20vectorial%20-%20Susan%20Colley.pdf?alt=media&token=acdbf799-fde1-45d7-b5e5-421b3499db78',
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
				path: 'https://firebasestorage.googleapis.com/v0/b/dcyt-resources.appspot.com/o/Estructuras%20Discretas%2FFundamentos%20de%20la%20Matem%C3%A1tica%20-%20Jorge%20Saenz.pdf?alt=media&token=23cbdb68-ecbe-4851-b0f2-8f1c78bd8911',
				icon: 'fas fa-file-pdf'
			},
			{
				name: 'Matemáticas Discretas - Johnsonbaugh',
				path: 'https://firebasestorage.googleapis.com/v0/b/dcyt-resources.appspot.com/o/Estructuras%20Discretas%2FMatem%C3%A1ticas%20discretas.pdf?alt=media&token=2e13df2e-a8ce-421a-8bda-d7159d5bfab9',
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
				path: 'https://firebasestorage.googleapis.com/v0/b/dcyt-resources.appspot.com/o/Contabilidad%2FContabilidad%201.pdf?alt=media&token=f4394acd-2a75-422c-bb9d-3c1e077be6bf',
				icon: 'fas fa-file-pdf'
			},
			{
				name: 'Contabilidad - Horngren',
				path: 'https://firebasestorage.googleapis.com/v0/b/dcyt-resources.appspot.com/o/Contabilidad%2FContabilidad%20-%20Horngren.pdf?alt=media&token=7402b998-bab4-4450-97d8-d8e3dd51474a',
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
				path: 'https://firebasestorage.googleapis.com/v0/b/dcyt-resources.appspot.com/o/Porgramacion%2FClean%20Code.pdf?alt=media&token=85f3b56c-69fd-4dbb-9087-66f19aaff05b',
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
				path: 'https://firebasestorage.googleapis.com/v0/b/dcyt-resources.appspot.com/o/Algebra%2F%C3%81lgebra%20-%20Garza.pdf?alt=media&token=7bcd04c5-7aa8-4a79-b68b-1142b6c1b543',
				icon: 'fas fa-file-pdf'
			},
			{
				name: 'Álgebra Lineal y sus aplicaciones - Lay',
				path: 'https://firebasestorage.googleapis.com/v0/b/dcyt-resources.appspot.com/o/Algebra%2F%C3%81lgebra%20lineal%20y%20sus%20aplicaciones%20-%20David%20Lay.pdf?alt=media&token=d5cbbd71-4506-4fdc-8f49-9103a4204ed1',
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
