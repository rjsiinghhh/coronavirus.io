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

var i = 0
$.ajax(settings).done(function (response) {
  $('#Submit').click(function() {
  while (true)
  {
    if (response.response[i].country == $('#Country').val())
    {
      console.log(response.response[i]);





			$('#active').append($('<br>')).text('Active: ' +response.response[i].cases.active)
			$('#critical').append($('<br>')).text('Critical:  '+response.response[i].cases.critical)
			$('#new').append($('<br>')).text('New: ' +response.response[i].cases.new)
			$('#recovered').append($('<br>')).text('Recovered:  '+response.response[i].cases.recovered)
			$('#total').append($('<br>')).text('Total Cases:  '+response.response[i].cases.total)






			$('#deaths').text(response.response[i].deaths.total)
			$('#country').text($('#Country').val())
			$('#population').text(response.response[i].population)
			$('#day').text(response.response[i].day)


			break;
    }
    i++
  }
  })
});


// AJAX ABOVE AND MODALS BELOW


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
