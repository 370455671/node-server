开启静态服务器，向服务器发送req请求
pathObj为请求路径
switch来判断pathObj后面的pathname，分别作出不同的处理
1 如果是/getWeather    其中城市北京和别的城市分别不同处理
2 如果是/user/123     展示/static/user.tpl
3 如果是别的路径       则展示输入的静态页面

然后从端口9000开启服务