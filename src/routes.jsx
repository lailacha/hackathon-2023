import FormationPage from "@pages/FormationPage";
import FormationsPage from "@pages/FormationsPage";
import LessonPage from "@pages/LessonPage";
import HomePage from "@pages/HomePage";
import FormationCreatePage from "@pages/FormationCreatePage";
//todo add role check
import FormationsForFormator from "@pages/Formation/FormationsForFormator";
import TeachingFormationsPage from "@/pages/TeachingFormationsPage";

import CreateLesson from "@pages/Formation/CreateLesson";
import FormationEditPage from "@pages/FormationEditPage";

const routes = [
	{
		path: "",
		element: <HomePage />,
	},
	{
		path: "/formations",
		element: <FormationsPage />,
	},
	,
	{
		path: "/formations/:formationId",
		element: <FormationPage />,
	},
	{
		path: "/formations/:formationId/lessons/:lessonId",
		element: <LessonPage />,
	},
	{
		path: "/formations/create",
		element: <FormationCreatePage />,
	},
	// TODO replace with good routes
	{
		path: "/personnes",
		element: <LessonPage />,
	},
	{
		path: "/flux",
		element: <FormationsForFormator />,
	},
	{
		path: "/tasks",
		element: <CreateLesson />,
	},
	{
		path: "/teaching/formations/:formationId/edit",
		element: <FormationEditPage />,
	},
	{
		path: "/teaching/formations",
		element: <TeachingFormationsPage />,
	}
];

export default routes;
