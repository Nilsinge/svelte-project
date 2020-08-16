import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		fillerData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur aliquet diam eu molestie. Proin at rhoncus metus. Sed sit amet pulvinar neque, nec pulvinar risus. Praesent tristique tristique hendrerit. Curabitur suscipit hendrerit elit, ac tincidunt sem condimentum hendrerit. Nullam convallis ligula ac nunc suscipit laoreet. Morbi dapibus, enim vitae commodo maximus, lectus metus suscipit erat, eu porta augue nulla efficitur metus. Fusce vitae nunc lorem. Phasellus vestibulum, est vitae sagittis vulputate, odio metus dictum massa, id consectetur purus odio at mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus viverra risus metus, ut scelerisque sapien tincidunt eget. Aenean ultricies porta ex scelerisque pellentesque.'
	}
});

export default app;