<html>
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="/css/app.css">
</head>
<body>


	<div id="mojapp" class="container">
		<p>
	    	<router-link to="/vue">Glowny</router-link>
	    	<router-link to="/vue/bar">Example</router-link>
	    	<router-link to="/vue/mojcomponent/44">mojComponent</router-link>
	  	</p>

		<router-view></router-view>
	</div>

	<script src="/js/mojapp.js"></script>
</body>
</html>