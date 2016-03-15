<html>
<head>
<title>Ajax File Uploader Plugin For Jquery</title>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="ajaxfileupload.js"></script>
<script type="text/javascript">

function ajaxFileUpload(id) {
	$.ajaxFileUpload({
		url:'doajaxfileupload.php',
		secureuri:false,
		fileElementId:'fileupload'+id,
		dataType: 'json',
		success: function (data, status) {
			if(typeof(data.error) != 'undefined') {
				if(data.error != '') {
					alert(data.error);
				} else {
					document.getElementById('img'+id).src = data.msg;
					//把返回的图片路径赋值到下面的隐藏域中
					//document.getElementById('imgarr'+id).value = data.msg;
				}
			}
		},
		error: function (data, status, e) {
			alert(e);
		}
	})
	return false;
}
</script>
</head>
	<body>
		<!-- <form name="form" action="" method="POST" enctype="multipart/form-data"> -->
			<!-- <tbody> -->
				<input id="fileupload1" type="file" size="45" name="fileupload" />
				<button id="buttonUpload" onclick="return ajaxFileUpload(1);">Upload</button>
				<img id="img1" src="" style="width:200px;height:50px;"/>
				<!-- js 把返回的图片路径，赋值到一个隐藏域里，方便php文件处理或者保存此图片(如果此页面从php文件获取到图片的路径，可以把获取到的图片路径直接赋值到value中，如果再次修改，上面的js会把新上传的图片路径从新赋值给value，覆盖老图片路径)
				<input type="hidden" name="litpic1" id="imgarr1" value=""/> -->
				<br/>

				<!-- <input id="fileupload2" type="file" size="45" name="fileupload" />
				<button id="buttonUpload" onclick="return ajaxFileUpload(2);">Upload</button>
				<img id="img2" src="" style="width:200px;height:50px;"/> -->
				<!-- <input type="hidden" name="litpic2" id="imgarr2" value=""/> -->
				<br/>

				<!-- <input id="fileupload3" type="file" size="45" name="fileupload" />
				<button id="buttonUpload" onclick="return ajaxFileUpload(3);">Upload</button>
				<img id="img3" src="" style="width:200px;height:50px;"/> -->
				<!-- <input type="hidden" name="litpic3" id="imgarr3" value=""/> -->
			<!-- </tbody> -->
		<!-- </form> -->
		<!--dedecms前台编辑专题页面
			<input id="fileupload<?php echo $i; echo $a?>" type="file" size="45" name="fileupload" />
			<button id="buttonUpload" onclick="return ajaxFileUpload(<?php echo $i; echo $a?>);">上传</button>
			<img id="img<?php echo $i; echo $a?>" src="<?php echo $litpicarcnodeid[$a] ?>" style="width:200px;height:50px;"/>
			<input type="hidden" name="normbody[litpicarcnodeid<?php echo $i?>][]" id="imgarr<?php echo $i; echo $a?>" value="<?php echo $litpicarcnodeid[$a] ?>"/>
			<br/>
			dedecms前台新增专题页面
			<input id="fileupload<?php echo $i; echo $j?>" type="file" size="45" name="fileupload" />
			<button id="buttonUpload" onclick="return ajaxFileUpload(<?php echo $i; echo $j?>);">上传</button>
			<img id="img<?php echo $i; echo $j?>" src="" style="width:200px;height:50px;"/>
			<input type="hidden" name="normbody[litpicarcnodeid<?php echo $i?>][]" id="imgarr<?php echo $i; echo $j?>" value=""/>
		-->
	</body>
</html>