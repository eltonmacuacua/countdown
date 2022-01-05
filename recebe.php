<?php  
	$contact_name = $_POST['contact_name'];
	$contact_email = $_POST['contact_email'];
	$contact_message = $_POST['contact_message'];
	
	$servername = "sql10.freemysqlhosting.net";//
	$username = "sql10462384";
	$password = "UpVCL9HEdl";
	$dbname = "sql10462384";

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "INSERT INTO `pessoas`(`id`, `contact_name`, `contact_email`, `contact_message`) 
							VALUES (default ,'$contact_name', '$contact_email', '$contact_message');";


	if (mysqli_multi_query($conn, $sql)) {
		echo "New records created successfully";
		header("Location: confirmacao.html");
		$verdade=true;
        exit();
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		echo '<script>alert("Falha ao registar armazem na base de dados\nTente novamente")</script>';
	}
	mysqli_close($conn);
		header("Location: index.html");
?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
<script type="text/javascript">
	
	window.onload = function () {  
	  	window.location.replace("http://localhost/projectos/helicoptero/");
	}
</script>
</body>
</html>
