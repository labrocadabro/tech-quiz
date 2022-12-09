import type { Actions } from './$types';
import { formBody } from '$lib/formHelper';
export const actions: Actions = {
	default: async ({ request }) => {
		const values = await request.formData();
		const body = formBody(values);
		console.log(body);
	}
};
