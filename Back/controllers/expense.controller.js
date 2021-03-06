const expenseSchema = require('../models/expense.model');


exports.createExpense = (req, res) => {

  const user_id = req.user._id;
  const { category, description, amount } = req.body;
  let date = new Date(req.body.date).toISOString().substring(0, 10);

  const expense = new expenseSchema({ user_id, date, category, description, amount });
  
  expense.save(function (err) {
    if (err) return res.status(422).json({ 'error': 'Can not create an expense' + err });
    return res.status(200).json({ 'expense submitted': true });
  });

}


exports.getExpenses = (req, res) => {
  const user_id = req.user._id;

  expenseSchema.find({user_id})
  .then((userExpenses) => res.send(userExpenses))
  .catch((e) => res.send(e));
} 


exports.updateExpenses = (req, res) => {
  const { date, category, description, amount } = req.body;

  expenseSchema.findByIdAndUpdate(req.params.id, 
    {
      $set: {
        date: date, 
        category: category, 
        description: description, 
        amount: amount 
      }
    }, { new: true }, 
    
    (err, updatedItem) => {
      if (err) return res.status(422).json({ 'error': 'Can not update an expense' + err });
      else return res.json(updatedItem);
    }
  );
}


exports.deleteExpenses = (req, res) => {
  expenseSchema.findByIdAndDelete(req.params.id,  (err, deletedItem) => {
    if (err) return res.status(422).json({ 'error': 'Can not delete an expense' + err });
    else return res.json(deletedItem);
  });
}

exports.deleteAllExpenses = (req, res) => {
  const user_id = req.user._id;

  expenseSchema.deleteMany({user_id: user_id}, (err, allDeleted) => {
    if(err) return res.status(422).json({'error': 'cant delete all'})
    else return res.json(allDeleted)
  })
}