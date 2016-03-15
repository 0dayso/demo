<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

	<head>
		<base href="<%=basePath%>"/>

		<title>图灵机器人官网|图灵api|图灵机器人平台|图灵机器人</title>
		<jsp:include page="head_key.jsp"/>
		<meta name="baidu-site-verification" content="m8sgwgs3Sj" />	
		<meta charset="utf-8"/>
		
    	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    	<meta name="viewport" content="width=device-width, initial-scale=1"/>	
		<!-- 设计师的 css -->
		<link
			href="${pageContext.request.contextPath }/cloud/css/normalize.css"
			rel="stylesheet"/>
		<link
			href="${pageContext.request.contextPath }/cloud/css/bootstrap.css"
			rel="stylesheet"/>
        <link rel="stylesheet" href="${pageContext.request.contextPath }/cloud/css/reset.css" />
		<link rel="stylesheet" href="${pageContext.request.contextPath }/cloud/css/style.css" />
		<link
			href="${pageContext.request.contextPath }/cloud/css/turingstyle.css?var=20150401"
			rel="stylesheet"/>
		<script type="text/javascript"
			src="${pageContext.request.contextPath }/cloud/js/jquery-1.7.2.min.js">
</script>
<!--		<script type="text/javascript"-->
<!--			src="${pageContext.request.contextPath }/cloud/js/home.js">-->
<!--</script>-->
		<script type="text/javascript"
			src="${pageContext.request.contextPath }/cloud/js/global.js">
</script>
		<script type="text/javascript"
			src="${pageContext.request.contextPath }/cloud/js/tab.js">
</script>
<script src="${pageContext.request.contextPath}/cloud/js/bootstrap.js"></script>

	<script type="text/javascript">
	$(document).ready(function(){
	
		//手机访问判断
    	var flag = false;  
    	var agent = navigator.userAgent.toLowerCase(); 
    	var keywords = [ "android", "iphone", "ipod", "ipad", "windows phone", "mqqbrowser" ];  
            for (var item in keywords) {
            	//alert(item +"  "+agent.indexOf(keywords[item]));
                if (agent.indexOf(keywords[item]) > -1 ) {  
                    flag = true;  
                    window.location.href="${pageContext.request.contextPath}/cloud/phoneHome.jsp";
                    break;  
                }  
            }  
		$(window).resize(function() {
			window.location.reload();
		});
			
			//奥创活动弹出框，如果是直接输入网址，或者从非图灵的url跳转过来，则弹出
/*			var sourceUrl = document.referrer;
			//alert(sourceUrl);
			if(""== sourceUrl){
				//直接输入网址
				$('#j-show').modal({backdrop: 'static', keyboard: false});
    			$('#j-show').modal('show');
    		}else{
    			//从非图灵的url跳转过来
    			if(sourceUrl.indexOf("openapi")<0){
					$('#j-show').modal({backdrop: 'static', keyboard: false});
    				$('#j-show').modal('show');
    			}
    		}	*/
			
			//首页“获取图灵机器人”按钮样式控制
			$("#sdk_id").mouseover(function(){ 
  				$("#sdk_id").attr("src","${pageContext.request.contextPath }/cloud/images/sdk-btn-2.gif");
			});
			
			$("#sdk_id").mouseleave(function(){ 
  				$("#sdk_id").attr("src","${pageContext.request.contextPath }/cloud/images/sdk-btn-1.gif");
			});
	});
	
	</script>	

	</head>

	<body>
		<!-- 头部引入开始 -->
		<jsp:include page="head.jsp" flush="true" />
		<!-- 头部引入结束-->

		<!-- 中间部分开始 -->
		 <div id="wrap" class="wrap">
			<div class="nav_banner">
				<div class="nav_box">
					<div style="margin:0 auto;">
						<ul class="nav_uls">
							<li class="on">
								<a href="${pageContext.request.contextPath }/charges/neice_fu.html"><img src="${pageContext.request.contextPath }/cloud/images/home/banner05.gif" /></a>
							</li>
<!--							<li>-->
<!--								<img src="${pageContext.request.contextPath }/cloud/images/home/banner1.png" />-->
<!--							</li>-->
						</ul>
						<ul class="nav_lis">
							<li class="on"></li>
<!--							<li style="margin:0;"></li>-->
						</ul>
						<div class="nav_left">
							<img src="${pageContext.request.contextPath }/cloud/images/home/banner_left.png" />
						</div>
						<div class="nav_right">
							<img src="${pageContext.request.contextPath }/cloud/images/home/banner_right.png" />
						</div>
						<div class="nav_bg"></div>
					</div>
				</div>
			</div>
			<div class="wrap_boxs">
				<div class="bg_1">
					<div class="content_box">
						<div class="left">
							<img src="${pageContext.request.contextPath }/cloud/images/home/pic1.png" />
						</div>
						<div class="right">
							<h1>赋予软硬产品流畅自然的中文聊天能力</h1>
							<p>精准的语义分析，可正确识别用户意图</p>
							<p>支持多种上下文结构，满足连续对话及多重对话需要</p>
							<p>基于DeepQA技术，匹敌人类回答问题能力</p>
							<p>具备自学能力，产品越来越聪明</p>
						</div>
					</div>
				</div>
				<div class="bg_2">
					<div class="content_box">
						<div class="right" style="margin-left:12%">
							<h1>支持可自定义的NLP智能知识库系统</h1>
							<p>基于NLP技术的高智能知识库</p>
							<p>满足不同场景的个性化及商业需求</p>
						</div>
						<div class="left">
							<img src="${pageContext.request.contextPath }/cloud/images/home/pic2.png" />
						</div>
					</div>
				</div>
				<div class="bg_1">
					<div class="content_box">
						<div class="left">
							<img src="${pageContext.request.contextPath }/cloud/images/home/pic3.png" />
						</div>
						<div class="right">
							<h1>融合上百个生活场景实用功能</h1>
							<p>打包超过500种实用生活服务功能</p>
							<p>支持自然语言唤醒，在对话与聊天中满足生活需求</p>
						</div>
					</div>
				</div>
				<div class="bg_2">
					<div class="content_box">
						<div class="right" style="margin-left:12%">
							<h1>提供最友好的人工智能技术应用方案</h1>
							<p>图灵机器人API调用次数完全免费</p>
							<p>提供适用多领域的一体化打包方案</p>
							<%
								String status = "";
								if(session.getAttribute("accountname")!=null && !session.getAttribute("accountname").equals("") && session.getAttribute("cloudAccountEntity")!=null){
 										status = "none";
 								}else{
 										status = "block";
 								}
 							%>
							<div class="new_btn" style="display:<%=status%>">
								<a href="/openapi/cloud/register.jsp">获取图灵机器人</a>
							</div>
						</div>
						<div class="left">
							<img src="${pageContext.request.contextPath }/cloud/images/home/pic4.png" />
						</div>
					</div>
				</div>
			</div>
			<div class="wrap_btns">
				<div class="wrap_header">
					<ul>
						<li class="on">
							<div class="icon">
								<img src="${pageContext.request.contextPath }/cloud/images/home/icon_b1.png" />
							</div>
							<p>硬件机器人</p>
							<div class="back_top"></div>
						</li>
						<li>
							<div class="icon">
								<img src="${pageContext.request.contextPath }/cloud/images/home/icon2.png" />
							</div>
							<p>虚拟机器人</p>
							<div class="back_top"></div>
						</li>
						<li>
							<div class="icon">
								<img src="${pageContext.request.contextPath }/cloud/images/home/icon3.png" />
							</div>
							<p>智能家居</p>
							<div class="back_top"></div>
						</li>
						<li>
							<div class="icon">
								<img src="${pageContext.request.contextPath }/cloud/images/home/icon4.png" />
							</div>
							<p>智能车载</p>
							<div class="back_top"></div>
						</li>
						<li style="margin-right:0;">
							<div class="icon">
								<img src="${pageContext.request.contextPath }/cloud/images/home/icon5.png" />
							</div>
							<p>智能客服</p>
							<div class="back_top"></div>
						</li>
					</ul>
				</div>
				<div class="wrap_footer">
					<div class="wrap_box">
						<div class="footer_box">
							<div class="footer_content on">
								<ul style="width:1040px;">
									<li>
										<div class="left">
											<img src="${pageContext.request.contextPath }/cloud/images/home/naojiqiren.png" />
										</div>
										<div class="right">
											<h1>NAO 机器人</h1>
											<p>NAO机器人是目前全球最先进的类人机器人，目前图灵机器人已实现对NAO机器人的技术支持，为NAO机器人接入了具有最佳中文语义识别能力的图灵机器人，为其安装了一颗更加智能的“智慧大脑”。</p>
											<p>接入了图灵机器人的NAO机器人，兼具灵活的动作及聪明的头脑，人工智能程度更上一筹。</p>
										</div>
									</li>
								</ul>
							</div>
							<div class="footer_content">
								<ul style="width:4160px;">
									<li>
										<div class="left">
											<img src="${pageContext.request.contextPath }/cloud/images/home/xuni.png" />
										</div>
										<div class="right">
											<h1>Hidi语音助手</h1>
											<p>语音操作是智能手机发展的趋势，HTC手机中内置的小hi就是一款非常智能的语音服务软件。能够帮你打开应用程序、订日程、查询生活信息、发送信息等多种功能。而且使用方法很简单，长按Home键便可开启，然后点击语音键，直接输入语音命令，小hi便可以给与满意的答案。</p>
										</div>
									</li>
									<li>
										<div class="left">
											<img src="${pageContext.request.contextPath }/cloud/images/home/qq.png" />
										</div>
										<div class="right">
											<h1>酷Q  QQ机器人</h1>
											<p>酷Q是知名的QQ群管理软件，通过酷Q，用户可以方便快捷的对QQ群进行管理。同时，通过酷Q图灵机器人插件，用户可以为自己的QQ群中接入一款聪明有趣的聊天机器人，实现活跃群气氛等目的。</p>
										</div>
									</li>
									<li>
										<div class="left">
											<img src="${pageContext.request.contextPath }/cloud/images/home/zhangshang.png" />
										</div>
										<div class="right">
											<h1>掌上大学</h1>
											<p>掌上大学是专业为高校、大学生组织、社团协会、学院等微信公共平台提供在微信上进行教务系统的课表查询、成绩查询、在线选课系统、失物招领以及通过微信进行投票、做问卷、收集报名表，微信上做抽奖活动等于一体的专业服务方。</p>
											<p>图灵机器人接入掌上大学后，各高校可快速为自己的微信号接入一位智能度超高的虚拟机器人，以提升账号活跃性。</p>
										</div>
									</li>
									<li>
										<div class="left">
											<img src="${pageContext.request.contextPath }/cloud/images/home/weiphp.png" />
										</div>
										<div class="right">
											<h1>WePHP</h1>
											<p>WeiPHP是一款方便搭建，扩展性强的开源微信公众平台开发框架,利用她您可以轻松搭建一个属于自己的微信公众账号运营平台。</p>
											<p>图灵机器人目前已成为WePHP平台的默认机器人，活跃在成千上万个微信公众号中。</p>
										</div>
									</li>
								</ul>
							</div>
							<div class="footer_content">
								<ul style="width:2080px;">
									<li>
										<div class="left">
											<img src="${pageContext.request.contextPath }/cloud/images/home/haier.png" />
										</div>
										<div class="right">
											<h1>海尔智能家具控制系统</h1>
											<p>海尔是全球知名的集研发、生产、销售为一体的家电企业，同时是国内家电行业创新力与研发能力的代表。</p>
											<p>接入了图灵机器人的海尔家居控制系统，为人们提供了更加智能与人性化的人机交互体验。</p>
										</div>
									</li>
									<li>
										<div class="left">
											<img src="${pageContext.request.contextPath }/cloud/images/home/shenfu.png" />
										</div>
										<div class="right">
											<h1>神府智能家居系统</h1>
											<p>神府智能家居是目前极具创新力的智能家居技术提供商，借助图灵机器人平台强大的自然语义解析，做到了对家庭设备的智能控制。</p>
										</div>
									</li>
								</ul>
							</div>
							<div class="footer_content">
								<ul style="width:2080px;">
									<li>
										<div class="left">
											<img src="${pageContext.request.contextPath }/cloud/images/home/boshi.png" />
										</div>
										<div class="right">
											<h1>博世车载</h1>
											<p>博世车载是全球知名的车载系统技术服务提供商，通过接入图灵机器人引擎，可以实现人与车机系统的自然语言交互，通过全语音唤醒车载系统的全部功能，解放了司机的双手，极大的提高了驾驶安全性。</p>
										</div>
									</li>
									<li>
										<div class="left">
											<img src="${pageContext.request.contextPath }/cloud/images/home/letou.png" />
										</div>
										<div class="right">
											<h1>乐投卡尔车载</h1>
											<p>乐投是车载安卓平台最大的智能终端服务提供商。借助图灵机器人灵活的api策略，乐投卡尔车载系统进入人工智能交互时代。</p>
										</div>
									</li>
								</ul>
							</div>
							<div class="footer_content">
								<ul style="width:1040px;">
									<li>
										<div class="left">
											<img src="${pageContext.request.contextPath }/cloud/images/home/dianxin.png" />
										</div>
										<div class="right">
											<h1>北京电信智能客服</h1>
											<p>北京电信客服是图灵机器人为北京电信开发的智能机器人客服，能够帮助用户以自然语言的方式快速享用包括查话费、流量等中国电信客户服务。除此之外，图灵机器人还具备提升中国电信粉丝活跃度，提升公众账号价值等功能。
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="footer_left">
							<img src="${pageContext.request.contextPath }/cloud/images/home/left.png" />
						</div>
						<div class="footer_right">
							<img src="${pageContext.request.contextPath }/cloud/images/home/right.png" />
						</div>
					</div>
				</div>
			</div>
			<div class="lunbo">
				<div id="lunbo_nav" class="lunbo_nav">
					<div class="dmoes">
						<ul id="demo1">
							<li>
								<img src="${pageContext.request.contextPath }/cloud/images/home/logo1.png" />
							</li>
							<li>
								<img src="${pageContext.request.contextPath }/cloud/images/home/logo2.png" />
							</li>
							<li>
								<img src="${pageContext.request.contextPath }/cloud/images/home/logo3.png" />
							</li>
							<li>
								<img src="${pageContext.request.contextPath }/cloud/images/home/logo4.png" />
							</li>
							<li>
								<img src="${pageContext.request.contextPath }/cloud/images/home/logo5.png" />
							</li>
							<li>
								<img src="${pageContext.request.contextPath }/cloud/images/home/logo6.png" />
							</li>
							<li>
								<img src="${pageContext.request.contextPath }/cloud/images/home/logo7.png" />
							</li>
							<li>
								<img src="${pageContext.request.contextPath }/cloud/images/home/logo8.png" />
							</li>
							<li>
								<img src="${pageContext.request.contextPath }/cloud/images/home/logo9.png" />
							</li>
							<li style="margin-right:0;">
								<img src="${pageContext.request.contextPath }/cloud/images/home/logo10.png" />
							</li>
						</ul>
						<ul id="demo2"></ul>
					</div>
				</div>
			</div>
		</div>
<!--		<script src="${pageContext.request.contextPath }/cloud/js/jquery-1.8.2.min.js"></script>-->
		<script src="${pageContext.request.contextPath }/cloud/js/script.js"></script>
		<!-- 中间部分结束 -->

		<!-- 底部引入开始 -->
		<jsp:include page="bottom.jsp" flush="true" />
		<!-- 底部引入结束-->
		
		<!-- 奥创活动弹出开始 -->
 		<div class="modal fade" style="top:5%;left:18%;" id="j-show" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<!-- 大图 -->
			<img src="${pageContext.request.contextPath }/cloud/img/back1.png" alt="图灵机器人奥创弹窗" width="80%" style="padding:50px 50px 0 0;"/>
			<!-- 按钮 -->
			<div style="width:306px;height:64px;position:absolute; top:75%; left:50%;right:0; margin-left:-250px;">
				<a target="_Blank" href="/openapi/cloud/whoami.jsp">
				<img id="id_ultron_p" src="${pageContext.request.contextPath }/cloud/img/jinru.png" alt="图灵机器人奥创体验" width="80%"/>
				</a>
			</div>
			<!-- 关闭按钮 -->
			<div style="position:absolute; top:0%; right:20%; cursor:pointer;" data-dismiss="modal" tabindex="1">
				<img src="${pageContext.request.contextPath }/cloud/images/ultron/close.png" alt="图灵机器人奥创体验" width="50"/>
			</div>
		</div>
		<!-- 奥创活动弹出结束 -->
	
		<script type="text/javascript">
		//控制奥创弹出创按钮闪烁
			//var i = 0;
			//setTimeout('aa()',300);
    		//function aa(){
	 			//if(i==0){
					//document.getElementById("id_ultron_p").src = "${pageContext.request.contextPath }/cloud/images/ultron/button.png";
					//i++;
	 			//}
	 			//else if(i==1){
					//document.getElementById("id_ultron_p").src = "${pageContext.request.contextPath }/cloud/images/ultron/button-f.png";
					//i--;	 	
	 			//}
	 			//setTimeout('aa()',300);
			//}
			</script>
	</body>
</html>
