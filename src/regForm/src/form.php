<?php

error_reporting(0);

echo "<h2>Project Registration Submitted</h2>";


//if there is a post request of submit
if(isset($_POST['submit'])) {

    $data = '';
    $filename = "data.json";

    //if file exists
    if(is_file($filename)) {
        $data = file_get_contents($filename);
    }

    $json_arr = json_decode($data,true);
    // create json fields and values from input id
    $json_arr[] = array(
        'studentId' => $_POST['studentId'],
        'studentName' => $_POST['studentName'],
        'degreeTitle' => $_POST['degreeTitle'],
        'pojectName' => $_POST['pojectName'],
        'supervisorName' => $_POST['supervisorName'],
        'specialResourcesCheck' => $_POST['specialResourcesCheck'],
        'specialResourcesText' => $_POST['specialResourcesText'],
        'ethicsReviewCheck' => $_POST['ethicsReviewCheck'],
        'ethicsReviewInput' => $_POST['ethicsReviewInput'],
        'cybersecProject' => $_POST['cybersecProject'],
        'GroupProject' => 0,
    );

    //saving file in jsonarray
    file_put_contents($filename, json_encode($json_arr));

}

?>