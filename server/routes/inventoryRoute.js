route.get('/inventory/:id',(req, res)=> {
  const itemId = req.params.id;
  const item = data.find(item => item.id == itemId); //this is for the id specific

  if(item){
    res.json(item);
  } else {
    res.json({message:'HTTP 404: Page Not Found'})
  }
});
