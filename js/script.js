$(document).ready(function() { // Ждём загрузки страницы
	var steps = $("form").children(".step"); // находим все шаги формы
    var stepsLength = steps.length - 1;
	$(steps[0]).show(); // показываем первый шаг
	var current_step = 0; // задаем текущий шаг
	var question_results = document.getElementsByClassName("question-results");
	var navigation = document.getElementsByClassName("navigation");
	var missQuestion = document.getElementsByClassName("missQuestion")
	$(missQuestion).click(function(){	// Событие клика на ссылку "Пропустить шаг"
        if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
				$(this).hide(); // скрываем ссылку "Следующий шаг"
				$(navigation).hide();
				$("form input[type=submit]").show(); // показываем кнопку "Регистрация"
				$(question_results).hide();
			}
			$("a.back").show(); // показываем ссылку "Назад"
			current_step++; // увеличиваем счетчик текущего слайда
			changeStep(current_step); // меняем шаг
            var progress = 100 / stepsLength * current_step;
            document.getElementById("myBar").style.width = progress + "%";
			indicator.innerHTML= `<p class="indicator">${current_step+1}/${steps.length}</p>`;
	});

	$("a.next").click(function(){	// Событие клика на ссылку "Следующий шаг"
        if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
				$(this).hide(); // скрываем ссылку "Следующий шаг"
				$(navigation).hide();
				$("form input[type=submit]").show(); // показываем кнопку "Регистрация"
				$(question_results).hide();
			}
			$("a.back").show(); // показываем ссылку "Назад"
			current_step++; // увеличиваем счетчик текущего слайда
			changeStep(current_step); // меняем шаг
            var progress = 100 / stepsLength * current_step;
            document.getElementById("myBar").style.width = progress + "%";
			indicator.innerHTML= `<p class="indicator">${current_step+1}/${steps.length}</p>`;
	});

	$("a.back").click(function(){	// Событие клика на маленькое изображение
		if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
			$(this).hide(); // скрываем ссылку "Назад"
		}
		$("form input[type=submit]").hide(); // скрываем кнопку "Регистрация"
		$("a.next").show(); // показываем ссылку "Следующий шаг"
		$(question_results).show();
		current_step--; // уменьшаем счетчик текущего слайда
		changeStep(current_step);// меняем шаг
        var progress = 100 / stepsLength * current_step;
        document.getElementById("myBar").style.width = progress + "%";
		indicator.innerHTML= `<p class="indicator">${current_step+1}/${steps.length}</p>`;
	});
	
	function changeStep(i) { // функция смены шага
		$(steps).hide(); // скрываем все шаги
		$(steps[i]).show(); // показываем текущий
	}
});

// Слайдеры

const swiper = new Swiper('.swiper-how-it-works', {
	speed: 400,
	spaceBetween: 100,
	navigation: {
		nextEl: '.slider-button-next',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	direction:'vertical',
	mousewheel:{
		sansitivity: 1,
	},
  });
  
  const swiper2 = new Swiper('.swiper-how-can-be', {
	speed: 400,
	spaceBetween: 100,
	spaceBetween: 30,
	breakpoints: {
		360: {
			slidesPerView: 1.5,
		},
		768: {
			slidesPerView: 1.5,
		},
		1440: {
			slidesPerView: 3,
		}
	},
  });


// Работа с формой
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', form_Send);

  async function form_Send(e) {
	e.preventDefault();

	let error = formValidate(form);

	let formData = new FormData(form);

	if (error===0){
		form.classList.add('_sending')
		let response = await fetch ('sendmail.php', {
			method:'POST',
			body: formData
		});
		if (response.ok){
			let result = await response.json();
			alert(result.message);
			form.reset();
			form.classList.remove('_sending');
		}else{
			form.classList.remove('_sending');
		}
	}else{

	}
  }


  function formValidate(form){
		let error = 0;
		let formReq = document.querySelectorAll('._req')

		for (let index = o; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input.classList.contains);

			if (input.value === '') {
				formAddError(input);
				error++;
			} 
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
});
