var express 		= require('express'),
	app				= express(),
	cors			= require('cors'),
	bodyParser		= require('body-parser'),
	passport		= require('passport'),
	localStrategy	= require('passport-local'),
    cookieParser	= require('cookie-parser'),
    connectFlash	= require('connect-flash'),
    User            = require('./models/user');

var routers = require('./routes/routes'),
	loginRoutes = require('./routes/loginRoutes'),
	registerRoutes = require('./routes/registerRoutes'),
	customerfeedbackRoutes = require('./routes/customerfeedbackRoutes'),
	surveyRoutes = require('./routes/surveyRoutes');
	config = require('./config/database'),
	fieldforceRoutes = require('./routes/fieldforceRoutes'),
	jobManagementRoutes = require('./routes/jobManagement')
//var databaseUri = 'mongodb://localhost:27017/gdp';
//var databaseUri = 'mongodb://gdp-server:gdp-server@ds131512.mlab.com:31512/gdp-server?authMechanism=SCRAM-SHA-1'

app.options('*', cors()); 

//mongoose.connect(config.databaseUri);
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(connectFlash());
app.set("view engine","ejs");
app.use(express.static(__dirname));

app.use(require('express-session')({
	secret:"gdp",
	resave:false,
	saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var port = 3001;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('gdmp-client running on port ' + port + '.');
});

loginRoutes(app);
registerRoutes(app);
customerfeedbackRoutes(app);
surveyRoutes(app);
fieldforceRoutes(app);
jobManagementRoutes(app);

routers(app);

module.exports = app;

//<td><a class="btn mini blue-stripe" href="{site_url()}admin/editFront/1">Edit</a></td>