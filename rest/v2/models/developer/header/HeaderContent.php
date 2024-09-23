<?php
class HeaderContent
{
    public $header_aid;
    public $header_banner_title;
    public $header_banner_text;
    public $header_banner_btn_text;
    public $header_banner_btn_link;
    public $header_logo;
    public $header_banner_img;


    public $connection;

    public $tblHeader;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHeader = "tbl_header";
    
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblHeader} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTextContent()
    {
        try {
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_banner_title = :header_banner_title, ";
            $sql .= "header_banner_text = :header_banner_text, ";
            $sql .= "header_banner_btn_text = :header_banner_btn_text, ";
            $sql .= "header_banner_btn_link = :header_banner_btn_link ";
            $sql .= "where header_aid = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_banner_title" => $this->header_banner_title,
                "header_banner_text" => $this->header_banner_text,
                "header_banner_btn_text" => $this->header_banner_btn_text,
                "header_banner_btn_link" => $this->header_banner_btn_link,
                "header_aid" => $this->header_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function updateImageContent()
    {
        try {
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_banner_img = :header_banner_img ";
            $sql .= "where header_aid = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_banner_img" => $this->header_banner_img,
                "header_aid" => $this->header_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateLogoContent()
    {
        try {
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_logo = :header_logo ";
            $sql .= "where header_aid = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_logo" => $this->header_logo,
                "header_aid" => $this->header_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readById()
    {
        try {
            $sql = "select * from {$this->tblHeader} ";
            $sql .= "where header_aid = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_aid" => $this->header_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
