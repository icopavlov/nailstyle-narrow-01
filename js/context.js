const READ_MORE_BUTTON_TEXT = "Прочетете повече", 
	RETURN_BACK_BUTTON_TEXT = "Назад",
	SERVICE_GROUP_DEFAULT_CLASS = "service-group", 
	CURRENCY = "лв.";

let services = [
	{
		title: "Електро-услуги",
		description: "Vivamus id malesuada nunc. Fusce ultrices tempus lectus, eget sagittis leo faucibus varius. Nunc at mauris ac velit mattis hendrerit sed id leo.",
		moreText: READ_MORE_BUTTON_TEXT,
		backText: RETURN_BACK_BUTTON_TEXT,
		className: "electro-services",
		services: [
			{ 
				title: "Прокарване на ел.инсталация", 
				description: "Vivamus id malesuada nunc. Fusce ultrices tempus lectus, eget sagittis leo faucibus varius. Nunc at mauris ac velit mattis hendrerit sed id leo.", 
				price: { integerPart: "89", fractionalPart: "90", currency: CURRENCY } 
			}, 
			{
				title: "Подмяна на ново табло с 4 бушона", 
				description: "Maecenas malesuada arcu vitae ornare viverra. Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis. Cras varius varius augue, tempor lobortis enim posuere eget.", 
				price: { integerPart: "129", fractionalPart: "90", currency: CURRENCY }
			}, 
			{
				title: "Подмяна на ново табло с над 4 бушона", 
				description: "Maecenas malesuada arcu vitae ornare viverra. Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis. Cras varius varius augue, tempor lobortis enim posuere eget.", 
				price: { integerPart: "39", fractionalPart: "90", currency: CURRENCY }
			}
		]
	},
	{
		title: "Строителство и ремонт на покриви",
		description: "Vivamus id malesuada nunc. Fusce ultrices tempus lectus, eget sagittis leo faucibus varius. Nunc at mauris ac velit mattis hendrerit sed id leo.",
		moreText: READ_MORE_BUTTON_TEXT,
		backText: RETURN_BACK_BUTTON_TEXT,
		className: "electro-services",
		services: [
			{ 
				title: "Прокарване на ел.инсталация", 
				description: "Vivamus id malesuada nunc. Fusce ultrices tempus lectus, eget sagittis leo faucibus varius. Nunc at mauris ac velit mattis hendrerit sed id leo.", 
				price: { integerPart: "89", fractionalPart: "90", currency: CURRENCY } 
			}, 
			{
				title: "Подмяна на ново табло с 4 бушона", 
				description: "Maecenas malesuada arcu vitae ornare viverra. Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis. Cras varius varius augue, tempor lobortis enim posuere eget.", 
				price: { integerPart: "129", fractionalPart: "90", currency: CURRENCY }
			}, 
			{
				title: "Подмяна на ново табло с над 4 бушона", 
				description: "Maecenas malesuada arcu vitae ornare viverra. Nam ultrices turpis a mi fringilla convallis. Proin maximus libero sed urna sollicitudin ultricies. Vestibulum iaculis efficitur dolor sit amet tempus. Phasellus luctus, diam vitae ultrices faucibus, ante dolor vestibulum justo, ut suscipit tortor purus at felis. Cras varius varius augue, tempor lobortis enim posuere eget.", 
				price: { integerPart: "39", fractionalPart: "90", currency: CURRENCY }
			}
		]
	}
];