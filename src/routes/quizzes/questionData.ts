export const questionData: Question[] = [
	{
		questionID: '1',
		question: 'How do you say hi?',
		options: [
			{
				name: 'Hello',
				value: '1_hello'
			},
			{
				name: 'World',
				value: '1_world'
			},
			{
				name: 'Bye',
				value: '1_bye'
			},
			{
				name: 'No',
				value: '1_no'
			}
		],
		answer: '1_hello'
	},
	{
		questionID: '2',
		question: 'How do you say goodbye?',
		options: [
			{
				name: 'Hello',
				value: '2_hello'
			},
			{
				name: 'World',
				value: '2_world'
			},
			{
				name: 'Ciao',
				value: '2_ciao'
			},
			{
				name: 'No',
				value: '2_no'
			}
		],
		answer: '2_ciao'
	}
];

export interface Question {
	questionID: string;
	question: string;
	options: Option[];
	answer: string;
}

interface Option {
	name: string;
	value: string;
}
