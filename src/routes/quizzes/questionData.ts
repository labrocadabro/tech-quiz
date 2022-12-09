export const questionData: Question[] = [
	{
		question: 'How do you say hi?',
		options: ['hello', 'world', 'bye', 'no'],
		answer: 'hello'
	},
	{
		question: 'How do you say goodbye?',
		options: ['hello', 'world', 'ciao', 'no'],
		answer: 'ciao'
	}
];

export interface Question {
	question: string;
	options: string[];
	answer: string;
}
