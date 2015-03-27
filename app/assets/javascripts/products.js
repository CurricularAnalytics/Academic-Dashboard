$(document).ready(function(){


});


function dashboardcharts() {
	
	/* Bar Chart */
	var interactiveBarChart = new AD.CHARTS.interactiveBarChart();

	interactiveBarChart
		.select('#bar-chart')
		.width($('#bar-chart').width())
		.height($('#bar-chart').height())
		// .legendOrientation('left')
		.controls({
			horizontal: {
				visible:false,
				enabled:true
			},
			yAxisLock: {
				enabled: true,
				maxStacked: 150,
				maxNonStacked: 100
			}
		});

	interactiveBarChart
		.xScale({type: 'ordinal'})
		.yFormat({units:{after:'%'}})
		// .yFormat({units:{before:'$'},prefixed:true})
		// .yScale({type: 'linear',domain: [0,900]})

	interactiveBarChart
		.data(
			{data:{
				labels:{
					x:'College',
					y:'Percentage'
				},
				columns:[{"label":"4-Year Accepted Major Graduation Rate","values":[{"x":"Anderson Schools of Management","y":16.67},{"x":"College of Arts and Sciences","y":17.81},{"x":"College of Education","y":14.53},{"x":"College of Fine Arts","y":10.0},{"x":"College of Nursing","y":15.08},{"x":"College of Pharmacy","y":35.71},{"x":"School of Arch. and Planning","y":12.5},{"x":"School of Engineering","y":10.27},{"x":"School of Medicine","y":3.3},{"x":"Unclassified","y":0.0},{"x":"University College","y":7.18},{"x":"University Studies","y":0.0}]},{"label":"5-Year Accepted Major Graduation Rate","values":[{"x":"Anderson Schools of Management","y":37.92},{"x":"College of Arts and Sciences","y":43.46},{"x":"College of Education","y":44.44},{"x":"College of Fine Arts","y":33.18},{"x":"College of Nursing","y":23.81},{"x":"College of Pharmacy","y":46.43},{"x":"School of Arch. and Planning","y":35.94},{"x":"School of Engineering","y":29.46},{"x":"School of Medicine","y":18.68},{"x":"Unclassified","y":0.0},{"x":"University College","y":19.49},{"x":"University Studies","y":0.0}]},{"label":"6-Year Accepted Major Graduation Rate","values":[{"x":"Anderson Schools of Management","y":48.31},{"x":"College of Arts and Sciences","y":53.78},{"x":"College of Education","y":52.99},{"x":"College of Fine Arts","y":45.0},{"x":"College of Nursing","y":27.78},{"x":"College of Pharmacy","y":51.79},{"x":"School of Arch. and Planning","y":51.56},{"x":"School of Engineering","y":44.64},{"x":"School of Medicine","y":29.67},{"x":"Unclassified","y":0.0},{"x":"University College","y":22.56},{"x":"University Studies","y":16.13}]},{"label":"4-Year Intended Major Graduation Rate","values":[{"x":"Anderson Schools of Management","y":"11.900"},{"x":"College of Arts and Sciences","y":"6.9500"},{"x":"College of Education","y":"5.6600"},{"x":"College of Fine Arts","y":"6.1800"},{"x":"College of Nursing","y":"5.9300"},{"x":"College of Pharmacy","y":"7.5900"},{"x":"School of Arch. and Planning","y":"7.500"},{"x":"School of Engineering","y":"0"},{"x":"School of Medicine","y":"2.3300"},{"x":"University College","y":"0.300"}]},{"label":"5-Year Intended Major Graduation Rate","values":[{"x":"Anderson Schools of Management","y":"20.4100"},{"x":"College of Arts and Sciences","y":"14.6200"},{"x":"College of Education","y":"13.2100"},{"x":"College of Fine Arts","y":"11.800"},{"x":"College of Nursing","y":"8.8900"},{"x":"College of Pharmacy","y":"11.3900"},{"x":"School of Arch. and Planning","y":"17.500"},{"x":"School of Engineering","y":"1.00"},{"x":"School of Medicine","y":"3.4900"},{"x":"University College","y":"0.4400"}]},{"label":"6-Year Intended Major Graduation Rate","values":[{"x":"Anderson Schools of Management","y":"26.8700"},{"x":"College of Arts and Sciences","y":"17.3300"},{"x":"College of Education","y":"14.6200"},{"x":"College of Fine Arts","y":"16.8500"},{"x":"College of Nursing","y":"11.1100"},{"x":"College of Pharmacy","y":"11.3900"},{"x":"School of Arch. and Planning","y":"21.2500"},{"x":"School of Engineering","y":"1.3300"},{"x":"School of Medicine","y":"6.9800"},{"x":"University College","y":"0.5900"}]}]
			}
		}
		).update();

	setTimeout(function(){
		interactiveBarChart
			.data(
				{data:{
					labels:{
						x:'College',
						y:'Percentage'
					},
					columns:[{"label":"4-Year Accepted Major Graduation Rate","values":[{"x":"Anderson Schools of Management","y":18.65},{"x":"College of Arts and Sciences","y":16.95},{"x":"College of Education","y":13.61},{"x":"College of Fine Arts","y":17.39},{"x":"College of Nursing","y":18.03},{"x":"College of Pharmacy","y":31.91},{"x":"School of Arch. and Planning","y":8.06},{"x":"School of Engineering","y":11.37},{"x":"School of Medicine","y":2.67},{"x":"University College","y":4.33}]},{"label":"5-Year Accepted Major Graduation Rate","values":[{"x":"Anderson Schools of Management","y":45.26},{"x":"College of Arts and Sciences","y":45.29},{"x":"College of Education","y":42.52},{"x":"College of Fine Arts","y":40.22},{"x":"College of Nursing","y":28.69},{"x":"College of Pharmacy","y":48.94},{"x":"School of Arch. and Planning","y":37.1},{"x":"School of Engineering","y":38.86},{"x":"School of Medicine","y":17.33},{"x":"University College","y":11.42}]},{"label":"6-Year Accepted Major Graduation Rate","values":[{"x":"Anderson Schools of Management","y":52.91},{"x":"College of Arts and Sciences","y":54.63},{"x":"College of Education","y":52.38},{"x":"College of Fine Arts","y":51.09},{"x":"College of Nursing","y":31.97},{"x":"College of Pharmacy","y":48.94},{"x":"School of Arch. and Planning","y":56.45},{"x":"School of Engineering","y":48.82},{"x":"School of Medicine","y":25.33},{"x":"University College","y":14.57}]},{"label":"4-Year Intended Major Graduation Rate","values":[{"x":"Anderson Schools of Management","y":"7.6600"},{"x":"College of Arts and Sciences","y":"7.0900"},{"x":"College of Education","y":"2.5200"},{"x":"College of Fine Arts","y":"9.0900"},{"x":"College of Nursing","y":"7.3500"},{"x":"College of Pharmacy","y":"10.7100"},{"x":"School of Arch. and Planning","y":"3.2300"},{"x":"School of Engineering","y":"0.3900"},{"x":"School of Medicine","y":"0"},{"x":"University College","y":"0.1100"}]},{"label":"5-Year Intended Major Graduation Rate","values":[{"x":"Anderson Schools of Management","y":"20.1600"},{"x":"College of Arts and Sciences","y":"16.7800"},{"x":"College of Education","y":"10.6900"},{"x":"College of Fine Arts","y":"16.0800"},{"x":"College of Nursing","y":"9.5600"},{"x":"College of Pharmacy","y":"14.2900"},{"x":"School of Arch. and Planning","y":"9.6800"},{"x":"School of Engineering","y":"1.9500"},{"x":"School of Medicine","y":"1.0200"},{"x":"University College","y":"0.2200"}]},{"label":"6-Year Intended Major Graduation Rate","values":[{"x":"Anderson Schools of Management","y":"22.5800"},{"x":"College of Arts and Sciences","y":"19.2400"},{"x":"College of Education","y":"13.8400"},{"x":"College of Fine Arts","y":"19.5800"},{"x":"College of Nursing","y":"10.2900"},{"x":"College of Pharmacy","y":"14.2900"},{"x":"School of Arch. and Planning","y":"14.5200"},{"x":"School of Engineering","y":"3.8900"},{"x":"School of Medicine","y":"1.0200"},{"x":"University College","y":"0.2200"}]}]
				}
			}
			).update();
	},2000)

	$(window).resize(function(){
		interactiveBarChart.height($('#bar-chart').height()).width($('#bar-chart').width()).update();
	});




	/* Sunburst */
	var chart = new AD.CHARTS.sunburstChart();

		chart
			.select('#sunburst-chart')
			.width($('#sunburst-chart').width())
			.height($('#sunburst-chart').height())
			.xFormat({siPrefixed:false,units:{}, separateThousands:true,precision:0})
			// .sort(null)
			// .on('elementMouseout',function(d,i,type){console.log(type);})
			.legendOrientation('left')
			.controls({sort:{visible:true},invert:{visible:true},hideLegend:{visible:true}})

											chartData  = {
												partition: {
															"name": "University of New Mexico",
															"top": "true",
															"children": [
																	{
																			"name": "Architecture and Planning",
																			"top": "true",
																			"children": [
																					{
																							"name": "Architecture and Planning",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 291,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 184,
																											"top": true
																									}
																							]
																					}
																			]
																	},
																	{
																			"name": "Arts and Sciences",
																			"top": "true",
																			"children": [
																					{
																							"name": "Humanities",
																							// "top": "true",
																							"children": [
																									{
																											"name": "African American Studies",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 7,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "AS American Studies",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 24,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 54,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Chicano Hispano Mexicano Studies Program(CHMS)",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 7,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "English",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 398,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 96,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Foreign Languages Literatures",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 148,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 31,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "History",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 227,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 76,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Individual Family & Community Education (IFCE)",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 25,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Philosophy",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 89,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 34,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Religious Studies Program",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 28,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Spanish & Portuguese",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 112,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 58,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Women Studies",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 13,
																															"top": true
																													}
																											]
																									}
																							]
																					},
																					{
																							"name": "Natural Sciences",
																							// "top": "true",
																							"children": [
																									{
																											"name": "Biology",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 1712,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 119,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Chemistry",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 209,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 55,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Earth & Planetary Sciences",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 235,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 54,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Geography",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 55,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 22,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Mathematics & Statistics",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 175,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 91,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Physics & Astrophysics",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 165,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 129,
																															"top": true
																													}
																											]
																									}
																							]
																					},
																					{
																							"name": "Social Sciences",
																							// "top": "true",
																							"children": [
																									{
																											"name": "Anthropology",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 255,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 122,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Communications & Journalism",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 726,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 50,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Economics",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 175,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 45,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Linguistics",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 135,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 65,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Political Science",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 380,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 37,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Psychology",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 1686,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 78,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Sociology",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 1023,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 40,
																															"top": true
																													}
																											]
																									},
																									{
																											"name": "Speech & Hearing Sciences",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 151,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 55,
																															"top": true
																													}
																											]
																									}
																							]
																					},
																					{
																							"name": "Interdisciplinary",
																							// "top": "true",
																							"children": [
																									{
																											"name": "Interdisciplinary",
																											"children": [
																													{
																															"name": "Undergraduate",
																															"size": 659,
																															"top": true
																													},
																													{
																															"name": "Graduate",
																															"size": 20,
																															"top": true
																													}
																											]
																									}
																							]
																					}
																			]
																	},
																	{
																			"name": "Education",
																			"top": "true",
																			"children": [
																					{
																							"name": "Education Leadership Program (ELOL)",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 1,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 50,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Educational Specialties",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 128,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 196,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Individual Family & Community Education (IFCE)",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 495,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 168,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Language Literacy Sociocultural",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 3,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 181,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Physical Performance & Development",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 736,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 153,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Teacher Education",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 785,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 197,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Theatre & Dance",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 2,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Undefined",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 2,
																											"top": true
																									}
																							]
																					}
																			]
																	},
																	{
																			"name": "Engineering",
																			"top": "true",
																			"children": [
																					{
																							"name": "Interdisciplinary",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 1355,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 261,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Chemical & Nuclear Engineering",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 178,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 27,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Civil Engineering",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 123,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 55,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Computer Sciences",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 171,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 196,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Electrical & Computer Engineering",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 224,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 115,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Mechanical Engineering",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 264,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 88,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "undefined",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 1,
																											"top": true
																									}
																							]
																					}
																			]
																	},
																	{
																			"name": "Fine Arts",
																			"top": "true",
																			"children": [
																					{
																							"name": "Interdisciplinary",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 165,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Art & Art History",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 421,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 81,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Media Arts",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 166,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Music",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 233,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 87,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Theatre & Dance",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 188,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 9,
																											"top": true
																									}
																							]
																					}
																			]
																	},
																	{
																			"name": "School of Law",
																			"top": "true",
																			"children": [
																					{
																							"name": "Law Administration",
																							"children": [
																									{
																											"name": "Graduate",
																											"size": 349,
																											"top": true
																									}
																							]
																					}
																			]
																	},
																	{
																			"name": "Medicine",
																			"top": "true",
																			"children": [
																					{
																							"name": "Biomedical Science",
																							"children": [
																									{
																											"name": "Graduate",
																											"size": 91,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Doctor of Medicine Program",
																							"children": [
																									{
																											"name": "Graduate",
																											"size": 118,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Public Health",
																							"children": [
																									{
																											"name": "Graduate",
																											"size": 38,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Physicians Assistant Program",
																							"children": [
																									{
																											"name": "Graduate",
																											"size": 35,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Orthopaedics Physical Therapy",
																							"children": [
																									{
																											"name": "Graduate",
																											"size": 89,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Pediatrics Occupational Therapy",
																							"children": [
																									{
																											"name": "Graduate",
																											"size": 75,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Surgery Dental Services",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 156,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 21,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Emergency Medicine",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 213,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Radiology",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 89,
																											"top": true
																									}
																							]
																					},
													                {
													                    "name": "Pathology Medical Lab Sciences",
													                    "children": [
													                        {
													                            "name": "Undergraduate",
													                            "size": 136,
													                            "top": true
													                        },
																									{
																											"name": "Graduate",
																											"size": 2,
																											"top": true
																									}
													                    ]
													                }
																			]
																	},
																	{
																			"name": "Management",
																			"top": "true",
																			"children": [
																					{
																							"name": "Management",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 2517,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 568,
																											"top": true
																									}
																							]
																					}
																			]
																	},
																	{
																			"name": "Non-Degree",
																			"top": "true",
																			"children": [
																					{
																							"name": "Graduate",
																							"size": 1617,
																							"color_style": "Custom",
																							"color": "#DAEDF1"
																					}
																			]
																	},
																	{
																			"name": "Nursing",
																			"top": "true",
																			"children": [
																					{
																							"name": "Nursing",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 1090,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 148,
																											"top": true
																									}
																							]
																					}
																			]
																	},
																	{
																			"name": "Pharmacy",
																			"top": "true",
																			"children": [
																					{
																							"name": "Pharmacy",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 209,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 14,
																											"top": true
																									}
																							]
																					}
																			]
																	},
																	{
																			"name": "University College",
																			"top": "true",
																			"children": [
																					{
																							"name": "Provost Branch Campuses",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 3,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "University College",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 823,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "undefined",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 6,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Water Resources Program",
																							"children": [
																									{
																											"name": "Graduate",
																											"size": 45,
																											"top": true
																									}
																							]
																					}
																			]
																	},
																	{
																			"name": "University Libraries",
																			"top": "true",
																			"children": [
																					{
																							"name": "Organizational Learning and Instructional Development",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 27,
																											"top": true
																									},
																									{
																											"name": "Graduate",
																											"size": 156,
																											"top": true
																									}
																							]
																					}
																			]
																	},
																	{
																			"name": "University Studies",
																			"top": "true",
																			"children": [
																					{
																							"name": "Interdisciplinary",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 22,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Native American Studies",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 6,
																											"top": true
																									}
																							]
																					},
																					{
																							"name": "Univesrity Studies",
																							"children": [
																									{
																											"name": "Undergraduate",
																											"size": 738,
																											"top": true
																									}
																							]
																					}
																			]
																	}
															]
													}
										}

		chart
			.on('elementMouseout', function(d,i,type){console.log(type)})
			.data({data:chartData}).update();

		$(window).resize(function(){
			chart.height($('#sunburst-chart').height()).width($('#sunburst-chart').width()).update();
		});



	/* Bubbles */
	var chart = new AD.CHARTS.bubbleChart();

		chart
			.xFormat({nice:true,siPrefixed:false,units:{before:'$'}, separateThousands:false,precision:1})
			.controls({sortByChange:{visible:true},hideLegend:{visible:true},colorByChange:{visible:true}})

		var visualizeIt = function(){
			chart
				.data({data:chartData});//.update();

			var chartLayoutData = {
				data:{
					chartLayout:{
						
					}
				}
			}

			var chartLayout = new AD.UTILS.CHARTPAGE.chartLayout();

			chartLayout
				.select('#bubble-chart')
				.width($('#bubble-chart').width())
				.height($('#bubble-chart').height())
				.chart(chart);

			chartLayout
				.data(chartLayoutData).update();

			$(window).resize(function(){
				chartLayout.height($('#bubble-chart').height()).width($('#bubble-chart').width()).update();
			});

		};

		chartData = {"groupings":[{"label":"Total Budget"},{"label":"Organizations","default_color_grouping":true},{"label":"Expense Types"}],"nodes":[{"label":"Associate VP for Facilities Mgmt - Salary","key":"Associate VP for Facilities Mgmt - Salary","value":0,"change":1,"enrollments":["All Departments","EVP Administration","Salary"]},{"label":"Associate VP for Facilities Mgmt - Operating Expense","key":"Associate VP for Facilities Mgmt - Operating Expense","value":0,"change":1,"enrollments":["All Departments","EVP Administration","Operating Expense"]},{"label":"Associate VP for Facilities Mgmt - Fringe Benefit","key":"Associate VP for Facilities Mgmt - Fringe Benefit","value":0,"change":1,"enrollments":["All Departments","EVP Administration","Fringe Benefit"]},{"label":"Controller - Salary","key":"Controller - Salary","value":9519430.0,"change":0.056135170319759634,"enrollments":["All Departments","EVP Administration","Salary"]},{"label":"Controller - Operating Expense","key":"Controller - Operating Expense","value":6265331.0,"change":-0.02747694279739977,"enrollments":["All Departments","EVP Administration","Operating Expense"]},{"label":"Controller - Fringe Benefit","key":"Controller - Fringe Benefit","value":915455.0,"change":0.26072981321552174,"enrollments":["All Departments","EVP Administration","Fringe Benefit"]},{"label":"EVP Admin Independent Offices - Salary","key":"EVP Admin Independent Offices - Salary","value":3819366.0,"change":0.07922181407177169,"enrollments":["All Departments","EVP Administration","Salary"]},{"label":"EVP Admin Independent Offices - Operating Expense","key":"EVP Admin Independent Offices - Operating Expense","value":3066199.0,"change":-0.46696251282527346,"enrollments":["All Departments","EVP Administration","Operating Expense"]},{"label":"EVP Admin Independent Offices - Fringe Benefit","key":"EVP Admin Independent Offices - Fringe Benefit","value":68927090.0,"change":0.05967063068576575,"enrollments":["All Departments","EVP Administration","Fringe Benefit"]},{"label":"EVP Administration - Salary","key":"EVP Administration - Salary","value":5913324.0,"change":0.038036612088909204,"enrollments":["All Departments","EVP Administration","Salary"]},{"label":"EVP Administration - Operating Expense","key":"EVP Administration - Operating Expense","value":4586544.0,"change":0.25328524815574965,"enrollments":["All Departments","EVP Administration","Operating Expense"]},{"label":"EVP Administration - Fringe Benefit","key":"EVP Administration - Fringe Benefit","value":69000.0,"change":-0.06756756756756757,"enrollments":["All Departments","EVP Administration","Fringe Benefit"]},{"label":"Government & Community Relations - Salary","key":"Government & Community Relations - Salary","value":339222.0,"change":0.9124027511557109,"enrollments":["All Departments","EVP Administration","Salary"]},{"label":"Government & Community Relations - Operating Expense","key":"Government & Community Relations - Operating Expense","value":328465.0,"change":0.3783676038606798,"enrollments":["All Departments","EVP Administration","Operating Expense"]},{"label":"Government & Community Relations - Fringe Benefit","key":"Government & Community Relations - Fringe Benefit","value":21067.0,"change":2.784264415304473,"enrollments":["All Departments","EVP Administration","Fringe Benefit"]},{"label":"Human Resources HR - Salary","key":"Human Resources HR - Salary","value":3704281.0,"change":0.093588937403868,"enrollments":["All Departments","EVP Administration","Salary"]},{"label":"Human Resources HR - Operating Expense","key":"Human Resources HR - Operating Expense","value":1062971.0,"change":-0.15295513567829586,"enrollments":["All Departments","EVP Administration","Operating Expense"]},{"label":"Human Resources HR - Fringe Benefit","key":"Human Resources HR - Fringe Benefit","value":1133209.0,"change":0.019104917870616432,"enrollments":["All Departments","EVP Administration","Fringe Benefit"]},{"label":"Information Technologies - Salary","key":"Information Technologies - Salary","value":11841076.0,"change":0.007850304251209736,"enrollments":["All Departments","EVP Administration","Salary"]},{"label":"Information Technologies - Operating Expense","key":"Information Technologies - Operating Expense","value":21066740.0,"change":-0.016280164177288236,"enrollments":["All Departments","EVP Administration","Operating Expense"]},{"label":"Information Technologies - Fringe Benefit","key":"Information Technologies - Fringe Benefit","value":2907408.0,"change":-0.04715854177707032,"enrollments":["All Departments","EVP Administration","Fringe Benefit"]},{"label":"Information Technology Services - Salary","key":"Information Technology Services - Salary","value":0.0,"change":1,"enrollments":["All Departments","EVP Administration","Salary"]},{"label":"Information Technology Services - Operating Expense","key":"Information Technology Services - Operating Expense","value":0.0,"change":1,"enrollments":["All Departments","EVP Administration","Operating Expense"]},{"label":"Information Technology Services - Fringe Benefit","key":"Information Technology Services - Fringe Benefit","value":0.0,"change":1,"enrollments":["All Departments","EVP Administration","Fringe Benefit"]},{"label":"Intercollegiate Athletics - Salary","key":"Intercollegiate Athletics - Salary","value":11186150.0,"change":0.022836301844399845,"enrollments":["All Departments","EVP Administration","Salary"]},{"label":"Intercollegiate Athletics - Operating Expense","key":"Intercollegiate Athletics - Operating Expense","value":19449780.0,"change":0.07302612955759212,"enrollments":["All Departments","EVP Administration","Operating Expense"]},{"label":"Intercollegiate Athletics - Fringe Benefit","key":"Intercollegiate Athletics - Fringe Benefit","value":2982607.0,"change":5.029410315052321e-05,"enrollments":["All Departments","EVP Administration","Fringe Benefit"]},{"label":"VP Institutional Support Services - Salary","key":"VP Institutional Support Services - Salary","value":29974625.0,"change":0.020399218529524202,"enrollments":["All Departments","EVP Administration","Salary"]},{"label":"VP Institutional Support Services - Operating Expense","key":"VP Institutional Support Services - Operating Expense","value":81731331.0,"change":-0.015187339995400747,"enrollments":["All Departments","EVP Administration","Operating Expense"]},{"label":"VP Institutional Support Services - Fringe Benefit","key":"VP Institutional Support Services - Fringe Benefit","value":10843684.0,"change":0.05823548631260742,"enrollments":["All Departments","EVP Administration","Fringe Benefit"]},{"label":"President Admin Indpnt Office - Salary","key":"President Admin Indpnt Office - Salary","value":5253818.0,"change":0.021531654481683055,"enrollments":["All Departments","President Executive","Salary"]},{"label":"President Admin Indpnt Office - Operating Expense","key":"President Admin Indpnt Office - Operating Expense","value":1303005.0,"change":-0.09092082460071833,"enrollments":["All Departments","President Executive","Operating Expense"]},{"label":"President Admin Indpnt Office - Fringe Benefit","key":"President Admin Indpnt Office - Fringe Benefit","value":90974.0,"change":-0.17438969053453127,"enrollments":["All Departments","President Executive","Fringe Benefit"]},{"label":"UNM West and Branch Initiatives - Salary","key":"UNM West and Branch Initiatives - Salary","value":638802.0,"change":0.45090272304606854,"enrollments":["All Departments","President Executive","Salary"]},{"label":"UNM West and Branch Initiatives - Operating Expense","key":"UNM West and Branch Initiatives - Operating Expense","value":1082561.0,"change":0.1905157804559666,"enrollments":["All Departments","President Executive","Operating Expense"]},{"label":"UNM West and Branch Initiatives - Fringe Benefit","key":"UNM West and Branch Initiatives - Fringe Benefit","value":190508.0,"change":0.3924394807624839,"enrollments":["All Departments","President Executive","Fringe Benefit"]},{"label":"Academic Affairs Monitoring - Salary","key":"Academic Affairs Monitoring - Salary","value":0,"change":1,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"Academic Affairs Monitoring - Operating Expense","key":"Academic Affairs Monitoring - Operating Expense","value":0.0,"change":1,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"Academic Affairs Monitoring - Fringe Benefit","key":"Academic Affairs Monitoring - Fringe Benefit","value":0,"change":1,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"Anderson Schools of Management ASM - Salary","key":"Anderson Schools of Management ASM - Salary","value":12132449.0,"change":0.04825474032160668,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"Anderson Schools of Management ASM - Operating Expense","key":"Anderson Schools of Management ASM - Operating Expense","value":2370506.0,"change":0.07333914714466701,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"Anderson Schools of Management ASM - Fringe Benefit","key":"Anderson Schools of Management ASM - Fringe Benefit","value":539923.0,"change":-0.009689915371437586,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"College of Arts Sciences A S - Salary","key":"College of Arts Sciences A S - Salary","value":60470691.0,"change":0.06647427316737653,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"College of Arts Sciences A S - Operating Expense","key":"College of Arts Sciences A S - Operating Expense","value":12766380.0,"change":-0.0011354450064987639,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"College of Arts Sciences A S - Fringe Benefit","key":"College of Arts Sciences A S - Fringe Benefit","value":3658005.0,"change":0.23163617153591015,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"College of Education COE - Salary","key":"College of Education COE - Salary","value":14269347.0,"change":-0.013588764932422899,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"College of Education COE - Operating Expense","key":"College of Education COE - Operating Expense","value":2956800.0,"change":-0.17729274555173807,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"College of Education COE - Fringe Benefit","key":"College of Education COE - Fringe Benefit","value":481738.0,"change":-0.2534989958594699,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"College of Fine Arts CFA - Salary","key":"College of Fine Arts CFA - Salary","value":10989841.0,"change":0.0436754583905076,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"College of Fine Arts CFA - Operating Expense","key":"College of Fine Arts CFA - Operating Expense","value":4282053.0,"change":-0.018347639558770838,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"College of Fine Arts CFA - Fringe Benefit","key":"College of Fine Arts CFA - Fringe Benefit","value":426363.0,"change":0.044288125090317695,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"Continuing Education Cont Ed - Salary","key":"Continuing Education Cont Ed - Salary","value":4220257.0,"change":-0.1389984060199524,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"Continuing Education Cont Ed - Operating Expense","key":"Continuing Education Cont Ed - Operating Expense","value":637299.0,"change":-0.5900026891439644,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"Continuing Education Cont Ed - Fringe Benefit","key":"Continuing Education Cont Ed - Fringe Benefit","value":552071.0,"change":-0.612821126026646,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"Extended University Ext Univ - Salary","key":"Extended University Ext Univ - Salary","value":4355875.0,"change":0.07230750407850423,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"Extended University Ext Univ - Operating Expense","key":"Extended University Ext Univ - Operating Expense","value":2745548.0,"change":0.7022980466851185,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"Extended University Ext Univ - Fringe Benefit","key":"Extended University Ext Univ - Fringe Benefit","value":1525767.0,"change":0.11270441590870638,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"Honors College - Salary","key":"Honors College - Salary","value":1413568.0,"change":0.47625572302242425,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"Honors College - Operating Expense","key":"Honors College - Operating Expense","value":347567.0,"change":0.03253875358719483,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"Honors College - Fringe Benefit","key":"Honors College - Fringe Benefit","value":22631.0,"change":1.5286033519553073,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"Provost Administrative Units - Salary","key":"Provost Administrative Units - Salary","value":13324145.0,"change":0.08228351864380401,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"Provost Administrative Units - Operating Expense","key":"Provost Administrative Units - Operating Expense","value":8141267.0,"change":0.0610982795548408,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"Provost Administrative Units - Fringe Benefit","key":"Provost Administrative Units - Fringe Benefit","value":1687412.0,"change":0.1594950590909497,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"School of Architecture Planning - Salary","key":"School of Architecture Planning - Salary","value":3848416.0,"change":0.03743976329089491,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"School of Architecture Planning - Operating Expense","key":"School of Architecture Planning - Operating Expense","value":700995.0,"change":-0.07088249561946469,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"School of Architecture Planning - Fringe Benefit","key":"School of Architecture Planning - Fringe Benefit","value":64772.0,"change":-0.013479141599524803,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"School of Engineering - Salary","key":"School of Engineering - Salary","value":16053324.0,"change":0.04938645175498547,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"School of Engineering - Operating Expense","key":"School of Engineering - Operating Expense","value":4280401.0,"change":-0.10843850551633237,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"School of Engineering - Fringe Benefit","key":"School of Engineering - Fringe Benefit","value":492789.0,"change":-0.057467461053678504,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"School of Law LAW - Salary","key":"School of Law LAW - Salary","value":9383773.0,"change":-0.021491829352972933,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"School of Law LAW - Operating Expense","key":"School of Law LAW - Operating Expense","value":4091745.0,"change":0.046475138528490605,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"School of Law LAW - Fringe Benefit","key":"School of Law LAW - Fringe Benefit","value":442183.0,"change":0.2847546465917246,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"School of Public Administration - Salary","key":"School of Public Administration - Salary","value":1306551.0,"change":-0.006956731909304828,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"School of Public Administration - Operating Expense","key":"School of Public Administration - Operating Expense","value":253516.0,"change":0.08554496484512157,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"School of Public Administration - Fringe Benefit","key":"School of Public Administration - Fringe Benefit","value":33526.0,"change":0.0,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"University College UC - Salary","key":"University College UC - Salary","value":2044361.0,"change":-0.09412722340532066,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"University College UC - Operating Expense","key":"University College UC - Operating Expense","value":327964.0,"change":-0.3287390575526169,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"University College UC - Fringe Benefit","key":"University College UC - Fringe Benefit","value":0.0,"change":-1.0,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"University Libraries - Salary","key":"University Libraries - Salary","value":9329411.0,"change":0.03261166966914052,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"University Libraries - Operating Expense","key":"University Libraries - Operating Expense","value":3614701.0,"change":0.007031976954750854,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"University Libraries - Fringe Benefit","key":"University Libraries - Fringe Benefit","value":131428.0,"change":0.06837266394075615,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"Vice President for Research - Salary","key":"Vice President for Research - Salary","value":4957379.0,"change":-0.07612970244220801,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"Vice President for Research - Operating Expense","key":"Vice President for Research - Operating Expense","value":7970008.0,"change":-0.09046788476136959,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"Vice President for Research - Fringe Benefit","key":"Vice President for Research - Fringe Benefit","value":1358866.0,"change":-0.14429416513539622,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"VP Division of Enrollment Mgmt - Salary","key":"VP Division of Enrollment Mgmt - Salary","value":5035261.0,"change":0.03592104036878935,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"VP Division of Enrollment Mgmt - Operating Expense","key":"VP Division of Enrollment Mgmt - Operating Expense","value":55538766.0,"change":-0.004441679779743333,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"VP Division of Enrollment Mgmt - Fringe Benefit","key":"VP Division of Enrollment Mgmt - Fringe Benefit","value":0.0,"change":1,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"VP for Equity & Inclusion - Salary","key":"VP for Equity & Inclusion - Salary","value":671188.0,"change":0.3542664595145376,"enrollments":["All Departments","Provost Academic Affairs","Salary"]},{"label":"VP for Equity & Inclusion - Operating Expense","key":"VP for Equity & Inclusion - Operating Expense","value":387534.0,"change":0.2616435412773549,"enrollments":["All Departments","Provost Academic Affairs","Operating Expense"]},{"label":"VP for Equity & Inclusion - Fringe Benefit","key":"VP for Equity & Inclusion - Fringe Benefit","value":7000.0,"change":-0.536178107606679,"enrollments":["All Departments","Provost Academic Affairs","Fringe Benefit"]},{"label":"Assoc. VP Student Life (ACD) - Salary","key":"Assoc. VP Student Life (ACD) - Salary","value":4572440.0,"change":0.20267772574800436,"enrollments":["All Departments","VP for Student Affairs","Salary"]},{"label":"Assoc. VP Student Life (ACD) - Operating Expense","key":"Assoc. VP Student Life (ACD) - Operating Expense","value":3768437.0,"change":0.10926493816447361,"enrollments":["All Departments","VP for Student Affairs","Operating Expense"]},{"label":"Assoc. VP Student Life (ACD) - Fringe Benefit","key":"Assoc. VP Student Life (ACD) - Fringe Benefit","value":765050.0,"change":0.0025711320319543748,"enrollments":["All Departments","VP for Student Affairs","Fringe Benefit"]},{"label":"Associate VP Student Services - Salary","key":"Associate VP Student Services - Salary","value":2873984.0,"change":-0.013110186483380222,"enrollments":["All Departments","VP for Student Affairs","Salary"]},{"label":"Associate VP Student Services - Operating Expense","key":"Associate VP Student Services - Operating Expense","value":1463781.0,"change":0.09153405103983428,"enrollments":["All Departments","VP for Student Affairs","Operating Expense"]},{"label":"Associate VP Student Services - Fringe Benefit","key":"Associate VP Student Services - Fringe Benefit","value":197003.0,"change":-0.13780849136289833,"enrollments":["All Departments","VP for Student Affairs","Fringe Benefit"]},{"label":"VP Student Affairs Administration - Salary","key":"VP Student Affairs Administration - Salary","value":1304048.0,"change":0.021487258903805918,"enrollments":["All Departments","VP for Student Affairs","Salary"]},{"label":"VP Student Affairs Administration - Operating Expense","key":"VP Student Affairs Administration - Operating Expense","value":775366.0,"change":-0.10689920096570614,"enrollments":["All Departments","VP for Student Affairs","Operating Expense"]},{"label":"VP Student Affairs Administration - Fringe Benefit","key":"VP Student Affairs Administration - Fringe Benefit","value":35600.0,"change":0.0,"enrollments":["All Departments","VP for Student Affairs","Fringe Benefit"]},{"label":"VP Student Affairs Indpndnt Dept ID - Salary","key":"VP Student Affairs Indpndnt Dept ID - Salary","value":5371539.0,"change":0.05324996284288954,"enrollments":["All Departments","VP for Student Affairs","Salary"]},{"label":"VP Student Affairs Indpndnt Dept ID - Operating Expense","key":"VP Student Affairs Indpndnt Dept ID - Operating Expense","value":3192893.0,"change":0.07015318819473888,"enrollments":["All Departments","VP for Student Affairs","Operating Expense"]},{"label":"VP Student Affairs Indpndnt Dept ID - Fringe Benefit","key":"VP Student Affairs Indpndnt Dept ID - Fringe Benefit","value":1332577.0,"change":0.04597470182613098,"enrollments":["All Departments","VP for Student Affairs","Fringe Benefit"]},{"label":"College of Nursing - Salary","key":"College of Nursing - Salary","value":7918279.0,"change":0.08818031548696209,"enrollments":["All Departments","VP Health Sciences Center","Salary"]},{"label":"College of Nursing - Operating Expense","key":"College of Nursing - Operating Expense","value":1305082.0,"change":0.05323973942629883,"enrollments":["All Departments","VP Health Sciences Center","Operating Expense"]},{"label":"College of Nursing - Fringe Benefit","key":"College of Nursing - Fringe Benefit","value":705955.0,"change":0.07939898413824527,"enrollments":["All Departments","VP Health Sciences Center","Fringe Benefit"]},{"label":"College of Pharmacy - Salary","key":"College of Pharmacy - Salary","value":8170267.0,"change":0.047563468796258127,"enrollments":["All Departments","VP Health Sciences Center","Salary"]},{"label":"College of Pharmacy - Operating Expense","key":"College of Pharmacy - Operating Expense","value":2125982.0,"change":0.01502352573268752,"enrollments":["All Departments","VP Health Sciences Center","Operating Expense"]},{"label":"College of Pharmacy - Fringe Benefit","key":"College of Pharmacy - Fringe Benefit","value":1041698.0,"change":0.04902861194023839,"enrollments":["All Departments","VP Health Sciences Center","Fringe Benefit"]},{"label":"College of Population Health - Salary","key":"College of Population Health - Salary","value":0.0,"change":1,"enrollments":["All Departments","VP Health Sciences Center","Salary"]},{"label":"College of Population Health - Operating Expense","key":"College of Population Health - Operating Expense","value":0.0,"change":1,"enrollments":["All Departments","VP Health Sciences Center","Operating Expense"]},{"label":"College of Population Health - Fringe Benefit","key":"College of Population Health - Fringe Benefit","value":0,"change":1,"enrollments":["All Departments","VP Health Sciences Center","Fringe Benefit"]},{"label":"HS Library and  Informatics Center - Salary","key":"HS Library and  Informatics Center - Salary","value":3616268.0,"change":0.03237435641967361,"enrollments":["All Departments","VP Health Sciences Center","Salary"]},{"label":"HS Library and  Informatics Center - Operating Expense","key":"HS Library and  Informatics Center - Operating Expense","value":1564462.0,"change":0.25644864136414525,"enrollments":["All Departments","VP Health Sciences Center","Operating Expense"]},{"label":"HS Library and  Informatics Center - Fringe Benefit","key":"HS Library and  Informatics Center - Fringe Benefit","value":120796.0,"change":-0.07172113825511607,"enrollments":["All Departments","VP Health Sciences Center","Fringe Benefit"]},{"label":"HSC VP Research - Salary","key":"HSC VP Research - Salary","value":3100341.0,"change":0.14926962681017858,"enrollments":["All Departments","VP Health Sciences Center","Salary"]},{"label":"HSC VP Research - Operating Expense","key":"HSC VP Research - Operating Expense","value":1895999.0,"change":0.32112660942710736,"enrollments":["All Departments","VP Health Sciences Center","Operating Expense"]},{"label":"HSC VP Research - Fringe Benefit","key":"HSC VP Research - Fringe Benefit","value":1092261.0,"change":0.23798130324201058,"enrollments":["All Departments","VP Health Sciences Center","Fringe Benefit"]},{"label":"School of Medicine - Salary","key":"School of Medicine - Salary","value":227190342.0,"change":0.05558888870938778,"enrollments":["All Departments","VP Health Sciences Center","Salary"]},{"label":"School of Medicine - Operating Expense","key":"School of Medicine - Operating Expense","value":44550872.0,"change":0.0010389479891015393,"enrollments":["All Departments","VP Health Sciences Center","Operating Expense"]},{"label":"School of Medicine - Fringe Benefit","key":"School of Medicine - Fringe Benefit","value":50701340.0,"change":0.10370660378970613,"enrollments":["All Departments","VP Health Sciences Center","Fringe Benefit"]},{"label":"VP HSC Administration - Salary","key":"VP HSC Administration - Salary","value":18286779.0,"change":-0.47835282100516324,"enrollments":["All Departments","VP Health Sciences Center","Salary"]},{"label":"VP HSC Administration - Operating Expense","key":"VP HSC Administration - Operating Expense","value":16242647.0,"change":-0.23621393321271492,"enrollments":["All Departments","VP Health Sciences Center","Operating Expense"]},{"label":"VP HSC Administration - Fringe Benefit","key":"VP HSC Administration - Fringe Benefit","value":27752146.0,"change":0.07814539455399583,"enrollments":["All Departments","VP Health Sciences Center","Fringe Benefit"]}]}
		visualizeIt();
}