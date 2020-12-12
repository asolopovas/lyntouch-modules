<?php

use Lyntouch\Lib\Media;

class TestMediaClass extends WP_UnitTestCase
{

    protected $media;
    protected $testMedia = "https://alisiagreen.test/wp-content/plugins/lyntouch-modules/tests/assets/3000x3000.jpg";

    public function setUp()
    {
        $this->media = new Media($this->testMedia, 3000, 3000);
    }

    /**
     * @test
     * @throws Exception
     */
    public function image_size_original()
    {
        $this->assertTrue($this->media->isOriginal());
    }

    /**
     * @test
     */
    public function image_output_quality_can_be_changed()
    {
        $this->media->quality(80);
        $this->assertEquals(80, $this->media->quality);
    }

    /**
     * @test
     */
    public function image_output_format_can_be_changed()
    {
        $this->media->format = 'webp';
        $this->assertEquals('webp', $this->media->format);
    }

    /**
     * @test
     */
    public function class_returns_thumb_url()
    {
        $url = $this->media->fit();
        $this->assertFalse(filter_var($url, FILTER_VALIDATE_URL) === false);
    }

    /**
     * @test
     */
    public function thumb_method_returns_url_and_dir()
    {
        $media = new Media($this->testMedia, 400, 400);
        $this->assertEquals(
            $media->thumb('dir'),
            wp_upload_dir()['basedir']."/thumbs/3000x3000-400x400.{$media->format}"
        );
        $this->assertEquals(
            $media->thumb(),
            wp_upload_dir()['baseurl']."/thumbs/3000x3000-400x400.{$media->format}"
        );
    }

    /**
     * @test
     */
    public function image_is_resizing()
    {
        $media = new Media($this->testMedia, 400, 400);

        $media->fit();

        $this->assertTrue(file_exists($media->thumb('dir')));
    }

    /**
    * @test
    */
    public function fit_position_work_correctly()
    {
        $media = new Media($this->testMedia, 400, 200);

        $media->fit('top');

        $this->assertTrue(file_exists($media->thumb('dir')));
    }

    /**
    * @test
     */
    public function media_url_does_not_exist_throws_exception():void
    {
        $url = str_replace('3000', '3001', $this->testMedia);
        $this->expectException(Exception::class);
        $this->expectExceptionMessage("Media \"{$url}\" does not exists on the server");

        (new Media($url, 200, 200))->isOriginal();
    }

}
