$(document).ready(function(){
	let rand_num,turn=1,com_arr=[],player_arr=[],a=[],selected_pos=[],win_flag=0; 
 
	$("#grid div").click(function(e) {
		let i = $(this).data("index");
	
		if(jQuery.inArray(i,selected_pos)!=-1) {
			alert("This box is already occupied! select another box.");
			return 0;
		}
		
		$(this).html("<h6 class='inner_box'>X</h6>");
		selected_pos.push(i);
		player_arr.push(i);
		
		setTimeout( function(){ 
			if((jQuery.inArray(0,player_arr)!=-1 && jQuery.inArray(1,player_arr)!=-1 && jQuery.inArray(2,player_arr)!=-1) ||
				(jQuery.inArray(3,player_arr)!=-1 && jQuery.inArray(4,player_arr)!=-1 && jQuery.inArray(5,player_arr)!=-1) ||
				(jQuery.inArray(6,player_arr)!=-1 && jQuery.inArray(7,player_arr)!=-1 && jQuery.inArray(8,player_arr)!=-1) ||
				(jQuery.inArray(0,player_arr)!=-1 && jQuery.inArray(3,player_arr)!=-1 && jQuery.inArray(6,player_arr)!=-1) ||
				(jQuery.inArray(1,player_arr)!=-1 && jQuery.inArray(4,player_arr)!=-1 && jQuery.inArray(7,player_arr)!=-1) ||
				(jQuery.inArray(2,player_arr)!=-1 && jQuery.inArray(5,player_arr)!=-1 && jQuery.inArray(8,player_arr)!=-1) ||
				(jQuery.inArray(0,player_arr)!=-1 && jQuery.inArray(4,player_arr)!=-1 && jQuery.inArray(8,player_arr)!=-1) ||
				(jQuery.inArray(2,player_arr)!=-1 && jQuery.inArray(4,player_arr)!=-1 && jQuery.inArray(6,player_arr)!=-1)) {
				alert("Congratulations! You win! Play again!");
				$("#grid div").html("");
				win_flag = 1;
				window.location.reload(true);
			}
		}, 700);
		
		setTimeout( function(){ 
			rand_num = generateRandom(0,8,selected_pos);
			$("#grid div").each(function( index ) {
				if($(this).data("index")==rand_num)
					$(this).html("<h6 class='inner_box'>O</h6>");
			});
			selected_pos.push(rand_num);
			com_arr.push(rand_num);
		}, 800);
		
		setTimeout( function(){ 
			if((jQuery.inArray(0,com_arr)!=-1 && jQuery.inArray(1,com_arr)!=-1 && jQuery.inArray(2,com_arr)!=-1) ||
				(jQuery.inArray(3,com_arr)!=-1 && jQuery.inArray(4,com_arr)!=-1 && jQuery.inArray(5,com_arr)!=-1) ||
				(jQuery.inArray(6,com_arr)!=-1 && jQuery.inArray(7,com_arr)!=-1 && jQuery.inArray(8,com_arr)!=-1) ||
				(jQuery.inArray(0,com_arr)!=-1 && jQuery.inArray(3,com_arr)!=-1 && jQuery.inArray(6,com_arr)!=-1) ||
				(jQuery.inArray(1,com_arr)!=-1 && jQuery.inArray(4,com_arr)!=-1 && jQuery.inArray(7,com_arr)!=-1) ||
				(jQuery.inArray(2,com_arr)!=-1 && jQuery.inArray(5,com_arr)!=-1 && jQuery.inArray(8,com_arr)!=-1) ||
				(jQuery.inArray(0,com_arr)!=-1 && jQuery.inArray(4,com_arr)!=-1 && jQuery.inArray(8,com_arr)!=-1) ||
				(jQuery.inArray(2,com_arr)!=-1 && jQuery.inArray(4,com_arr)!=-1 && jQuery.inArray(6,com_arr)!=-1)) {
				alert("Sorry! System wins this game! Try again!");
				$("#grid div").html("");
				win_flag = 1;
				window.location.reload(true);
			}
		}, 1000);
		
		setTimeout( function(){ 
			if(win_flag==0) {
				if(jQuery.inArray(0,selected_pos)!=-1 && jQuery.inArray(1,selected_pos)!=-1 && jQuery.inArray(2,selected_pos)!=-1 &&
					jQuery.inArray(3,selected_pos)!=-1 && jQuery.inArray(4,selected_pos)!=-1 && jQuery.inArray(5,selected_pos)!=-1 &&
					jQuery.inArray(6,selected_pos)!=-1 && jQuery.inArray(7,selected_pos)!=-1 && jQuery.inArray(8,selected_pos)!=-1) {
					alert("Game over! Play again!");
					$("#grid div").html("");
					window.location.reload(true);
				}
			}
		}, 1100);
	});
	
	function generateRandom(min, max) {
		var num = Math.floor(Math.random() * (max - min + 1)) + min;
		return (jQuery.inArray(num,selected_pos)!=-1) ? generateRandom(min, max) : num;
	}
});

