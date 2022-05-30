$(document).ready(function() { // Ждём загрузки страницы
	var steps = $("form").children(".step"); // находим все шаги формы
    var stepsLength = steps.length - 1;
	$(steps[0]).show(); // показываем первый шаг
	var current_step = 0; // задаем текущий шаг
	var question_results = document.getElementsByClassName("question-results");

	$("a.next").click(function(){	// Событие клика на ссылку "Следующий шаг"
        if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
				$(this).hide(); // скрываем ссылку "Следующий шаг"
				$("form input[type=submit]").show(); // показываем кнопку "Регистрация"
				$(question_results).hide();
			}
			$("a.back").show(); // показываем ссылку "Назад"
			current_step++; // увеличиваем счетчик текущего слайда
			changeStep(current_step); // меняем шаг
            var progress = 100 / stepsLength * current_step;
            document.getElementById("myBar").style.width = progress + "%";
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
	});
	
	function changeStep(i) { // функция смены шага
		$(steps).hide(); // скрываем все шаги
		$(steps[i]).show(); // показываем текущий
	}
});

