function modifyTableCell(rowIndex, columnIndex, newText) {
	//funcxtion to modify a table cell
	var table = document.getElementById("table");
	var cell = table.rows[rowIndex].cells[columnIndex];
	cell.innerHTML = newText;

  }
  
  document.body.innerHTML = `
  <table id = "table">
	  <tbody>
		  <tr>
			  <td>Isla</td>
			  <td>Leo</td>
			  <td>Samuel</td>
		  </tr>
		  <tr>
			  <td>Mia</td>
			  <td>Evie</td>
			  <td>Freya</td>
		  </tr>
		  <tr>
			  <td>Olivia</td>
			  <td>Ava</td>
			  <td>George</td>
		  </tr>
	  </tbody>
  </table>`;
  
  console.log(modifyTableCell(0, 1, "Joe"));

  function findAllHobbyists(hobby, hobbies) {
	//function to find all hobbyists
	var hobbyists = [];
	for (var i = 0; i < hobbies.length; i++) {
		if (hobbies[i] === hobby) {
			hobbyists.push(i);
		}
	}
	return hobbyists;
  }
  
  var hobbies = {
	"Steve": ['Fashion', 'Piano', 'Reading'],
	"Patty": ['Drama', 'Magic', 'Pets'],
	"Chad": ['Puzzles', 'Pets', 'Yoga']
  };
  
  console.log(findAllHobbyists('Yoga', hobbies));

1 == "1"; //true
 
function countdown(seconds){
	var delay = 0
	while (seconds >= 0){
		(function () {
			var time = seconds;
			setTimeout(function(){
				console.log(time);
			}, delay * 1000);
			delay++;
		}());
		seconds--;
	}
	console.log(seconds);

}

var vm = new Vue ({
	el: '#app',
	data: {
		dividend: 10,
		divisor: 2,
		errorMessage: 'Cannot divide by zero'
	},
	computed: {
		quotient: function () {
			return this.dividend / this.divisor;
		}
	},
	methods: {
		divideByZeroError: function () {
			if(this.divisor == 0){
				return this.errorMessage;
			}
			else {
				return '';
			}
		}
	}
});

Ecma