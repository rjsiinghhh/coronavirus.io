var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-193.p.rapidapi.com/statistics",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "a2703af391mshef7454f4f464817p1b3d97jsnca0c8a6b3e06"
	}
}

var i = 0 //index variable starts out at 0
$.ajax(settings).done(function (data) { //refresh the api, takes the response
  $('#Submit').click(function() { //invokes the function with the button with the id submit
  while (true) // while this is true
  {
    if (data.response[i].country.toLowerCase().trim() == $('#Country').val().toLowerCase().trim()) // if this inner json country matches the input
    {
      console.log(data.response[i]); // it will show the whole countrys which was choosens json.





			$('#active').append($('<br>')).text('Active: ' +data.response[i].cases.active)
			$('#critical').append($('<br>')).text('Critical:  '+data.response[i].cases.critical)
			$('#new').append($('<br>')).text('New: ' +data.response[i].cases.new)
			$('#recovered').append($('<br>')).text('Recovered:  '+data.response[i].cases.recovered)
			$('#total').append($('<br>')).text('Total Cases:  '+data.response[i].cases.total)


			$('#active_p').text('' +Math.round(data.response[i].cases.active/data.response[i].cases.total*100))

			$('#recovery_p').text('' +Math.round(data.response[i].cases.recovered/data.response[i].cases.total*100))



// data is what i named the whole json object, and response represents each countries json.




			$('#deaths').text(data.response[i].deaths.total)
			$('#country').text($('#Country').val())
			$('#population').text(data.response[i].population)
			$('#day').text(data.response[i].day)


			break;
    }
    i++ // without the i++ it will just print out the first json of the index repeatedly.
  }
  })
});


// AJAX ABOVE AND MODALS BELOW


$(() => {
	const $openBtn = $('#f');
	const $modal = $('#modal3');
	const $closeBtn = $('#e');

	const openModal = () => {
		$modal.css('display', 'none');

	}

	const closeModal = () => {
		$modal.css('display', 'block');

	}

	$openBtn.on('click', openModal);
	$closeBtn.on('click', closeModal);
	setTimeout(openModal, 100000)
})





$(() => {
	const $openBtn = $('#d');
	const $modal =$('#modal2');
	const $closeBtn = $('#c');

	const openModal = () => {
		$modal.css('display','none');
	}

	const closeModal = () => {
		$modal.css('display', 'block');
	}

	$openBtn.on('click', openModal);
	$closeBtn.on('click',closeModal);

setTimeout(openModal, 100000)

})




$(() => {
	const $openBtn = $('#b');
	const $modal = $('#modal1');
	const $closeBtn = $('#a');

	const openModal = () => {
		$modal.css('display', 'none');

	}

	const closeModal = () => {
		$modal.css('display', 'block');

	}

	$openBtn.on('click', openModal);
	$closeBtn.on('click', closeModal);
	setTimeout(openModal, 100000)
})
