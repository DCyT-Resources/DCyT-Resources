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
				path: 'https://drive.google.com/file/d/1s2DntB4E-ZoCTFZwtEnOa7jTy6wuBJa9/view?usp=sharing',
				icon: 'fas fa-file-pdf',
			},
			{
				name: 'Cálculo Integral - Jorge Saenz',
				path: 'https://drive.google.com/file/d/1mlfStY8NqUf8DEwL5rDYqHzOp02U-4sC/view?usp=sharing',
				icon: 'fas fa-file-pdf',
			},
			{
				name: 'Cálculo Vectorial - Jorge Saenz',
				path: 'https://drive.google.com/file/d/17NBp74HLCm37h1T3ltQz80i7tzQoPa_G/view?usp=sharing',
				icon: 'fas fa-file-pdf',
			},
			{
				name: 'Cálculo Vectorial - Susan Colley',
				path: 'https://drive.google.com/file/d/18GkaIGEIC7Kr3_DtTYFzsSKYHI4FtR6o/view?usp=sharing',
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
				path: 'https://drive.google.com/file/d/1do3QozXTlg0hzEcX0jZbgoe_eqDsykHZ/view?usp=sharing',
				icon: 'fas fa-file-pdf'
			},
			{
				name: 'Matemáticas Discretas - Johnsonbaugh',
				path: 'https://drive.google.com/file/d/1yXKddxsxUM1RJBm0gdqVmt1jS1CvQnF9/view?usp=sharing',
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
				path: 'https://drive.google.com/file/d/1pHiw0AmkII1omkhF375Ju6mzoH-sq3c6/view?usp=sharing',
				icon: 'fas fa-file-pdf'
			},
			{
				name: 'Contabilidad - Horngren',
				path: 'https://drive.google.com/file/d/14velb5gDw_S2fiHrBZ4Zlg39l4sk4Zrv/view?usp=sharing',
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
				path: 'https://enos.itcollege.ee/~jpoial/oop/naited/Clean%20Code.pdf',
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
				path: 'https://drive.google.com/file/d/1h3yUhF9yVIEmBcADqgZd2nhzl2CTcdeu/view?usp=sharing',
				icon: 'fas fa-file-pdf'
			},
			{
				name: 'Álgebra Lineal y sus aplicaciones - Lay',
				path: 'https://drive.google.com/file/d/1LAHFg32Zkbcd5wLwxrKutp2Q1EVG2BKH/view?usp=sharing',
				icon: 'fas fa-file-pdf'
			},
			{
				name: 'Calculadora de matrices',
				path: 'https://matrixcalc.org/es/',
				icon: 'fas fa-mouse-pointer'
			},
		]
	}, 
	{
		name: 'Sistemas',
		id : 'sys-dir',
		icon: 'fas fa-database',
		bgPath: 'Sistemas.jpg',
		color: colors.green,
		href : 'sistemas',
		documents: [
			{
				name: 'Análisis y Diseño de Sistemas - Kendal',
				path: 'https://drive.google.com/file/d/1raFVCi0Odc6I1hJIOLsL2ZVmlBtS10_X/view?usp=sharing',
				icon: 'fas fa-file-pdf'
			},
			{
				name: 'Sistemas 1, Temas - Prod. Tibisay Matos',
				path: 'https://drive.google.com/drive/folders/1sDiePP_1fwVi02PTxA8qB6hEujt8YQjL?usp=sharing',
				icon: 'fab fa-google-drive'
				},
			{
				name: 'BPMN - Bizagi Suite',
				path: 'https://drive.google.com/file/d/1PrLl0SlcaeOY1TvbWcFIh63mTVai86dQ/view?usp=sharing',
				icon: 'fas fa-file-pdf'
			},
		]
	}, 
]

export default directories
