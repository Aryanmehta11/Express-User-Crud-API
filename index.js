const express=require('express');
const app=express();
const port=3000;

app.use(express.json());

let users=[{id:1, name:'John'},
{id:2, name:'Jane'}
]

app.get('/users', (req, res)=>{
    res.json(users);
});

app.get('/users/:id',(req,res)=>{
    const user=users.find(u=>u.id===parseInt(req.params.id));
    if (!user) res.status(400).send("User not found")
    res.json(user)
    });

app.post('/users', (req, res)=>{
   const {name}=req.body;
   if (!name) return res.status(400).json({message:'Name is required'});
   const newUser={id:users.length+1, name};
   users.push(newUser); 
   res.json(newUser);
});

app.put('/users/:id', (req, res)=>{
    const {name}=req.body;
    const user=users.find(user=>user.id===parseInt(req.params.id));
    if (!user) return res.status(404).json({message:'User not found'});
    if (!name) return res.status(400).json({message:'Name is required'});
    user.name=name;
    res.json(user);


});

app.delete('/users/:id', (req, res)=>{
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('User not found');

  users.splice(userIndex, 1);
  res.status(204).send();});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
