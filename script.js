const button = document.querySelector(".btn");
button.addEventListener("click", result);





function result(e) {
  e.preventDefault();

	let points=0;

	if(document.querySelector('#answer1').checked){	
    points++;
		}
	if(document.querySelector('#answer2').checked){	
    points++;
		}
	if(document.querySelector('#answer3').checked) {	
    points++;
		}
  if(document.querySelector('#answer4').checked) {	
      points++;
      }

  if(document.querySelector('#answer5').checked) {	
      points++;
    }
  if (points <= 2 && points >= 0){
      Swal.fire({
        icon: 'error',
        title: 'Ваши баллы: '+ points,
        text: 'Пожалуй, стоит повторить материал',
      })
    }
    if (points <=4 && points >=3 ){
    Swal.fire({
        icon: 'success',
        title: "Ваши баллы: " + points,
        text: 'Неплохой результат!',
      })
    }
    if (points === 5){
      Swal.fire({
        title: 'Супер!',
        text: '5 из 5! Ты отлично знаешь материал',
        imageUrl: 'http://pristor.ru/wp-content/uploads/2017/08/%D0%9F%D0%BE%D0%B7%D0%B4%D1%80%D0%B0%D0%B2%D0%BB%D1%8F%D1%8E-%D1%81-%D1%83%D1%81%D0%BF%D0%B5%D1%85%D0%BE%D0%BC-%D1%82%D0%B5%D0%B1%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BA%D0%B8-%D0%BF%D0%BE%D0%B7%D0%B4%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-1.jpg',
        imageWidth: 400,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
    }
  }
