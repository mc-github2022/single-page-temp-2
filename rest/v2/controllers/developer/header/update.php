<?php
$conn = null;
$conn = checkDbConnection();
$HeaderContent = new HeaderContent($conn);
$error = [];
$returnData = [];
if (array_key_exists("headerid", $_GET)) {
    checkPayload($data);
    $isUpdateHeader = $data['isUpdateHeader'];
    
    if($isUpdateHeader=="textContent"){
        $HeaderContent->header_aid = $_GET['headerid'];
        $HeaderContent->header_banner_title = $data["header_banner_title"];
        $HeaderContent->header_banner_text = $data["header_banner_text"];
        $HeaderContent->header_banner_btn_text = $data["header_banner_btn_text"];
        $HeaderContent->header_banner_btn_link = $data["header_banner_btn_link"];
        checkId($HeaderContent->header_aid);
        // $header_banner_title_old = checkIndex($data, "header_banner_title_old");
        // compareName($HeaderContent, $header_banner_title_old, $HeaderContent->header_banner_title);
        $query = checkUpdateText($HeaderContent);
        returnSuccess($HeaderContent, "headerContent", $query);
    }

    if($isUpdateHeader=="imageContent"){
        $HeaderContent->header_aid = $_GET['headerid'];
        $HeaderContent->header_banner_img = $data["header_banner_img"];
        checkId($HeaderContent->header_aid);
        $query = checkUpdateImage($HeaderContent);
        returnSuccess($HeaderContent, "headerContent", $query);
    }

    if($isUpdateHeader=="logoContent"){
        $HeaderContent->header_aid = $_GET['headerid'];
        $HeaderContent->header_logo = $data["header_logo"];
        checkId($HeaderContent->header_aid);
        $query = checkUpdateLogo($HeaderContent);
        returnSuccess($HeaderContent, "headerContent", $query);
    }
}
checkEndpoint();
