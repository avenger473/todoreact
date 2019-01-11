//API SERVER
var express= require('express');
var bp= require('body-parser');
var app= express();

var mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo');

var taskSchema= mongoose.Schema({
    task: String
});

var Todo= mongoose.model("Todo", taskSchema);

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

var cors = require('cors');

app.use(cors());
app.post('/save', (req,res)=>{
    console.log(req.body);
    Todo({task: req.body.task}).save((err,data)=>{
        if(err)
            throw err;
        console.log(data);
    });
    res.end('a agya');
});

app.get('/getlist', (req,res)=>{

    Todo.find({}, (err, data)=>{
        if(err)
            throw err;

        console.log(data);
        res.json(data);
        
    });
    //res.json({msg: "le dekh le"});

});

app.delete('/del/:id', (req,res)=>{
    console.log('delete karna tha')
    Todo.findOne({_id: req.params.id}).remove((err,data)=>{
		if(err) throw err;
        
        res.end(req.params.id);
	});
})



app.listen(8000, ()=>{
    console.log('API Server running at 8000');
})