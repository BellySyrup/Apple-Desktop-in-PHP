<!DOCTYPE html>
<html>
	<head>

		<title>Apple Re Imagined</title>
			
		<!--<script src="http://code.jquery.com/jquery-latest.js"></script>-->
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src="js/interface.js"></script>
		<script type="text/javascript" src="js/apple.js"></script>
		<script type="text/javascript" src="js/dock.js"></script>
		<script type="text/javascript" src="js/itunes.js"></script>
		<link href="dock.css" rel="stylesheet" type="text/css" />
		<link href="style.css" rel="stylesheet" type="text/css" />
		<link href="css/itunes.css" rel="stylesheet" type="text/css" />
		<link href="css/finder.css" rel="stylesheet" type="text/css" />
		<link href="css/welcome.css" rel="stylesheet" type="text/css" />
		
	</head>
	
	<body>
	<div id="header"><img id ="logo" src="images/logo1.png"/></div>
	
	<? require_once("./login.php"); ?>
	
	<div id="content">
		<? require_once("./finder.php"); ?>
		<? require_once("./itunes.php"); ?>
		<? require_once("./welcome.php"); ?>
	</div>
	
	<!--bottom dock-->
	<div class="dock" id="dock2">
		
		<div class="dock-container2">
			<div id="begin" class="dockends"></div>
			<a class="dock-item2" id="1" href="#"><span>Finder</span><img src="images/icons/Finder1.png" alt="home" /></a>
			<a class="dock-item2" id="2" href="#"><span>Dashboard</span><img src="images/icons/Dashboard1.png" alt="dashboard" /></a>			
			<a class="dock-item2" id="3" href="#"><span>Mail</span><img src="images/icons/Mail1.png" alt="mail" /></a>
			<a class="dock-item2" id="4" href="#"><span>Safari</span><img src="images/icons/Safari1.png" alt="safari" /></a>
			<a class="dock-item2" id="5" href="#"><span>iChat</span><img src="images/icons/iChat1.png" alt="ichat" /></a> 			
			<a class="dock-item2" id="6" href="#"><span>Contacts</span><img src="images/icons/Address Book1.png" alt="contacts" /></a> 
			<a class="dock-item2" id="7" href="#"><span>Calendar</span><img src="images/icons/iCal1.png" alt="calendar" /></a>
			<a class="dock-item2" id="8" href="#"><span>iTunes</span><img src="images/icons/iTunes1.png" alt="music" /></a> 
			<a class="dock-item2" id="9" href="#"><span>Photobooth</span><img src="images/icons/PhotoBooth1.png" alt="links" /></a>
			<a class="dock-item2" id="10" href="#"><span>iPhoto</span><img src="images/icons/iPhoto1.png" alt="photo" /></a> 
			<a class="dock-item2" id="11" href="#"><span>iMovie</span><img src="images/icons/iMovie1.png" alt="video" /></a> 
			<a class="dock-item2" id="12" href="#"><span>Pages</span><img src="images/icons/Pages1.png" alt="rss" /></a> 
			<a class="dock-item2" id="13" href="#"><span>xCode</span><img src="images/icons/Xcode1.png" alt="xcode" /></a>
			<a class="dock-item2" id="14" href="#"><span>Applications</span><img src="images/icons/Applications Folder.png" alt="applications" /></a> 
			<a class="dock-item2" id="15" href="#"><span>Documents</span><img src="images/icons/Documents Folder.png" alt="documents" /></a> 
			<a class="dock-item2" id="16" href="#"><span>Downloads</span><img src="images/icons/Downloads Folder.png" alt="download" /></a> 
			<a class="dock-item2" id="17" href="#"><span>Trash</span><img src="images/icons/Full Trash.png" alt="trash" /></a>
			<div id="end" class="dockends"></div>
		</div>
		
	</div>

	<!--dock menu JS options-->
	<script type="text/javascript">
		
		$(document).ready(
			function()
			{
				$('#dock2').Fisheye(
					{
						maxWidth: 60,
						items: 'a',
						itemsText: 'span',
						container: '.dock-container2',
						itemWidth: 40,
						proximity: 80,
						alignment : 'left',
						valign: 'bottom',
						halign : 'center'
					}
				)
			}
		);

	</script>

	</body>
</html>
