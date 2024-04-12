import {BrowserRouter} from "react-router-dom";
import {
	Home,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Project,
	StarsCanvas,
} from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover'>
					<Navbar />
					<Hero />
				</div>

				<Home />
				<Experience />
				<Tech />
				<Project />
				<Feedbacks />
				<div className='relative z-0'>
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
