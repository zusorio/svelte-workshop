import { text } from '@sveltejs/kit';
import launch from 'launch-editor';

export async function POST({ request }) {
	const { file } = await request.json();
	launch(`${file}`);
	return text('ok');
}
