//back-end
function pingpong(i){
	if (i%3===0 && i%5===0){
		return "pingpong"
		}
	else if(i%3===0){
		return "ping"
		}
	else if(i%5===0){
		return "pong"
		}
	else{
		return i
		}