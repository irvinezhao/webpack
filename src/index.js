// import _ from 'lodash';

// import './style.css';
// import MyImage from './icon.jpg'
// import Data from './data.xml';

// import printMe from './print.js';
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

function component() {
	// var element = document.createElement('div');
	var element = document.createElement('pre');
	// var btn = document.createElement('button');

	// Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
	// Lodash, now imported by this script
	// element.innerHTML = _.join(['Hello', 'webpdsddsdack'], ' ');

	element.innerHTML = [
		'Hello webpack!',
		'6 cubed is equal to ' + cube(6)
	].join('\n\n');


	// element.classList.add('hello');

	// // 将图像添加到我们现有的 div。
	// var myIcon = new Image();
	// myIcon.src = MyImage;
	// element.appendChild(myIcon);

	// xml
	// console.log(Data)

	// button
	// btn.innerHTML = 'Click me and check the conssdsadole!';
	// btn.onclick = printMe;
	// element.appendChild(btn);

	return element;
}

document.body.appendChild(component());