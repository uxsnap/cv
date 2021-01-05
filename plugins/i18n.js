import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { ruMessages, enMessages } from '~/helpers';

const messages = {
	ru: ruMessages,
	en: enMessages,
};

Vue.use(VueI18n);

export default ({ app }) => {
	app.i18n = new VueI18n({
		locale: 'ru',
		messages,
	});
};