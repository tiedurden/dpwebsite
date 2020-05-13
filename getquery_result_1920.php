<?php

// the credentials to connect to the database

$servername = "";
$username = "";
$password = "";
$dbname = "";


// gettin the superglobal variable that have been passed to the function 
// getInjuredPlayers(str, nmr) and that differ from each datapoint on the chart
$verein = "'" . (string) $_GET['q'] . "'";
$spieltag = $_GET['r'];

$output_array = ["<b>Player name | Injury</b>"];


//The query that selects all Playernames + Injuries from the database 
// which have at least one of the 2-4 matchday dates between the beginning and the end of an injury
$sql = "SELECT DISTINCT P.Spielername, P.Verletzung FROM PI1920 AS P, Spieltag1920 AS St WHERE P.Verein = $verein AND St.SpieltagsID = $spieltag AND
((St.Freitag BETWEEN P.Beginn AND P.Ende) OR (St.Samstag BETWEEN P.Beginn AND P.Ende) OR(St.Sonntag BETWEEN P.Beginn AND P.Ende) OR(St.Montag BETWEEN P.Beginn AND P.Ende))
GROUP BY P.Spielername;";
    

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
    

$result = $conn->query($sql);

if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
array_push($output_array, $row["Spielername"] . "| " .  $row["Verletzung"]);
}

} else {
echo "0 results";
}

$output_string = "";

//array to string for clean output in tooltip
foreach($output_array as $output) {
    $output_string .= "{$output} <br>";
}
echo $output_string;


$conn->close();
?>
