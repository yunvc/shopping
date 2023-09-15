// JavaScript Document

		var num_jia = document.getElementById("num-jia");
        var num_jian = document.getElementById("num-jian");
        var input_num = document.getElementById("input-num");

        num_jia.onclick = function() {
			'use strict';
            input_num.value = parseInt(input_num.value) + 1;
        };

        num_jian.onclick = function() {
			'use strict';
            if(input_num.value <= 0) {
                input_num.value = 0;
            } else {

                input_num.value = parseInt(input_num.value) - 1;
            }

        };



 