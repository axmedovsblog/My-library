import { ContactPage } from '../../pages/contact-page'
import { NewsPage } from '../../pages/news-page'
import { Hero } from '../layout/hero-page'

export  const HomePage = () => {
	return (
		<div>
			<Hero/>
			<NewsPage/>
			<ContactPage/>
		</div>
	)
}
