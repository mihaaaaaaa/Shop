$(document).ready(function() {
	let goodsList = [
		{
			type: 'deust',
			name: 'dust-red',
			model: 'oKKaOndc',
			price: '4878',
			img: 'assets/img/dust-red.png'
		},
		{
			type: 'deust',
			name: 'dust-green',
			model: 'ccscaXju',
			price: '4081',
			img: 'assets/img/dust-green.png'
		},{
			type: 'deust',
			name: 'dust-orange',
			model: 'oDWBZNFP',
			price: '2878',
			img: 'assets/img/dust-orange.png'
		},
		{
			type: 'deust',
			name: 'dustr-purple',
			model: 'jcBWMGkx',
			price: '9568',
			img: 'assets/img/dust-purple.png'
		},
		{
			type: 'deust',
			name: 'dust-blue',
			model: 'ferTvrni',
			price: '7199',
			img: 'assets/img/dust-blue.png'
		},
		{
			type: 'deust',
			name: 'dust-pink',
			model: 'orCTymvM',
			price: '9191',
			img: 'assets/img/dust-pink.png'
		}
	];
	console.log(goodsList);

	$('.btn').click(function(){
		interfaceBuild(goodsList)
	});
});