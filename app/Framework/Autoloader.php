<?php

namespace App\Framework;

class Autoloader
{
    public function __construct()
    {

    }

    public function loadJS()
    {
        $js = '';

        $path = base_path() . '/public/js';

        $js .= $this->loadChildrenJS($path, 'js');

        return $js;
    }

    public function loadChildrenJS($path, $dir)
    {
        $js = '';

        if ($dh = opendir($path))
        {
            while (($file = readdir($dh)) !== false)
            {
                switch($file)
                {
                    case '..':
                    case '.svn':
                    case '.':
                    {
                        break;
                    }
                    default:
                    {
                        $file_path = $path . '/' . $file;
                        $file_src = $dir . '/' . $file;

                        if(is_dir($file_path))
                        {
                            $js .= $this->loadChildrenJS($file_path, $file_src);
                        }
                        else
                        {
                            if(strpos($file_path,'.js'))
                            {
                                if(strpos($file_path,'app.js'))
                                {
                                    $js .= '<script src="' . $file_src . '" defer></script>' . PHP_EOL . "\t";
                                }
                                else
                                {
                                    $js .= '<script src="' . $file_src . '"></script>' . PHP_EOL . "\t";
                                }

                            }
                        }
                        break;
                    }
                }
            }
            closedir($dh);
        }

        return $js;
    }

    public function loadCSS()
    {
        $css = '';
        $dir = base_path() . '/public/css';

        if ($dh = opendir($dir))
        {
            while (($file = readdir($dh)) !== false)
            {
                switch($file)
                {
                    case '..':
                    case '.svn':
                    case '.':
                    {
                        break;
                    }
                    default:
                    {
                        $path = $dir . '/' . $file;
                        if(is_dir($path))
                        {
                            //do nothing
                        }
                        else
                        {
                            if(strpos($path,'.css'))
                            {
                                $css .= '<link rel="stylesheet" type="text/css" href="css/'.$file.'?v=' . filemtime('css/' . $file) . '" />' . PHP_EOL . "\t";
                            }
                        }
                        break;
                    }
                }
            }
            closedir($dh);
        }

        return $css;
    }

}

