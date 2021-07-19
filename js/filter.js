$(function () {
  let $container = $('.work_list'),
      $loadMoreBtn = $('#loadmore'),
      addItemCount = 3, //한번에 표시할 항목 수
      added = 0, //표시된 항목의 수
      allData =[]; //빈 배열안에 모두 저장
  
  $.getJSON('./data/work.json',ininGallery);

  function ininGallery(data){
    allData = data;
    addItems();
    $loadMoreBtn.click(addItems);
  }
  function addItems(){
   let elements = [],
       slicedData = allData.slice(added,added + addItemCount);

       $.each(slicedData, function(i,item){
         let itemHTML = 
         '<li style="background-image: url('+item.imgUrl+')" class="item ' + item.type + '">'+
         '<h2 class="title_bar center">'+item.title+'</h2>'+
         '<p>' + item.description +'</p>' +
         '<a href="' + item.projectLink + '" class="big btn yellow">view project</a>' +
         '</li>';

         elements.push($(itemHTML).get(0));
      });
      
    $container.append(elements);
    added += slicedData.length;

	// WORK PAGE - filters
		let workContainer = $('.work_list');
		let mixer = mixitup(workContainer, {
			selectors: {
					target: '.item'
			},
			animation: {
					duration: 300
			}
    });
    mixer.forceRefresh();
    
  }// addItems()
  

});
