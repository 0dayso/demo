<?php
/* 若使用dedecms上传机制，需要引入一下文件
require_once(dirname(__FILE__)."/config.php");
require_once(DEDEINC."/customfields.func.php");
require_once(DEDEADMIN."/inc/inc_archives_functions.php");
require_once(DEDEINC.'/dedetag.class.php');
require_once(DEDEINC.'/image.func.php');
require_once(DEDEINC.'/oxwindow.class.php'); */
	$error = "";
	$msg = "";
	$upimg = "";
	$size=100*1024; //限定上传文件的大小100kb

	if(!empty($_FILES['fileupload']['error']))
	{
		switch($_FILES['fileupload']['error'])
		{

			case '1':
				$error = 'The uploaded file exceeds the upload_max_filesize directive in php.ini';
				break;
			case '2':
				$error = 'The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form';
				break;
			case '3':
				$error = 'The uploaded file was only partially uploaded';
				break;
			case '4':
				$error = 'No file was uploaded.';
				break;
			case '6':
				$error = 'Missing a temporary folder';
				break;
			case '7':
				$error = 'Failed to write file to disk';
				break;
			case '8':
				$error = 'File upload stopped by extension';
				break;
			case '999':
			default:
				$error = 'No error code avaiable';
		}
			
	}elseif(empty($_FILES['fileupload']['tmp_name']) || $_FILES['fileupload']['tmp_name'] == 'none')
	{
		$error = 'No file was uploaded..';
		
	}elseif($_FILES['fileupload']['size']>($size)){//输出超出文件大小的提示
	
	    $error .= "您上传的图片过大（限制100kb以下），请更改！";
		
	}else
	{
		/* $msg .= " File Name: " . $_FILES['fileupload']['name'] . ", ";
		$msg .= " File Size: " . @filesize($_FILES['fileupload']['tmp_name']); */
		//for security reason, we force to remove all uploaded file
		/* @unlink($_FILES['fileupload']);		 */
		
		//判断是否jpg、gif图片
		$typeaa = pathinfo($_FILES['fileupload']['name'],PATHINFO_EXTENSION);//获取文件类型   
		if (($typeaa == 'gif') || ($typeaa == 'jpeg') || ($typeaa == 'pjpeg') || ($typeaa == 'jpg') || ($typeaa == 'png')){
		
			/*  这里运用的是dedecms上传机制
			 	if (!empty($_FILES['fileupload']['name'])) {
				$GLOBALS['myupdateimg'] = $_FILES['fileupload']['tmp_name'];
				$GLOBALS['myupdateimg_name'] = $_FILES['fileupload']['name'];
				$GLOBALS['myupdateimg_type'] = $_FILES['fileupload']['type'];
				$GLOBALS['myupdateimg_error'] = $_FILES['fileupload']['error'];
				$GLOBALS['myupdateimg_size'] = $_FILES['fileupload']['size'];
				$msg .= AdminUpload('myupdateimg', 'image', 0, false );
			}else{
				$msg .= "";
			} */
			
			$newname = date("Ymdhis-").rand().".".$typeaa; //构建文件名
			$folder = "../ajax/".date("Ymd")."/";//构建文件目录
			if (!file_exists($folder)){//判断文件夹是否存在
				mkdir($folder,666,true);//创建多级目录
			}
			move_uploaded_file($_FILES['fileupload']['tmp_name'],$folder.$newname);//上传图片
			$msg .= $folder.$newname;//返回图片
		}else{
				$error .= "提示".$_FILES['fileupload']["name"]."不是图片";           
		}
	
	}		
	echo "{";
	echo				"error: '" . $error . "',\n";
	echo				"msg: '" . $msg . "'\n";
	echo "}";
?>