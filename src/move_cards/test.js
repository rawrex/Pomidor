const Datastore = require('nedb');

const root_dir = '/home/rawrex/.local/share/PomodoroLogger/db/'

const cards_file = root_dir + 'cards.nedb'
const kanban_file = root_dir + 'kanban.nedb'
const lists_file = root_dir + 'lists.nedb'
const moveCard_file = root_dir + 'moveCard.nedb'
const projects_file = root_dir + 'projects.nedb'
const session_file = root_dir + 'session.nedb'
const settings_file = root_dir + 'settings.nedb'

const kanban_db = new Datastore({ filename: kanban_file, autoload: true });
const lists_db = new Datastore({ filename: lists_file, autoload: true });
const cards_db = new Datastore({ filename: cards_file, autoload: true });

kanban_db.find({ name: 'IT' }, function(error, documents)
{
	// console.error(documents);
	var topics_list_id = documents[0].lists[0]

	lists_db.find({ _id: topics_list_id }, function(error, documents)
	{
		console.error(documents);
		return;
	});
});

