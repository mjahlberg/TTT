

window.addEventListener('load', function(){

			var tiles = document.getElementsByTagName('div'),
				count = 0;

			for(var i = 0; i < tiles.length; i++){
				tiles[i].addEventListener('click', function(){
					if(this.innerHTML !== ""){
						alert("fuckoff");
					}else if(count % 2 === 0){
						this.innerHTML = "X";
						//if you wanted you would put style.backgroundimage = ""
						count++;
					}else{
						this.innerHTML = "O";
						count
					}

				})
			}	


			
		})