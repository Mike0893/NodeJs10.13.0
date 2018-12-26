const express = require('express'); //returns a function
const Joi = require('joi'); //returns class for input validation
const app = express();

app.use(express.json());

const courses =[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
];

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/courses', (req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req,res) => {
    //res.send(req.params.id);
    const course = courses.find(c =>  c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Request course ID cannot be found');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    
    const result = validateCourse(req.body);

    if(result.error){
        //Bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req,res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    //let course = courses.find(c => {c.id === parseInt(req.params.id);}); //Why does not this line works
    if(!course){
        //Send status for resource not found
        res.status(404).send('Requested course not found');
        return;
    }

    //Object Destructuring
    const { error } = validateCourse(req.body);
    if(error){
        //Bad request
        res.status(400).send(error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req,res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('Requested course not found');
        return;
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    
    res.send(course);
});
function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

/*app.get('/api/posts/:year/:month', (req,res) => {
    res.send(req.query);  //Query parameters are stored in query
    res.send(req.params); //request parameter are stored in params
});*/

port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));