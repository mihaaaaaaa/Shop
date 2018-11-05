let interfaceBuilder = {};

interfaceBuilder.build = function(interface) {
	interfaceBuilder.parent.html(interfaceBuilder.interfaces[interface]);
}

interfaceBuilder.prepareUserList = function(goodsList) {

	let result = '<div class="goods">';

	goodsList.forEach(function(goods) {
		result += '<div class="slot">\
						<h2 class="name">' + goods.name + '</h2>\
						<img src="' + goods.img + '">\
						<div class="slot-buttom">\
							<div class="type">' + goods.type + '</div>\
							<div class="model">' + goods.model + '</div>\
						</div>\
						<div class="price">' + goods.price + '</div>\
					</div>';
	});

	return result + '</div>';

}

function interfaceBuild(goodsList) {
		
$('.js-mainParent').html(interfaceBuilder.prepareUserList(goodsList));

}

