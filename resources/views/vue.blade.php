<html>
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="/css/app.css">
	<script>baseURL = '{{ url("/") }}';</script>
	<script>globalToken = '{{ csrf_token() }}';</script>
</head>
<body>


	<div id="mojapp" class="container">
		<p>
	    	<router-link to="/vue" class="menu">Glowny</router-link>
	    	<router-link to="/vue/bar">Example</router-link>
	    	<router-link to="/vue/mojcomponent/44">mojComponent</router-link>
	    	<router-link to="/vue/nastepny" zmienna="text">nastepny</router-link>
	  	</p>

		<router-view></router-view>
	</div>

	<script src="/js/mojapp.js"></script>
</body>
</html>