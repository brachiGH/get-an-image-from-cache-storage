// get image us an blob:

response = await caches.match('/img/blue-gun.png', {cacheName: "91ad77e96829a8274995657954bb5422"});

resToBlob = await response.blob();

blobUrl = await URL.createObjectURL(resToBlob);

console.log(blobUrl);



// get image us an base64:

response = await caches.match('/img/blue-gun.png', {cacheName: "91ad77e96829a8274995657954bb5422"});

resToBlob = await response.blob();

var reader = new FileReader();
reader.readAsDataURL(resToBlob);
reader.onloadend = async function() {
	var base64data = await reader.result;
	console.log(base64data);
}