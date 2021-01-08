<?php

namespace Lyntouch\Lib;

use Exception;
use FastImageSize\FastImageSize;
use Intervention\Image\ImageManagerStatic as Image;
use function YoastSEO_Vendor\GuzzleHttp\Psr7\str;

class Media
{
    private string $url;
    private int $width;
    private int $height;
    private string $srcPath;
    private \Intervention\Image\Image $processor;

    public string $format;
    public int $quality = 90;

    public function __construct($src, $width, $height, $format = 'jpg')
    {
        if (!$src) return '';

        if (  filter_var($src, FILTER_VALIDATE_URL) ) {
            $this->url = $src   ? $src : $this->urlFromPath($src);
            $this->srcPath = ABSPATH.ltrim(parse_url($src)['path'], '/');
        } else {
            $this->srcPath = $src;
            $this->url = $this->urlFromPath($src);
        }
        if ( $width === null ) {
            dd($src);
        }
        $this->width = $width;
        $this->height = $height;
        $this->format = $format;
    }

    public function urlFromPath($path)
    {
        $siteUrl = get_site_url();

        return  $siteUrl.str_replace(ABSPATH, '/', $path);
    }

    /**
     * @param int $value
     *
     * @return $this
     */
    public function quality(int $value): Media
    {
        $this->quality = $value;

        return $this;
    }

    private function processor(): \Intervention\Image\Image
    {
        if (!file_exists($this->thumbsPath())) {
            mkdir($this->thumbsPath(), 0755, true);
        }

        $this->processor = Image::make($this->srcPath);

        return $this->processor;
    }

    public function save(): void
    {
        $this->processor->save($this->thumb('dir'), $this->quality, $this->format);
    }

    /**
     * @return bool
     * @throws Exception
     */
    public function isOriginal(): bool
    {
        if (!file_exists($this->srcPath)) {
            throw new Exception("Media \"{$this->url}\" does not exists on the server");
        }

        $fastImageSize = new FastImageSize();
        $imageSize = $fastImageSize->getImageSize($this->srcPath);

        return $imageSize['width'] == $this->width && $imageSize['height'] == $this->height;
    }

    /**
     * @param string $value
     *
     * @return string
     */
    public function thumbsPath($value = 'dir'): string
    {
        return wp_upload_dir()['base'.$value].'/thumbs/';
    }

    /**
     * @param string $value
     *
     * @return string
     */
    public function thumb($value = 'url'): string
    {
        $path_info = pathinfo($this->url);
        $name = "{$path_info['filename']}-{$this->width}x{$this->height}.{$this->format}";

        return $this->thumbsPath($value).$name;
    }

    /**
     * @return false|string
     * @throws Exception
     */
    public function exists()
    {

        if ($this->isOriginal()) {
            return $this->url;
        }

        if (file_exists($this->thumb('dir'))) {
            return $this->thumb();
        }

        return false;
    }

    /**
     * @param string $position
     *
     * @return string
     * @throws Exception
     */
    public function fit($position = ''): string
    {

        if ($this->exists()) {
            return $this->exists();
        }

        $this->processor()->fit($this->width, $this->height, function($constraint) {
            //    $constraint->aspectRatio();
            $constraint->upsize();
        }, $position);

        $this->save();

        return $this->thumb();
    }

    /**
     * @return string
     * @throws Exception
     */
    public function __toString(): string
    {
        return $this->exists() ? $this->exists() : $this->fit();
    }
}
