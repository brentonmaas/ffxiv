<?php

namespace App\Framework;

class Constants
{
    public $IMAGE_URL;
    public $ICON;

    public function __construct()
    {
        $this->IMAGE_URL = env('APP_URL','http://localhost') . '/images/';
        $this->ICON = $this->IMAGE_URL . 'properties_icon.png';
    }

    public function getConstant($constant = '')
    {
        return $this->$constant;
    }

}
