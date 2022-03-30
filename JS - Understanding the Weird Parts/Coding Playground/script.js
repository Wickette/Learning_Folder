let person = {
  firstname: 'Steph',
  lastname: 'Clark',
  getFullName: function() {
      let fullname = this.firstname + ' ' + this.lastname;
      return fullname;
  }
}

let logName = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('--------------');
}

let logPersonName = logName.bind(person);

logPersonName('en', 'es');

