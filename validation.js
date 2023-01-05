var p =document.getElementById('some-paragraph');
p.addEventlistener('click',function(event){
 p.innerHTML = 'You clicked it!';
});