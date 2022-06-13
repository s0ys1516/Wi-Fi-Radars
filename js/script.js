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