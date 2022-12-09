export const questionData: Question[] = [
	{
		questionID: '1',
		question: 'How do you say hi?',
		options: [
			{
				name: 'Hello',
				id: '1_hello'
			},
			{
				name: 'World',
				id: '1_world'
			},
			{
				name: 'Bye',
				id: '1_bye'
			},
			{
				name: 'No',
				id: '1_no'
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
				id: '2_hello'
			},
			{
				name: 'World',
				id: '2_world'
			},
			{
				name: 'Ciao',
				id: '2_ciao'
			},
			{
				name: 'No',
				id: '2_no'
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
	id: string;
}
